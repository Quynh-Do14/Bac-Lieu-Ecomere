import React, { useEffect, useState } from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import BreadcumbCommon from '../../infratructure/common/layout/breadcumb'
import { ROUTE_PATH } from '../../core/common/appRouter'
import LoadingFullPage from '../../infratructure/common/controls/loading'
import Constants from '../../core/common/constant'
import api from '../../infratructure/api'
import { convertTimeOnly, showImageCommon } from '../../infratructure/utils/helper'
import SearchBarCommon from '../../infratructure/common/controls/search-bar'
import { useLocation, useNavigate } from 'react-router-dom'
import SearchCommon from '../../infratructure/common/controls/search-common'
const DetailSpecialty = () => {
    const [loading, setLoading] = useState(false);
    const [detailSpecialty, setDetailSpecialty] = useState({});
    const location = useLocation()
    const search = location.search.replace("?", "")
    const onGetDetailDacSanAsync = async () => {
        const response = await api.getDiaDiemById(
            `dichvu/top/${search}?idDanhMuc=${Constants.CategoryConfig.Specialty.value}`,
            setLoading
        )
        setDetailSpecialty(response.diaDiem);
    }

    useEffect(() => {
        onGetDetailDacSanAsync().then(_ => { });
    }, []);

    return (
        <MainLayout>
            <BreadcumbCommon title={"Đặc sản"} breadcumb={"Trang chủ"} />
            <section className="blog trending destination-b">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="single-content">
                                <div className="description-images mb-4">
                                    <div className="thumbnail-images">
                                        <div className="slider-store">
                                            <div>
                                                <img src={
                                                    detailSpecialty.hinhAnh?.indexOf("http") == -1
                                                        ?
                                                        showImageCommon(detailSpecialty.hinhAnh)
                                                        :
                                                        detailSpecialty.hinhAnh
                                                } alt="1" />
                                            </div>
                                        </div>
                                        {/* <div className="slider-thumbs">
                                            <div>
                                                <img src="images/bg/bg1.jpg" alt="1" />
                                            </div>
                                        </div> */}
                                    </div>
                                </div>

                                <div className="description" id="description">
                                    <div className="single-full-title border-b mb-2 pb-2">
                                        <div className="single-title">
                                            <h3 className="mb-1">{detailSpecialty.tenDiaDiem}</h3>
                                            <div className="rating-main d-sm-flex align-items-center">
                                                <p className="mb-0 mr-2"><i className="flaticon-location-pin"></i> {detailSpecialty.diaChi} </p>
                                                <span>({detailSpecialty.luotXem} Lượt xem)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="description-inner mb-2">
                                        <p> {detailSpecialty.moTa} </p>
                                    </div>

                                    <div className="tour-includes mb-2">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>Giờ mở cửa : {convertTimeOnly(detailSpecialty.gioMoCua)} </td>
                                                    <td>Giờ đóng cửa : {convertTimeOnly(detailSpecialty.gioDongCua)} </td>
                                                    <td>Giá vé : {detailSpecialty.giaVe} </td>
                                                </tr>
                                                <tr>
                                                    <td>Số điện thoại liên hệ: {detailSpecialty.sdtLienHe}</td>
                                                    <td>Email liên hệ : {detailSpecialty.emailLienHe} </td>
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
            {/* <RelationCommon
                data={dataR}
                title={"Địa Điểm"}
                slogan={Constants.Slogan}
            /> */}
            <LoadingFullPage loading={loading} />
        </MainLayout>
    )
}

export default DetailSpecialty