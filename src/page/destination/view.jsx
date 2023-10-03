import React from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import BreadcumbCommon from '../../infratructure/common/layout/breadcumb'
const data = {
    img: "https://media.mia.vn/uploads/blog-du-lich/du-lich-bac-lieu-11-1691745370.jpeg",
    review: 38,
    name: " Lăng Ông Nam Hải",
    view: 852,
    star: 5,
    description: "A wonderful little cottage right on the seashore - perfect for exploring.",
    address: "Bạc Liêu",
    day: "3 ngày 2 đêm",
    price: 12000
}
const DetailDestination = () => {
    return (
        <MainLayout>
            <BreadcumbCommon title={"Điểm du lịch"} breadcumb={"Trang chủ"} />
            <section class="blog trending destination-b">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-xs-12">
                            <div class="single-content">
                                <div class="single-full-title border-b mb-2 pb-2">
                                    <div class="single-title">
                                        <h3 class="mb-1">{data.name} </h3>
                                        <div class="rating-main d-sm-flex align-items-center">
                                            <p class="mb-0 mr-2"><i class="flaticon-location-pin"></i>{data.address} </p>
                                            <span>({data.view} Reviews)</span>
                                        </div>
                                    </div>
                                    <div class="comment-image">
                                        <img src={data.img} alt="image"/>
                                    </div>
                                </div>
                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i class="fa fa-clock-o pink mr-1" aria-hidden="true"></i> {data.day} </td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> Max People : 26</td>
                                                <td><i class="fa fa-calendar pink mr-1" aria-hidden="true"></i> Jan 18 - Dec 21</td>
                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-user pink mr-1" aria-hidden="true"></i> Min Age : 10+</td>
                                                <td><i class="fa fa-map-signs pink mr-1" aria-hidden="true"></i> Pickup : Airport</td>
                                                <td><i class="fa fa-file-alt pink mr-1" aria-hidden="true"></i> Langauge - English, Thai</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="description mb-2">
                                    <p>{data.description} </p>
                                </div>

                                <div class="description mb-2">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 mb-2 pr-2">
                                            <div class="desc-box">
                                                <h5 class="mb-1">Departure & Return Location</h5>
                                                <p class="mb-0">John F.K. International Airport(Google Map)</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 mb-2 pl-2">
                                            <div class="desc-box">
                                                <h5 class="mb-1">Bedroom</h5>
                                                <p class="mb-0">4 Bedrooms</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 mb-2 pr-2">
                                            <div class="desc-box">
                                                <h5 class="mb-1">Departure Time</h5>
                                                <p class="mb-0">3 Hours Before Flight Time</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 mb-2 pl-2">
                                            <div class="desc-box">
                                                <h5 class="mb-1">Departure Time</h5>
                                                <p class="mb-0">3 Hours Before Flight Time</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 mb-2 pr-2">
                                            <div class="desc-box">
                                                <h5 class="mb-1">Price Includes</h5>
                                                <ul>
                                                    <li><i class="fa fa-check pink mr-1"></i> Air Fares</li>
                                                    <li><i class="fa fa-check pink mr-1"></i> 3 Nights Hotel Accomodation</li>
                                                    <li><i class="fa fa-check pink mr-1"></i> Tour Guide</li>
                                                    <li><i class="fa fa-check pink mr-1"></i> Entrance Fees</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 mb-2 pl-2">
                                            <div class="desc-box">
                                                <h5 class="mb-1">Departure & Return Location</h5>
                                                <ul>
                                                    <li><i class="fa fa-close pink mr-1"></i> Guide Service Fee</li>
                                                    <li><i class="fa fa-close pink mr-1"></i> Driver Service Fee</li>
                                                    <li><i class="fa fa-close pink mr-1"></i> Any Private Expenses</li>
                                                    <li><i class="fa fa-close pink mr-1"></i> Room Service Fees</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map">
                                        <div style={{ width: "100%" }}>
                                            <iframe height="400" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(mangal%20bazar)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout >
    )
}

export default DetailDestination