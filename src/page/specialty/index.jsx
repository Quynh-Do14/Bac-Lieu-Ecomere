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
import SearchCommon from "../../infratructure/common/controls/search-common";
import SearchBar from "./search";
let timeout;
const ListSpecialty = () => {
  const [listDacSan, setListDacSan] = useState([]);
  const [pagination, setPagination] = useState({});
  const [totalItem, setTotalItem] = useState();
  const [pageSize, setPageSize] = useState(Constants.PaginationConfigs.Size);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [qH, setQH] = useState("");
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const onGetListDacSanAsync = async ({
    searchText = "",
    limit = pageSize,
    page = 1,
    qH = "",
  }) => {
    const response = await api.getAllDiaDiem(
      `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Specialty.value}&${Constants.Params.limit}=${limit}&${Constants.Params.page}=${page}&idQuanHuyen=${qH}&searchDiaChi=${searchText}`,
      setLoading
    );
    setListDacSan(response.data.diaDiems);
    setPagination(response.data.pagination);
    setTotalItem(response.data.totalItems);
  };

  const onSearch = async (
    searchText = "",
    limit = pageSize,
    page = 1,
    qH = ""
  ) => {
    onGetListDacSanAsync({
      searchText: searchText,
      limit: limit,
      page: page,
      qH: qH,
    });
  };
  useEffect(() => {
    onSearch().then((_) => {});
  }, []);

  const onChangeSearchText = (e) => {
    setSearchText(e.target.value);
    timeout = setTimeout(() => {
      onSearch(e.target.value, pageSize, page, qH).then((_) => {});
    }, Constants.DEBOUNCE_SEARCH);
  };

  const OnChangeQH = async (e) => {
    setQH(e.target.value);
    await onSearch(searchText, pageSize, page, e.target.value).then((_) => {});
  };

  const showMore = async (prev) => {
    setPageSize(prev + Constants.Params.limit);
    await onSearch(searchText, prev + Constants.Params.limit, page, qH).then(
      (_) => {}
    );
  };

  const onNavigate = (id) => {
    navigate(`${ROUTE_PATH.VIEW_SPECIALTY}?${id}`);
  };
  return (
    <MainLayout>
      <LoadingFullPage loading={loading} />
      <BreadcumbCommon title={"Đặc sản"} breadcumb={"Trang chủ"} />
      <section className="blog destination-b pb-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xs-12 mb-4">
              <div className="trend-box">
                {listDacSan.map((it, index) => {
                  return (
                    <div
                      className="blog-full d-flex justify-content-around mb-4 pointer"
                      key={index}
                      onClick={() => onNavigate(it.idDiaDiem)}
                    >
                      <div className="row w-100">
                        <div className="col-lg-5 col-md-4 col-xs-12 blog-height">
                          <div className="blog-image">
                            <img
                              src={showImageCommon(it.hinhAnh)}
                              alt="image"
                              height={255}
                            />
                          </div>
                        </div>
                        <div className="col-lg-7 col-md-8 col-xs-12">
                          <div className="blog-content p-0">
                            <h4 className="mb-1">
                              <a className="">{it.tenDiaDiem} </a>
                            </h4>
                            <div className="trend-tags">
                              <a href={ROUTE_PATH.VIEW_SPECIALTY}>
                                <i className="fa fa-heart"></i>
                              </a>
                            </div>

                            <p className="mb-2 pink">
                              <i className="fa fa-eye mr-1"></i> {it.luotXem}{" "}
                              <i className="fa fa-map-marker mr-1 ml-3"></i>{" "}
                              {it.diaChi}
                            </p>
                            <p className="mb-2 border-t pt-2">
                              {it.moTa.length > 200
                                ? it.moTa.slice(0, 200) + " ..."
                                : it.moTa}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {listDacSan.length ? (
                  <div className="text-center">
                    <a onClick={showMore} className="nir-btn white">
                      Xem thêm <i className="fa fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                ) : (
                  <div className="text-center">Không có kết quả nào </div>
                )}
              </div>
            </div>
            <div className="col-lg-4 col-xs-12 mb-4">
              <SearchBar
                title={"Đặc sản"}
                onChangeSearchText={onChangeSearchText}
                qH={qH}
                OnChangeQH={OnChangeQH}
                onSearch={onSearch}
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ListSpecialty;
