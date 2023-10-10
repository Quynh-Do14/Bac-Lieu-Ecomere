import React, { useEffect, useState } from 'react'
import Constants from '../../core/common/constant';
import api from '../../infratructure/api';

const SearchBar = (props) => {
    const { title, onChangeSearchText, qH, OnChangeQH, onSearch } = props;

    const [dsQuanHuyen, setDsQuanHuyen] = useState([])
    const onGetQuanHuyenAsync = async () => {
        const response = await api.getAllQuanHuyen();
        setDsQuanHuyen(response.data.quanHuyens);
    };
    useEffect(() => {
        onGetQuanHuyenAsync()
    }, [])

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
                                        <select className="niceSelect form-select" value={qH} onChange={OnChangeQH}>
                                            <option value={""} selected>Quận huyện</option>
                                            {dsQuanHuyen.map((it, index) => {
                                                return (
                                                    <option value={it.idQuanHuyen} key={index}>{it.tenQuanHuyen}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label className="white">Tìm kiếm theo tên địa điểm</label>
                                    <div class="input-box">
                                        <i className="flaticon-placeholder"></i>
                                        <input onChange={onChangeSearchText} id="date-range1" type="text" placeholder="Địa điểm..." className="form-select" />
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