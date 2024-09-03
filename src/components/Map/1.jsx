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

const BanDo1 = () => {
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
    const resgetGeoJson = await api.getGeoJson(
      `http://103.130.212.145:42319/api/diadiem/dataGeoJson/dataGeoJson/dataGeoJson?tenbang=diem_dl_1`
    );
    setDsDiaDiemGeoJson(resgetGeoJson);
    let map = new mapboxgl.Map({
      container: mapContainer.current,
      zoom: 12.528543338550827  ,
      center: [105.73823824305384, 9.264140181027031],
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
    map.on("load", () => {
      // map.addSource("ranhGioiTinh", {
      //   type: "geojson",
      //   data: `http://103.130.212.145:42319/api/quanHuyen/ranhGioiTinh`,
      // });
      // map.addLayer({
      //   id: "ranhGioiTinh",
      //   type: "fill",
      //   source: "ranhGioiTinh",
      //   layout: {},
      //   paint: {
      //     "fill-color": "#f1416c",
      //     "fill-opacity": 0.0,
      //   },
      // });
      // map.addLayer({
      //   id: "outline-ranhGioiTinh",
      //   type: "line",
      //   source: "ranhGioiTinh",
      //   layout: {},
      //   paint: {
      //     "line-color": "#f1416c",
      //     "line-width": 6,
      //   },
      // });

      //   map.addSource("ranhGioiHuyen", {
      //     type: "geojson",
      //     data: `http://103.130.212.145:42319/api/quanHuyen/ranhGioiHuyen`,
      //   });
      //   map.addLayer({
      //     id: "ranhGioiHuyen",
      //     type: "fill",
      //     source: "ranhGioiHuyen",
      //     layout: {},
      //     paint: {
      //       "fill-color": "#50cd89",
      //       "fill-opacity": 0.0,
      //     },
      //   });

      //   map.addLayer({
      //     id: "outline-ranhGioiHuyen",
      //     type: "line",
      //     source: "ranhGioiHuyen",
      //     layout: {},
      //     paint: {
      //       "line-color": "#50cd89",
      //       "line-width": 2,
      //     },
      //   });

      map.addSource("khonggian_uutien_bl_1_polyline", {
        type: "geojson",
        data: `http://103.130.212.145:42319/api/diadiem/dataGeoJson/dataGeoJson/dataGeoJson?tenbang=khonggian_uutien_bl_1_polyline`,
      });

      map.addLayer({
        id: "khonggian_uutien_bl_1_polyline",
        type: "line",
        source: "khonggian_uutien_bl_1_polyline",
        layout: {},
        paint: {
          "line-color": "#f1416c",
          "line-width": 4,
        },
      });

      map.addSource("Cum_TNDL_tinh_BacLieu_1_polyline", {
        type: "geojson",
        data: `http://103.130.212.145:42319/api/diadiem/dataGeoJson/dataGeoJson/dataGeoJson?tenbang=Cum_TNDL_tinh_BacLieu_1_polyline`,
      });

      map.addLayer({
        id: "Cum_TNDL_tinh_BacLieu_1_polyline",
        type: "line",
        source: "Cum_TNDL_tinh_BacLieu_1_polyline",
        layout: {},
        paint: {
          "line-color": "#ff6f1e",
          "line-width": 4,
        },
      });

      map.addSource("tuyen_dl_1", {
        type: "geojson",
        data: `http://103.130.212.145:42319/api/diadiem/dataGeoJson/dataGeoJson/dataGeoJson?tenbang=tuyen_dl_1`,
      });

      map.addLayer({
        id: "tuyen_dl_1",
        type: "line",
        source: "tuyen_dl_1",
        layout: {},
        paint: {
          "line-color": "#546e7a",
          "line-width": 2,
        },
      });

      map.addSource("tuyen_du_lich1_region", {
        type: "geojson",
        data: `http://103.130.212.145:42319/api/diadiem/dataGeoJson/dataGeoJson/dataGeoJson?tenbang=tuyen_du_lich1_region`,
      });
      map.addLayer({
        id: "tuyen_du_lich1_region",
        type: "fill",
        source: "tuyen_du_lich1_region",
        layout: {},
        paint: {
          "fill-color": "#546e7a",
        },
      });

      map.loadImage(
        "https://cdn-icons-png.flaticon.com/128/3193/3193443.png",
        (error, image) => {
          if (error) throw error;
          map.addImage(`dongmuoi`, image);
        }
      );

      map.loadImage(
        "https://cdn-icons-png.flaticon.com/128/3655/3655576.png",
        (error, image) => {
          if (error) throw error;
          map.addImage(`lichsuvanhoa`, image);
        }
      );

      map.loadImage(
        "https://cdn-icons-png.flaticon.com/128/15052/15052824.png",
        (error, image) => {
          if (error) throw error;
          map.addImage(`baotonthien`, image);
        }
      );

      map.loadImage(
        "https://cdn-icons-png.flaticon.com/128/5223/5223040.png",
        (error, image) => {
          if (error) throw error;
          map.addImage(`diengio`, image);
        }
      );

      map.loadImage(
        "https://cdn-icons-png.flaticon.com/128/4949/4949196.png",
        (error, image) => {
          if (error) throw error;
          map.addImage(`canhquan`, image);
        }
      );

      map.loadImage(
        "https://cdn-icons-png.flaticon.com/128/3397/3397958.png",
        (error, image) => {
          if (error) throw error;
          map.addImage(`kientruc`, image);
        }
      );

      map.loadImage(
        "https://cdn-icons-png.flaticon.com/128/2645/2645710.png",
        (error, image) => {
          if (error) throw error;
          map.addImage(`nuocnong`, image);
        }
      );

      map.addSource("diem_dl_1", {
        type: "geojson",
        data: `http://103.130.212.145:42319/api/diadiem/dataGeoJson/dataGeoJson/dataGeoJson?tenbang=diem_dl_1`,
      });

      map.addLayer({
        id: "diem_dl_1ls",
        type: "symbol",
        source: "diem_dl_1",
        layout: {
          "icon-image": "lichsuvanhoa",
          "icon-size": 0.25,
          "text-field": ["get", "tendiemdul"],
          "text-size": 11,
          "text-offset": [0, 2],
          "icon-offset": [0, -18],
        },
        paint: {
          "text-color": "#004eff",
          "text-halo-color": "#fff",
          "text-halo-width": 2,
        },
        filter: [
          "==",
          ["get", "kieu_tndl"],
          "Ls",
        ],
      });

      map.addLayer({
        id: "diem_dl_1tn",
        type: "symbol",
        source: "diem_dl_1",
        layout: {
          "icon-image": "baotonthien",
          "icon-size": 0.25,
          "text-field": ["get", "tendiemdul"],
          "text-size": 11,
          "text-offset": [0, 2],
          "icon-offset": [0, -18],
        },
        paint: {
          "text-color": "#004eff",
          "text-halo-color": "#fff",
          "text-halo-width": 2,
        },
        filter: ["==", ["get", "kieu_tndl"], "Tn"],
      });

      map.addLayer({
        id: "diem_dl_1cq",
        type: "symbol",
        source: "diem_dl_1",
        layout: {
          "icon-image": "canhquan",
          "icon-size": 0.25,
          "text-field": ["get", "tendiemdul"],
          "text-size": 11,
          "text-offset": [0, 2],
          "icon-offset": [0, -18],
        },
        paint: {
          "text-color": "#004eff",
          "text-halo-color": "#fff",
          "text-halo-width": 2,
        },
        filter: [
          "==",
          ["get", "kieu_tndl"],
          "Cq",
        ],
      });

      map.addLayer({
        id: "diem_dl_1kt",
        type: "symbol",
        source: "diem_dl_1",
        layout: {
          "icon-image": "kientruc",
          "icon-size": 0.25,
          "text-field": ["get", "tendiemdul"],
          "text-size": 11,
          "text-offset": [0, 2],
          "icon-offset": [0, -18],
        },
        paint: {
          "text-color": "#004eff",
          "text-halo-color": "#fff",
          "text-halo-width": 2,
        },
        filter: [
          "==",
          ["get", "kieu_tndl"],
          "Kt",
        ],
      });

      map.addLayer({
        id: "diem_dl_1nk",
        type: "symbol",
        source: "diem_dl_1",
        layout: {
          "icon-image": "nuocnong",
          "icon-size": 0.25,
          "text-field": ["get", "tendiemdul"],
          "text-size": 11,
          "text-offset": [0, 2],
          "icon-offset": [0, -18],
        },
        paint: {
          "text-color": "#004eff",
          "text-halo-color": "#fff",
          "text-halo-width": 2,
        },
        filter: ["==", ["get", "kieu_tndl"], "Nk"],
      });

      map.on(
        "click",
        [
          `diem_dl_1kp`,
          "diem_dl_1ls",
          "diem_dl_1tn",
          "diem_dl_1dg",
          "diem_dl_1cq",
          "diem_dl_1kt",
          "diem_dl_1nk",
          "tuyen_dl_1",
          'tuyen_du_lich1_region'
        ],
        (e) => {
          console.log(e);
          if (e.features[0].source == "tuyen_dl_1") {
            const coordinates = [e.lngLat.lng, e.lngLat.lat];
            const html = `
        <div style="
            padding: 20px;
        ">
        <p style="
          color: #d32f2f;
          font-size: 11px;
          text-transform: uppercase;
      ">${e.features[0].properties.tuyen_du_l}</p>
            <p style="
    width: 240px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 5;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    font-size: 13px;
    line-height: 1.6;
    color: #333;
">${e.features[0].properties.chu_de_chi}</p>
        </div>
    `;

            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            map.flyTo({
              center: coordinates,
              essential: true,
              duration: 1000,
            });

            new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML(html)
              .addTo(map);
          } else {
            const coordinates = e.features[0].geometry.coordinates;
            const html = `<div>
          <img src="${`http://103.130.212.145:42319/api/public/anh/${e.features[0].properties.tt}.jpg`}" alt="" style="min-width: 280px;min-height: 120px;">
        <div style="
            padding: 20px;
        ">
        <p style="
          color: #d32f2f;
          font-size: 11px;
          text-transform: uppercase;
      ">${e.features[0].properties.kieutndl}</p>
            <a href="#" style="
    color: #333;
    font-size: 18px;
    width: 240px;
    font-weight: 500;
">${e.features[0].properties.tendiemdul}</a>
            <p style="
    font-size: 11px;
    color: #333;
    font-weight: 400;
">${e.features[0].properties.vitridialy}</p>
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
">${e.features[0].properties.giatrinoib}</p>
        </div>
    </div>`;

            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            map.flyTo({
              center: coordinates,
              essential: true,
              duration: 1000,
            });

            new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML(html)
              .addTo(map);
          }
        }
      );

      map.on(
        "mouseenter",
        [
          `diem_dl_1kp`,
          "diem_dl_1ls",
          "diem_dl_1tn",
          "diem_dl_1dg",
          "diem_dl_1cq",
          "diem_dl_1kt",
          "diem_dl_1nk",
          "diem_dl_1k",
          'tuyen_dl_1',
          'tuyen_du_lich1_region'
        ],
        () => {
          map.getCanvas().style.cursor = "pointer";
        }
      );

      map.on(
        "mouseleave",
        [
          `diem_dl_1kp`,
          "diem_dl_1ls",
          "diem_dl_1tn",
          "diem_dl_1dg",
          "diem_dl_1cq",
          "diem_dl_1kt",
          "diem_dl_1nk",
          "diem_dl_1k",
          'tuyen_dl_1',
          'tuyen_du_lich1_region'
        ],
        () => {
          map.getCanvas().style.cursor = "";
        }
      );
    });
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
          removeAccents(v.properties.tendiemdul.toLowerCase()).indexOf(
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
          <img src="${`http://103.130.212.145:42319/api/public/anh/${e.properties.tt}.jpg`}" alt="" style="min-width: 280px;min-height: 120px;">
        <div style="
            padding: 20px;
        ">
        <p style="
          color: #d32f2f;
          font-size: 11px;
          text-transform: uppercase;
      ">${e.properties.kieutndl}</p>
            <a href="#" style="
    color: #333;
    font-size: 18px;
    width: 240px;
    font-weight: 500;
">${e.properties.tendiemdul}</a>
            <p style="
    font-size: 11px;
    color: #333;
    font-weight: 400;
">${e.properties.vitridialy}</p>
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
">${e.properties.giatrinoib}</p>
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
            Lớp bản đồ
          </p>
          <div
            className="d-flex align-items-center"
            style={{ padding: "8px 12px" }}
          >
            <input
              type="checkbox"
              name={`khonggian_uutien_bl_1_polyline`}
              id={`khonggian_uutien_bl_1_polyline`}
              value={`khonggian_uutien_bl_1_polyline`}
              style={{
                marginRight: 8,
              }}
              onClick={btDiaDiemDuLich}
              defaultChecked={true}
            />
            <div
              style={{
                width: 25,
                height: 25,
                border: "2px solid #f1416c",
                marginRight: 8,
              }}
            ></div>
            <label
              htmlFor={`khonggian_uutien_bl_1_polyline`}
              style={{
                margin: 0,
              }}
            >
              Không gian ưu tiên
            </label>
          </div>
          <div
            className="d-flex align-items-center"
            style={{ padding: "8px 12px" }}
          >
            <input
              type="checkbox"
              name={`Cum_TNDL_tinh_BacLieu_1_polyline`}
              id={`Cum_TNDL_tinh_BacLieu_1_polyline`}
              value={`Cum_TNDL_tinh_BacLieu_1_polyline`}
              style={{
                marginRight: 8,
              }}
              onClick={btDiaDiemDuLich}
              defaultChecked={true}
            />
            <div
              style={{
                width: 25,
                height: 25,
                border: "2px solid #ff6f1e",
                marginRight: 8,
              }}
            ></div>
            <label
              htmlFor={`Cum_TNDL_tinh_BacLieu_1_polyline`}
              style={{
                margin: 0,
              }}
            >
              Cụm TNDL tỉnh Bạc Liêu
            </label>
          </div>
          <div
            className="d-flex align-items-center"
            style={{ padding: "8px 12px" }}
          >
            <input
              type="checkbox"
              name={`tuyen_dl_1`}
              id={`tuyen_dl_1`}
              value={`tuyen_dl_1`}
              style={{
                marginRight: 8,
              }}
              onClick={btDiaDiemDuLich}
              defaultChecked={true}
            />
            <div
              style={{
                height: 2,
                width: 25,
                backgroundColor: "#546e7a",
                marginRight: 8,
                transform: "rotate(120deg)",
              }}
            ></div>
            <label
              htmlFor={`tuyen_dl_1`}
              style={{
                margin: 0,
              }}
            >
              Tuyến du lịch
            </label>
          </div>
          <div
            className="d-flex align-items-center"
            style={{ padding: "8px 12px" }}
          >
            <input
              type="checkbox"
              name={`diem_dl_1ls`}
              id={`diem_dl_1ls`}
              value={`diem_dl_1ls`}
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
              src={"https://cdn-icons-png.flaticon.com/128/3655/3655576.png"}
              alt=""
            />
            <label
              htmlFor={`diem_dl_1ls`}
              style={{
                margin: 0,
              }}
            >
              Khu di tích lịch sử văn hoá và cách mạng
            </label>
          </div>
          <div
            className="d-flex align-items-center"
            style={{ padding: "8px 12px" }}
          >
            <input
              type="checkbox"
              name={`diem_dl_1tn`}
              id={`diem_dl_1tn`}
              value={`diem_dl_1tn`}
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
              src={"https://cdn-icons-png.flaticon.com/128/15052/15052824.png"}
              alt=""
            />
            <label
              htmlFor={`diem_dl_1tn`}
              style={{
                margin: 0,
              }}
            >
              Khu bảo tồn thiên nhiên
            </label>
          </div>
          <div
            className="d-flex align-items-center"
            style={{ padding: "8px 12px" }}
          >
            <input
              type="checkbox"
              name={`diem_dl_1cq`}
              id={`diem_dl_1cq`}
              value={`diem_dl_1cq`}
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
              src={"https://cdn-icons-png.flaticon.com/128/4949/4949196.png"}
              alt=""
            />
            <label
              htmlFor={`diem_dl_1cq`}
              style={{
                margin: 0,
              }}
            >
              Khu du lịch sinh thái, cảnh quan đẹp
            </label>
          </div>
          <div
            className="d-flex align-items-center"
            style={{ padding: "8px 12px" }}
          >
            <input
              type="checkbox"
              name={`diem_dl_1kt`}
              id={`diem_dl_1kt`}
              value={`diem_dl_1kt`}
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
              src={"https://cdn-icons-png.flaticon.com/128/3397/3397958.png"}
              alt=""
            />
            <label
              htmlFor={`diem_dl_1kt`}
              style={{
                margin: 0,
              }}
            >
              Khu di tích kiến trúc, nghệ thuật
            </label>
          </div>
          <div
            className="d-flex align-items-center"
            style={{ padding: "8px 12px" }}
          >
            <input
              type="checkbox"
              name={`diem_dl_1nk`}
              id={`diem_dl_1nk`}
              value={`diem_dl_1nk`}
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
              src={"https://cdn-icons-png.flaticon.com/128/2645/2645710.png"}
              alt=""
            />
            <label
              htmlFor={`diem_dl_1nk`}
              style={{
                margin: 0,
              }}
            >
              Nguồn nước khoáng nóng
            </label>
          </div>
        </div>
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
                      {v.properties.tendiemdul}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 11,
                        fontWeight: 400,
                      }}
                    >
                      {v.properties.kieutndl}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      {/* BreadCrumb Ends */}
    </>
  );
};

export default BanDo1;
