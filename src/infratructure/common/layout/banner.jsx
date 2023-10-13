import { Carousel } from 'antd';
import React from 'react'
import { ROUTE_PATH } from '../../../core/common/appRouter';
import slide from "../../../assets/images/banner-slide.jpg";
import slide1 from "../../../assets/images/banner-slide1.jpg";

const data = [
    {
        img: "https://topal.vn/wp-content/uploads/2020/07/anh-mui-ca-mau-1-1024x427.jpg",
        caption: 'Slide 1'
    },
    {
        img: "https://static.kinhtedothi.vn/w960/images/upload/2022/08/31/dulichbaclieu.png",
        caption: 'Slide 2'
    }
];
const BannerCommon = () => {
    return (
        // <section className="banner overflow-hidden">
        //     <div className="slider">
        //         <div className="swiper-container">
        //             <div className="swiper-wrapper">
        //                 {
        //                     data.map((it, index) => {
        //                         return (
        //                             <div className="swiper-slide" key={index}>
        //                                 <div className="slide-inner">
        //                                     <div
        //                                         className="slide-image"
        //                                         style={{ backgroundImage: `url(${it.img})` }}
        //                                     />
        //                                     <div className="swiper-content container">
        //                                         <h4 className="blue">Bạc liêu, vùng đất tuyệt vời !</h4>
        //                                         <h1 className="white mb-4">
        //                                             Cùng tôi tham gia du lịch Bạc Liêu
        //                                         </h1>
        //                                         <a className="per-btn">
        //                                             <span className="white" href={ROUTE_PATH.DESTINATION}>Khám phá</span>
        //                                             <i className="fa fa-arrow-right white" />
        //                                         </a>
        //                                     </div>
        //                                     <div className="overlay" />
        //                                 </div>
        //                             </div>
        //                         )
        //                     })
        //                 }
        //             </div>
        //             {/* Add Arrows */}
        //             <div className="swiper-button-next" />
        //             <div className="swiper-button-prev" />
        //         </div>
        //     </div>
        // </section>
        // <section class="banner overflow-hidden">
        //     <div class="slider">
        //         <div class="swiper-container">
        //             <div class="swiper-wrapper">
        //                 <div class="swiper-slide">
        //                     <div class="slide-inner">
        //                         <div class="slide-image" style={{ backgroundImage: `url(${data[0].img})` }}></div>
        //                         <div class="swiper-content container">
        //                             <h4 class="blue">Amazing Places</h4>
        //                             <h1 class="white mb-4">Explore Your Life Travel Where You Want</h1>
        //                             <a href="#" class="per-btn">
        //                                 <span class="white">Discover</span>
        //                                 <i class="fa fa-arrow-right white"></i>
        //                             </a>
        //                         </div>
        //                         <div class="overlay"></div>
        //                     </div>
        //                 </div>
        //                 <div class="swiper-slide">
        //                     <div class="slide-inner">
        //                         <div class="slide-image" style={{ backgroundImage: `url(${data[1].img})` }}></div>
        //                         <div class="swiper-content container">
        //                             <h4 class="blue">Feel Free To Travel</h4>
        //                             <h1 class="white mb-4">Make you Free to <span>travel</span> with us</h1>
        //                             <a href="#" class="per-btn">
        //                                 <span class="white">Discover</span>
        //                                 <i class="fa fa-arrow-right white"></i>
        //                             </a>
        //                         </div>
        //                         <div class="overlay"></div>
        //                     </div>
        //                 </div>
        //                 <div class="swiper-slide">
        //                     <div class="slide-inner">
        //                         <div class="slide-image" style={{ backgroundImage: `url(${data[0].img})` }}></div>
        //                         <div class="swiper-content container">
        //                             <h4 class="blue">Trip For Your Kids</h4>
        //                             <h1 class="white mb-4"><span>Sensation Ice Trip</span> Is Coming For Kids</h1>
        //                             <a href="#" class="per-btn">
        //                                 <span class="white">Discover</span>
        //                                 <i class="fa fa-arrow-right white"></i>
        //                             </a>
        //                         </div>
        //                         <div class="overlay"></div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="swiper-button-next"></div>
        //             <div class="swiper-button-prev"></div>
        //         </div>
        //     </div>
        // </section>

        <div id="carouselExampleFade" class="carousel slide carousel-fade">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={slide} class="d-block w-100 opacity-8" alt="..." height={550} />
                    <div className="overlay-custom" />
                </div>
                <div class="carousel-item">
                    <img src={slide1} class="d-block w-100 opacity-8" alt="..." height={550} />
                    <div className="overlay-custom" />
                </div>
                <div className="swiper-content container">
                    <h4 className="blue">Bạc liêu, vùng đất tuyệt vời !</h4>
                    <h1 className="white mb-4">
                        Cùng tôi tham gia du lịch Bạc Liêu
                    </h1>
                    <a className="per-btn">
                        <span className="white" href={ROUTE_PATH.DESTINATION}>Khám phá</span>
                        <i className="fa fa-arrow-right white" />
                    </a>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true">
                    <div class="swiper-button-prev"></div>

                </span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <div class="swiper-button-next"></div>
            </button>
        </div>
    )
}

export default BannerCommon