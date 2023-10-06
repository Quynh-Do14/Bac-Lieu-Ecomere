import React from 'react'

const SearchBarCommon = ({ value, onChange }) => {
    return (
        < div class="form-main-search mt-2 mb-4" >
            <div class="container">
                <div class="form-content w-100">
                    <h3 class="form-title text-center d-inline white">Tìm kiếm</h3>
                    <div class="d-lg-flex align-items-center justify-content-between">
                        <div class="form-group pr-4 m-0">
                            <div class="input-box">
                                {/* <i class="fa fa-calendar"></i> */}
                                <input value={value} id="" onChange={onChange} type="text" placeholder="Tìm kiếm theo tên..." />
                            </div>
                        </div>
                        <div class="form-group pr-4 m-0">
                            <div class="input-box">
                                <input id="date-range0" type="date" placeholder="Depart Date"/>
                            </div>
                        </div>

                        <div class="form-group pr-4 m-0">
                            <div class="input-box">
                                <input id="date-range1" type="date" placeholder="Return Date"/>
                            </div>
                        </div>
 
                        <div class="form-group m-0">
                            <a href="#" class="nir-btn w-100"><i class="fa fa-search"></i> Tìm kiếm</a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SearchBarCommon
