import React from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import BreadcumbCommon from '../../infratructure/common/layout/breadcumb'
import { ROUTE_PATH } from '../../core/common/appRouter'
import LoadingFullPage from '../../infratructure/common/controls/loading'
import SearchCommon from '../../infratructure/common/controls/search-common'
import RelationCommon from '../../infratructure/common/layout/relation'
const data = [
    {
        img: "https://media.mia.vn/uploads/blog-du-lich/du-lich-bac-lieu-5-1691745308.jpg",
        address: "Bạc Liêu",
        name: "Lễ hội trăng dằm",
        description: " Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.",
    },
    {
        img: "https://media.mia.vn/uploads/blog-du-lich/du-lich-bac-lieu-5-1691745308.jpg",
        address: "Bạc Liêu",
        name: "Lễ hội trăng dằm",
        description: " Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.",

    },
    {
        img: "https://media.mia.vn/uploads/blog-du-lich/du-lich-bac-lieu-5-1691745308.jpg",
        address: "Bạc Liêu",
        name: "Lễ hội trăng dằm",
        description: " Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.",
    },
    {
        img: "https://media.mia.vn/uploads/blog-du-lich/du-lich-bac-lieu-5-1691745308.jpg",
        address: "Bạc Liêu",
        name: "Lễ hội trăng dằm",
        description: " Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.",
    },
    {
        img: "https://media.mia.vn/uploads/blog-du-lich/du-lich-bac-lieu-5-1691745308.jpg",
        address: "Bạc Liêu",
        name: "Lễ hội trăng dằm",
        description: " Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.",
    }

]

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
const ListFestival = () => {
    return (
        <MainLayout>
            <LoadingFullPage />
            <BreadcumbCommon title={"Lễ hội"} breadcumb={"Trang chủ"} />
            <section className="blog destination-b pb-6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-xs-12 mb-4">
                            <div className="trend-box">
                                <div className="list-results d-flex align-items-center justify-content-between">
                                    <div className="list-results-sort">
                                        <p className="m-0">Showing 1-5 of 80 results</p>
                                    </div>
                                    <div className="click-menu d-flex align-items-center justify-content-between">
                                        <div className="change-list f-active mr-2"><a href="#"><i className="fa fa-bars"></i></a></div>
                                        <div className="change-grid"><a href="#"><i className="fa fa-th"></i></a></div>
                                    </div>
                                </div>
                                {
                                    data.map((it, index) => {
                                        return (
                                            <div className="blog-full d-flex justify-content-around mb-4" key={index}>
                                                <div className="row w-100">
                                                    <div className="col-lg-5 col-md-4 col-xs-12 blog-height">
                                                        <div className="blog-image">
                                                            <a href="#" style={{ backgroundImage: `url(/images/destination/destination3.jpg)` }}></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-md-8 col-xs-12">
                                                        <div className="blog-content p-0">
                                                            <h4 className="mb-1"><a href={ROUTE_PATH.VIEW_FESTIVAL} className="">{it.name} </a></h4>
                                                            <div className="trend-tags">
                                                                <a href={ROUTE_PATH.VIEW_FESTIVAL} ><i className="fa fa-heart"></i></a>
                                                            </div>
                                                            <div className="rating pb-1">
                                                                <span className="fa fa-star checked"></span>
                                                                <span className="fa fa-star checked"></span>
                                                                <span className="fa fa-star checked"></span>
                                                                <span className="fa fa-star checked"></span>
                                                                <span className="fa fa-star checked"></span>
                                                            </div>
                                                            <p className="mb-2 pink"><i className="fa fa-eye mr-1"></i> {it.view} <i className="fa fa-map-marker mr-1 ml-3"></i> {it.address}</p>
                                                            <p className="mb-2 border-t pt-2">{it.description} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className="text-center">
                                    <a href="#" className="nir-btn">Xem thêm <i className="fa fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xs-12 mb-4">
                            <SearchCommon title={"lễ hội"} />
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default ListFestival