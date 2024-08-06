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

const TongHopDiemDiLich = () => {
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

      map.addSource("Khonggian_uutien_BL_region", {
        type: "geojson",
        data: `http://103.130.212.145:42319/api/diadiem/dataGeoJson/dataGeoJson/dataGeoJson?tenbang=Khonggian_uutien_BL_region`,
      });

      map.addLayer({
        id: "Khonggian_uutien_BL_region",
        type: "fill",
        source: "Khonggian_uutien_BL_region",
        layout: {},
        paint: {
          "fill-color": "#7239ea",
          "fill-opacity": 0.6,
        },
      });

      

      map.addSource("TNDL_tinhBacLieu__polyline", {
        type: "geojson",
        data: `http://103.130.212.145:42319/api/diadiem/dataGeoJson/dataGeoJson/dataGeoJson?tenbang=TNDL_tinhBacLieu__polyline`,
      });

      map.addLayer({
        id: "TNDL_tinhBacLieu__polyline",
        type: "line",
        source: "TNDL_tinhBacLieu__polyline",
        layout: {},
        paint: {
          "line-color": "#1b84ff",
          "line-width": 2,
        },
      });

      map.addSource("Cum_TNDL_tinh_BacLieu_polyline", {
        type: "geojson",
        data: `http://103.130.212.145:42319/api/diadiem/dataGeoJson/dataGeoJson/dataGeoJson?tenbang=Cum_TNDL_tinh_BacLieu_polyline`,
      });

      map.addLayer({
        id: "Cum_TNDL_tinh_BacLieu_polyline",
        type: "line",
        source: "Cum_TNDL_tinh_BacLieu_polyline",
        layout: {},
        paint: {
          "line-color": "#ff6f1e",
          "line-width": 2,
        },
      });
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
                name={`Khonggian_uutien_BL_region`}
                id={`Khonggian_uutien_BL_region`}
                value={`Khonggian_uutien_BL_region`}
                style={{
                  marginRight: 8,
                }}
                onClick={btDiaDiemDuLich}
                defaultChecked={true}
              />
              <label
                htmlFor={`Khonggian_uutien_BL_region`}
                style={{
                  margin: 0,
                }}
              >
                Không gian ưu tiên Bạc Liêu
              </label>
            </div>
            <div
              className="d-flex align-items-center"
              style={{ padding: "8px 12px" }}
            >
              <input
                type="checkbox"
                name={`TNDL_tinhBacLieu__polyline`}
                id={`TNDL_tinhBacLieu__polyline`}
                value={`TNDL_tinhBacLieu__polyline`}
                style={{
                  marginRight: 8,
                }}
                onClick={btDiaDiemDuLich}
                defaultChecked={true}
              />
              <label
                htmlFor={`TNDL_tinhBacLieu__polyline`}
                style={{
                  margin: 0,
                }}
              >
                TNDL tỉnh Bạc Liêu
              </label>
            </div>
            <div
              className="d-flex align-items-center"
              style={{ padding: "8px 12px" }}
            >
              <input
                type="checkbox"
                name={`Cum_TNDL_tinh_BacLieu_polyline`}
                id={`Cum_TNDL_tinh_BacLieu_polyline`}
                value={`Cum_TNDL_tinh_BacLieu_polyline`}
                style={{
                  marginRight: 8,
                }}
                onClick={btDiaDiemDuLich}
                defaultChecked={true}
              />
              <label
                htmlFor={`Cum_TNDL_tinh_BacLieu_polyline`}
                style={{
                  margin: 0,
                }}
              >
                Cụm TNDL tỉnh Bạc Liêu
              </label>
            </div>
          </div>
      </section>
      {/* BreadCrumb Ends */}
    </>
  );
};

export default TongHopDiemDiLich;
