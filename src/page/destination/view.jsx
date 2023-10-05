import React, { useEffect, useState } from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import BreadcumbCommon from '../../infratructure/common/layout/breadcumb'
import LoadingFullPage from '../../infratructure/common/controls/loading'
import SearchCommon from '../../infratructure/common/controls/search-common'
import RelationCommon from '../../infratructure/common/layout/relation'
import Constants from '../../core/common/constant'
import { useLocation, useParams } from 'react-router-dom'
import api from '../../infratructure/api'
import { convertTimeOnly, showImageCommon } from '../../infratructure/utils/helper'
const dataR = [
    {
        img: "https://media.mia.vn/uploads/blog-du-lich/du-lich-bac-lieu-11-1691745370.jpeg",
        review: 38,
        name: " Lăng Ông Nam Hải",
        view: 852,
        star: 5,
        description: "A wonderful little cottage right on the seashore - perfect for exploring.",
        address: "Bạc Liêu",
        day: "3 ngày 2 đêm",
        price: 12000
    },
    {
        img: "https://media.mia.vn/uploads/blog-du-lich/du-lich-bac-lieu-11-1691745370.jpeg",
        review: 38,
        name: " Lăng Ông Nam Hải",
        view: 852,
        star: 5,
        description: "A wonderful little cottage right on the seashore - perfect for exploring.",
        address: "Bạc Liêu",
        day: "3 ngày 2 đêm",
        price: 12000
    },
    {
        img: "https://media.mia.vn/uploads/blog-du-lich/du-lich-bac-lieu-11-1691745370.jpeg",
        review: 38,
        name: " Lăng Ông Nam Hải",
        view: 852,
        star: 5,
        description: "A wonderful little cottage right on the seashore - perfect for exploring.",
        address: "Bạc Liêu",
        day: "3 ngày 2 đêm",
        price: 12000
    },
]
const DetailDestination = () => {
    const [loading, setLoading] = useState(false);
    const [detailDestination, setDetailDestination] = useState({});
    const location = useLocation()
    const search = location.search.replace("?", "")
    const onGetDetailDiemDenAsync = async () => {
        const response = await api.getDiaDiemById(
            `dichvu/top/${search}?idDanhMuc=${Constants.CategoryConfig.Location.value}`,
            setLoading
        )
        setDetailDestination(response.diaDiem);
    }

    useEffect(() => {
        onGetDetailDiemDenAsync().then(_ => { });
    }, []);
    return (
        <MainLayout>
            <LoadingFullPage loading={loading} />
            <BreadcumbCommon title={"Điểm du lịch"} breadcumb={"Trang chủ"} />
            <section class="blog trending destination-b">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="single-content">
                                <div class="description-images mb-4">
                                    <div class="thumbnail-images">
                                        <div class="slider-store">
                                            <div>
                                                <img src={showImageCommon(detailDestination.hinhAnh)} alt="1" />
                                            </div>

                                        </div>
                                        {/* <div class="slider-thumbs">
                                            <div>
                                                <img src={data.img} alt="1" />
                                            </div>
                                        </div> */}
                                    </div>
                                </div>

                                <div class="description" id="description">
                                    <div class="single-full-title border-b mb-2 pb-2">
                                        <div class="single-title">
                                            <h3 class="mb-1">{detailDestination.tenDiaDiem}</h3>
                                            <div class="rating-main d-sm-flex align-items-center">
                                                <p class="mb-0 mr-2"><i class="flaticon-location-pin"></i>{detailDestination.diaChi} </p>

                                                <span>({detailDestination.luotXem} lượt xem)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="description-inner mb-2">
                                        {/* <h4>{detailDestination.title} </h4> */}
                                        <p>{detailDestination.moTa} </p>
                                    </div>

                                    <div class="tour-includes mb-2">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>Giờ mở cửa : {convertTimeOnly(detailDestination.gioMoCua)} </td>
                                                    <td>Giờ đóng cửa : {convertTimeOnly(detailDestination.gioDongCua)} </td>
                                                    <td>Giá vé : {detailDestination.giaVe} </td>
                                                </tr>
                                                <tr>
                                                    <td>Số điện thoại liên hệ: {detailDestination.sdtLienHe}</td>
                                                    <td>Email liên hệ : {detailDestination.emailLienHe} </td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <RelationCommon
                data={dataR}
                title={"Địa Điểm"}
                slogan={Constants.Slogan}
            />
        </MainLayout >
    )
}

export default DetailDestination