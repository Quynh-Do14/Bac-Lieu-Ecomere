import React from "react";

const SearchBarCommon = ({
  value,
  onChange,
  dsQuanHuyen,
  dsDanhMucDiaDiem,
  onSelectDanhMuc,
  onSelectQuanHuyen
}) => {
  return (
    <div className="form-main-search mt-2 mb-4">
      <div className="container mt-n5">
        <div className="form-content w-100">
          <h3 className="form-title text-center d-inline white">Tìm kiếm</h3>
          <div className="d-lg-flex align-items-center justify-content-between">
            <div className="form-group pr-4 m-0">
              <div className="input-box">
                {/* <i className="fa fa-calendar"></i> */}
                <input
                  value={value}
                  id="searchInputDiaDiem"
                  onChange={onChange}
                  type="text"
                  placeholder="Tìm kiếm theo tên..."
                  className="form-select"
                />
              </div>
            </div>
            <div className="form-group pr-4 m-0">
              <div className="input-box">
                <select
                  className="niceSelect form-select"
                  id="searchSelectDiaDiemQuanHuyen"
                  onChange={onSelectQuanHuyen}
                >
                  <option value={""} selected>
                    Quận/Huyện
                  </option>
                  {dsQuanHuyen.length > 0 &&
                    dsQuanHuyen.map((v, k) => (
                      <option key={k} value={v.idQuanHuyen}>
                        {v.tenQuanHuyen}
                      </option>
                    ))}
                  {/* {district.map((it, index) => {
                                                return (
                                                    <option key={index}>{it.name}</option>
                                                )
                                            })} */}
                </select>
              </div>
            </div>

            <div className="form-group pr-4 m-0">
              <div className="input-box">
                <select className="niceSelect form-select" id="searchSelectDiaDiemDanhMuc" onChange={onSelectDanhMuc}>
                  <option value={""} selected>
                    Loại hình du lịch
                  </option>
                  {dsDanhMucDiaDiem.length > 0 &&
                    dsDanhMucDiaDiem.map((v, k) => (
                      <option key={k} value={v.idDanhMucDiaDiem}>
                        {v.tenDanhMuc}
                      </option>
                    ))}
                  {/* {district.map((it, index) => {
                                                return (
                                                    <option key={index}>{it.name}</option>
                                                )
                                            })} */}
                </select>
              </div>
            </div>

            {/* <div className="form-group m-0 white">
              <button
                className="nir-btn w-100"
                onClick={()=>searchSelect(
                  document.getElementById("searchInputDiaDiem").value,
                  document.getElementById("searchSelectDiaDiemQuanHuyen").value,
                  document.getElementById("searchSelectDiaDiemDanhMuc").value
                )}
              >
                <i className="fa fa-search"></i> Tìm kiếm
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBarCommon;
