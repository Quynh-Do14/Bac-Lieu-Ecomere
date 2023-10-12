import React from 'react'
import { ROUTE_PATH } from '../../../core/common/appRouter'
import { useNavigate } from 'react-router-dom'

const RelationCommon = ({ data = [], title, slogan }) => {
    const navigate = useNavigate();
    return (
        <section className="trending destination bg-grey pb-6">
            <div className="container">
                <div className="section-title text-center mb-5 pb-2 w-50 mx-auto">
                    <h2 className="m-0">{title} <span>Liên Quan</span></h2>
                    <p className="mb-0">{slogan}</p>
                </div>
                <div className="trend-box">
                    <div className="row team-slider">
                        {data.map((it, index) => {
                            return (
                                <div className="col-lg-4 col-md-6 col-xs-12 mb-4" key={index}>
                                    <div className="trend-item">
                                        <div className="trend-image">
                                            <img src={it.hinhAnh} alt="image" height={255} />
                                        </div>
                                        <div className="trend-content-main">
                                            <div className="trend-content ">
                                                <h4 className='text-truncate-1'><a href={`${(ROUTE_PATH.VIEW_DESTINATION)}?${it.idDiaDiem}`}>{it.tenDiaDiem} </a></h4>
                                                <div className='d-flex justify-content-between'>
                                                    <div className="mb-0 pink">
                                                        <i className="fa fa-map-marker mr-2"></i>{it.diaChi.replace(', Bạc Liêu', '')} </div>
                                                    <div className="mb-0 pink">
                                                        <i className="fa fa-eye mb-1"></i> {it.luotXem}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="trend-last-main">
                                                <p className="mb-0 trend-para">{it.moTa.length > 75 ? it.moTa.slice(0, 75) + ' ...' : it.moTa} </p>
                                                <div className="trend-last d-flex align-items-center justify-content-between bg-navy">
                                                    <p className="mb-0 white"><i className="fa fa-clock-o mr-2" aria-hidden="true"></i>{(it.gioMoCua)} - {(it.gioDongCua)} </p>
                                                    <div className="trend-price">
                                                        <p className="price white mb-0"><span>{it.giaVe}</span></p>
                                                    </div>
                                                </div>
                                            </div>
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

export default RelationCommon