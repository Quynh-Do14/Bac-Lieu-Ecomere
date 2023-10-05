import { Endpoint } from "../../core/common/appRouter";
// import request from "./makeRequest";
import * as apiLinks from "../../core/common/apiLinks";
import requestDuong from "./makeRequestDuong";

const api = {
  login: (data, setLoading) =>
    requestDuong.login(
      `${apiLinks.API}${Endpoint.Auth.Login}`,
      data,
      setLoading
    ),
  upload: (data, setLoading) =>
    requestDuong.postUploadFile(
      `${apiLinks.API}${Endpoint.Module.Upload}`,
      data,
      setLoading
    ),

  ////// map
  getDiaDiemGeometry: (params) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.DiaDiem}/geometry?${params}`
    ),
  getDanhMucConCuaDanhMuc: (params) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.DiaDiem}/getDanhMucConCuaDanhMuc?${params}`
    ),
  //////
  //////
  getDanhMucConCuaDanhMuc: (params) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.DiaDiem} / getDanhMucConCuaDanhMuc ? ${params}`
    ),
  //////
  getAllDiaDiem: (params, setLoading) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.DiaDiem}/${params}`,
      setLoading
    ),
  getDiaDiemById: (params, setLoading) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.DiaDiem}/${params}`,
      setLoading
    ),
  ///////

  //////
  getAllTinTuc: (params, setLoading) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.TinTuc}/${params}`,
      setLoading
    ),
  getTinTucById: (params, setLoading) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.TinTuc}/${params.id}`,
      setLoading
    ),
  ///////
};
export default api;
