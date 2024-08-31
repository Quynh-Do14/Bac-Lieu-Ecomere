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
          "line-color": "#071437",
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
          "line-color": "#1b84ff",
          "line-width": 2,
        },
      });

      map.addSource("th_diem_du_lich", {
        type: "geojson",
        data: `http://103.130.212.145:42319/api/diadiem/dataGeoJson/dataGeoJson/dataGeoJson?tenbang=th_diem_du_lich`,
      });

      map.addLayer({
        id: "th_diem_du_lichkp",
        type: "circle",
        source: "th_diem_du_lich",
        layout: {},
        paint: {
          "circle-color": "#FF5733",
          "circle-radius": 6,
        },
        filter: ["==", ["get", "kieutndl"], "cánh đồng muối (kp)"],
      });

      map.addLayer({
        id: "th_diem_du_lichls",
        type: "circle",
        source: "th_diem_du_lich",
        layout: {},
        paint: {
          "circle-color": "#33FF57",
          "circle-radius": 6,
        },
        filter: [
          "==",
          ["get", "kieutndl"],
          "khu di tích lịch sử văn hoá và cách mạng (ls)",
        ],
      });

      map.addLayer({
        id: "th_diem_du_lichtn",
        type: "circle",
        source: "th_diem_du_lich",
        layout: {},
        paint: {
          "circle-color": "#3357FF",
          "circle-radius": 6,
        },
        filter: ["==", ["get", "kieutndl"], "khu bảo tồn thiên nhiên (tn)"],
      });

      map.addLayer({
        id: "th_diem_du_lichdg",
        type: "circle",
        source: "th_diem_du_lich",
        layout: {},
        paint: {
          "circle-color": "#FF33A1",
          "circle-radius": 6,
        },
        filter: ["==", ["get", "kieutndl"], "cánh đồng điện gió (dg)"],
      });

      map.addLayer({
        id: "th_diem_du_lichcq",
        type: "circle",
        source: "th_diem_du_lich",
        layout: {},
        paint: {
          "circle-color": "#FFC300",
          "circle-radius": 6,
        },
        filter: [
          "==",
          ["get", "kieutndl"],
          "khu du lịch sinh thái, cảnh quan đẹp (cq)",
        ],
      });

      map.addLayer({
        id: "th_diem_du_lichkt",
        type: "circle",
        source: "th_diem_du_lich",
        layout: {},
        paint: {
          "circle-color": "#DAF7A6",
          "circle-radius": 6,
        },
        filter: [
          "==",
          ["get", "kieutndl"],
          "khu di tích kiến trúc, nghệ thuật (kt)",
        ],
      });

      map.addLayer({
        id: "th_diem_du_lichnk",
        type: "circle",
        source: "th_diem_du_lich",
        layout: {},
        paint: {
          "circle-color": "#900C3F",
          "circle-radius": 6,
        },
        filter: ["==", ["get", "kieutndl"], "nguồn nước khoáng nóng (nk)"],
      });

      map.addLayer({
        id: "th_diem_du_lichk",
        type: "circle",
        source: "th_diem_du_lich",
        layout: {},
        paint: {
          "circle-color": "#900C3F",
          "circle-radius": 6,
        },
        filter: ["==", ["get", "kieutndl"], null],
      });

      map.on(
        "click",
        [
          `th_diem_du_lichkp`,
          "th_diem_du_lichls",
          "th_diem_du_lichtn",
          "th_diem_du_lichdg",
          "th_diem_du_lichcq",
          "th_diem_du_lichkt",
          "th_diem_du_lichnk",
          "th_diem_du_lichk",
        ],
        (e) => {
          const coordinates = e.features[0].geometry.coordinates.slice();
          const html = `<div>
          <img src="${
               `http://103.130.212.145:42319/api/public/anh/${e.features[0].properties.tt}.jpg`
              }" alt="" style="min-width: 280px;min-height: 120px;">
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
            center: e.features[0].geometry.coordinates,
            essential: true,
            duration: 1000,
          });

          new mapboxgl.Popup().setLngLat(coordinates).setHTML(html).addTo(map);
        }
      );

      map.on(
        "mouseenter",
        [
          `th_diem_du_lichkp`,
          "th_diem_du_lichls",
          "th_diem_du_lichtn",
          "th_diem_du_lichdg",
          "th_diem_du_lichcq",
          "th_diem_du_lichkt",
          "th_diem_du_lichnk",
          "th_diem_du_lichk",
        ],
        () => {
          map.getCanvas().style.cursor = "pointer";
        }
      );

      map.on(
        "mouseleave",
        [
          `th_diem_du_lichkp`,
          "th_diem_du_lichls",
          "th_diem_du_lichtn",
          "th_diem_du_lichdg",
          "th_diem_du_lichcq",
          "th_diem_du_lichkt",
          "th_diem_du_lichnk",
          "th_diem_du_lichk",
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
            <div
              style={{
                width: 20,
                height: 20,
                backgroundColor: "#7239ea",
                marginRight: 8,
              }}
            ></div>
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
            <div
              style={{
                height: 2,
                width: 20,
                backgroundColor: "#071437",
                marginRight: 8,
                transform: "rotate(120deg)",
              }}
            ></div>
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
            <div
              style={{
                width: 20,
                height: 20,
                border: "2px solid #1b84ff",
                marginRight: 8,
              }}
            ></div>
            <label
              htmlFor={`Cum_TNDL_tinh_BacLieu_polyline`}
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
              name={`th_diem_du_lichkp`}
              id={`th_diem_du_lichkp`}
              value={`th_diem_du_lichkp`}
              style={{
                marginRight: 8,
              }}
              onClick={btDiaDiemDuLich}
              defaultChecked={true}
            />
            <div
              style={{
                width: 20,
                height: 20,
                backgroundColor: "#FF5733",
                marginRight: 8,
                borderRadius: 10,
              }}
            ></div>
            <label
              htmlFor={`th_diem_du_lichkp`}
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
              name={`th_diem_du_lichls`}
              id={`th_diem_du_lichls`}
              value={`th_diem_du_lichls`}
              style={{
                marginRight: 8,
              }}
              onClick={btDiaDiemDuLich}
              defaultChecked={true}
            />
            <div
              style={{
                width: 20,
                height: 20,
                backgroundColor: "#33FF57",
                marginRight: 8,
                borderRadius: 10,
              }}
            ></div>
            <label
              htmlFor={`th_diem_du_lichls`}
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
              name={`th_diem_du_lichtn`}
              id={`th_diem_du_lichtn`}
              value={`th_diem_du_lichtn`}
              style={{
                marginRight: 8,
              }}
              onClick={btDiaDiemDuLich}
              defaultChecked={true}
            />
            <div
              style={{
                width: 20,
                height: 20,
                backgroundColor: "#3357FF",
                marginRight: 8,
                borderRadius: 10,
              }}
            ></div>
            <label
              htmlFor={`th_diem_du_lichtn`}
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
              name={`th_diem_du_lichdg`}
              id={`th_diem_du_lichdg`}
              value={`th_diem_du_lichdg`}
              style={{
                marginRight: 8,
              }}
              onClick={btDiaDiemDuLich}
              defaultChecked={true}
            />
            <div
              style={{
                width: 20,
                height: 20,
                backgroundColor: "#FF33A1",
                marginRight: 8,
                borderRadius: 10,
              }}
            ></div>
            <label
              htmlFor={`th_diem_du_lichdg`}
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
              name={`th_diem_du_lichcq`}
              id={`th_diem_du_lichcq`}
              value={`th_diem_du_lichcq`}
              style={{
                marginRight: 8,
              }}
              onClick={btDiaDiemDuLich}
              defaultChecked={true}
            />
            <div
              style={{
                width: 20,
                height: 20,
                backgroundColor: "#FFC300",
                marginRight: 8,
                borderRadius: 10,
              }}
            ></div>
            <label
              htmlFor={`th_diem_du_lichcq`}
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
              name={`th_diem_du_lichkt`}
              id={`th_diem_du_lichkt`}
              value={`th_diem_du_lichkt`}
              style={{
                marginRight: 8,
              }}
              onClick={btDiaDiemDuLich}
              defaultChecked={true}
            />
            <div
              style={{
                width: 20,
                height: 20,
                backgroundColor: "#DAF7A6",
                marginRight: 8,
                borderRadius: 10,
              }}
            ></div>
            <label
              htmlFor={`th_diem_du_lichkt`}
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
              name={`th_diem_du_lichnk`}
              id={`th_diem_du_lichnk`}
              value={`th_diem_du_lichnk`}
              style={{
                marginRight: 8,
              }}
              onClick={btDiaDiemDuLich}
              defaultChecked={true}
            />
            <div
              style={{
                width: 20,
                height: 20,
                backgroundColor: "#900C3F",
                marginRight: 8,
                borderRadius: 10,
              }}
            ></div>
            <label
              htmlFor={`th_diem_du_lichnk`}
              style={{
                margin: 0,
              }}
            >
              Nguồn nước khoáng nóng
            </label>
          </div>
        </div>
      </section>
      {/* BreadCrumb Ends */}
    </>
  );
};

export default TongHopDiemDiLich;
