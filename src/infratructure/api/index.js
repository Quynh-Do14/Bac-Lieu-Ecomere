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
  /////
  getAllTour: (params, setLoading) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.Tour}?${params}`,
      setLoading
    ),
  getTourById: (params, setLoading) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.Tour}/${params.id}`,
      setLoading
    ),
  createTour: (data, callBack, setLoading) => {
    requestDuong.post(
      `${apiLinks.API}${Endpoint.Module.Tour}`,
      data,
      callBack,
      setLoading
    );
  },
  updateTour: (data, callBack, setLoading) => {
    requestDuong.put(
      `${apiLinks.API}${Endpoint.Module.Tour}/${data.id}`,
      data,
      callBack,
      setLoading
    );
  },
  deleteTour: (data, callBack, setLoading) => {
    requestDuong.delete(
      `${apiLinks.API}${Endpoint.Module.Tour}/${data.id}`,
      data,
      callBack,
      setLoading
    );
  },
  /////

  /////
  getAllUser: (params, setLoading) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.User}?${params}`,
      setLoading
    ),
  getUserById: (params, setLoading) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.User}/${params.id}`,
      setLoading
    ),
  createUser: (data, callBack, setLoading) => {
    requestDuong.post(
      `${apiLinks.API}${Endpoint.Module.User}`,
      data,
      callBack,
      setLoading
    );
  },
  updateUser: (data, callBack, setLoading) => {
    requestDuong.put(
      `${apiLinks.API}${Endpoint.Module.User}/${data.id}`,
      data,
      callBack,
      setLoading
    );
  },
  deleteUser: (data, callBack, setLoading) => {
    requestDuong.delete(
      `${apiLinks.API}${Endpoint.Module.User}/${data.id}`,
      data,
      callBack,
      setLoading
    );
  },
  /////

  /////
  getAllCategory: (params, setLoading) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.Category}?${params}`,
      setLoading
    ),

  getAllCategoryByParentId: (params, setLoading) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.CategoryByParentId}?${params}`,
      setLoading
    ),

  getCategoryById: (params, setLoading) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.Category}/${params.id}`,
      setLoading
    ),
  createCategory: (data, callBack, setLoading) => {
    requestDuong.post(
      `${apiLinks.API}${Endpoint.Module.Category}`,
      data,
      callBack,
      setLoading
    );
  },
  updateCategory: (data, callBack, setLoading) => {
    requestDuong.put(
      `${apiLinks.API}${Endpoint.Module.Category}/${data.id}`,
      data,
      callBack,
      setLoading
    );
  },
  deleteCategory: (data, callBack, setLoading) => {
    requestDuong.delete(
      `${apiLinks.API}${Endpoint.Module.Category}/${data.id}`,
      data,
      callBack,
      setLoading
    );
  },
  /////

  /////
  getAllLocation: (params, setLoading) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.Location}?${params}`,
      setLoading
    ),
  getLocationById: (params, setLoading) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.Location}/${params.id}`,
      setLoading
    ),
  createLocation: (data, callBack, setLoading) => {
    requestDuong.postUploadFile(
      `${apiLinks.API}${Endpoint.Module.Location}`,
      data,
      callBack,
      setLoading
    );
  },
  updateLocation: (id, data, callBack, setLoading) => {
    requestDuong.putUploadFile(
      `${apiLinks.API}${Endpoint.Module.Location}/${id}`,
      data,
      callBack,
      setLoading
    );
  },
  deleteLocation: (data, callBack, setLoading) => {
    requestDuong.delete(
      `${apiLinks.API}${Endpoint.Module.Location}/${data.id}`,
      data,
      callBack,
      setLoading
    );
  },
  /////

  /////
  getAllDistrict: (params, setLoading) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.District}?${params}`,
      setLoading
    ),
  getDistrictById: (params, setLoading) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.District}/${params.id}`,
      setLoading
    ),
  createDistrict: (data, callBack, setLoading) => {
    requestDuong.post(
      `${apiLinks.API}${Endpoint.Module.District}`,
      data,
      callBack,
      setLoading
    );
  },
  updateDistrict: (data, callBack, setLoading) => {
    requestDuong.put(
      `${apiLinks.API}${Endpoint.Module.District}/${data.id}`,
      data,
      callBack,
      setLoading
    );
  },
  deleteDistrict: (data, callBack, setLoading) => {
    requestDuong.delete(
      `${apiLinks.API}${Endpoint.Module.District}/${data.id}`,
      data,
      callBack,
      setLoading
    );
  },
  /////

  /////
  getAllEvaluate: (params, setLoading) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.Evaluate}?${params}`,
      setLoading
    ),
  getEvaluateById: (params, setLoading) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.Evaluate}/${params.id}`,
      setLoading
    ),
  createEvaluate: (data, callBack, setLoading) => {
    requestDuong.post(
      `${apiLinks.API}${Endpoint.Module.Evaluate}`,
      data,
      callBack,
      setLoading
    );
  },
  updateEvaluate: (data, callBack, setLoading) => {
    requestDuong.put(
      `${apiLinks.API}${Endpoint.Module.Evaluate}/${data.id}`,
      data,
      callBack,
      setLoading
    );
  },
  deleteEvaluate: (data, callBack, setLoading) => {
    requestDuong.delete(
      `${apiLinks.API}${Endpoint.Module.Evaluate}/${data.id}`,
      data,
      callBack,
      setLoading
    );
  },
  /////

  /////
  getAllNews: (params, setLoading) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.News}?${params}`,
      setLoading
    ),
  getNewsById: (params, setLoading) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.News}/${params.id}`,
      setLoading
    ),
  createNews: (data, callBack, setLoading) => {
    requestDuong.postUploadFile(
      `${apiLinks.API}${Endpoint.Module.News}`,
      data,
      callBack,
      setLoading
    );
  },
  updateNews: (id, data, callBack, setLoading) => {
    requestDuong.putUploadFile(
      `${apiLinks.API}${Endpoint.Module.News}/${id}`,
      data,
      callBack,
      setLoading
    );
  },
  deleteNews: (data, callBack, setLoading) => {
    requestDuong.delete(
      `${apiLinks.API}${Endpoint.Module.News}/${data.id}`,
      data,
      callBack,
      setLoading
    );
  },
  /////

  ////// map
  getDiaDiemGeometry: (params) =>
    requestDuong.get(
      `${apiLinks.API}${Endpoint.Module.DiaDiem}/geometry?${params}`
    ),
  //////
};
export default api;
