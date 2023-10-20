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
            <section className="blog blog-left">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-single">
                                <div className="blog-imagelist mb-3">
                                    <img src={
                                        detailArticle.hinhAnh?.indexOf("http") == -1
                                            ?
                                            showImageCommon(detailArticle.hinhAnh)
                                            :
                                            detailArticle.hinhAnh
                                    } alt='1' />
                                </div>
                                <div className="row">
                                    <div className="col-lg-2 col-md-2">
                                        <div className="date text-center bg-pink p-2">
                                            <div className="month white">{convertDateOnly(detailArticle.ngayDang)} </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-10">
                                        <div className="blog-content mb-4 pt-0">
                                            <h3 className="blog-title"><a href="blog-single.html" className="yellow">{detailArticle.tieuDe} </a></h3>
                                            <div className="para-content mb-2">
                                                <span className="mr-2"><a className="tag pink"><i className="fa fa-tag mr-1"></i> Văn hóa </a></span>
                                                <span className="mr-2"><a className="pink"><i className="fa fa-user mr-1"></i>Hưng Trần </a></span>
                                                <span><a className="pink"><i className="fa fa-eye mb-1"></i>{detailArticle.luotXem} </a></span>
                                            </div>
                                            <p>{detailArticle.tieuDeCon} </p>
                                        </div>

                                        <div className="blog-quote mb-4">
                                            <p className="white">{detailArticle.moTaNgan} </p>
                                        </div>

                                        <p className="mb-4">{detailArticle.chiTiet} </p>
                                    </div>
                                </div>
                                {/* <div className="blog-share d-flex justify-content-between align-items-center mb-4 bg-lgrey border">
                                    <div className="blog-share-tag">
                                        <ul className="inline">
                                            <li><strong>Link bài viết: </strong></li>
                                            <li><a className='pointer-link' >Xem thêm</a></li>
                                        </ul>
                                        <ul className="inline">
                                            <li><strong>Link video: </strong></li>
                                            <li><a className='pointer-link' >Xem thêm</a></li>
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