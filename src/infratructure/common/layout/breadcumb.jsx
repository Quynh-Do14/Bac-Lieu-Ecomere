import React from 'react'

const BreadcumbCommon = (props) => {
    const { title, breadcumb } = props
    return (
        <div>
            <section className="breadcrumb-main pb-0" style={{ backgroundImage: "url(images/bg/bg8.jpg)" }}>
                <div className="breadcrumb-outer">
                    <div className="container">
                        <div className="breadcrumb-content d-md-flex align-items-center pt-10">
                            {/* <h2 style={{fontSize:20}}>{title} </h2> */}
                            <nav aria-label="breadcrumb" style={{bottom: '10%'}}>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">{breadcumb}</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">{title} </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="dot-overlay"></div>
            </section>
        </div>
    )
}

export default BreadcumbCommon