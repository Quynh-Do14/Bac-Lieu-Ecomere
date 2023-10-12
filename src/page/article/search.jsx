import React from 'react'

const SearchBar = ({ value, onChange, onSearch }) => {
    return (
        < div className="form-main-search mt-2 mb-4" >
            <div className="container">
                <div className="form-content w-100">
                    <h3 className="form-title text-center d-inline white">Tìm kiếm</h3>
                    <div className="row w-100">
                        <div className="form-group mb-2 col-lg-12 col-md-12 col-xs-12 ">
                            <div className="input-box">
                                {/* <i className="fa fa-calendar"></i> */}
                                <input value={value} id="" onChange={onChange} type="text" className="form-select" placeholder="Tìm kiếm theo tên..." />
                            </div>
                        </div>
                        {/* <div className="form-group mb-2 col-lg-3 col-md-3 col-xs-3 white ">
                            <a onClick={onSearch} className="nir-btn w-100"><i className="fa fa-search"></i> Tìm kiếm</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SearchBar
