import React, { useEffect, useState } from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import BreadcumbCommon from '../../infratructure/common/layout/breadcumb'
import { ROUTE_PATH } from '../../core/common/appRouter'
import LoadingFullPage from '../../infratructure/common/controls/loading'
import Constants from '../../core/common/constant'
import api from '../../infratructure/api'
import { convertTimeOnly, showImageCommon } from '../../infratructure/utils/helper'
import SearchBarCommon from '../../infratructure/common/controls/search-bar'
import { useNavigate } from 'react-router-dom'
import SearchCommon from '../../infratructure/common/controls/search-common'
let timeout
const ListSpecialty = () => {
    const [listDacSan, setListDacSan] = useState([]);
    const [pagination, setPagination] = useState({});
    const [totalItem, setTotalItem] = useState();
    const [pageSize, setPageSize] = useState(Constants.PaginationConfigs.Size);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const onGetListDacSanAsync = async ({ keyWord = "", limit = pageSize, page = 1 }) => {
        const response = await api.getAllDiaDiem(
            `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Specialty.value}&${Constants.Params.limit}=${limit}`,
            setLoading
        )
        setListDacSan(response.data.diaDiems);
        setPagination(response.data.pagination);
        setTotalItem(response.data.totalItems);
    }

    const onSearch = async (keyWord = "", limit = pageSize, page = 1) => {
        onGetListDacSanAsync({ keyWord: keyWord, limit: limit, page: page })
    }
    useEffect(() => {
        onSearch().then(_ => { });
    }, []);

    const onChangeSearchText = (e) => {
        setSearchText(e.target.value);
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            onSearch(e.target.value, pageSize, page).then((_) => { });
        }, Constants.DEBOUNCE_SEARCH);
    };
    const showMore = (prev) => {
        onSearch(searchText, prev + Constants.Params.limit, page).then((_) => { });
    };

    const onNavigate = (id) => {
        // navigate(`${(ROUTE_PATH.VIEW_SPECIALTY).replace(`${Constants.UseParams.Id}`, "")}${id}`);
        navigate(`${(ROUTE_PATH.VIEW_SPECIALTY)}?${id}`)
    }
    return (
        <MainLayout>
            <LoadingFullPage />
            <BreadcumbCommon title={"Đặc sản"} breadcumb={"Trang chủ"} />
            <section className="blog destination-b pb-6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-xs-12 mb-4">
                            <div className="trend-box">
                                <div className="list-results d-flex align-items-center justify-content-between">
                                    <div className="list-results-sort">
                                        <p className="m-0">Showing 1-5 of 80 results</p>
                                    </div>
                                    <div className="click-menu d-flex align-items-center justify-content-between">
                                        <div className="change-list f-active mr-2"><a href="#"><i className="fa fa-bars"></i></a></div>
                                        <div className="change-grid"><a href="#"><i className="fa fa-th"></i></a></div>
                                    </div>
                                </div>
                                {
                                    listDacSan.map((it, index) => {
                                        return (
                                            <div className="blog-full d-flex justify-content-around mb-4" key={index}>
                                                <div className="row w-100">
                                                    <div className="col-lg-5 col-md-4 col-xs-12 blog-height">
                                                        <div className="blog-image">
                                                            <img src={showImageCommon(it.hinhAnh)} alt="image" height={255} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-md-8 col-xs-12">
                                                        <div className="blog-content p-0">
                                                            <h4 className="mb-1"><a onClick={() => onNavigate(it.idDiaDiem)} className="">{it.tenDiaDiem} </a></h4>
                                                            <div className="trend-tags">
                                                                <a href={ROUTE_PATH.VIEW_SPECIALTY} ><i className="fa fa-heart"></i></a>
                                                            </div>

                                                            <p className="mb-2 pink"><i className="fa fa-eye mr-1"></i> {it.luotXem} <i className="fa fa-map-marker mr-1 ml-3"></i> {it.diaChi}</p>
                                                            <p className="mb-2 border-t pt-2 text-truncate" style={{ height: "90px !important" }}>{it.moTa} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className="text-center">
                                    <a onClick={showMore} class="nir-btn white">Xem thêm <i class="fa fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xs-12 mb-4">
                            <SearchCommon title={"lễ hội"} />
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default ListSpecialty