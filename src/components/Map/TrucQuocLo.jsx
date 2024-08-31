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

const TrucQuocLo = () => {
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
      zoom: 11,
      center: [105.528027, 9.286577],
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

      map.addSource("cumtainguyendulich2_polyline", {
        type: "geojson",
        data: `http://103.130.212.145:42319/api/diadiem/dataGeoJson/dataGeoJson/dataGeoJson?tenbang=cumtainguyendulich2_polyline`,
      });

      map.addLayer({
        id: "cumtainguyendulich2_polyline",
        type: "line",
        source: "cumtainguyendulich2_polyline",
        layout: {},
        paint: {
          "line-color": "#7239ea",
          "line-width": 3,
        },
      });

      map.addSource("Tuyendulich_2_polyline", {
        type: "geojson",
        data: `http://103.130.212.145:42319/api/diadiem/dataGeoJson/dataGeoJson/dataGeoJson?tenbang=Tuyendulich_2_polyline`,
      });

      map.addLayer({
        id: "Tuyendulich_2_polyline",
        type: "line",
        source: "Tuyendulich_2_polyline",
        layout: {},
        paint: {
          "line-color": "#071437",
          "line-width": 3,
        },
      });

      map.addSource("Diemtndl2_point", {
        type: "geojson",
        data: `http://103.130.212.145:42319/api/diadiem/dataGeoJson/dataGeoJson/dataGeoJson?tenbang=Diemtndl2_point`,
      });

      map.addLayer({
        id: "Diemtndl2_point",
        type: "circle",
        source: "Diemtndl2_point",
        layout: {},
        paint: {
          "circle-color": "#ff6f1e",
          "circle-radius": 9,
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
              name={`cumtainguyendulich2_polyline`}
              id={`cumtainguyendulich2_polyline`}
              value={`cumtainguyendulich2_polyline`}
              style={{
                marginRight: 8,
              }}
              onClick={btDiaDiemDuLich}
              defaultChecked={true}
            />
            <div
              style={{
                height: 20,
                width: 20,
                border: "2px solid #7239ea",
                marginRight: 8,
              }}
            ></div>
            <label
              htmlFor={`cumtainguyendulich2_polyline`}
              style={{
                margin: 0,
              }}
            >
              Cụm tài nguyên du lịch
            </label>
          </div>
          <div
            className="d-flex align-items-center"
            style={{ padding: "8px 12px" }}
          >
            <input
              type="checkbox"
              name={`Tuyendulich_2_polyline`}
              id={`Tuyendulich_2_polyline`}
              value={`Tuyendulich_2_polyline`}
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
              htmlFor={`Tuyendulich_2_polyline`}
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
              name={`Diemtndl2_point`}
              id={`Diemtndl2_point`}
              value={`Diemtndl2_point`}
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
                backgroundColor: "#ff6f1e",
                marginRight: 8,
                borderRadius: 10,
              }}
            ></div>
            <label
              htmlFor={`Diemtndl2_point`}
              style={{
                margin: 0,
              }}
            >
              Điểm TNDL
            </label>
          </div>
        </div>
      </section>
      {/* BreadCrumb Ends */}
    </>
  );
};

export default TrucQuocLo;
