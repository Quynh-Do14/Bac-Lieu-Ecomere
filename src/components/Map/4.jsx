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

const BanDo4 = () => {
  const mapContainer = useRef(null);
  const navigate = useNavigate();

  const [map, setMap] = useState({});
  const [dsDiaDiemGeoJson, setDsDiaDiemGeoJson] = useState({});
  const [dsDanhMucDiaDiemDuLich, setDsDanhMucDiaDiemDuLich] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [dsDiaDiemSearch, setDsDiaDiemSearch] = useState([]);
  const [dsDiaDiemTuLichTrinh, setDsDiaDiemTuLichTrinh] = useState([]);
  const [lichTrinh, setLichTrinh] = useState({});

  const [dsLichTrinh, setDsLichTrinh] = useState([]);
  const openLichTrinh = (lichTrinh) => {
    const popup = document.getElementsByClassName("mapboxgl-popup");
    if (popup.length) {
      popup[0].remove();
    }
    var arrcenter = [];
    lichTrinh.geometry.coordinates.map((v) => {
      var a = [];
      v.map((val) => {
        var vo = val.filter((va) => va != 0);
        a.push(vo);
      });
      
      var features = turf.points(a);
      
      var center = turf.center(features);
      arrcenter.push(center.geometry.coordinates);
    });
    
    var features = turf.points(arrcenter);
    var center = turf.center(features);
    const coordinates = center.geometry.coordinates;
    const html = `
        <div style="
            padding: 20px;
        ">
        <p style="
          color: #d32f2f;
          font-size: 11px;
          text-transform: uppercase;
      ">${lichTrinh.properties.tuyen_du_l}</p>
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
">${lichTrinh.properties.chu_de_chi}</p>
        </div>
    `;

    map.flyTo({
      center: coordinates,
      essential: true,
      duration: 1000,
      zoom:12
    });

    new mapboxgl.Popup().setLngLat(coordinates).setHTML(html).addTo(map);
  };

  const fecthData = async () => {
    const resgetGeoJsonLichTrinh = await api.getGeoJson(
      `http://103.130.212.145:42319/api/diadiem/dataGeoJson/dataGeoJson/dataGeoJson?tenbang=tuyen_dl_c4_font`
    );
    setDsLichTrinh(resgetGeoJsonLichTrinh.features);
    // document.getElementById("map").scrollIntoView()
    const resgetGeoJson = await api.getGeoJson(
      `http://103.130.212.145:42319/api/diadiem/dataGeoJson/dataGeoJson/dataGeoJson?tenbang=tndl_c4_font`
    );
    setDsDiaDiemGeoJson(resgetGeoJson);
    let map = new mapboxgl.Map({
      container: mapContainer.current,
      zoom: 11.084654241259193 ,
      center: [105.47227838381116, 9.263697878226836],
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
    //   map.addSource("ranhGioiTinh", {
    //     type: "geojson",
    //     data: `http://103.130.212.145:42319/api/quanHuyen/ranhGioiTinh`,
    //   });
    //   map.addLayer({
    //     id: "ranhGioiTinh",
    //     type: "fill",
    //     source: "ranhGioiTinh",
    //     layout: {},
    //     paint: {
    //       "fill-color": "#f1416c",
    //       "fill-opacity": 0.0,
    //     },
    //   });
    //   map.addLayer({
    //     id: "outline-ranhGioiTinh",
    //     type: "line",
    //     source: "ranhGioiTinh",
    //     layout: {},
    //     paint: {
    //       "line-color": "#f1416c",
    //       "line-width": 6,
    //     },
    //   });

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

      map.addSource("khonggian_uutien_bl_4_polyline", {
        type: "geojson",
        data: `http://103.130.212.145:42319/api/diadiem/dataGeoJson/dataGeoJson/dataGeoJson?tenbang=khonggian_uutien_bl_4_polyline`,
      });

      map.addLayer({
        id: "khonggian_uutien_bl_4_polyline",
        type: "line",
        source: "khonggian_uutien_bl_4_polyline",
        layout: {},
        paint: {
          "line-color": "#f1416c",
          "line-width": 4,
        },
      });

      map.addSource("cum_c4", {
        type: "geojson",
        data: `http://103.130.212.145:42319/api/diadiem/dataGeoJson/dataGeoJson/dataGeoJson?tenbang=cum_c4`,
      });

      map.addLayer({
        id: "cum_c4",
        type: "line",
        source: "cum_c4",
        layout: {},
        paint: {
          "line-color": "#ff6f1e",
          "line-width": 4,
        },
      });

      map.addSource("tuyen_dl_c4_font", {
        type: "geojson",
        data: `http://103.130.212.145:42319/api/diadiem/dataGeoJson/dataGeoJson/dataGeoJson?tenbang=tuyen_dl_c4_font`,
      });

      map.addLayer({
        id: "tuyen_dl_c4_font",
        type: "line",
        source: "tuyen_dl_c4_font",
        layout: {},
        paint: {
          "line-color": "#546e7a",
          "line-width": 2,
        },
      });

      map.addSource("tuyen_du_lich4_region", {
        type: "geojson",
        data: `http://103.130.212.145:42319/api/diadiem/dataGeoJson/dataGeoJson/dataGeoJson?tenbang=tuyen_du_lich4_region`,
      });
      map.addLayer({
        id: "tuyen_du_lich4_region",
        type: "fill",
        source: "tuyen_du_lich4_region",
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

      map.addSource("tndl_c4_font", {
        type: "geojson",
        data: `http://103.130.212.145:42319/api/diadiem/dataGeoJson/dataGeoJson/dataGeoJson?tenbang=tndl_c4_font`,
      });

      map.addLayer({
        id: "tndl_c4_fontkp",
        type: "symbol",
        source: "tndl_c4_font",
        layout: {
          "icon-image": "dongmuoi",
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
        filter: ["==", ["get", "kieu_tndl"], "Kp"],
      });

      map.addLayer({
        id: "tndl_c4_fontls",
        type: "symbol",
        source: "tndl_c4_font",
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
        id: "tndl_c4_fontdg",
        type: "symbol",
        source: "tndl_c4_font",
        layout: {
          "icon-image": "diengio",
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
        filter: ["==", ["get", "kieu_tndl"], "Đg"],
      });

      map.addLayer({
        id: "tndl_c4_fontcq",
        type: "symbol",
        source: "tndl_c4_font",
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
        id: "tndl_c4_fontkt",
        type: "symbol",
        source: "tndl_c4_font",
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

      map.on(
        "click",
        [
          `tndl_c4_fontkp`,
          "tndl_c4_fontls",
          "tndl_c4_fonttn",
          "tndl_c4_fontdg",
          "tndl_c4_fontcq",
          "tndl_c4_fontkt",
          "tndl_c4_fontnk",
          "tuyen_dl_c4_font",
        ],
        (e) => {
          console.log(e);
          if (e.features[0].source == "tuyen_dl_c4_font") {
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
          `tndl_c4_fontkp`,
          "tndl_c4_fontls",
          "tndl_c4_fonttn",
          "tndl_c4_fontdg",
          "tndl_c4_fontcq",
          "tndl_c4_fontkt",
          "tndl_c4_fontnk",
          "tndl_c4_fontk",
          'tuyen_dl_c4_font'
        ],
        () => {
          map.getCanvas().style.cursor = "pointer";
        }
      );

      map.on(
        "mouseleave",
        [
          `tndl_c4_fontkp`,
          "tndl_c4_fontls",
          "tndl_c4_fonttn",
          "tndl_c4_fontdg",
          "tndl_c4_fontcq",
          "tndl_c4_fontkt",
          "tndl_c4_fontnk",
          "tndl_c4_fontk",
          'tuyen_dl_c4_font'
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
            Bản đồ Hoa Binh - Gia Rai - Dong Hai
          </p>
          <div
            className="d-flex align-items-center"
            style={{ padding: "8px 12px" }}
          >
            <input
              type="checkbox"
              name={`khonggian_uutien_bl_4_polyline`}
              id={`khonggian_uutien_bl_4_polyline`}
              value={`khonggian_uutien_bl_4_polyline`}
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
              htmlFor={`khonggian_uutien_bl_4_polyline`}
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
              name={`cum_c4`}
              id={`cum_c4`}
              value={`cum_c4`}
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
              htmlFor={`cum_c4`}
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
              name={`tuyen_dl_c4_font`}
              id={`tuyen_dl_c4_font`}
              value={`tuyen_dl_c4_font`}
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
              htmlFor={`tuyen_dl_c4_font`}
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
              name={`tndl_c4_fontkp`}
              id={`tndl_c4_fontkp`}
              value={`tndl_c4_fontkp`}
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
              src={"https://cdn-icons-png.flaticon.com/128/3193/3193443.png"}
              alt=""
            />
            <label
              htmlFor={`tndl_c4_fontkp`}
              style={{
                margin: 0,
              }}
            >
              Cánh đồng muối
            </label>
          </div>
          <div
            className="d-flex align-items-center"
            style={{ padding: "8px 12px" }}
          >
            <input
              type="checkbox"
              name={`tndl_c4_fontls`}
              id={`tndl_c4_fontls`}
              value={`tndl_c4_fontls`}
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
              htmlFor={`tndl_c4_fontls`}
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
              name={`tndl_c4_fontdg`}
              id={`tndl_c4_fontdg`}
              value={`tndl_c4_fontdg`}
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
              src={"https://cdn-icons-png.flaticon.com/128/5223/5223040.png"}
              alt=""
            />
            <label
              htmlFor={`tndl_c4_fontdg`}
              style={{
                margin: 0,
              }}
            >
              Cánh đồng điện gió
            </label>
          </div>
          <div
            className="d-flex align-items-center"
            style={{ padding: "8px 12px" }}
          >
            <input
              type="checkbox"
              name={`tndl_c4_fontcq`}
              id={`tndl_c4_fontcq`}
              value={`tndl_c4_fontcq`}
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
              htmlFor={`tndl_c4_fontcq`}
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
              name={`tndl_c4_fontkt`}
              id={`tndl_c4_fontkt`}
              value={`tndl_c4_fontkt`}
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
              htmlFor={`tndl_c4_fontkt`}
              style={{
                margin: 0,
              }}
            >
              Khu di tích kiến trúc, nghệ thuật
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
        {dsLichTrinh.length > 0 && (
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
              {dsLichTrinh.map((v, k) => (
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
                    width: 380,
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
                        height: 30,
                      }}
                    />
                  </div>
                  <div className="d-flex flex-column" style={{ width: 306 }}>
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "#071437",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {v.properties.tuyen_du_l}
                    </p>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 300,
                        color: "#99a1b7",
                        margin: 0,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {v.properties.chu_de_chi}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
      {/* BreadCrumb Ends */}
    </>
  );
};

export default BanDo4;
