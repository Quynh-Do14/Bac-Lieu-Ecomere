import { Col, Row } from 'antd'
import React from 'react'
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
const Articles = () => {
    return (
        <div>
            <section className="news pb-2 pt-9">
                <div className="container">
                    <div className="section-title text-center mb-5 pb-2 w-50 mx-auto">
                        <h2 className="m-0">
                            <span>Bài viết</span> hôm nay
                        </h2>
                        <p className="mb-0 ">
                            Du lịch đã giúp chúng ta hiểu được ý nghĩa của cuộc sống và nó đã giúp chúng ta trở thành những người tốt hơn. Mỗi lần đi du lịch, chúng ta nhìn thế giới bằng con mắt mới.
                        </p>
                    </div>
                    <div className="news-outer">
                        <div className="row">
                            {
                                data.map((it, index) => {
                                    return (
                                        <div className="col-lg-4 col-md-12 col-xs-12 mb-4" key={index}>
                                            <div className="news-item overflow-hidden">
                                                <div className="news-image">
                                                    <img src={it.img} alt="image" />
                                                </div>
                                                <div className="news-list mt-2 border-b pb-2 mb-2">
                                                    <ul>
                                                        <li>
                                                            <a href="/detail-article" className="pr-3">
                                                                <i className="fa fa-calendar pink pr-1" />{it.date}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/detail-article" className="pr-3">
                                                                <i className="fa fa-comment pink pr-1" /> {it.review}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/detail-article" className="">
                                                                <i className="fa fa-tag pink pr-1" /> {it.type}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="news-content mt-2">
                                                    <h4 className="pb-2 mb-2 border-b">
                                                        <a href="/detail-article">
                                                            {it.title}
                                                        </a>
                                                    </h4>
                                                    <p className="mb-3">
                                                        {it.description}
                                                    </p>
                                                    {/* <div className="author-img">
                                                        <img src="./images/reviewer/1.jpg" alt="Demo Image" />
                                                        <span>By - Jack Well Fardez</span>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Articles