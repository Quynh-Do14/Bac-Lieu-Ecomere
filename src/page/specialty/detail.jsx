import React from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import BannerCommon from '../../infratructure/common/layout/banner'
import BreadcumbCommon from '../../infratructure/common/layout/breadcumb'
import LoadingFullPage from '../../infratructure/common/controls/loading'
import RelationCommon from '../../infratructure/common/layout/relation'
import Constants from '../../core/common/constant'

const data =
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
}


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

const DetailSpecialty = () => {
    return (
        <MainLayout>
            <LoadingFullPage />
            <BreadcumbCommon title={"Đặc sản"} breadcumb={"Trang chủ"} />
            <section class="blog trending destination-b">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="single-content">
                                <div class="description-images mb-4">
                                    <div class="thumbnail-images">
                                        <div class="slider-store">
                                            <div>
                                                <img src={data.img} alt="1" />
                                            </div>
                                        </div>
                                        {/* <div class="slider-thumbs">
                                            <div>
                                                <img src="images/bg/bg1.jpg" alt="1" />
                                            </div>
                                        </div> */}
                                    </div>
                                </div>

                                <div class="description" id="description">
                                    <div class="single-full-title border-b mb-2 pb-2">
                                        <div class="single-title">
                                            <h3 class="mb-1">Adriatic Adventure–Zagreb to Athens</h3>
                                            <div class="rating-main d-sm-flex align-items-center">
                                                <p class="mb-0 mr-2"><i class="flaticon-location-pin"></i> Greater London, United Kingdom</p>
                                                <div class="rating mr-2">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                </div>
                                                <span>(1,186 Reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="description-inner mb-2">
                                        <h4>Highlight</h4>
                                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                                        <p class="mb-0">The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                    </div>

                                    <div class="tour-includes mb-2">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td><i class="fa fa-clock-o pink mr-1" aria-hidden="true"></i> 5 Days</td>
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

                                    <div class="description-inner mb-2">
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

                                    <div class="description-inner mb-4">
                                        <h4>What to Expect</h4>
                                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                                        <p class="mb-0">The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                    </div>
                                </div>
                                <div class="single-map mb-4" id="single-map">
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
            <RelationCommon
                data={dataR}
                title={"Địa Điểm"}
                slogan={Constants.Slogan}
            />
        </MainLayout>
    )
}

export default DetailSpecialty