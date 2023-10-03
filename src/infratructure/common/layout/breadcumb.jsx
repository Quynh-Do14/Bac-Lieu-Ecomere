import React from 'react'

const BreadcumbCommon = (props) => {
    const { title, breadcumb } = props
    return (
        <div>
            <section class="breadcrumb-main pb-0" style={{ backgroundImage: "url(images / bg / bg8.jpg)" }}>
                <div class="breadcrumb-outer pt-10">
                    <div class="container">
                        <div class="breadcrumb-content d-md-flex align-items-center pt-10">
                            <h2 class="mb-0">{title} </h2>
                            <nav aria-label="breadcrumb">
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">{breadcumb}</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">{title} </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="dot-overlay"></div>
            </section>
        </div>
    )
}

export default BreadcumbCommon