import React from 'react'
import Constants from '../../core/common/constant';
import api from '../../infratructure/api';
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
    // const onGetListDiemDenAsync = async () => {
    //     const response = await api.getAllQuanHuyen(
    //       `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Location.value}&${Constants.Params.limit}=${Constants.PaginationConfigs.Size}`,
    //       setLoading
    //     );
    //     setListDiaDiem(response.data.diaDiems);
    //     // setPagination(response.data.pagination);
    //     // setTotalItem(response.data.totalItems);
    //   };
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
                                        <input id="date-range1" type="text" placeholder="Địa điểm..." />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group mb-0 white">
                                    <a className="nir-btn w-100"><i className="fa fa-search"></i> Tìm kiếm</a>
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