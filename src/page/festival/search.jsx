import React from 'react'

const SearchBar = (props) => {
    const {
        title,
        searchText,
        onChangeSearchText,
        startDate,
        onChangeStartDate,
        endDate,
        onChangeEndDate,
        onSearch
    } = props;
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
                                        <input onChange={onChangeSearchText} value={searchText} id="" type="text" placeholder="Địa điểm..." />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="white">Ngày bắt đầu</label>
                                    <div className="input-box-2">
                                        {/* <i className="flaticon-calendar"></i> */}
                                        <input  onChange={onChangeStartDate} value={startDate} id="" type="date" placeholder="yyyy-mmm-dd" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="white">Ngày kết thúc</label>
                                    <div className="input-box-2">
                                        {/* <i className="flaticon-calendar"></i> */}
                                        <input onChange={onChangeEndDate} value={endDate} id="" type="date" placeholder="yyyy-mm-dd" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group mb-0 white">
                                    <a onClick={onSearch} className="nir-btn w-100"><i className="fa fa-search"></i> Tìm kiếm</a>
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