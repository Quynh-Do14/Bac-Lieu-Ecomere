import React, { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import HeaderPage from "../../infratructure/common/layout/header";
import Footer from "../../infratructure/common/layout/footer";
import api from "../../infratructure/api";
import { removeAccents, removeDiacriticsAndSpaces } from "../../common";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../../core/common/appRouter";
import HeaderBanDo from "../../infratructure/common/layout/headerBanDo";
import { DATALICHTRINH } from "./datalichtrinh";
import * as turf from "@turf/turf";

mapboxgl.accessToken =
  "pk.eyJ1IjoibnRkMTAxMDIwMDAiLCJhIjoiY2tvbzJ4anl1MDZjMzJwbzNpcnA5NXZpcCJ9.dePfFDv0RlCLnWoDq1zHlw";

const myArray = ["primary", "success", "danger", "warning", "info"];
function getRandomValueFromArray(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

const Map = () => {
  const mapContainer = useRef(null);
  const navigate = useNavigate();

  const [map, setMap] = useState({});
  const [dsDiaDiemGeoJson, setDsDiaDiemGeoJson] = useState({});
  const [dsDanhMucDiaDiemDuLich, setDsDanhMucDiaDiemDuLich] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [dsDiaDiemSearch, setDsDiaDiemSearch] = useState([]);
  const [dsDiaDiemTuLichTrinh, setDsDiaDiemTuLichTrinh] = useState([]);
  const [lichTrinh, setLichTrinh] = useState({});

  const onNavigate = (id) => {
    // navigate(`${(ROUTE_PATH.VIEW_DESTINATION).replace(`${Constants.UseParams.Id}`, "")}${id}`);
    navigate(`${ROUTE_PATH.VIEW_DESTINATION}?${id}`);
  };

  const fecthData = async () => {
    // document.getElementById("map").scrollIntoView()
    let map = new mapboxgl.Map({
      container: mapContainer.current,
      zoom: 9,
      center: [105.3240641, 9.3102405],
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
        if (v.tenDanhMuc == "Công trình kiến trúc") {
          uriImg =
            "https://cdn4.iconfinder.com/data/icons/hotel-105/64/hotel_building_architecture_tourism_travel_five_star-512.png";
        }
        if (v.tenDanhMuc == "Du lịch giải trí") {
          uriImg =
            "https://cdn1.iconfinder.com/data/icons/travel-and-vacation-16/80/vector_825_06-512.png";
        }
        if (v.tenDanhMuc == "Thương mại - ẩm thực") {
          uriImg = "https://cdn-icons-png.flaticon.com/512/1205/1205756.png";
        }
        if (v.tenDanhMuc == "Nguồn nước khoáng") {
          uriImg = "https://cdn-icons-png.flaticon.com/512/7075/7075789.png";
        }
        if (v.tenDanhMuc == "Khu bảo tồn") {
          uriImg = "https://cdn-icons-png.flaticon.com/512/3937/3937245.png";
        }
        map.loadImage(uriImg, (error, image) => {
          if (error) throw error;
          map.addImage(`img${v.idDanhMucDiaDiem}`, image);
        });
      });
      var dataDsDiaDiemGeoJson = { ...resGetDiaDiemGeometry };
      setDsDiaDiemGeoJson(dataDsDiaDiemGeoJson);
      setDsDanhMucDiaDiemDuLich(resGetDanhMucConCuaDanhMuc.result);
      map.on("load", () => {
        map.addSource("ranhGioiTinh", {
          type: "geojson",
          data: `http://103.130.212.145:42319/api/quanHuyen/ranhGioiTinh`,
        });
        map.addLayer({
          id: "ranhGioiTinh",
          type: "fill",
          source: "ranhGioiTinh",
          layout: {},
          paint: {
            "fill-color": "#f1416c",
            "fill-opacity": 0.0,
          },
        });
        map.addLayer({
          id: "outline-ranhGioiTinh",
          type: "line",
          source: "ranhGioiTinh",
          layout: {},
          paint: {
            "line-color": "#f1416c",
            "line-width": 6,
          },
        });

        map.addSource("ranhGioiHuyen", {
          type: "geojson",
          data: `http://103.130.212.145:42319/api/quanHuyen/ranhGioiHuyen`,
        });
        map.addLayer({
          id: "ranhGioiHuyen",
          type: "fill",
          source: "ranhGioiHuyen",
          layout: {},
          paint: {
            "fill-color": "#50cd89",
            "fill-opacity": 0.0,
          },
        });
        map.addLayer({
          id: "outline-ranhGioiHuyen",
          type: "line",
          source: "ranhGioiHuyen",
          layout: {},
          paint: {
            "line-color": "#50cd89",
            "line-width": 2,
          },
        });

        map.addSource("diaDiemDuLich", {
          type: "geojson",
          data: `http://103.130.212.145:42319/api/diadiem/geometry?idDanhMuc=${1}`,
        });

        for (const feature of dataDsDiaDiemGeoJson.features) {
          // Add a layer for this symbol type if it hasn't been added already.
          if (!map.getLayer(`poi-${feature.properties.idDanhMuc}`)) {
            console.log(feature.properties);
            map.addLayer({
              id: `poi-${feature.properties.idDanhMuc}`,
              type: "symbol", 
              source: "diaDiemDuLich",
              layout: {
                "icon-image": `img${feature.properties.idDanhMuc}`,
                // "icon-allow-overlap": true,
                "icon-size": 0.05,
                "text-field": ["get", "tenDiaDiem"],
                "text-size": 11,
                "text-offset": [0, 2],
                "icon-offset": [0, -17],
              },
              paint: {
                "text-color": "#004eff",
                "text-halo-color": "#fff",
                "text-halo-width": 2,
              },
              filter: ["==", "idDanhMuc", feature.properties.idDanhMuc],
            });

            map.on("click", `poi-${feature.properties.idDanhMuc}`, (e) => {
              const coordinates = e.features[0].geometry.coordinates.slice();
              const html = `<div>
              <img src="${
                e.features[0].properties.hinhAnh.indexOf("https") != -1
                  ? e.features[0].properties.hinhAnh
                  : `http://103.130.212.145:42319/${e.features[0].properties.hinhAnh}`
              }" alt="" style="min-width: 280px;min-height: 120px;">
              <div style="
                  padding: 20px;
              ">
                  <p style="
          color: #d32f2f;
          font-size: 11px;
          text-transform: uppercase;
      ">${e.features[0].properties.tenDanhMuc}</p>
                  <a href="/destination-view?${
                    e.features[0].properties.idDiaDiem
                  }" style="
          color: #333;
          font-size: 18px;
          width: 240px;
          font-weight: 500;
      ">${e.features[0].properties.tenDiaDiem}</a>
                  <p style="
          font-size: 11px;
          color: #333;
          font-weight: 400;
      ">${e.features[0].properties.gioMoCua} - ${
                e.features[0].properties.gioDongCua
              }</p>
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

            map.on("mouseenter", `poi-${feature.properties.idDanhMuc}`, () => {
              map.getCanvas().style.cursor = "pointer";
            });

            map.on("mouseleave", `poi-${feature.properties.idDanhMuc}`, () => {
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
              <img src="${
                e.properties.hinhAnh.indexOf("https") != -1
                  ? e.properties.hinhAnh
                  : `http://103.130.212.145:42319/${e.properties.hinhAnh}`
              }" alt="" style="min-width: 280px;min-height: 120px;">
              <div style="
                  padding: 20px;
              ">
                  <p style="
          color: #d32f2f;
          font-size: 11px;
          text-transform: uppercase;
      ">${e.properties.tenDanhMuc}</p>
      <a href="/destination-view?${e.properties.idDiaDiem}" style="
          color: #333;
          font-size: 18px;
          width: 240px;
          font-weight: 500;
      ">${e.properties.tenDiaDiem}</a>
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

  const openLichTrinh = (lichTrinh) => {
    setLichTrinh(lichTrinh);
    setDsDiaDiemTuLichTrinh(lichTrinh.danhSachDiaDiem);
    map.setZoom(11);
    if (map.getLayer("lichTrinh")) {
      // Layer tồn tại, có thể xoá nó ở đây
      map.removeLayer("lichTrinh");
    }
    if (map.getSource("lichTrinh")) {
      // Source tồn tại, có thể xoá nó ở đây
      map.removeSource("lichTrinh");
    }

    map.addSource("lichTrinh", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: lichTrinh.geometry,
          },
        ],
      },
    });

    map.addLayer({
      id: "lichTrinh",
      type: "line",
      source: "lichTrinh",
      layout: {},
      paint: {
        "line-color": "#3e97ff",
        "line-width": 9,
      },
    });

    var features = turf.points(lichTrinh.geometry.coordinates);
    var center = turf.center(features);

    map.flyTo({
      center: center.geometry.coordinates,
      essential: true,
      duration: 1000,
    });
  };

  return (
    <>
      {/* Preloader */}
      {/* <div id="preloader">
        <div id="status" />
      </div> */}
      {/* Preloader Ends */}

      {/* header starts */}
      <HeaderBanDo />
      {/* header ends */}

      {/* BreadCrumb Starts */}
      <section
        className="breadcrumb-main pb-0 pt-0"
        style={{
          position: "absolute",
          top: 100,
          left: 0,
          right: 0,
          bottom: 0,
          // backgroundColor: "#000",
        }}
      >
        <div id="map" ref={mapContainer}></div>
        {dsDanhMucDiaDiemDuLich.length > 0 && (
          <div
            style={{
              backgroundColor: "#fff",
              padding: 4,
              position: "absolute",
              top: 12,
              left: 12,
              boxShadow: `0px 0px 10px rgba(0, 0, 0, 0.2)`,
            }}
          >
            <p
              style={{
                fontSize: 15,
                fontWeight: 500,
                padding: 8,
                color: "#333",
                textAlign: "center",
                borderBottom: "1px solid #ccc",
                margin: "0px 12px",
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
                      : v.tenDanhMuc == "Công trình kiến trúc"
                      ? "https://cdn4.iconfinder.com/data/icons/hotel-105/64/hotel_building_architecture_tourism_travel_five_star-512.png"
                      : v.tenDanhMuc == "Du lịch giải trí"
                      ? "https://cdn1.iconfinder.com/data/icons/travel-and-vacation-16/80/vector_825_06-512.png"
                      : v.tenDanhMuc == "Thương mại - ẩm thực"
                      ? "https://cdn-icons-png.flaticon.com/512/1205/1205756.png"
                      : v.tenDanhMuc == "Nguồn nước khoáng"
                      ? "https://cdn-icons-png.flaticon.com/512/7075/7075789.png"
                      : v.tenDanhMuc == "Khu bảo tồn"
                      ? "https://cdn-icons-png.flaticon.com/512/3937/3937245.png"
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
            top: 12,
            right: 70,
          }}
        >
          <div
            className="d-flex form-group"
            style={{
              boxShadow: `0px 0px 10px rgba(0, 0, 0, 0.2)`,
            }}
          >
            <button className="onsearch">
              <i className="flaticon-location-pin"></i>
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
                  <i className="flaticon-location-pin"></i>
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
        <div
          style={{
            position: "absolute",
            bottom: 12,
            left: 12,
            right: 12,
            maxHeight: 250,
            boxShadow: `0px 0px 10px rgba(0, 0, 0, 0.2)`,
            backgroundColor: "#fff",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 14,
              fontWeight: 500,
              paddingLeft: 16,
              paddingTop: 8,
              color: "#071437",
            }}
          >
            Gợi ý lịch trình
          </p>
          <div
            id="style-6"
            className="d-flex flex-row"
            style={{
              overflow: "hidden",
              overflowX: "auto",
              paddingTop: 12,
              paddingBottom: 12,
              marginLeft: 12,
              marginRight: 12,
            }}
          >
            {DATALICHTRINH.danhSachLichTrinh.map((v, k) => (
              <div
                className="detailLichTrinh"
                onClick={() => openLichTrinh(v)}
                key={k}
                style={{
                  padding: 12,
                  border: "1px solid #3e97ff",
                  borderRadius: 10,
                  borderStyle: "dashed",
                  marginRight: 12,
                  minWidth: 380,
                  flexDirection: "row",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 5,
                    backgroundColor: "#f1faff",
                    marginRight: 16,
                  }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7291/7291475.png"
                    alt=""
                    style={{
                      maxHeight: 30,
                    }}
                  />
                </div>
                <div className="d-flex flex-column">
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "#071437",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: 192,
                    }}
                  >
                    {v.ten}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 300,
                      color: "#99a1b7",
                      margin: 0,
                    }}
                  >
                    Số địa điểm: {v.soDiaDiem}
                  </p>
                </div>
                <div className="d-flex flex-row align-items-center ml-4">
                  <i
                    className="fa fa-clock-o mr-1"
                    style={{
                      color: "#3e97ff",
                    }}
                  ></i>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 12,
                      color: "#3e97ff",
                    }}
                  >
                    {v.thoiGian}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {dsDiaDiemTuLichTrinh.length > 0 && (
          <div
            style={{
              backgroundColor: "#fff",
              padding: 20,
              position: "absolute",
              top: 79,
              right: 70,
              boxShadow: `0px 0px 10px rgba(0, 0, 0, 0.2)`,
              width: 310,
            }}
          >
            <div className="d-flex flex-row justify-content-between mb-2">
              <div className="d-flex flex-column">
                <p
                  style={{
                    fontSize: 14,
                    color: "#071437",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: 192,
                  }}
                >
                  {lichTrinh.ten}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: "#99a1b7",
                  }}
                >
                  Số địa điểm : {lichTrinh.soDiaDiem}
                </p>
              </div>
              <button
                type="button"
                class="close"
                aria-label="Close"
                onClick={() => {
                  setDsDiaDiemTuLichTrinh([]);
                  setLichTrinh({});
                  if (map.getLayer("lichTrinh")) {
                    // Layer tồn tại, có thể xoá nó ở đây
                    map.removeLayer("lichTrinh");
                  }
                  if (map.getSource("lichTrinh")) {
                    // Source tồn tại, có thể xoá nó ở đây
                    map.removeSource("lichTrinh");
                  }
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="timeline-label">
              {/*begin::Item*/}
              {dsDiaDiemTuLichTrinh.length > 0 &&
                dsDiaDiemTuLichTrinh.map((v, k) => (
                  <div className="timeline-item" key={k}>
                    {/*begin::Label*/}
                    <div
                      className="timeline-label"
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        marginRight: 11,
                        whiteSpace: "nowrap",
                      }}
                    >
                      Điểm {k + 1}
                    </div>
                    {/*end::Label*/}
                    {/*begin::Badge*/}
                    <div className="timeline-badge">
                      <i
                        className={`fa fa-genderless text-${getRandomValueFromArray(
                          myArray
                        )}`}
                        style={{ fontSize: "1.75rem" }}
                      />
                    </div>
                    {/*end::Badge*/}
                    {/*begin::Text*/}
                    <div
                      className="timeline-content"
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        marginLeft: 12,
                        color: "#252f4a",
                      }}
                    >
                      {v.tenDiaDiem}
                      <br />
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 300,
                          color: "#99a1b7",
                          marginTop: 8,
                        }}
                      >
                        Giờ mở cửa : {v.gioMoCua}
                        <br />
                        Giờ đóng cửa : {v.gioDongCua}
                        <br />
                        Giá vé : {v.giaVe}
                      </div>
                    </div>
                    {/*end::Text*/}
                  </div>
                ))}
              <div className="timeline-item">
                {/*begin::Label*/}
                <div
                  className="timeline-label"
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    marginRight: 11,
                    whiteSpace: "nowrap",
                    color: "#fff",
                  }}
                >
                  Điểm c
                </div>
                {/*end::Label*/}
                {/*begin::Badge*/}
                <div className="timeline-badge">
                  <i
                    className={`fa fa-genderless text-${getRandomValueFromArray(
                      myArray
                    )}`}
                    style={{ fontSize: "1.75rem" }}
                  />
                </div>
                {/*end::Badge*/}
                {/*begin::Text*/}
                <div
                  className="timeline-content"
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    marginLeft: 12,
                    color: "#252f4a",
                  }}
                >
                  Kết thúc lịch trình
                </div>
                {/*end::Text*/}
              </div>
            </div>
          </div>
        )}
      </section>
      {/* BreadCrumb Ends */}
    </>
  );
};

export default Map;
