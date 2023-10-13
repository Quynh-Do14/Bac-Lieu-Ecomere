import React, { useEffect, useState } from "react";
import MainLayout from "../../infratructure/common/layout/main-layout";
import BannerCommon from "../../infratructure/common/layout/banner";
import Articles from "./articles";
import Destination from "./destination";
import Festival from "./festival";
import Specialty from "./specialty";
import api from "../../infratructure/api";
import LoadingFullPage from "../../infratructure/common/controls/loading";
import Constants from "../../core/common/constant";
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATH } from "../../core/common/appRouter";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [listTinTuc, setListTinTuc] = useState([]);
  const [listDiaDiem, setListDiaDiem] = useState([]);
  const [listDiaDiemTop2, setListDiaDiemTop2] = useState([]);
  const [listDiaDiemTop4TuTop2, setListDiaDiemTop4TuTop2] = useState([]);
  const [listDacSan, setListDacSan] = useState([]);
  const [listLeHoi, setListLeHoi] = useState([]);

  const navigate = useNavigate();

  const onGetListDiemDenAsync = async () => {
    const response = await api.getAllDiaDiem(
      `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Location.value}&${Constants.Params.limit}=3`,
      setLoading
    );
    setListDiaDiem(response.data.diaDiems);
    // setPagination(response.data.pagination);
    // setTotalItem(response.data.totalItems);
  };

  const onGetTop2DiaDiemDuLich = async () => {
    const response = await api.getAllDiaDiem(
      `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Location.value}&${Constants.Params.limit
      }=${2}`,
      setLoading
    );
    setListDiaDiemTop2(response.data.diaDiems);
    // setPagination(response.data.pagination);
    // setTotalItem(response.data.totalItems);
  };
  const onGetTop4TuTop2DiaDiemDuLich = async () => {
    const response = await api.getAllDiaDiem(
      `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Location.value}&${Constants.Params.limit
      }=${4}&page=2`,
      setLoading
    );
    setListDiaDiemTop4TuTop2(response.data.diaDiems);
    // setPagination(response.data.pagination);
    // setTotalItem(response.data.totalItems);
  };

  const onGetListDacSanAsync = async () => {
    const response = await api.getAllDiaDiem(
      `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Specialty.value}&${Constants.Params.limit}=3`,
      setLoading
    );
    setListDacSan(response.data.diaDiems);
    // setPagination(response.data.pagination);
    // setTotalItem(response.data.totalItems);
  };

  const onGetListLeHoiAsync = async () => {
    const response = await api.getAllDiaDiem(
      `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Festival.value}&${Constants.Params.limit}=4`,
      setLoading
    );
    setListLeHoi(response.data.diaDiems);
    // setPagination(response.data.pagination);
    // setTotalItem(response.data.totalItems);
  };

  const onGetListTinTucAsync = async () => {
    const response = await api.getAllTinTuc(`loaitin?type=1&limit=3`, setLoading);
    setListTinTuc(response.data.tinTucs);
    // setPagination(response.data.pagination);
    // setTotalItem(response.data.totalItems);
  };
  useEffect(() => {
    onGetListDiemDenAsync().then((_) => { });
    onGetListTinTucAsync().then((_) => { });
    onGetListDacSanAsync().then((_) => { });
    onGetListLeHoiAsync().then((_) => { });
    onGetTop2DiaDiemDuLich().then((_) => { });
    onGetTop4TuTop2DiaDiemDuLich().then((_) => { });
  }, []);

  const onNavigate = (id) => {
    navigate(`${(ROUTE_PATH.VIEW_DESTINATION)}?${id}`)
  }

  return (
    <MainLayout>
      <BannerCommon />
      <>
        {/* <div id="preloader">
          <div id="status"></div>
        </div> */}
        {/* why us starts */}
        {/* <section className="featured-us pb-0">
          <div className="container">
            <div className="featured-us-box pt-9">
              <div className="row">
                <div className="col-lg-4 col-md-12 mb-4">
                  <div className="featured-us-item d-sm-flex align-items-center justify-content-between">
                    <div className="featured-us-icon">
                      <i className="flaticon-price pink" />
                    </div>
                    <div className="featured-us-content">
                      <h4 className="mb-1">
                        <a>Giá cả cạnh tranh</a>
                      </h4>
                      <p className="mb-0">
                        Với hơn 500 nhà cung cấp và sức mua 300 triệu thành viên
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 mb-4">
                  <div className="featured-us-item d-sm-flex align-items-center justify-content-between">
                    <div className="featured-us-icon">
                      <i className="flaticon-quality pink" />
                    </div>
                    <div className="featured-us-content">
                      <h4 className="mb-1">
                        <a>Dịch vụ đạt giải thưởng</a>
                      </h4>
                      <p className="mb-0">
                        Du lịch tuyệt vời không cần lo lắng khi biết rằng chúng
                        tôi ở đây nếu bạn cần chúng tôi, 24 giờ một ngày
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 mb-4">
                  <div className="featured-us-item d-sm-flex align-items-center justify-content-between">
                    <div className="featured-us-icon">
                      <i className="flaticon-global pink" />
                    </div>
                    <div className="featured-us-content">
                      <h4 className="mb-1">
                        <a>Bảo hiểm toàn cầu</a>
                      </h4>
                      <p className="mb-0">
                        1.200.000 khách sạn tại hơn 200 quốc gia và khu vực
                        &amp; các chuyến bay tới hơn 5.000 thành phố.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* why us ends */}
        {/* about-us starts */}
        <section className="about-us pb-0 pt-6">
          <div className="container">
            <div className="about-image-box">
              <div className="row d-flex align-items-center justify-content-between">
                <div className="col-lg-6 col-sm-12 mb-4">
                  <div className="about-content">
                    <h4 className="mb-1 blue font-weight-normal">
                      Giới thiệu về Bạc Liêu
                    </h4>
                    <h2>
                      Chúng tôi thực sự tận tâm để mang lại trải nghiệm du lịch
                      tốt nhất cho bạn
                    </h2>
                    <p className="mb-3">
                      Bạc Liêu mảnh đất được mệnh danh quê hương của "công tử
                      Bạc Liêu" hằng năm thu hút rất nhiều khách du lịch trong
                      nước và cả những vị khách du lịch nước. Vậy điều gì khiến
                      du khách hiếu kỳ và lựa chọn du lịch Bạc Liêu làm điểm đến
                      thăm quan khám phá? Nếu bạn muốn biết câu trả lời hãy tìm
                      hiểu mảnh đất Bạc Liêu này cùng với tôi <br />
                      <br />
                      Nói về thế mạnh phát triển du lịch và dịch vụ, Bạc Liêu
                      cũng không hề thua kém các thành phố khác. Cùng chúng tôi
                      điểm qua những địa điểm thú vị không thể bỏ lỡ khi du lịch
                      Bạc Liêu.
                    </p>
                    <div className="about-imagelist">
                      <ul className="d-flex justify-content-between">
                        <li className="mr-2">
                          <img
                            src="images/destination/destination7.jpg"
                            alt=""
                          />
                        </li>
                        <li className="mr-2">
                          <img
                            src="images/destination/destination5.jpg"
                            alt=""
                          />
                        </li>
                        <li className="mr-2">
                          <img
                            src="images/destination/destination6.jpg"
                            alt=""
                          />
                        </li>
                        <li className="mr-2">
                          <img
                            src="images/destination/destination3.jpg"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="images/destination/destination4.jpg"
                            alt=""
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 mb-4">
                  <div className="about-image">
                    <img src="images/destination/destination12.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-us ends */}
        {/* top destination starts */}
        <section className="top-destination overflow-hidden pb-9">
          <div className="container">
            <div className="desti-inner">
              <div className="row d-flex align-items-center">
                <div className="col-lg-4 col-md-6 p-1">
                  <div className="desti-title text-center">
                    <h2 className="white">
                      Du lịch <br />
                      Chuyến đi nghỉ lễ tốt nhất <br />
                      Tại Bạc Liêu
                    </h2>
                    <p className="white mb-0">
                      Nơi đây còn là một vùng đất “phủ” vàng bởi nhiều cánh đồng
                      lúa trù phú và nổi tiếng với câu chuyện công tử Bạc Liêu.
                    </p>
                  </div>
                </div>
                {listDiaDiemTop2.length > 0 &&
                  listDiaDiemTop2.map((v, k) => (
                    <div className="col-lg-4 col-md-6 p-1" key={k}>
                      <div className="desti-image">
                        <img src={v.hinhAnh} alt="desti" height={250} />
                        <div className="desti-content">
                          <div className="rating mb-1">
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                          </div>
                          <h4 className="white mb-0">{v.tenDiaDiem}</h4>
                        </div>
                        <div className="desti-overlay">
                          <a className="nir-btn" onClick={() => onNavigate(v.idDiaDiem)}>
                            <span className="white">Xem ngay</span>
                            <i className="fa fa-arrow-right white pl-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                {listDiaDiemTop4TuTop2.length > 0 &&
                  listDiaDiemTop4TuTop2.map((v, k) => (
                    <div className="col-lg-3 col-md-6 p-1" key={k}>
                      <div className="desti-image">
                        <img src={v.hinhAnh} alt="desti" height={200} />
                        <div className="desti-content">
                          <div className="rating mb-1">
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                          </div>
                          <h4 className="white mb-0">{v.tenDiaDiem}</h4>
                        </div>
                        <div className="desti-overlay">
                          <a className="nir-btn" onClick={() => onNavigate(v.idDiaDiem)}>
                            <span className="white">Xem ngay</span>
                            <i className="fa fa-arrow-right white pl-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div id="particles-js" />
        </section>
        {/* top destination ends */}
        {/* Discount action starts */}
        <section className="discount-action pt-0">
          <div className="container">
            <div className="call-banner">
              <div className="row d-flex align-items-center">
                <div className="col-lg-6 col-md-6 p-0">
                  <div className="call-banner-inner text-center bg-navy">
                    <h4 className="white">
                      MÙA HÈ VỚI NHỮNG DỊCH VỤ VÀ ƯU ĐÃI HẤP DẪN
                    </h4>
                    <h2 className="white mb-4">
                      DÀNH KỲ NGHỈ TỐT NHẤT CÙNG CHÚNG TÔI <br />
                      Du lịch tới Bạc Liêu
                    </h2>
                    <a href={ROUTE_PATH.DESTINATION} className="nir-btn white">
                      Chi tiết{" "}
                      <i className="fa fa-arrow-right white pl-1" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 p-0" />
              </div>
            </div>
          </div>
        </section>
        {/* Discount action Ends */}
        {/* Counter */}
        {/* <section className="counter-main pt-0 pb-6">
          <div className="container">
            <div className="counter text-center">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
                  <div className="counter-item bg-pink">
                    <i className="fa fa-users white mb-1" />
                    <h3 className="value mb-0 white">100</h3>
                    <h4 className="m-0 white">Khách hàng hạnh phúc</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
                  <div className="counter-item bg-pink">
                    <i className="fa fa-plane white mb-1" />
                    <h3 className="value mb-0 white">13</h3>
                    <h4 className="m-0 white">Tham quan tuyệt vời </h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12mb-4">
                  <div className="counter-item bg-pink">
                    <i className="fa fa-chart-bar white mb-1" />
                    <h3 className="value mb-0 white">3472</h3>
                    <h4 className="m-0 white">Trong kinh doanh</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
                  <div className="counter-item bg-pink">
                    <i className="fa fa-support white mb-1" />
                    <h3 className="value mb-0 white">523</h3>
                    <h4 className="m-0 white">Hỗ trợ</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* End Counter */}
        {/* testomonial start */}
        {/* <section
          className="testimonial pb-10 pt-9"
          style={{ backgroundImage: "url(images/bg/bg2.jpg)" }}
        >
          <div className="container">
            <div className="section-title text-center mb-5 pb-2 w-50 mx-auto">
              <h2 className="m-0 white">
                What <span>People Say About Us</span>
              </h2>
              <p className="mb-0 white">
                Travel has helped us to understand the meaning of life and it
                has helped us become better people. Each time we travel, we see
                the world with new eyes.
              </p>
            </div>
            <div className="row review-slider1">
              <div className="col-sm-4">
                <div className="testimonial-item">
                  <div className="testimonial-content mb-5">
                    <div className="testimonial-icon">
                      <i className="fa fa-quote-left" />
                    </div>
                    <p className="description mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                  <div className="author-title d-flex align-items-center">
                    <a>
                      <img src="images/testimonial/img1.jpg" alt="" />
                    </a>
                    <div className="author-in ml-3">
                      <h5 className="m-0 white"> Elison Marks</h5>
                      <div className="rating">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="testimonial-item">
                  <div className="testimonial-content mb-5">
                    <div className="testimonial-icon">
                      <i className="fa fa-quote-left" />
                    </div>
                    <p className="description mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                  <div className="author-title d-flex align-items-center">
                    <a>
                      <img src="images/testimonial/img2.jpg" alt="" />
                    </a>
                    <div className="author-in ml-3">
                      <h5 className="m-0 white">Jared Erondu</h5>
                      <div className="rating">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="testimonial-item">
                  <div className="testimonial-content mb-5">
                    <div className="testimonial-icon">
                      <i className="fa fa-quote-left" />
                    </div>
                    <p className="description mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                  <div className="author-title d-flex align-items-center">
                    <a>
                      <img src="images/testimonial/img3.jpg" alt="" />
                    </a>
                    <div className="author-in ml-3">
                      <h5 className="m-0 white">Kelson Kelly</h5>
                      <div className="rating">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlay" />
        </section> */}
        {/* testimonial ends */}
      </>

      <Destination data={listDiaDiem} />
      <Articles data={listTinTuc} />
      <Specialty data={listDacSan} />
      <Festival data={listLeHoi} />
      <div className="cta-horizon bg-blue pt-4 pb-2">
        <div className="container d-md-flex align-items-center justify-content-between">
          <h4 className="mb-2 white">Bạn muốn có câu hỏi nào về dịch vụ của Bạc Liêu ?</h4>
          <a className="nir-btn-black">Liên hệ chúng tôi ngay !</a>
        </div>
      </div>
      {/* <LoadingFullPage isLoading={loading} /> */}
    </MainLayout>
  );
};

export default HomePage;
