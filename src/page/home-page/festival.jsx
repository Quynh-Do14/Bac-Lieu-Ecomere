import React from 'react'
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
    },
]
const Festival = () => {
    return (
        <div>
            <section className="top-deals bg-grey pt-9">
                <div className="container">
                    <div className="section-title text-center mb-5 pb-2 w-50 mx-auto">
                        <h2 className="m-0">
                            Lễ <span>hội</span>
                        </h2>
                        <p className="mb-0">
                            Du lịch đã giúp chúng ta hiểu được ý nghĩa của cuộc sống và nó đã giúp chúng ta trở thành những người tốt hơn. Mỗi lần đi du lịch, chúng ta nhìn thế giới bằng con mắt mới.
                        </p>
                    </div>
                    <div className="row team-slider">
                        {
                            data.map((it, index) => {
                                return (
                                    <div className="col-lg-4 slider-item" key={index}>
                                        <div className="slider-image">
                                            <img src={it.img} alt="image" />
                                        </div>
                                        <div className="slider-content">
                                            <h6 className="font-weight-normal pink">
                                                <i className="fa fa-map-marker-alt" /> {it.address}
                                            </h6>
                                            <h4>
                                                <a href="#">{it.name}</a>
                                            </h4>
                                            <p>{it.description}</p>
                                            {/* <div className="deal-price">
                                                <p className="price font-weight-bold pink mb-0">
                                                    From <span>$250.00</span>
                                                </p>
                                            </div> */}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Festival