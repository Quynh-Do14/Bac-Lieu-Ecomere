import React from 'react'

const SearchBar = (props) => {
    const { title } = props;
    return (
        <div>

            <div className="sidebar-sticky">
                <div className="sidebar-item mb-4">
                    <form className="form-content">
                        <h4 className="title white">Tìm kiếm {title}</h4>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label className="white">Tìm kiếm theo tên {title}</label>
                                    <div className="input-box">
                                        <i className="flaticon-placeholder"></i>
                                        <select className="niceSelect">
                                            {/* <option value="1">Where are you going?</option>
                                                            <option value="2">Argentina</option>
                                                            <option value="3">Belgium</option>
                                                            <option value="4">Canada</option>
                                                            <option value="5">Denmark</option> */}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="white">Ngày bắt đầu</label>
                                    <div className="input-box">
                                        <i className="flaticon-calendar"></i>
                                        <input id="date-range0" type="text" placeholder="yyyy-mmm-dd" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="white">Ngày kết thúc</label>
                                    <div className="input-box">
                                        <i className="flaticon-calendar"></i>
                                        <input id="date-range1" type="text" placeholder="yyyy-mm-dd" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group mb-0">
                                    <a href="#" className="nir-btn w-100"><i className="fa fa-search"></i> Tìm kiếm</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBar