import { Endpoint } from "../../core/common/appRouter";
// import request from "./makeRequest";
import * as apiLinks from "../../core/common/apiLinks";
import requestDuong from "./makeRequestDuong";
import request from "./makeRequest";

const api = {
  login: (data, setLoading) =>
    request.login(
      `${apiLinks.API}${Endpoint.Auth.Login}`,
      data,
      setLoading
    ),

  register: (data, setLoading) =>
    request.login(
      `${apiLinks.API}${Endpoint.Auth.Register}`,
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
  getAllDiaDiem: (params, setLoading) =>
    request.get(
      `${apiLinks.API}${Endpoint.Module.DiaDiem}/${params}`,
      setLoading
    ),
  getDiaDiemById: (params, setLoading) =>
    request.get(
      `${apiLinks.API}${Endpoint.Module.DiaDiem}/${params}`,
      setLoading
    ),

  danhGiaDiaDiem: (data, callBack, setLoading) => {
    request.post(`${apiLinks.API}${Endpoint.Module.Evaluate}/diadiem`, data, callBack, setLoading)
  },
  getAllDanhGiaDiaDiem: (params, setLoading) =>
    request.get(
      `${apiLinks.API}${Endpoint.Module.Evaluate}?${params}`,
      setLoading
    ),
  ///////

  //////
  getAllTinTuc: (params, setLoading) =>
    request.get(
      `${apiLinks.API}${Endpoint.Module.TinTuc}/${params}`,
      setLoading
    ),
  getTinTucById: (params, setLoading) =>
    request.get(
      `${apiLinks.API}${Endpoint.Module.TinTuc}/${params.id}`,
      setLoading
    ),
  ///////
  getAllQuanHuyen: (params) =>
    requestDuong.get(`${apiLinks.API}${Endpoint.Module.District}`),
};
export default api;
