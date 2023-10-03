import { Carousel } from 'antd';
import React from 'react'

const contentStyle = {
    margin: 0,
    width: "100%",
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const data = [
    {
        img: "https://topal.vn/wp-content/uploads/2020/07/anh-mui-ca-mau-1-1024x427.jpg",
        caption: 'Slide 1'
    },
    {
        img: "https://topal.vn/wp-content/uploads/2020/07/anh-mui-ca-mau-1-1024x427.jpg",
        caption: 'Slide 2'
    }
];
const BannerCommon = () => {
    // const onChange = (currentSlide) => {
    //     console.log(currentSlide);
    // };
    return (
        // <section className="banner overflow-hidden">
        //     <div className="slider">
        //         <div className="swiper-container">
        //             <div className="swiper-wrapper">
        //                 <Carousel afterChange={onChange}>
        //                     {
        //                         data.map((it, index) => {
        //                             return (
        //                                 <div key={index}>
        //                                     <img style={contentStyle} src={it.img} alt='' />
        //                                 </div>
        //                             )
        //                         })
        //                     }
        //                 </Carousel>
        //             </div>

        //         </div>
        //     </div>
        // </section >
        <section className="banner overflow-hidden">
            <div className="slider">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            data.map((it, index) => {
                                return (
                                    <div className="swiper-slide" key={index}>
                                        <div className="slide-inner">
                                            <div
                                                className="slide-image"
                                                style={{ backgroundImage: `url(${it.img})` }}
                                            />
                                            <div className="swiper-content container">
                                                <h4 className="blue">Bạc liêu, vùng đất tuyệt vời !</h4>
                                                <h1 className="white mb-4">
                                                    Cùng tôi tham gia du lịch Bạc Liêu
                                                </h1>
                                                <a href="#" className="per-btn">
                                                    <span className="white">Khám phá</span>
                                                    <i className="fa fa-arrow-right white" />
                                                </a>
                                            </div>
                                            <div className="overlay" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* Add Arrows */}
                    <div className="swiper-button-next" />
                    <div className="swiper-button-prev" />
                </div>
            </div>
        </section>
    )
}

export default BannerCommon