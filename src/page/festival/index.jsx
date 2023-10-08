import React, { useEffect, useState } from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import BreadcumbCommon from '../../infratructure/common/layout/breadcumb'
import { ROUTE_PATH } from '../../core/common/appRouter'
import LoadingFullPage from '../../infratructure/common/controls/loading'
import SearchCommon from '../../infratructure/common/controls/search-common'
import RelationCommon from '../../infratructure/common/layout/relation'
import { useNavigate } from 'react-router-dom'
import Constants from '../../core/common/constant'
import { showImageCommon } from '../../infratructure/utils/helper'
import api from '../../infratructure/api'
import SearchBar from './search'
let timeout
const ListFestival = () => {
    const [listLeHoi, setListLeHoi] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [pagination, setPagination] = useState({});
    const [totalItem, setTotalItem] = useState();
    const [pageSize, setPageSize] = useState(Constants.PaginationConfigs.Size);
    const [page, setPage] = useState(1);

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");


    const navigate = useNavigate();

    const onGetListLeHoiAsync = async () => {
        const response = await api.getAllDiaDiem(
            `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Festival.value}&${Constants.Params.page}=${page}&startDate=${startDate}&endDate=${endDate}&search=${searchText}`,
            setLoading
        )
        setListLeHoi(response.data.diaDiems);
        setPagination(response.data.pagination);
        setTotalItem(response.data.totalItems);
    }
    const onSearch = async () => {
        onGetListLeHoiAsync()
    }
    console.log('startDate', startDate);
    useEffect(() => {
        onGetListLeHoiAsync()
    }, []);

    const onChangeSearchText = (e) => {
        setSearchText(e.target.value);
        // clearTimeout(timeout);
        // timeout = setTimeout(() => {
        //     onGetListLeHoiAsync(e.target.value, pageSize, page, startDate, endDate).then((_) => { });
        // }, Constants.DEBOUNCE_SEARCH);
    };
    const onChangeStartDate = (e) => {
        setStartDate(e.target.value);
        // onGetListLeHoiAsync(searchText, pageSize, page, e.target.value, endDate).then((_) => { });
    }

    const onChangeEndDate = (e) => {
        setEndDate(e.target.value);
        // onGetListLeHoiAsync(searchText, pageSize, page, startDate, e.target.value).then((_) => { });
    }
    const showMore = (prev) => {
        // onGetListLeHoiAsync(searchText, pageSize, prev + 1, startDate, endDate).then((_) => { });
    };

    const onNavigate = (id) => {
        // navigate(`${(ROUTE_PATH.VIEW_DESTINATION).replace(`${Constants.UseParams.Id}`, "")}${id}`);
        navigate(`${(ROUTE_PATH.VIEW_FESTIVAL)}?${id}`)
    }

    return (
        <MainLayout>
            <BreadcumbCommon title={"Lễ hội"} breadcumb={"Trang chủ"} />
            <section className="blog destination-b pb-6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-xs-12 mb-4">
                            <div className="trend-box">
                                <div className="list-results d-flex align-items-center justify-content-between">
                                    <div className="list-results-sort">
                                        <p className="m-0">Hiển thị {totalItem} kết quả</p>
                                    </div>
                                    <div className="click-menu d-flex align-items-center justify-content-between">
                                        <div className="change-list f-active mr-2"><a href="#"><i className="fa fa-bars"></i></a></div>
                                    </div>
                                </div>
                                {
                                    listLeHoi.map((it, index) => {
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
                                                            <p className="mb-2 pink"><i className="fa fa-eye mr-1"></i> {it.luotXem} <i className="fa fa-map-marker mr-1 ml-3"></i> {it.diaChi}</p>
                                                            <p className="mb-2 border-t pt-2">{it.moTa.length > 200 ? it.moTa.slice(0, 200) + ' ...' : it.moTa} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                {
                                    listLeHoi.length
                                        ?
                                        <div className="text-center">
                                            <a onClick={showMore} class="nir-btn white">Xem thêm <i class="fa fa-long-arrow-alt-right"></i></a>
                                        </div>
                                        :
                                        <div className="text-center">Không có kết quả nào </div>
                                }
                            </div>
                        </div>
                        <div className="col-lg-4 col-xs-12 mb-4">
                            <SearchBar
                                title={"lễ hội"}
                                searchText={searchText}
                                onChangeSearchText={onChangeSearchText}
                                startDate={startDate}
                                onChangeStartDate={onChangeStartDate}
                                endDate={endDate}
                                onChangeEndDate={onChangeEndDate}
                                onSearch={() => onSearch()}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <LoadingFullPage loading={loading} />
        </MainLayout>
    )
}

export default ListFestival