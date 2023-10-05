import { Col, Row } from 'antd'
import React from 'react'
import { showImageCommon } from '../../infratructure/utils/helper'

const Destination = ({ data }) => {
    return (
        <div>
            <section className="trending destination bg-grey pb-6 pt-9">
                <div className="container">
                    <div className="section-title section-title-w text-center mb-5 pb-2 w-50 mx-auto">
                        <h2 className="m-0 black">Khám Phá <strong>Những địa điểm mới</strong></h2>
                        <p className="mb-0 black">Du lịch đã giúp chúng ta hiểu được ý nghĩa của cuộc sống và nó đã giúp chúng ta trở thành những người tốt hơn. Mỗi lần đi du lịch, chúng ta nhìn thế giới bằng con mắt mới.</p>
                    </div>
                    <div className="trend-box">
                        {/* <div className="price-navtab text-center mb-4">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#historical">Lịch sử</a></li>
                                <li><a data-toggle="tab" href="#weekend">Cuối tuần</a></li>
                                <li><a data-toggle="tab" href="#holidays">Nghỉ lễ</a></li>
                                <li><a data-toggle="tab" href="#special">Đặc biệt</a></li>
                            </ul>
                        </div> */}
                        <div>
                            <div className="row">
                                {
                                    data.map((it, index) => {
                                        return (
                                            <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                                <div className="trend-item">
                                                    <div className="trend-image">
                                                        <img src={showImageCommon(it.hinhAnh)} alt="image" height={255} />
                                                    </div>
                                                    <div className="trend-content-main">
                                                        <div className="trend-content">
                                                            <h4><a href="#">{it.tenDiaDiem}</a></h4>
                                                            <div className="mb-0">
                                                                <i className="fa fa-eye mr-1 mb-1"></i> {it.luotXem} lượt xem
                                                                <br/>
                                                                <i className="fa fa-map-marker mr-1"></i> {it.diaChi}
                                                            </div>
                                                        </div>
                                                        <div className="trend-last-main">
                                                            <p className="mb-0 trend-para text-truncate">{it.moTa} </p>
                                                            <div className="trend-last d-flex align-items-center justify-content-between">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Destination