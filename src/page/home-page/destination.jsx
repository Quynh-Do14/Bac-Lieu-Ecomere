import { Col, Row } from 'antd'
import React from 'react'
const data = [
    {
        img: "https://media.mia.vn/uploads/blog-du-lich/du-lich-bac-lieu-11-1691745370.jpeg",
        review: 38,
        name: " Lăng Ông Nam Hải",
        view: 852,
        star: 5,
        description: "A wonderful little cottage right on the seashore - perfect for exploring.",
        address: "Bạc Liêu"
    },
    {
        img: "https://media.mia.vn/uploads/blog-du-lich/du-lich-bac-lieu-11-1691745370.jpeg",
        review: 38,
        name: " Lăng Ông Nam Hải",
        view: 852,
        star: 5,
        description: "A wonderful little cottage right on the seashore - perfect for exploring.",
        address: "Bạc Liêu"
    },
    {
        img: "https://media.mia.vn/uploads/blog-du-lich/du-lich-bac-lieu-11-1691745370.jpeg",
        review: 38,
        name: " Lăng Ông Nam Hải",
        view: 852,
        star: 5,
        description: "A wonderful little cottage right on the seashore - perfect for exploring.",
        address: "Bạc Liêu"
    },
]
const Destination = () => {
    return (
        <div>
            <section className="trending destination pb-6 pt-9">
                <div className="container">
                    <div className="section-title section-title-w text-center mb-5 pb-2 w-50 mx-auto">
                        <h2 className="m-0 white">Khám Phá <strong>Những địa điểm mới</strong></h2>
                        <p className="mb-0 white">Du lịch đã giúp chúng ta hiểu được ý nghĩa của cuộc sống và nó đã giúp chúng ta trở thành những người tốt hơn. Mỗi lần đi du lịch, chúng ta nhìn thế giới bằng con mắt mới.</p>
                    </div>
                    <div className="trend-box">
                        <div className="price-navtab text-center mb-4">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#historical">Lịch sử</a></li>
                                <li><a data-toggle="tab" href="#weekend">Cuối tuần</a></li>
                                <li><a data-toggle="tab" href="#holidays">Nghỉ lễ</a></li>
                                <li><a data-toggle="tab" href="#special">Đặc biệt</a></li>
                            </ul>
                        </div>
                        <div>
                            <div className="row">
                                {
                                    data.map((it, index) => {
                                        return (
                                            <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                                <div className="trend-item">
                                                    <div className="trend-image">
                                                        <img src={it.img} alt="image" />
                                                    </div>
                                                    <div className="trend-content-main">
                                                        <div className="trend-content">
                                                            <div className="rating-main d-flex align-items-center pb-1">
                                                                <div className="rating">
                                                                    <span className="fa fa-star checked"></span>
                                                                    <span className="fa fa-star checked"></span>
                                                                    <span className="fa fa-star checked"></span>
                                                                    <span className="fa fa-star checked"></span>
                                                                    <span className="fa fa-star checked"></span>
                                                                </div>
                                                                <span className="ml-2">{it.review} Reviews</span>
                                                            </div>
                                                            <h4><a href="#">{it.name}</a></h4>
                                                            <p className="mb-0"><i className="fa fa-eye mr-1"></i> {it.view} lượt xem <i className="fa fa-map-marker mr-1 ml-3"></i> {it.address} </p>
                                                        </div>
                                                        <div className="trend-last-main">
                                                            <p className="mb-0 trend-para">{it.description} </p>
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