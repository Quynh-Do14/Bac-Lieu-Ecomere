import React from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import BreadcumbCommon from '../../infratructure/common/layout/breadcumb'
import { ROUTE_PATH } from '../../core/common/appRouter'
import LoadingFullPage from '../../infratructure/common/controls/loading'
const data = [
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
const ListArticle = () => {
    return (
        <MainLayout>
            <LoadingFullPage />
            <BreadcumbCommon title={"Điểm du lịch"} breadcumb={"Trang chủ"} />
            <section class="blog trending destination-b">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-xs-12">
                            <div class="trend-box">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="list-results d-flex align-items-center justify-content-between">
                                            <div class="list-results-sort">
                                                <p class="m-0">Showing 1-5 of 80 results</p>
                                            </div>
                                            <div class="click-menu d-flex align-items-center justify-content-between">
                                                <div class="change-list mr-2"><a href="destination-list.html"><i class="fa fa-bars"></i></a></div>
                                                <div class="change-grid f-active"><a href="destination-grid.html"><i class="fa fa-th"></i></a></div>
                                                <div class="sortby d-flex align-items-center justify-content-between ml-2">
                                                    <select class="niceSelect">
                                                        <option value="1" >Sort By</option>
                                                        <option value="2">Average rating</option>
                                                        <option value="3">Price: low to high</option>
                                                        <option value="4">Price: high to low</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        data.map((it, index) => {
                                            return (
                                                <div class="col-lg-4 col-md-6 col-xs-12 mb-4" key={index}>
                                                    <div class="trend-item">
                                                        <div class="trend-image">
                                                            <img src={it.img} alt="image" />
                                                        </div>
                                                        <div class="trend-content-main">
                                                            <div class="trend-content">
                                                                <h4><a href={`${ROUTE_PATH.VIEW_DESTINATION}`}>{it.name} </a></h4>
                                                                <p class="mb-0 pink"><i class="fa fa-eye mr-1"></i> {it.view} <i class="fa fa-map-marker mr-1 ml-3"></i>{it.address} </p>
                                                            </div>
                                                            <div class="trend-last-main">
                                                                <p class="mb-0 trend-para">{it.description} </p>
                                                                <div class="trend-last d-flex align-items-center justify-content-between bg-navy">
                                                                    <p class="mb-0 white"><i class="fa fa-clock-o" aria-hidden="true"></i>{it.day} </p>
                                                                    <div class="trend-price">
                                                                        <p class="price white mb-0">From <span>{it.prive} VNĐ </span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                    <div class="col-lg-12">
                                        <div class="text-center">
                                            <a href="#" class="nir-btn">Xem thêm <i class="fa fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default ListArticle