import React from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
const data = [
    {
        img: "https://media.mia.vn/uploads/blog-du-lich/du-lich-bac-lieu-11-1691745370.jpeg",
        review: 38,
        title: " Văn hóa",
        subTitle: "Văn hóa Văn hóa Văn hóa Văn hóa ",
        view: 852,
        star: 5,
        description: "A wonderful little cottage right on the seashore - perfect for exploring.",
        address: "Bạc Liêu",
        date: ' 4th AUG 2020',
        type: "Ẩm thực"
    },
    {
        img: "https://media.mia.vn/uploads/blog-du-lich/du-lich-bac-lieu-11-1691745370.jpeg",
        review: 38,
        title: " Văn hóa",
        subTitle: "Văn hóa Văn hóa Văn hóa Văn hóa ",
        view: 852,
        star: 5,
        description: "A wonderful little cottage right on the seashore - perfect for exploring.",
        address: "Bạc Liêu",
        date: ' 4th AUG 2020',
        type: "Ẩm thực"
    },

    {
        img: "https://media.mia.vn/uploads/blog-du-lich/du-lich-bac-lieu-11-1691745370.jpeg",
        review: 38,
        title: " Văn hóa",
        subTitle: "Văn hóa Văn hóa Văn hóa Văn hóa ",
        view: 852,
        star: 5,
        description: "A wonderful little cottage right on the seashore - perfect for exploring.",
        address: "Bạc Liêu",
        date: ' 4th AUG 2020',
        type: "Ẩm thực"
    },

]
const ListArticles = () => {
    return (
        <MainLayout>
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
                                                            <h4 className="mb-1"><a href="#" className="">{it.name} </a></h4>
                                                            <div className="trend-tags">
                                                                <a href="#"><i className="fa fa-heart"></i></a>
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
                                    <a href="#" className="nir-btn">Load More <i className="fa fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-xs-12 mb-4">
                            <div className="sidebar-sticky">
                                <div className="sidebar-item mb-4">
                                    <form className="form-content">
                                        <h4 className="title white">Find The Places</h4>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label className="white">Your Destination</label>
                                                    <div className="input-box">
                                                        <i className="flaticon-placeholder"></i>
                                                        <select className="niceSelect">
                                                            <option value="1">Where are you going?</option>
                                                            <option value="2">Argentina</option>
                                                            <option value="3">Belgium</option>
                                                            <option value="4">Canada</option>
                                                            <option value="5">Denmark</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="white">Check In</label>
                                                    <div className="input-box">
                                                        <i className="flaticon-calendar"></i>
                                                        <input id="date-range0" type="text" placeholder="yyyy-mmm-dd" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="white">Check Out</label>
                                                    <div className="input-box">
                                                        <i className="flaticon-calendar"></i>
                                                        <input id="date-range1" type="text" placeholder="yyyy-mm-dd" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="white">Adult</label>
                                                    <div className="input-box">
                                                        <i className="flaticon-add-user"></i>
                                                        <select className="niceSelect">
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="white">Children</label>
                                                    <div className="input-box">
                                                        <i className="flaticon-add-user"></i>
                                                        <select className="niceSelect">
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mb-0">
                                                    <a href="#" className="nir-btn w-100"><i className="fa fa-search"></i> Check Availability</a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="list-sidebar">
                                    <div className="sidebar-item">
                                        <h4>Services</h4>
                                        <div className="pretty p-default p-thick p-pulse mar-bottom-15">
                                            <input type="checkbox" />
                                            <div className="state p-warning-o">
                                                <label>24/7 Reception</label>
                                            </div>
                                        </div>
                                        <div className="pretty p-default p-thick p-pulse mar-bottom-15">
                                            <input type="checkbox" />
                                            <div className="state p-warning-o">
                                                <label>Parking</label>
                                            </div>
                                        </div>
                                        <div className="pretty p-default p-thick p-pulse mar-bottom-15">
                                            <input type="checkbox" />
                                            <div className="state p-warning-o">
                                                <label>Bar</label>
                                            </div>
                                        </div>
                                        <div className="pretty p-default p-thick p-pulse mar-bottom-15">
                                            <input type="checkbox" />
                                            <div className="state p-warning-o">
                                                <label>Restaurant</label>
                                            </div>
                                        </div>
                                        <div className="pretty p-default p-thick p-pulse mar-bottom-15">
                                            <input type="checkbox" />
                                            <div className="state p-warning-o">
                                                <label>Satellite Television</label>
                                            </div>
                                        </div>
                                        <div className="pretty p-default p-thick p-pulse mar-bottom-15">
                                            <input type="checkbox" />
                                            <div className="state p-warning-o">
                                                <label>Lift/ELevator</label>
                                            </div>
                                        </div>
                                        <div className="pretty p-default p-thick p-pulse">
                                            <input type="checkbox" />
                                            <div className="state p-warning-o">
                                                <label>Luggage Storage </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-item">
                                        <div className="map-box">
                                            <i className="fa fa-map-marker"></i>
                                            <a href="#">Show on Map</a>
                                        </div>
                                    </div>
                                    <div className="sidebar-item">
                                        <h4>Star Rating</h4>
                                        <div className="pretty p-default p-thick p-pulse">
                                            <input type="checkbox" />
                                            <div className="state">
                                                <label>
                                                    <span className="star-rating">
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="pretty p-default p-thick p-pulse">
                                            <input type="checkbox" />
                                            <div className="state">
                                                <label>
                                                    <span className="star-rating">
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="pretty p-default p-thick p-pulse">
                                            <input type="checkbox" />
                                            <div className="state">
                                                <label>
                                                    <span className="star-rating">
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="pretty p-default p-thick p-pulse">
                                            <input type="checkbox" />
                                            <div className="state">
                                                <label>
                                                    <span className="star-rating">
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="pretty p-default p-thick p-pulse">
                                            <input type="checkbox" />
                                            <div className="state">
                                                <label>
                                                    <span className="star-rating">
                                                        <span className="fa fa-star checked"></span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-item">
                                        <h4>Price Range($)</h4>
                                        <div className="range-slider">
                                            <div data-min="0" data-max="2000" data-unit="$" data-min-name="min_price" data-max-name="max_price" className="range-slider-ui ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false">
                                                <span className="min-value">0 $</span>
                                                <span className="max-value">2000 $</span>
                                                <div className="ui-slider-range ui-widget-header ui-corner-all full" style={{ left: "0 %", width: "100%" }}></div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                    <div className="sidebar-item">
                                        <h4>City</h4>
                                        <div className="pretty p-default p-thick p-pulse">
                                            <input type="checkbox" />
                                            <div className="state">
                                                <label>
                                                    Amsterdam<span className="number">749</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="pretty p-default p-thick p-pulse">
                                            <input type="checkbox" checked />
                                            <div className="state">
                                                <label>
                                                    Rotterdam<span className="number">630</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="pretty p-default p-thick p-pulse">
                                            <input type="checkbox" />
                                            <div className="state">
                                                <label>
                                                    Copenghan<span className="number">58</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="pretty p-default p-thick p-pulse">
                                            <input type="checkbox" />
                                            <div className="state">
                                                <label>
                                                    New Delhi<span className="number">29</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="pretty p-default p-thick p-pulse">
                                            <input type="checkbox" />
                                            <div className="state">
                                                <label>
                                                    New York<span className="number">29</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="pretty p-default p-thick p-pulse">
                                            <input type="checkbox" />
                                            <div className="state">
                                                <label>
                                                    Kathmandu<span className="number">29</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="pretty p-default p-thick p-pulse">
                                            <input type="checkbox" />
                                            <div className="state">
                                                <label>
                                                    Brisbane<span className="number">29</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="pretty p-default p-thick p-pulse">
                                            <input type="checkbox" />
                                            <div className="state">
                                                <label>
                                                    Tokyo<span className="number">29</span>
                                                </label>
                                            </div>
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

export default ListArticles