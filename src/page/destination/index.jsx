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

let timeout
const ListDestination = () => {
    const [listDiaDiem, setListDiaDiem] = useState([]);
    const [pagination, setPagination] = useState({});
    const [totalItem, setTotalItem] = useState();
    const [pageSize, setPageSize] = useState(Constants.PaginationConfigs.Size);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const onGetListDiemDenAsync = async ({ keyWord = "", limit = pageSize, page = 1 }) => {
        const response = await api.getAllDiaDiem(
            `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Location.value}&${Constants.Params.limit}=${limit}`,
            setLoading
        )
        setListDiaDiem(response.data.diaDiems);
        setPagination(response.data.pagination);
        setTotalItem(response.data.totalItems);
    }

    const onSearch = async (keyWord = "", limit = pageSize, page = 1) => {
        onGetListDiemDenAsync({ keyWord: keyWord, limit: limit, page: page })
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
        // navigate(`${(ROUTE_PATH.VIEW_DESTINATION).replace(`${Constants.UseParams.Id}`, "")}${id}`);
        navigate(`${(ROUTE_PATH.VIEW_DESTINATION)}?${id}`)
    }

    return (
        <MainLayout>
            <LoadingFullPage loading={loading} />
            <BreadcumbCommon title={"Điểm du lịch"} breadcumb={"Trang chủ"} />

            <section class="blog trending destination-b">
                <div>
                    <SearchBarCommon value={searchText} onChange={onChangeSearchText} />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-xs-12">
                            <div class="trend-box">

                                <div class="row">
                                    {
                                        listDiaDiem.map((it, index) => {
                                            return (
                                                <div class="col-lg-4 col-md-6 col-xs-12 mb-4" key={index}>
                                                    <div class="trend-item">
                                                        <div class="trend-image">
                                                            <img src={it.hinhAnh} alt="image" height={255} />
                                                        </div>
                                                        <div class="trend-content-main">
                                                            <div class="trend-content ">
                                                                <h4 className='text-truncate-1'><a onClick={() => onNavigate(it.idDiaDiem)}>{it.tenDiaDiem} </a></h4>
                                                                <div className='d-flex justify-content-between'>
                                                                    <div class="mb-0 pink">
                                                                        <i class="fa fa-map-marker mr-2"></i>{it.diaChi.replace(', Bạc Liêu', '')} </div>
                                                                    <div class="mb-0 pink">
                                                                        <i class="fa fa-eye mb-1"></i> {it.luotXem}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="trend-last-main">
                                                                <p class="mb-0 trend-para">{it.moTa.length > 75 ? it.moTa.slice(0, 75) + ' ...' : it.moTa} </p>
                                                                <div class="trend-last d-flex align-items-center justify-content-between bg-navy">
                                                                    <p class="mb-0 white"><i class="fa fa-clock-o mr-2" aria-hidden="true"></i>{(it.gioMoCua)} - {(it.gioDongCua)} </p>
                                                                    <div class="trend-price">
                                                                        <p class="price white mb-0"><span>{it.giaVe}</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                    <div class="col-lg-12">
                                        <div class="text-center">
                                            <a onClick={showMore} class="nir-btn white">Xem thêm <i class="fa fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout >
    )
}

export default ListDestination