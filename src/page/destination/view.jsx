import React from 'react'
import MainLayout from '../../infratructure/common/layout/main-layout'
import BreadcumbCommon from '../../infratructure/common/layout/breadcumb'
import LoadingFullPage from '../../infratructure/common/controls/loading'
import SearchCommon from '../../infratructure/common/controls/search-common'
import RelationCommon from '../../infratructure/common/layout/relation'
const data = {
    img: "https://media.mia.vn/uploads/blog-du-lich/du-lich-bac-lieu-11-1691745370.jpeg",
    review: 38,
    name: " Lăng Ông Nam Hải",
    view: 852,
    star: 5,
    description: "A wonderful little cottage right on the seashore - perfect for exploring.",
    address: "Bạc Liêu",
    day: "3 ngày 2 đêm",
    date: ' 4th AUG 2020',
    price: 12000,
    title: " Văn hóa",
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
const DetailDestination = () => {
    return (
        <MainLayout>
            {/* <LoadingFullPage /> */}
            <BreadcumbCommon title={"Điểm du lịch"} breadcumb={"Trang chủ"} />
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
                                                <img src={data.img} alt="1" />
                                            </div>
                                        </div> */}
                                    </div>
                                </div>

                                <div class="description" id="description">
                                    <div class="single-full-title border-b mb-2 pb-2">
                                        <div class="single-title">
                                            <h3 class="mb-1">{data.name}</h3>
                                            <div class="rating-main d-sm-flex align-items-center">
                                                <p class="mb-0 mr-2"><i class="flaticon-location-pin"></i>{data.address} </p>

                                                <span>({data.view} lượt xem)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="description-inner mb-2">
                                        <h4>{data.title} </h4>
                                        <p>{data.description} </p>
                                    </div>

                                    <div class="tour-includes mb-2">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td><i class="fa fa-clock-o pink mr-1" aria-hidden="true"></i> {data.day} </td>
                                                    <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> Max People : 26</td>
                                                    <td><i class="fa fa-calendar pink mr-1" aria-hidden="true"></i> {data.date} </td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa fa-user pink mr-1" aria-hidden="true"></i> Min Age : 10+</td>
                                                    <td><i class="fa fa-map-signs pink mr-1" aria-hidden="true"></i> Pickup : Airport</td>
                                                    <td><i class="fa fa-file-alt pink mr-1" aria-hidden="true"></i> Langauge - English, Thai</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="description-inner mb-4">
                                        <h4>What to Expect</h4>
                                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                                        <p class="mb-0">The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <RelationCommon data={dataR}/> */}
        </MainLayout >
    )
}

export default DetailDestination