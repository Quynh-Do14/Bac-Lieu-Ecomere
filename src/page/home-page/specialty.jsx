import React from 'react'
import { showImageCommon } from '../../infratructure/utils/helper'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATH } from '../../core/common/appRouter';

const Specialty = ({ data }) => {
    const navigate = useNavigate();

    const onNavigate = (id) => {
        navigate(`${(ROUTE_PATH.VIEW_SPECIALTY)}?${id}`)
    }
    return (
        <section className="top-destination overflow-hidden bg-navy pt-9">
            <div className="container">
                <div className="section-title section-title-w text-center mb-5 pb-2 w-50 mx-auto">
                    <h2 className="m-0 white"><span>Đặc </span>Sản</h2>
                    <p className="mb-0 white">Du lịch đã giúp chúng ta hiểu được ý nghĩa của cuộc sống và nó đã giúp chúng ta trở thành những người tốt hơn. Mỗi lần đi du lịch, chúng ta nhìn thế giới bằng con mắt mới.</p>
                </div>
                <div className="desti-inner">
                    <div className="row d-flex align-items-center">
                        {data.map((it, index) => {
                            return (
                                <div className="col-lg-4 col-md-6 p-1" key={index}>
                                    <div className="desti-image">
                                        <img src={
                                            it.hinhAnh.indexOf("http") == -1
                                                ?
                                                showImageCommon(it.hinhAnh)
                                                :
                                                it.hinhAnh
                                        } alt="desti" height={255} />
                                        <div className="desti-content">
                                            <h4 className="white mb-0">{it.tenDiaDiem}</h4>
                                        </div>
                                        <div className="desti-overlay">
                                            <a className="nir-btn">
                                                <span className="white" onClick={() => onNavigate(it.idDiaDiem)}>Chi tiết</span>
                                                <i className="fa fa-arrow-right white pl-1"> </i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Specialty