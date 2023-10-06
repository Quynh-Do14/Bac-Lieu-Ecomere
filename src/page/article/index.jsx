import React, { useEffect, useState } from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import BreadcumbCommon from '../../infratructure/common/layout/breadcumb'
import { ROUTE_PATH } from '../../core/common/appRouter'
import LoadingFullPage from '../../infratructure/common/controls/loading'
import Constants from '../../core/common/constant'
import api from '../../infratructure/api'
import { convertDateOnly, convertTimeOnly, showImageCommon } from '../../infratructure/utils/helper'
import { useNavigate } from 'react-router-dom'
import SearchBar from './search'
let timeout
const ListArticle = () => {
    const [listTinTuc, setListTinTuc] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [pagination, setPagination] = useState({});
    const [totalItem, setTotalItem] = useState();
    const [pageSize, setPageSize] = useState(Constants.PaginationConfigs.Size);
    const [page, setPage] = useState(1);

    const navigate = useNavigate();

    const onGetListTinTucAsync = async ({ keyWord = "", limit = pageSize, page = 1 }) => {
        const response = await api.getAllTinTuc(
            `loaitin?type=1`,
            setLoading
        )
        setListTinTuc(response.data.tinTucs);
        setPagination(response.data.pagination);
        setTotalItem(response.data.totalItems);
    }
    const onSearch = async (keyWord = "", limit = pageSize, page = 1) => {
        onGetListTinTucAsync({ keyWord: keyWord, limit: limit, page: page })
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
        navigate(`${(ROUTE_PATH.VIEW_ARTICLE)}?${id}`)
    }

    return (
        <MainLayout>
            <LoadingFullPage loading={loading} />
            <BreadcumbCommon title={"Bài viết"} breadcumb={"Trang chủ"} />
            <section class="blog trending destination-b">
                <div>
                    <SearchBar value={searchText} onChange={onChangeSearchText} />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-xs-12">
                            <div class="trend-box">
                                <div class="row">
                                    {
                                        listTinTuc.map((it, index) => {
                                            return (
                                                <div class="col-lg-4 col-md-6 col-xs-12 mb-4" key={index}>
                                                    <div class="trend-item">
                                                        <div class="trend-image">
                                                            <img src={showImageCommon(it.hinhAnh)} alt="image" height={255} />
                                                        </div>
                                                        <div class="trend-content-main">
                                                            <div class="trend-content">
                                                                <h4><a className='text-truncate-2' onClick={() => onNavigate(it.idTinTuc)}>{it.tieuDe} </a></h4>
                                                                <div className='d-flex justify-content-between'>
                                                                    <div class="mb-0 pink">
                                                                        <i class="fa fa-map-marker mr-2"></i>{it.diaChi} </div>
                                                                    <div class="mb-0 pink">
                                                                        <i class="fa fa-eye mb-1 mr-1"></i> {it.luotXem}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="trend-last-main">
                                                                <p class="mb-0 trend-para" style={{minHeight: 73,}}>{it.tieuDeCon.length > 75 ? it.tieuDeCon.slice(0, 75) + ' ...' : it.tieuDeCon} </p>
                                                                <div class="trend-last d-flex align-items-center justify-content-between bg-navy">
                                                                    <p class="mb-0 white"><i class="fa fa-clock-o mr-2" aria-hidden="true"></i>{convertDateOnly(it.ngayDang)}</p>

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
        </MainLayout>
    )
}

export default ListArticle