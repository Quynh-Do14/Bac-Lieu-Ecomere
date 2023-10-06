import React from 'react'
const district = [
    {
        name: "Tp Bạc Liêu",
    },
    {
        name: "Đông Hải"
    },
    {
        name: "Giá Rai"
    }
]
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
                                    <label className="white">Tìm kiếm quận huyện</label>
                                    <div className="input-box">
                                        <i className="flaticon-placeholder"></i>
                                        <select className="niceSelect">
                                            {district.map((it, index) => {
                                                return (
                                                    <option key={index}>{it.name}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label className="white">Tìm kiếm theo tên địa điểm</label>
                                    <div class="input-box">
                                        <i class="fa fa-calendar"></i>
                                        <input id="date-range1" type="text" placeholder="Địa điểm..." />
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