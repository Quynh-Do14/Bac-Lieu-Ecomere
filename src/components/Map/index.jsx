import React, { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import HeaderPage from "../../infratructure/common/layout/header";
import Footer from "../../infratructure/common/layout/footer";
import api from "../../infratructure/api";
import { removeAccents, removeDiacriticsAndSpaces } from "../../common";import { useNavigate } from "react-router-dom";import { ROUTE_PATH } from "../../core/common/appRouter";

mapboxgl.accessToken =
  "pk.eyJ1IjoibnRkMTAxMDIwMDAiLCJhIjoiY2tvbzJ4anl1MDZjMzJwbzNpcnA5NXZpcCJ9.dePfFDv0RlCLnWoDq1zHlw";
const Map = () => {
  const mapContainer = useRef(null);
  const navigate = useNavigate();

  const [map, setMap] = useState({});
  const [dsDiaDiemGeoJson, setDsDiaDiemGeoJson] = useState({});
  const [dsDanhMucDiaDiemDuLich, setDsDanhMucDiaDiemDuLich] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [dsDiaDiemSearch, setDsDiaDiemSearch] = useState([]);
  const onNavigate = (id) => {
    // navigate(`${(ROUTE_PATH.VIEW_DESTINATION).replace(`${Constants.UseParams.Id}`, "")}${id}`);
    navigate(`${ROUTE_PATH.VIEW_DESTINATION}?${id}`);
  };


  const fecthData = async () => {
    let map = new mapboxgl.Map({
      container: mapContainer.current,
      zoom: 13,
      center: [105.7119304, 9.2684649],
      style: "mapbox://styles/mapbox/streets-v12",
    });

    setMap(map);
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true,
      }),
      "bottom-right"
    );
    map.addControl(new mapboxgl.NavigationControl());
    const resGetDiaDiemGeometry = await api.getDiaDiemGeometry(
      `idDanhMuc=${1}`
    );
    const resGetDanhMucConCuaDanhMuc = await api.getDanhMucConCuaDanhMuc(
      `idDanhMuc=${1}`
    );
    if (resGetDiaDiemGeometry.features && resGetDanhMucConCuaDanhMuc.success) {
      var dataDsDiaDiemGeoJson = { ...resGetDiaDiemGeometry };
      setDsDiaDiemGeoJson(dataDsDiaDiemGeoJson);
      setDsDanhMucDiaDiemDuLich(resGetDanhMucConCuaDanhMuc.result);
      map.on("load", () => {
        map.addSource("diaDiemDuLich", {
          type: "geojson",
          data: `http://14.248.94.155:9022/api/diadiem/geometry?idDanhMuc=${1}`,
        });

        resGetDanhMucConCuaDanhMuc.result.map((v) => {
          var uriImg = "";

          if (v.tenDanhMuc == "Du lịch văn hóa - lịch sử") {
            uriImg = "https://cdn-icons-png.flaticon.com/512/5778/5778440.png";
          }
          if (v.tenDanhMuc == "Địa điểm tâm linh") {
            uriImg = "https://cdn-icons-png.flaticon.com/512/2510/2510482.png";
          }
          if (v.tenDanhMuc == "Du lịch khám phá") {
            uriImg =
              "https://iconape.com/wp-content/png_logo_vector/google-discover.png";
          }
          if (v.tenDanhMuc == "Du lịch sinh thái") {
            uriImg =
              "https://images.squarespace-cdn.com/content/v1/5b07c60a96e76f9f641cdad6/1626769467137-PUUVF03Q49KZMCVTQ1PC/Conservation.png";
          }
          if (v.tenDanhMuc == "Du lịch nghỉ dưỡng") {
            uriImg = "https://cdn-icons-png.flaticon.com/512/5273/5273660.png";
          }
          map.loadImage(uriImg, (error, image) => {
            if (error) throw error;
            map.addImage(removeDiacriticsAndSpaces(v.tenDanhMuc), image);
          });
        });

        for (const feature of dataDsDiaDiemGeoJson.features) {
          var symbol = feature.properties.tenDanhMuc;
          const layerID = `diaDiemDuLich-${removeDiacriticsAndSpaces(symbol)}`;
          // Add a layer for this symbol type if it hasn't been added already.
          if (!map.getLayer(layerID)) {
            map.addLayer({
              id: layerID,
              type: "symbol",
              source: "diaDiemDuLich",
              layout: {
                "icon-image": removeDiacriticsAndSpaces(symbol),
                // "icon-allow-overlap": true,
                "icon-size": 0.05,
                "text-field": feature.properties.tenDiaDiem,
                "text-size": 11,
                "text-offset": [0, 2],
                "icon-offset": [0, -17],
              },
              paint: {
                "text-color": "#004eff",
                "text-halo-color": "#fff",
                "text-halo-width": 2,
              },
              filter: ["==", "tenDanhMuc", symbol],
            });

            map.on("click", layerID, (e) => {
              const coordinates = e.features[0].geometry.coordinates.slice();
              const html = `<div>
              <img src="${e.features[0].properties.hinhAnh}" alt="" style="min-width: 280px;min-height: 120px;">
              <div style="
                  padding: 20px;
              ">
                  <p style="
          color: #d32f2f;
          font-size: 11px;
          text-transform: uppercase;
      ">${e.features[0].properties.tenDanhMuc}</p>
                  <a href="/destination-view?${e.features[0].properties.idDiaDiem}" style="
          color: #333;
          font-size: 18px;
          width: 240px;
          font-weight: 500;
      ">${e.features[0].properties.tenDiaDiem}</a>
                  <p style="
          font-size: 11px;
          color: #333;
          font-weight: 400;
      ">${e.features[0].properties.gioMoCua} - ${e.features[0].properties.gioDongCua}</p>
                  <p style="
          width: 240px;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          font-size: 13px;
          line-height: 1.6;
          color: #333;
      ">${e.features[0].properties.moTa}</p>
              </div>
          </div>`;

              while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
              }

              map.flyTo({
                center: e.features[0].geometry.coordinates,
                essential: true,
                duration: 1000,
              });

              new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(html)
                .addTo(map);
            });

            map.on("mouseenter", layerID, () => {
              map.getCanvas().style.cursor = "pointer";
            });

            map.on("mouseleave", layerID, () => {
              map.getCanvas().style.cursor = "";
            });
          }
        }
      });
    } else {
      console.log("resGetDiaDiemGeometry", resGetDiaDiemGeometry);
    }
  };

  useEffect(() => {
    fecthData();
  }, []);

  const btDiaDiemDuLich = (e) => {
    document.getElementById(e.target.value).checked = e.target.checked;
    map.setLayoutProperty(
      e.target.value,
      "visibility",
      e.target.checked ? "visible" : "none"
    );
  };

  const searchDiaDiem = (e) => {
    setTextSearch(e.target.value);
    if (e.target.value != "") {
      var dsDiaDiem = [...dsDiaDiemGeoJson.features];
      var dsDiaDiemSearch = dsDiaDiem.filter(
        (v) =>
          removeAccents(v.properties.tenDiaDiem.toLowerCase()).indexOf(
            removeAccents(e.target.value)
          ) != -1
      );
      setDsDiaDiemSearch(dsDiaDiemSearch);
    } else {
      setDsDiaDiemSearch([]);
    }
  };

  const clickItemSearhDiaDiem = (e) => {
    setTextSearch("");
    setDsDiaDiemSearch([]);
    const popup = document.getElementsByClassName("mapboxgl-popup");
    if (popup.length) {
      popup[0].remove();
    }
    const html = `<div>
              <img src="${e.properties.hinhAnh}" alt="" style="min-width: 280px;min-height: 120px;">
              <div style="
                  padding: 20px;
              ">
                  <p style="
          color: #d32f2f;
          font-size: 11px;
          text-transform: uppercase;
      ">${e.properties.tenDanhMuc}</p>
                  <p style="
          color: #333;
          font-size: 18px;
          width: 240px;
          font-weight: 500;
      ">${e.properties.tenDiaDiem}</p>
                  <p style="
          font-size: 11px;
          color: #333;
          font-weight: 400;
      ">${e.properties.gioMoCua} - ${e.properties.gioDongCua}</p>
                  <p style="
          width: 240px;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          font-size: 13px;
          line-height: 1.6;
          color: #333;
      ">${e.properties.moTa}</p>
              </div>
          </div>`;
    map.flyTo({
      center: e.geometry.coordinates,
      essential: true,
      duration: 1000,
    });

    new mapboxgl.Popup()
      .setLngLat(e.geometry.coordinates)
      .setHTML(html)
      .addTo(map);
  };

  return (
    <>
      {/* Preloader */}
      <div id="preloader">
        <div id="status" />
      </div>
      {/* Preloader Ends */}

      {/* header starts */}
      <HeaderPage />
      {/* header ends */}

      {/* BreadCrumb Starts */}
      <section
        className="breadcrumb-main pb-0"
        style={{ backgroundImage: "url(images/bg/bg8.jpg)" }}
      >
        <div className="breadcrumb-outer pt-10">
          <div className="container">
            <div className="breadcrumb-content d-md-flex align-items-center pt-10">
              <h2>Bản đồ</h2>
              <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Trang chủ</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Bản đồ
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="dot-overlay" />
      </section>
      {/* BreadCrumb Ends */}

      <section
        className="overflow-hidden d-flex align-items-center"
        style={{ justifyContent: "center", position: "relative" }}
      >
        <div id="map" ref={mapContainer}></div>
        {dsDanhMucDiaDiemDuLich.length > 0 && (
          <div
            style={{
              backgroundColor: "#fff",
              padding: 4,
              position: "absolute",
              top: 100,
              left: 60,
            }}
          >
            <p
              style={{
                fontSize: 14,
                fontWeight: 500,
                paddingLeft: 12,
                paddingTop: 8,
                color: "#333",
              }}
            >
              Các loại hình du lịch
            </p>
            {dsDanhMucDiaDiemDuLich.map((v, k) => (
              <div
                key={k}
                className="d-flex align-items-center"
                style={{ padding: "8px 12px" }}
              >
                <input
                  type="checkbox"
                  name={`diaDiemDuLich-${removeDiacriticsAndSpaces(
                    v.tenDanhMuc
                  )}`}
                  id={`diaDiemDuLich-${removeDiacriticsAndSpaces(
                    v.tenDanhMuc
                  )}`}
                  value={`diaDiemDuLich-${removeDiacriticsAndSpaces(
                    v.tenDanhMuc
                  )}`}
                  style={{
                    marginRight: 8,
                  }}
                  onClick={btDiaDiemDuLich}
                  defaultChecked={true}
                />
                <img
                  style={{
                    width: 25,
                    height: 25,
                    marginRight: 8,
                  }}
                  src={
                    v.tenDanhMuc == "Du lịch văn hóa - lịch sử"
                      ? "https://cdn-icons-png.flaticon.com/512/5778/5778440.png"
                      : v.tenDanhMuc == "Địa điểm tâm linh"
                      ? "https://cdn-icons-png.flaticon.com/512/2510/2510482.png"
                      : v.tenDanhMuc == "Du lịch khám phá"
                      ? "https://iconape.com/wp-content/png_logo_vector/google-discover.png"
                      : v.tenDanhMuc == "Du lịch sinh thái"
                      ? "https://images.squarespace-cdn.com/content/v1/5b07c60a96e76f9f641cdad6/1626769467137-PUUVF03Q49KZMCVTQ1PC/Conservation.png"
                      : v.tenDanhMuc == "Du lịch nghỉ dưỡng"
                      ? "https://cdn-icons-png.flaticon.com/512/5273/5273660.png"
                      : ""
                  }
                  alt=""
                />
                <label
                  htmlFor={`diaDiemDuLich-${removeDiacriticsAndSpaces(
                    v.tenDanhMuc
                  )}`}
                  style={{
                    margin: 0,
                  }}
                >
                  {v.tenDanhMuc}
                </label>
              </div>
            ))}
          </div>
        )}
        <div
          style={{
            position: "absolute",
            top: 100,
            right: 90,
          }}
        >
          <div
            class="d-flex form-group"
            style={{
              boxShadow: `0px 0px 10px rgba(0, 0, 0, 0.2)`,
            }}
          >
            <button className="onsearch">
              <i class="flaticon-location-pin"></i>
            </button>
            <input
              type="text"
              name=""
              id=""
              value={textSearch}
              onChange={(e) => searchDiaDiem(e)}
              style={{
                width: 260,
              }}
              placeholder="Nhập từ khoá để tìm kiếm"
            />
          </div>
          {dsDiaDiemSearch.length > 0 && (
            <div
              id="style-5"
              style={{
                width: 310,
                maxHeight: 250,
                backgroundColor: "#fff",
                overflow: "hidden",
                overflowY: "auto",
                boxShadow: `0px 0px 10px rgba(0, 0, 0, 0.2)`,
              }}
            >
              {dsDiaDiemSearch.map((v, k) => (
                <div
                  key={k}
                  className="d-flex align-items-center itemSearch"
                  style={{
                    padding: "8px 16px",
                  }}
                  onClick={() => clickItemSearhDiaDiem(v)}
                >
                  <i class="flaticon-location-pin"></i>
                  <div
                    className="justify-content-center"
                    style={{
                      marginLeft: 16,
                    }}
                  >
                    <p
                      style={{
                        fontSize: 13,
                        color: "#333",
                        marginBottom: 4,
                        fontWeight: 500,
                      }}
                    >
                      {v.properties.tenDiaDiem}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 11,
                        fontWeight: 400,
                      }}
                    >
                      {v.properties.tenDanhMuc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* footer starts */}
      <Footer />
      {/* footer ends */}
      {/* Back to top start */}
      <div id="back-to-top">
        <a href="#" />
      </div>
      {/* Back to top ends */}
      {/* Register Modal */}
      <div
        className="modal fade"
        id="register"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header bordernone p-0">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <div className="login-content p-4 text-center">
                <div className="login-title section-border">
                  <h3 className="pink mb-1">Register</h3>
                  <p>
                    Access thousands of online classes in design, business, and
                    more!
                  </p>
                </div>
                <div className="login-form text-center">
                  <form>
                    <div className="form-group">
                      <input type="text" placeholder="Enter Full Name" />
                    </div>
                    <div className="form-group">
                      <input type="email" placeholder="Enter email address" />
                    </div>
                    <div className="form-group">
                      <input type="password" placeholder="Enter password" />
                    </div>
                    <div className="form-group">
                      <input type="password" placeholder="Confirm password" />
                    </div>
                  </form>
                  <div className="form-btn">
                    <a href="#" className="nir-btn">
                      Register
                    </a>
                  </div>
                  <div className="form-group mb-0 form-checkbox mt-3">
                    <input type="checkbox" /> By clicking this, you are agree to
                    to
                    <a href="#" className="">
                      {" "}
                      our terms of use
                    </a>{" "}
                    and{" "}
                    <a href="#" className="">
                      privacy policy
                    </a>{" "}
                    including the use of cookies
                  </div>
                </div>
                <div className="login-social border-t mt-3 pt-2 mb-3">
                  <p className="mb-2">OR continue with</p>
                  <a href="#" className="btn-facebook">
                    <i className="fab fa-facebook" aria-hidden="true" />{" "}
                    Facebook
                  </a>
                  <a href="#" className="btn-twitter">
                    <i className="fab fa-twitter" aria-hidden="true" /> Twitter
                  </a>
                  <a href="#" className="btn-google">
                    <i className="fab fa-google" aria-hidden="true" /> Google
                  </a>
                </div>
                <div className="sign-up">
                  <p className="m-0">
                    Already have an account?{" "}
                    <a href="login.html" className="pink">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* login Modal */}
      <div
        className="modal fade"
        id="login"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header bordernone p-0">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <div className="login-content p-4 text-center">
                <div className="login-title section-border">
                  <h3 className="pink">Login</h3>
                </div>
                <div className="login-form">
                  <form>
                    <div className="form-group">
                      <input type="email" placeholder="Enter email address" />
                    </div>
                    <div className="form-group">
                      <input type="password" placeholder="Enter password" />
                    </div>
                  </form>
                  <div className="form-btn">
                    <a href="#" className="nir-btn">
                      LOGIN
                    </a>
                  </div>
                  <div className="form-group mb-0 form-checkbox mt-3">
                    <input type="checkbox" /> Remember Me |{" "}
                    <a href="#" className="">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="login-social border-t mt-3 pt-2 mb-3">
                  <p className="mb-2">OR continue with</p>
                  <a href="#" className="btn-facebook">
                    <i className="fab fa-facebook" aria-hidden="true" />{" "}
                    Facebook
                  </a>
                  <a href="#" className="btn-twitter">
                    <i className="fab fa-twitter" aria-hidden="true" /> Twitter
                  </a>
                </div>
                <div className="sign-up">
                  <p className="m-0">
                    Do not have an account?{" "}
                    <a href="login.html" className="pink">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header side menu */}
      <div className="header_sidemenu">
        <div className="header_sidemenu_in">
          <div className="menu">
            <div className="close-menu">
              <i className="fa fa-times white" />
            </div>
            <div className="m-contentmain">
              <div className="cart-main">
                <div className="cart-box">
                  <div className="popup-container">
                    <h5 className="p-3 mb-0 bg-pink white text-caps">
                      My Carts(3 Items)
                    </h5>
                    <div className="cart-entry d-flex align-items-center p-3">
                      <a href="#" className="image">
                        <img src="./images/shop/shop1.jpg" alt="" />
                      </a>
                      <div className="content">
                        <a href="#" className="title font-weight-bold">
                          Pullover Batwing
                        </a>
                        <p className="quantity m-0">Quantity: 3</p>
                        <span className="price">$45.00</span>
                      </div>
                      <div className="button-x">
                        <i className="icon-close" />
                      </div>
                    </div>
                    <div className="cart-entry d-flex align-items-center p-3">
                      <a href="#" className="image">
                        <img src="./images/shop/shop2.jpg" alt="" />
                      </a>
                      <div className="content">
                        <a href="#" className="title font-weight-bold">
                          Pullover Batwing
                        </a>
                        <p className="quantity m-0">Quantity: 3</p>
                        <span className="price">$90.00</span>
                      </div>
                      <div className="button-x">
                        <i className="icon-close" />
                      </div>
                    </div>
                    <div className="cart-entry d-flex align-items-center p-3">
                      <a href="#" className="image">
                        <img src="./images/shop/shop6.jpg" alt="" />
                      </a>
                      <div className="content">
                        <a href="#" className="title font-weight-bold">
                          Pullover Batwing
                        </a>
                        <p className="quantity m-0">Quantity: 3</p>
                        <span className="price">$90.00</span>
                      </div>
                      <div className="button-x">
                        <i className="icon-close" />
                      </div>
                    </div>
                    <div className="summary-total">
                      <div className="summary d-flex align-items-center justify-content-between">
                        <div className="subtotal font-weight-bold">
                          Delivery Charge
                        </div>
                        <div className="price-s">$10</div>
                      </div>
                      <div className="summary d-flex align-items-center justify-content-between">
                        <div className="subtotal font-weight-bold">
                          Sub Total
                        </div>
                        <div className="price-s">$200</div>
                      </div>
                      <div className="summary d-flex align-items-center justify-content-between">
                        <div className="subtotal font-weight-bold">
                          Discount
                        </div>
                        <div className="price-s">$2</div>
                      </div>
                      <div className="summary d-flex align-items-center justify-content-between">
                        <div className="subtotal font-weight-bold">Total</div>
                        <div className="price-s">$208</div>
                      </div>
                    </div>
                    <div className="cart-buttons d-flex align-items-center justify-content-between">
                      <a href="#" className="nir-btn">
                        View Cart
                      </a>
                      <a href="#" className="nir-btn-black">
                        Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlay hide" />
        </div>
      </div>
    </>
  );
};

export default Map;
