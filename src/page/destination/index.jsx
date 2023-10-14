import React, { useEffect, useState } from "react";
import MainLayout from "../../infratructure/common/layout/main-layout";
import BreadcumbCommon from "../../infratructure/common/layout/breadcumb";
import { ROUTE_PATH } from "../../core/common/appRouter";
import LoadingFullPage from "../../infratructure/common/controls/loading";
import Constants from "../../core/common/constant";
import api from "../../infratructure/api";
import {
  convertTimeOnly,
  showImageCommon,
} from "../../infratructure/utils/helper";
import SearchBarCommon from "../../infratructure/common/controls/search-bar";
import { useNavigate } from "react-router-dom";

let timeout;
const ListDestination = () => {
  const [listDiaDiem, setListDiaDiem] = useState([]);
  const [dsQuanHuyen, setDsQuanHuyen] = useState([]);
  const [dsDanhMucDiaDiem, setDsDanhMucDiaDiem] = useState([]);

  const [pagination, setPagination] = useState({});
  const [totalItem, setTotalItem] = useState();
  const [pageSize, setPageSize] = useState(Constants.PaginationConfigs.Size);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchQuanHuyen, setSearchQuanHuyen] = useState("");
  const [searchDanhMuc, setSearchDanhMuc] = useState(Constants.CategoryConfig.Location.value);

  const navigate = useNavigate();

  const onGetListDiemDenAsync = async ({ searchText = "", limit = pageSize, page = 1, danhMuc = 1, quanhuyen = "" }) => {
    const response = await api.getAllDiaDiem(
      `dichvu/top?${Constants.Params.limit}=${limit}&${Constants.Params.page}=${page}&idQuanHuyen=${quanhuyen}&search=${searchText}&idDanhMuc=${danhMuc}`,
      setLoading
    )
    setListDiaDiem(response.data.diaDiems);
    setPagination(response.data.pagination);
    setTotalItem(response.data.totalItems);
  }

  const onGetQuanHuyenAsync = async () => {
    const response = await api.getAllQuanHuyen();
    const resGetDanhMucConCuaDanhMuc = await api.getDanhMucConCuaDanhMuc(
      `idDanhMuc=${1}`
    );
    setDsQuanHuyen(response.data.quanHuyens);
    setDsDanhMucDiaDiem(resGetDanhMucConCuaDanhMuc.result);
  };

  const onSearch = async (keyWord = "", limit = pageSize, page = 1, danhMuc = 1, quanhuyen = "") => {
    onGetListDiemDenAsync({ keyWord: keyWord, limit: limit, page: page, danhMuc: danhMuc, quanhuyen: quanhuyen });
  };
  useEffect(() => {
    onSearch().then((_) => { });
    onGetQuanHuyenAsync().then((_) => { });
  }, []);

  const onChangeSearchText = (e) => {
    setSearchText(e.target.value);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      onSearch(e.target.value, pageSize, page, searchDanhMuc, searchQuanHuyen).then((_) => { });
    }, Constants.DEBOUNCE_SEARCH);
  };
  const showMore = (prev) => {
    setPageSize(prev + Constants.Params.limit);
    onSearch(searchText, prev + Constants.Params.limit, page, searchDanhMuc, searchQuanHuyen).then((_) => { });
  };

  const onNavigate = (id) => {
    // navigate(`${(ROUTE_PATH.VIEW_DESTINATION).replace(`${Constants.UseParams.Id}`, "")}${id}`);
    navigate(`${ROUTE_PATH.VIEW_DESTINATION}?${id}`);
  };

  const onSelectDanhMuc = (e) => {
    setSearchDanhMuc(e.target.value)
    onSearch(searchText, pageSize, page, e.target.value, searchQuanHuyen).then((_) => { });
  }

  const onSelectQuanHuyen = (e) => {
    setSearchQuanHuyen(e.target.value)
    onSearch(searchText, pageSize, page, searchDanhMuc, e.target.value).then((_) => { });
  }
  // const searchSelect = async (keyWord, quanhuyen, danhmuc) => {
  //   console.log(keyWord, quanhuyen, danhmuc);
  //   const response = await api.getAllDiaDiem(
  //     `dichvu/top?idDanhMuc=${danhmuc != "" ? danhmuc : 1}&${Constants.Params.limit
  //     }=${1000}${keyWord ? (keyWord != "" ? `&search=${keyWord}` : ``) : ``}${quanhuyen != "" ? `&idQuanHuyen=${quanhuyen}` : ``
  //     }`,
  //     setLoading
  //   );
  //   setListDiaDiem(response.data.diaDiems);
  //   setPagination(response.data.pagination);
  //   setTotalItem(response.data.totalItems);
  // };

  return (
    <MainLayout>
      <LoadingFullPage loading={loading} />
      <BreadcumbCommon title={"Điểm du lịch"} breadcumb={"Trang chủ"} />

      <section className="blog trending destination-b">
        <div>
          <SearchBarCommon
            value={searchText}
            onChange={onChangeSearchText}
            dsQuanHuyen={dsQuanHuyen}
            dsDanhMucDiaDiem={dsDanhMucDiaDiem}
            onSelectDanhMuc={onSelectDanhMuc}
            onSelectQuanHuyen={onSelectQuanHuyen}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xs-12">
              <div className="trend-box">
                <div className="row">
                  {listDiaDiem.map((it, index) => {
                    return (
                      <div className="col-lg-4 col-md-6 col-xs-12 mb-4 pointer" key={index}
                        onClick={() => onNavigate(it.idDiaDiem)}
                      >
                        <div className="trend-item">
                          <div className="trend-image">
                            <img src={it.hinhAnh} alt="image" height={255} />
                          </div>
                          <div className="trend-content-main">
                            <div className="trend-content ">
                              <h4 className="text-truncate-1">
                                <a>
                                  {it.tenDiaDiem}{" "}
                                </a>
                              </h4>
                              <div className="d-flex justify-content-between">
                                <div className="mb-0 pink">
                                  <i className="fa fa-map-marker mr-2"></i>
                                  {it.diaChi.replace(", Bạc Liêu", "")}{" "}
                                </div>
                                <div className="mb-0 pink">
                                  <i className="fa fa-eye mb-1"></i> {it.luotXem}
                                </div>
                              </div>
                            </div>
                            <div className="trend-last-main">
                              <p className="mb-0 trend-para">
                                {it.moTa.length > 75
                                  ? it.moTa.slice(0, 75) + " ..."
                                  : it.moTa}{" "}
                              </p>
                              <div className="trend-last d-flex align-items-center justify-content-between bg-navy">
                                <p className="mb-0 white">
                                  <i
                                    className="fa fa-clock-o mr-2"
                                    aria-hidden="true"
                                  ></i>
                                  {it.gioMoCua} - {it.gioDongCua}{" "}
                                </p>
                                <div className="trend-price">
                                  <p className="price white mb-0">
                                    <span>{it.giaVe}</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="col-lg-12">
                    {
                      listDiaDiem.length
                        ?
                        <div className="text-center">
                          <a onClick={showMore} className="nir-btn white">Xem thêm <i className="fa fa-long-arrow-alt-right"></i></a>
                        </div>
                        :
                        <div className="text-center">Không có kết quả nào </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ListDestination;
