import React from 'react'
import { ROUTE_PATH } from '../../../core/common/appRouter'
import { useNavigate } from 'react-router-dom'

const RelationCommon = ({ data = [], title, slogan }) => {
    const navigate = useNavigate();
    return (
        <section class="trending destination bg-grey pb-6">
            <div class="container">
                <div class="section-title text-center mb-5 pb-2 w-50 mx-auto">
                    <h2 class="m-0">{title} <span>Liên Quan</span></h2>
                    <p class="mb-0">{slogan}</p>
                </div>
                <div class="trend-box">
                    <div class="row team-slider">
                        {data.map((it, index) => {
                            return (
                                <div class="col-lg-4 col-md-6 col-xs-12 mb-4" key={index}>
                                    <div class="trend-item">
                                        <div class="trend-image">
                                            <img src={it.hinhAnh} alt="image" height={255} />
                                        </div>
                                        <div class="trend-content-main">
                                            <div class="trend-content ">
                                                <h4 className='text-truncate-1'><a href={`${(ROUTE_PATH.VIEW_DESTINATION)}?${it.idDiaDiem}`}>{it.tenDiaDiem} </a></h4>
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
                        })}


                    </div>
                </div>
            </div>
        </section>
    )
}

export default RelationCommon