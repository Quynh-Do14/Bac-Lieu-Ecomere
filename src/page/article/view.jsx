import React, { useEffect, useState } from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import BannerCommon from '../../infratructure/common/layout/banner'
import BreadcumbCommon from '../../infratructure/common/layout/breadcumb'
import LoadingFullPage from '../../infratructure/common/controls/loading'
import RelationCommon from '../../infratructure/common/layout/relation'
import Constants from '../../core/common/constant'
import { useLocation } from 'react-router-dom'
import { convertDateOnly, convertTimeOnly, showImageCommon } from '../../infratructure/utils/helper'
import api from '../../infratructure/api'
const DetailArticle = () => {
    const [loading, setLoading] = useState(false);
    const [detailArticle, setDetailArticle] = useState({});

    const location = useLocation()
    const search = location.search.replace("?", "")
    const onGetDetailTinTucAsync = async () => {
        const response = await api.getAllTinTuc(
            `loaitin/${search}?type=1`,
            setLoading
        )
        setDetailArticle(response.tinTuc);

    }

    useEffect(() => {
        onGetDetailTinTucAsync().then(_ => { });
    }, []);

    return (
        <MainLayout>
            <BreadcumbCommon title={"Bài viết"} breadcumb={"Trang chủ"} />
            <section class="blog blog-left">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="blog-single">
                                <div class="blog-imagelist mb-3">
                                    <img src={showImageCommon(detailArticle.hinhAnh)} alt='1' />
                                </div>
                                <div class="row">
                                    <div class="col-lg-2 col-md-2">
                                        <div class="date text-center bg-pink p-2">
                                            <div class="month white">{convertDateOnly(detailArticle.ngayDang)} </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-10 col-md-10">
                                        <div class="blog-content mb-4 pt-0">
                                            <h3 class="blog-title"><a href="blog-single.html" class="yellow">{detailArticle.tieuDe} </a></h3>
                                            <div class="para-content mb-2">
                                                <span class="mr-2"><a href="#" class="tag pink"><i class="fa fa-tag mr-1"></i> Văn hóa </a></span>
                                                <span class="mr-2"><a href="#" class="pink"><i class="fa fa-user mr-1"></i>Hưng Trần </a></span>
                                                <span><a href="#" class="pink"><i class="fa fa-eye mb-1"></i>{detailArticle.luotXem} </a></span>
                                            </div>
                                            <p>{detailArticle.tieuDeCon} </p>
                                        </div>

                                        <div class="blog-quote mb-4">
                                            <p class="white">{detailArticle.moTaNgan} </p>
                                        </div>

                                        <p class="mb-4">{detailArticle.chiTiet} </p>
                                    </div>
                                </div>
                                {/* <div class="blog-share d-flex justify-content-between align-items-center mb-4 bg-lgrey border">
                                    <div class="blog-share-tag">
                                        <ul class="inline">
                                            <li><strong>Link bài viết: </strong></li>
                                            <li><a className='pointer-link' href="#">Xem thêm</a></li>
                                        </ul>
                                        <ul class="inline">
                                            <li><strong>Link video: </strong></li>
                                            <li><a className='pointer-link' href="#">Xem thêm</a></li>
                                        </ul>
                                    </div>

                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <RelationCommon
                data={dataR}
                title={"Địa Điểm"}
                slogan={Constants.Slogan}
            /> */}
            <LoadingFullPage loading={loading} />
        </MainLayout >
    )
}

export default DetailArticle