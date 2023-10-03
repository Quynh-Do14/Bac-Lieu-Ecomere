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
const Specialty = () => {
    return (
        <section className="top-destination overflow-hidden bg-navy pt-9">
            <div className="container">
                <div className="section-title section-title-w text-center mb-5 pb-2 w-50 mx-auto">
                    <h2 className="m-0 white"><span>Đặc </span>Sản</h2>
                    <p className="mb-0 white">Du lịch đã giúp chúng ta hiểu được ý nghĩa của cuộc sống và nó đã giúp chúng ta trở thành những người tốt hơn. Mỗi lần đi du lịch, chúng ta nhìn thế giới bằng con mắt mới.</p>
                </div>
                <div className="desti-inner">
                    <div className="row d-flex align-items-center">
                        {data.map((it, index) => {
                            return (
                                <div className="col-lg-4 col-md-6 p-1" key={index}>
                                    <div className="desti-image">
                                        <img src={it.img} alt="desti" />
                                        <div className="desti-content">
                                            <div className="rating mb-1">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                            </div>
                                            <h4 className="white mb-0">{it.address}</h4>
                                        </div>
                                        <div className="desti-overlay">
                                            <a href="#" className="nir-btn">
                                                <span className="white">Chi tiết</span>
                                                <i className="fa fa-arrow-right white pl-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Specialty