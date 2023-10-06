import React from 'react'

const SearchBar = ({ value, onChange }) => {
    return (
        < div class="form-main-search mt-2 mb-4" >
            <div class="container">
                <div class="form-content w-100">
                    <h3 class="form-title text-center d-inline white">Tìm kiếm</h3>
                    <div class="row w-100">
                        <div class="form-group mb-2 col-lg-9 col-md-9 col-xs-9 ">
                            <div class="input-box">
                                {/* <i class="fa fa-calendar"></i> */}
                                <input value={value} id="" onChange={onChange} type="text" placeholder="Tìm kiếm theo tên..." />
                            </div>
                        </div>
                        <div class="form-group mb-2 col-lg-3 col-md-3 col-xs-3 white ">
                            <a class="nir-btn w-100"><i class="fa fa-search"></i> Tìm kiếm</a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SearchBar
