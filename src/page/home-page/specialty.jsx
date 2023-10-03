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
        <section class="top-destination overflow-hidden bg-navy pt-9">
            <div class="container">
                <div class="section-title section-title-w text-center mb-5 pb-2 w-50 mx-auto">
                    <h2 class="m-0 white"><span>Đặc </span>Sản</h2>
                    <p class="mb-0 white">Du lịch đã giúp chúng ta hiểu được ý nghĩa của cuộc sống và nó đã giúp chúng ta trở thành những người tốt hơn. Mỗi lần đi du lịch, chúng ta nhìn thế giới bằng con mắt mới.</p>
                </div>
                <div class="desti-inner">
                    <div class="row d-flex align-items-center">
                        {data.map((it, index) => {
                            return (
                                <div class="col-lg-4 col-md-6 p-1" key={index}>
                                    <div class="desti-image">
                                        <img src={it.img} alt="desti" />
                                        <div class="desti-content">
                                            <div class="rating mb-1">
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                            </div>
                                            <h4 class="white mb-0">{it.address}</h4>
                                        </div>
                                        <div class="desti-overlay">
                                            <a href="#" class="nir-btn">
                                                <span class="white">Chi tiết</span>
                                                <i class="fa fa-arrow-right white pl-1"></i>
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