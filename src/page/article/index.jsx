import React, { useEffect, useState } from "react";
import MainLayout from "../../infratructure/common/layout/main-layout";
import BreadcumbCommon from "../../infratructure/common/layout/breadcumb";
import { ROUTE_PATH } from "../../core/common/appRouter";
import LoadingFullPage from "../../infratructure/common/controls/loading";
import Constants from "../../core/common/constant";
import api from "../../infratructure/api";
import {
  convertDateOnly,
  convertTimeOnly,
  showImageCommon,
} from "../../infratructure/utils/helper";
import { useNavigate } from "react-router-dom";
import SearchBar from "./search";
let timeout;
const ListArticle = () => {
  const [listTinTuc, setListTinTuc] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [pagination, setPagination] = useState({});
  const [totalItem, setTotalItem] = useState();
  const [pageSize, setPageSize] = useState(Constants.PaginationConfigs.Size);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const onGetListTinTucAsync = async ({ searchText = "", limit = pageSize, page = 1 }) => {
    const response = await api.getAllTinTuc(
      `loaitin?type=1${searchText ? searchText != "" ? `&search=${searchText}` : `` : ``}&limit=${limit}&page=${page}`,
      setLoading
    );
    setListTinTuc(response.data.tinTucs);
    setPagination(response.data.pagination);
    setTotalItem(response.data.totalItems);
  };
  const onSearch = async (searchText = "", limit = pageSize, page = 1) => {
    onGetListTinTucAsync({ searchText: searchText, limit: limit, page: page });
  };
  useEffect(() => {
    onSearch().then((_) => { });
  }, []);

  const onChangeSearchText = (e) => {
    setSearchText(e.target.value);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      onSearch(e.target.value, pageSize, page).then((_) => { });
    }, Constants.DEBOUNCE_SEARCH);
  };
  const showMore = (prev) => {
    setPageSize(prev + Constants.Params.limit);
    onSearch(searchText, prev + Constants.Params.limit, page).then((_) => { });
  };

  const onNavigate = (id) => {
    // navigate(`${(ROUTE_PATH.VIEW_DESTINATION).replace(`${Constants.UseParams.Id}`, "")}${id}`);
    navigate(`${ROUTE_PATH.VIEW_ARTICLE}?${id}`);
  };

  return (
    <MainLayout>
      <LoadingFullPage loading={loading} />
      <BreadcumbCommon title={"Bài viết"} breadcumb={"Trang chủ"} />
      <section className="blog trending destination-b">
        <div>
          <SearchBar value={searchText} onChange={onChangeSearchText} onSearch={onSearch} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xs-12">
              <div className="trend-box">
                <div className="row">
                  {listTinTuc.map((it, index) => {
                    return (
                      <div className="col-lg-4 col-md-6 col-xs-12 mb-4" key={index}>
                        <div className="trend-item">
                          <div className="trend-image">
                            <img
                              src={showImageCommon(it.hinhAnh)}
                              alt="image"
                              height={255}
                            />
                          </div>
                          <div className="trend-content-main">
                            <div className="trend-content">
                              <h4>
                                <a
                                  className="text-truncate-2"
                                  onClick={() => onNavigate(it.idTinTuc)}
                                >
                                  {it.tieuDe}{" "}
                                </a>
                              </h4>
                              <div className="d-flex justify-content-between">
                                <div className="mb-0 pink">
                                  <i className="fa fa-map-marker mr-2"></i>
                                  {it.diaChi.replace(', Bạc Liêu', '')}{" "}
                                </div>
                                <div className="mb-0 pink">
                                  <i className="fa fa-eye mb-1 mr-1"></i>{" "}
                                  {it.luotXem}
                                </div>
                              </div>
                            </div>
                            <div className="trend-last-main">
                              <p
                                className="mb-0 trend-para"
                                style={{ minHeight: 73 }}
                              >
                                {it.tieuDeCon.length > 75
                                  ? it.tieuDeCon.slice(0, 75) + " ..."
                                  : it.tieuDeCon}{" "}
                              </p>
                              <div className="trend-last d-flex align-items-center justify-content-between bg-navy">
                                <p className="mb-0 white">
                                  <i
                                    className="fa fa-clock-o mr-2"
                                    aria-hidden="true"
                                  ></i>
                                  {convertDateOnly(it.ngayDang)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="col-lg-12">
                    {
                      listTinTuc.length
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

export default ListArticle;
