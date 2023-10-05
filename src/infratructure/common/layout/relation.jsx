import React from 'react'

const RelationCommon = ({ data = [], title, slogan }) => {
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
                                <div class="col-md-4 col-sm-6 col-xs-12 mb-4">
                                    <div class="trend-item">
                                        <div class="trend-image">
                                            <img src={it.img} alt="image" />
                                            <div class="trend-tags">
                                                <a href="#"><i class="flaticon-like"></i></a>
                                            </div>
                                        </div>
                                        <div class="trend-content-main">
                                            <div class="trend-content">
                                                <h6 class="font-weight-normal"><i class="fa fa-map-marker-alt"></i>{it.address} </h6>
                                                <h4><a href="#">{it.name} </a></h4>
                                                <div class="rating-main d-flex align-items-center">
                                                    <span class="ml-2">{it.view} lượt xem</span>
                                                </div>
                                            </div>
                                            <div class="trend-last-main">
                                                <p class="mb-0 trend-para">{it.description}</p>
                                                <div class="trend-last d-flex align-items-center justify-content-between">
                                                    <p class="mb-0 white"><i class="fa fa-clock-o" aria-hidden="true"></i> {it.day}</p>
                                                    <div class="trend-price">
                                                        <p class="price white mb-0">Chỉ từ <span>{it.price} </span></p>
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