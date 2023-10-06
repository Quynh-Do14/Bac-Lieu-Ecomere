import { Col, Row } from "antd";
import React from "react";
import { showImageCommon } from "../../infratructure/utils/helper";

const Destination = ({ data }) => {
  return (
    <section
      className="trending destination pb-6 pt-9"
      style={{ backgroundImage: "url(images/bg/bg4.jpg)" }}
    >
      <div className="container">
        <div className="section-title section-title-w text-center mb-5 pb-2 w-50 mx-auto">
          <h2 className="m-0 white">
            Khám Phá <strong>Những địa điểm mới</strong>
          </h2>
          <p className="mb-0 white">
            Du lịch đã giúp chúng ta hiểu được ý nghĩa của cuộc sống và nó đã
            giúp chúng ta trở thành những người tốt hơn. Mỗi lần đi du lịch,
            chúng ta nhìn thế giới bằng con mắt mới.
          </p>
        </div>
        <div className="trend-box">
          {/* <div className="price-navtab text-center mb-4">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#historical">Lịch sử</a></li>
                                <li><a data-toggle="tab" href="#weekend">Cuối tuần</a></li>
                                <li><a data-toggle="tab" href="#holidays">Nghỉ lễ</a></li>
                                <li><a data-toggle="tab" href="#special">Đặc biệt</a></li>
                            </ul>
                        </div> */}
          <div className="tab-content">
            <div className="tab-pane fade in active">
              <div className="row">
                {data.map((it, index) => {
                  return (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                      <div className="trend-item">
                        <div className="trend-image">
                          <img
                            src={
                              it.hinhAnh.indexOf("http") == -1
                                ? showImageCommon(it.hinhAnh)
                                : it.hinhAnh
                            }
                            alt="image"
                            height={255}
                          />
                        </div>
                        <div className="trend-content-main">
                          <div className="trend-content">
                            <div className="rating-main d-flex align-items-center pb-1">
                              <div className="rating">
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star checked" />
                              </div>
                              <span className="ml-2">đánh giá từ Google</span>
                            </div>
                            <h4>
                              <a href="#">{it.tenDiaDiem}</a>
                            </h4>
                            <p className="mb-0">
                              <i className="fa fa-eye mr-1 mb-1"></i>{" "}
                              {it.luotXem} lượt xem
                              <i className="fa fa-map-marker mr-1 ml-3" /> Bạc
                              liêu.
                            </p>
                          </div>
                          <div className="trend-last-main">
                            <p className="mb-0 trend-para">{it.moTa.length > 75 ? it.moTa.slice(0, 75) + ' ...' : it.moTa}</p>
                            <div className="trend-last d-flex align-items-center justify-content-between">
                              <p className="mb-0 white d-flex align-items-center">
                                <img
                                  src={it.hinhAnh.indexOf("http") == -1
                                  ? showImageCommon(it.hinhAnh)
                                  : it.hinhAnh}
                                  className="d-author mr-2"
                                  alt=""
                                />{" "}
                                {it.giaVe}
                              </p>
                              <div className="trend-price">
                                <p className="price white mb-0">
                                    <i className="flaticon-like white" />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dot-overlay"></div>
    </section>
  );
};

export default Destination;
