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

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [listTinTuc, setListTinTuc] = useState([]);
  const [listDiaDiem, setListDiaDiem] = useState([]);
  const [listDacSan, setListDacSan] = useState([]);
  const [listLeHoi, setListLeHoi] = useState([]);

  const [pageSize, setPageSize] = useState(10);


    const onGetListDiemDenAsync = async () => {
        const response = await api.getAllDiaDiem(
            `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Location.value}&${Constants.Params.limit}=${Constants.PaginationConfigs.Size}`,
            setLoading
        )
        setListDiaDiem(response.data.diaDiems);
        // setPagination(response.data.pagination);
        // setTotalItem(response.data.totalItems);
    }

  const onGetListDacSanAsync = async () => {
    const response = await api.getAllDiaDiem(
      `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Specialty.value}`,
      setLoading
    );
    setListDacSan(response.data.diaDiems);
    // setPagination(response.data.pagination);
    // setTotalItem(response.data.totalItems);
  };

  const onGetListLeHoiAsync = async () => {
    const response = await api.getAllDiaDiem(
      `dichvu/top?idDanhMuc=${Constants.CategoryConfig.Festival.value}`,
      setLoading
    );
    setListLeHoi(response.data.diaDiems);
    // setPagination(response.data.pagination);
    // setTotalItem(response.data.totalItems);
  };

  const onGetListTinTucAsync = async () => {
    const response = await api.getAllTinTuc(`loaitin?type=1`, setLoading);
    setListTinTuc(response.data.tinTucs);
    // setPagination(response.data.pagination);
    // setTotalItem(response.data.totalItems);
  };
  useEffect(() => {
    onGetListDiemDenAsync().then((_) => {});
    onGetListTinTucAsync().then((_) => {});
    onGetListDacSanAsync().then((_) => {});
    onGetListLeHoiAsync().then((_) => {});
  }, []);

  return (
    <MainLayout>
      <LoadingFullPage isLoading={loading} />
      <BannerCommon />
      <>
        {/* why us starts */}
        <section className="featured-us pb-0">
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
                        <a href="#">Competetive Pricing</a>
                      </h4>
                      <p className="mb-0">
                        With 500+ suppliers and the purchasing power of 300
                        million members
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
                        <a href="#">Award Winning Service</a>
                      </h4>
                      <p className="mb-0">
                        Fabulous Travel worry free knowing that we're here if
                        you need us, 24 hours a day
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
                        <a href="#">Worldwide Coverage</a>
                      </h4>
                      <p className="mb-0">
                        1,200,000 hotels in more than 200 countries and regions
                        &amp; flights to over 5,000 citites.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* why us ends */}
        {/* about-us starts */}
        <section className="about-us pb-0 pt-6">
          <div className="container">
            <div className="about-image-box">
              <div className="row d-flex align-items-center justify-content-between">
                <div className="col-lg-6 col-sm-12 mb-4">
                  <div className="about-content">
                    <h4 className="mb-1 blue font-weight-normal">
                      About Yatriiworld
                    </h4>
                    <h2>
                      We're truely dedicated to make your travel experience best
                    </h2>
                    <p className="mb-3">
                      Top Tour Operators and Travel Agency. We offering in total
                      793 tours and holidays throughout the world. Combined we
                      have received 1532 customer reviews and an average rating
                      of 5 out of 5 stars. <br />
                      <br />
                      Travel has helped us to understand the meaning of life and
                      it has helped us become better people. Each time we
                      travel, we see the world with new eyes.
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
        <Articles data={listTinTuc} />
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
                
                <div className="col-lg-4 col-md-6 p-1">
                  <div className="desti-image">
                    <img
                      src="images/destination/destination3.jpg"
                      alt="desti"
                    />
                    <div className="desti-content">
                      <div className="rating mb-1">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                      </div>
                      <h4 className="white mb-0">New York Tour</h4>
                    </div>
                    <div className="desti-overlay">
                      <a href="#" className="nir-btn">
                        <span className="white">Book Now</span>
                        <i className="fa fa-arrow-right white pl-1" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 p-1">
                  <div className="desti-image">
                    <img
                      src="images/destination/destination4.jpg"
                      alt="desti"
                    />
                    <div className="desti-content">
                      <div className="rating mb-1">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                      </div>
                      <h4 className="white mb-0">Armania Tour</h4>
                    </div>
                    <div className="desti-overlay">
                      <a href="#" className="nir-btn">
                        <span className="white">Book Now</span>
                        <i className="fa fa-arrow-right white pl-1" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 p-1">
                  <div className="desti-image">
                    <img
                      src="images/destination/destination5.jpg"
                      alt="desti"
                    />
                    <div className="desti-content">
                      <div className="rating mb-1">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                      </div>
                      <h4 className="white mb-0">Manchester Tour</h4>
                    </div>
                    <div className="desti-overlay">
                      <a href="#" className="nir-btn">
                        <span className="white">Book Now</span>
                        <i className="fa fa-arrow-right white pl-1" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 p-1">
                  <div className="desti-image">
                    <img
                      src="images/destination/destination7.jpg"
                      alt="desti"
                    />
                    <div className="desti-content">
                      <div className="rating mb-1">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                      </div>
                      <h4 className="white mb-0">kathmandu Tour</h4>
                    </div>
                    <div className="desti-overlay">
                      <a href="#" className="nir-btn">
                        <span className="white">Book Now</span>
                        <i className="fa fa-arrow-right white pl-1" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 p-1">
                  <div className="desti-image">
                    <img
                      src="images/destination/destination8.jpg"
                      alt="desti"
                    />
                    <div className="desti-content">
                      <div className="rating mb-1">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                      </div>
                      <h4 className="white mb-0">Tokyo Tour</h4>
                    </div>
                    <div className="desti-overlay">
                      <a href="#" className="nir-btn">
                        <span className="white">Book Now</span>
                        <i className="fa fa-arrow-right white pl-1" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12 p-1">
                  <div className="desti-image">
                    <img
                      src="images/destination/destination9.jpg"
                      alt="desti"
                    />
                    <div className="desti-content">
                      <div className="rating mb-1">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                      </div>
                      <h4 className="white mb-0">Norwich Tour</h4>
                    </div>
                    <div className="desti-overlay">
                      <a href="#" className="nir-btn">
                        <span className="white">Book Now</span>
                        <i className="fa fa-arrow-right white pl-1" />
                      </a>
                    </div>
                  </div>
                </div>
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
                    <h4 className="white">SUMMER SPECIAL UPTO 25% OFF</h4>
                    <h2 className="white mb-4">
                      SPEND THE BEST VACATION WITH US <br />
                      The nights of Thailand
                    </h2>
                    <a href="#" className="nir-btn">
                      View Details{" "}
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
        <section className="counter-main pt-0 pb-6">
          <div className="container">
            <div className="counter text-center">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
                  <div className="counter-item bg-pink">
                    <i className="fa fa-users white mb-1" />
                    <h3 className="value mb-0 white">100</h3>
                    <h4 className="m-0 white">Happy Customers</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
                  <div className="counter-item bg-pink">
                    <i className="fa fa-plane white mb-1" />
                    <h3 className="value mb-0 white">50</h3>
                    <h4 className="m-0 white">Amazing Tours </h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12mb-4">
                  <div className="counter-item bg-pink">
                    <i className="fa fa-chart-bar white mb-1" />
                    <h3 className="value mb-0 white">3472</h3>
                    <h4 className="m-0 white">In Business</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
                  <div className="counter-item bg-pink">
                    <i className="fa fa-support white mb-1" />
                    <h3 className="value mb-0 white">523</h3>
                    <h4 className="m-0 white">Support Cases </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Counter */}
        {/* Fav destination Starts */}
        <section
          className="trending destination pb-6 pt-9"
          style={{ backgroundImage: "url(images/bg/bg4.jpg)" }}
        >
          <div className="container">
            <div className="section-title section-title-w text-center mb-5 pb-2 w-50 mx-auto">
              <h2 className="m-0 white">
                Find Your <strong>Favourite Destination</strong>
              </h2>
              <p className="mb-0 white">
                Travel has helped us to understand the meaning of life and it
                has helped us become better people. Each time we travel, we see
                the world with new eyes.
              </p>
            </div>
            <div className="trend-box">
              <div className="price-navtab text-center mb-4">
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a data-toggle="tab" href="#historical">
                      Historical
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#weekend">
                      Weekend
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#holidays">
                      Holidays
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#special">
                      Special Tour
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div id="historical" className="tab-pane fade in active">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="trend-item">
                        <div className="trend-image">
                          <img
                            src="images/trending/trending8.jpg"
                            alt="image"
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
                              <span className="ml-2">38 Reviews</span>
                            </div>
                            <h4>
                              <a href="#">Nepal Special Tour</a>
                            </h4>
                            <p className="mb-0">
                              <i className="fa fa-eye mr-1" /> 852 Visiting
                              Places{" "}
                              <i className="fa fa-map-marker mr-1 ml-3" />{" "}
                              Nepal.
                            </p>
                          </div>
                          <div className="trend-last-main">
                            <p className="mb-0 trend-para">
                              A wonderful little cottage right on the seashore -
                              perfect for exploring.
                            </p>
                            <div className="trend-last d-flex align-items-center justify-content-between">
                              <p className="mb-0 white d-flex align-items-center">
                                <img
                                  src="images/reviewer/1.jpg"
                                  className="d-author mr-2"
                                  alt=""
                                />{" "}
                                Thu Astudillo
                              </p>
                              <div className="trend-price">
                                <p className="price white mb-0">
                                  <a href="#">
                                    <i className="flaticon-like white" />
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-lg-4 col-md-6 mb-4">
                      <div className="trend-item">
                        <div className="trend-image">
                          <img
                            src="images/trending/trending11.jpg"
                            alt="image"
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
                              <span className="ml-2">38 Reviews</span>
                            </div>
                            <h4>
                              <a href="#">Canada New Year Tour</a>
                            </h4>
                            <p className="mb-0">
                              <i className="fa fa-eye mr-1" /> 615 Visiting
                              Places{" "}
                              <i className="fa fa-map-marker mr-1 ml-3" />{" "}
                              Canada.
                            </p>
                          </div>
                          <div className="trend-last-main">
                            <p className="mb-0 trend-para">
                              A wonderful little cottage right on the seashore -
                              perfect for exploring.
                            </p>
                            <div className="trend-last d-flex align-items-center justify-content-between">
                              <p className="mb-0 white d-flex align-items-center">
                                <img
                                  src="images/reviewer/2.jpg"
                                  className="d-author mr-2"
                                  alt=""
                                />{" "}
                                Thu Astudillo
                              </p>
                              <div className="trend-price">
                                <p className="price white mb-0">
                                  <a href="#">
                                    <i className="flaticon-like white" />
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-lg-4 col-md-12 mb-4">
                      <div className="trend-item">
                        <div className="trend-image">
                          <img
                            src="images/trending/trending12.jpg"
                            alt="image"
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
                              <span className="ml-2">25 Reviews</span>
                            </div>
                            <h4>
                              <a href="#">America Christmas Tour</a>
                            </h4>
                            <p className="mb-0">
                              <i className="fa fa-eye mr-1" /> 926 Visiting
                              Places{" "}
                              <i className="fa fa-map-marker mr-1 ml-3" />{" "}
                              America.
                            </p>
                          </div>
                          <div className="trend-last-main">
                            <p className="mb-0 trend-para">
                              A wonderful little cottage right on the seashore -
                              perfect for exploring.
                            </p>
                            <div className="trend-last d-flex align-items-center justify-content-between">
                              <p className="mb-0 white d-flex align-items-center">
                                <img
                                  src="images/reviewer/1.jpg"
                                  className="d-author mr-2"
                                  alt=""
                                />{" "}
                                Thu Astudillo
                              </p>
                              <div className="trend-price">
                                <p className="price white mb-0">
                                  <a href="#">
                                    <i className="flaticon-like white" />
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="weekend" className="tab-pane fade">
                  <div className="row">
                    <div className=" col-lg-4 col-md-6 mb-4">
                      <div className="trend-item">
                        <div className="trend-image">
                          <img
                            src="images/trending/trending14.jpg"
                            alt="image"
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
                              <span className="ml-2">38 Reviews</span>
                            </div>
                            <h4>
                              <a href="#">Nepal Weekend Tour</a>
                            </h4>
                            <p className="mb-0">
                              <i className="fa fa-eye mr-1" /> 852 Visiting
                              Places{" "}
                              <i className="fa fa-map-marker mr-1 ml-3" />{" "}
                              Nepal.
                            </p>
                          </div>
                          <div className="trend-last-main">
                            <p className="mb-0 trend-para">
                              A wonderful little cottage right on the seashore -
                              perfect for exploring.
                            </p>
                            <div className="trend-last d-flex align-items-center justify-content-between">
                              <p className="mb-0 white d-flex align-items-center">
                                <img
                                  src="images/reviewer/1.jpg"
                                  className="d-author mr-2"
                                  alt=""
                                />{" "}
                                Thu Astudillo
                              </p>
                              <div className="trend-price">
                                <p className="price white mb-0">
                                  <a href="#">
                                    <i className="flaticon-like white" />
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-lg-4 col-md-6 mb-4">
                      <div className="trend-item">
                        <div className="trend-image">
                          <img
                            src="images/trending/trending13.jpg"
                            alt="image"
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
                              <span className="ml-2">38 Reviews</span>
                            </div>
                            <h4>
                              <a href="#">Canada Weekend Tour</a>
                            </h4>
                            <p className="mb-0">
                              <i className="fa fa-eye mr-1" /> 615 Visiting
                              Places{" "}
                              <i className="fa fa-map-marker mr-1 ml-3" />{" "}
                              Canada.
                            </p>
                          </div>
                          <div className="trend-last-main">
                            <p className="mb-0 trend-para">
                              A wonderful little cottage right on the seashore -
                              perfect for exploring.
                            </p>
                            <div className="trend-last d-flex align-items-center justify-content-between">
                              <p className="mb-0 white d-flex align-items-center">
                                <img
                                  src="images/reviewer/2.jpg"
                                  className="d-author mr-2"
                                  alt=""
                                />{" "}
                                Thu Astudillo
                              </p>
                              <div className="trend-price">
                                <p className="price white mb-0">
                                  <a href="#">
                                    <i className="flaticon-like white" />
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-lg-4 col-md-12 mb-4">
                      <div className="trend-item">
                        <div className="trend-image">
                          <img
                            src="images/trending/trending7.jpg"
                            alt="image"
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
                              <span className="ml-2">25 Reviews</span>
                            </div>
                            <h4>
                              <a href="#">America Weekend Tour</a>
                            </h4>
                            <p className="mb-0">
                              <i className="fa fa-eye mr-1" /> 926 Visiting
                              Places{" "}
                              <i className="fa fa-map-marker mr-1 ml-3" />{" "}
                              America.
                            </p>
                          </div>
                          <div className="trend-last-main">
                            <p className="mb-0 trend-para">
                              A wonderful little cottage right on the seashore -
                              perfect for exploring.
                            </p>
                            <div className="trend-last d-flex align-items-center justify-content-between">
                              <p className="mb-0 white d-flex align-items-center">
                                <img
                                  src="images/reviewer/1.jpg"
                                  className="d-author mr-2"
                                  alt=""
                                />{" "}
                                Thu Astudillo
                              </p>
                              <div className="trend-price">
                                <p className="price white mb-0">
                                  <a href="#">
                                    <i className="flaticon-like white" />
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="holidays" className="tab-pane fade">
                  <div className="row">
                    <div className=" col-lg-4 col-md-6 mb-4">
                      <div className="trend-item">
                        <div className="trend-image">
                          <img
                            src="images/trending/trending2.jpg"
                            alt="image"
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
                              <span className="ml-2">38 Reviews</span>
                            </div>
                            <h4>
                              <a href="#">Nepal Holidays Tour</a>
                            </h4>
                            <p className="mb-0">
                              <i className="fa fa-eye mr-1" /> 852 Visiting
                              Places{" "}
                              <i className="fa fa-map-marker mr-1 ml-3" />{" "}
                              Nepal.
                            </p>
                          </div>
                          <div className="trend-last-main">
                            <p className="mb-0 trend-para">
                              A wonderful little cottage right on the seashore -
                              perfect for exploring.
                            </p>
                            <div className="trend-last d-flex align-items-center justify-content-between">
                              <p className="mb-0 white d-flex align-items-center">
                                <img
                                  src="images/reviewer/1.jpg"
                                  className="d-author mr-2"
                                  alt=""
                                />{" "}
                                Thu Astudillo
                              </p>
                              <div className="trend-price">
                                <p className="price white mb-0">
                                  <a href="#">
                                    <i className="flaticon-like white" />
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-lg-4 col-md-6 mb-4">
                      <div className="trend-item">
                        <div className="trend-image">
                          <img
                            src="images/trending/trending3.jpg"
                            alt="image"
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
                              <span className="ml-2">38 Reviews</span>
                            </div>
                            <h4>
                              <a href="#">Canada Holidays Tour</a>
                            </h4>
                            <p className="mb-0">
                              <i className="fa fa-eye mr-1" /> 615 Visiting
                              Places{" "}
                              <i className="fa fa-map-marker mr-1 ml-3" />{" "}
                              Canada.
                            </p>
                          </div>
                          <div className="trend-last-main">
                            <p className="mb-0 trend-para">
                              A wonderful little cottage right on the seashore -
                              perfect for exploring.
                            </p>
                            <div className="trend-last d-flex align-items-center justify-content-between">
                              <p className="mb-0 white d-flex align-items-center">
                                <img
                                  src="images/reviewer/2.jpg"
                                  className="d-author mr-2"
                                  alt=""
                                />{" "}
                                Thu Astudillo
                              </p>
                              <div className="trend-price">
                                <p className="price white mb-0">
                                  <a href="#">
                                    <i className="flaticon-like white" />
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-lg-4 col-md-12 mb-4">
                      <div className="trend-item">
                        <div className="trend-image">
                          <img
                            src="images/trending/trending4.jpg"
                            alt="image"
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
                              <span className="ml-2">25 Reviews</span>
                            </div>
                            <h4>
                              <a href="#">America Holidays Tour</a>
                            </h4>
                            <p className="mb-0">
                              <i className="fa fa-eye mr-1" /> 926 Visiting
                              Places{" "}
                              <i className="fa fa-map-marker mr-1 ml-3" />{" "}
                              America.
                            </p>
                          </div>
                          <div className="trend-last-main">
                            <p className="mb-0 trend-para">
                              A wonderful little cottage right on the seashore -
                              perfect for exploring.
                            </p>
                            <div className="trend-last d-flex align-items-center justify-content-between">
                              <p className="mb-0 white d-flex align-items-center">
                                <img
                                  src="images/reviewer/1.jpg"
                                  className="d-author mr-2"
                                  alt=""
                                />{" "}
                                Thu Astudillo
                              </p>
                              <div className="trend-price">
                                <p className="price white mb-0">
                                  <a href="#">
                                    <i className="flaticon-like white" />
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="special" className="tab-pane fade">
                  <div className="row">
                    <div className=" col-lg-4 col-md-6 mb-4">
                      <div className="trend-item">
                        <div className="trend-image">
                          <img
                            src="images/trending/trending6.jpg"
                            alt="image"
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
                              <span className="ml-2">38 Reviews</span>
                            </div>
                            <h4>
                              <a href="#">Nepal Special Tour</a>
                            </h4>
                            <p className="mb-0">
                              <i className="fa fa-eye mr-1" /> 852 Visiting
                              Places{" "}
                              <i className="fa fa-map-marker mr-1 ml-3" />{" "}
                              Nepal.
                            </p>
                          </div>
                          <div className="trend-last-main">
                            <p className="mb-0 trend-para">
                              A wonderful little cottage right on the seashore -
                              perfect for exploring.
                            </p>
                            <div className="trend-last d-flex align-items-center justify-content-between">
                              <p className="mb-0 white d-flex align-items-center">
                                <img
                                  src="images/reviewer/1.jpg"
                                  className="d-author mr-2"
                                  alt=""
                                />{" "}
                                Thu Astudillo
                              </p>
                              <div className="trend-price">
                                <p className="price white mb-0">
                                  <a href="#">
                                    <i className="flaticon-like white" />
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-lg-4 col-md-6 mb-4">
                      <div className="trend-item">
                        <div className="trend-image">
                          <img
                            src="images/trending/trending5.jpg"
                            alt="image"
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
                              <span className="ml-2">38 Reviews</span>
                            </div>
                            <h4>
                              <a href="#">Canada Special Tour</a>
                            </h4>
                            <p className="mb-0">
                              <i className="fa fa-eye mr-1" /> 615 Visiting
                              Places{" "}
                              <i className="fa fa-map-marker mr-1 ml-3" />{" "}
                              Canada.
                            </p>
                          </div>
                          <div className="trend-last-main">
                            <p className="mb-0 trend-para">
                              A wonderful little cottage right on the seashore -
                              perfect for exploring.
                            </p>
                            <div className="trend-last d-flex align-items-center justify-content-between">
                              <p className="mb-0 white d-flex align-items-center">
                                <img
                                  src="images/reviewer/2.jpg"
                                  className="d-author mr-2"
                                  alt=""
                                />{" "}
                                Thu Astudillo
                              </p>
                              <div className="trend-price">
                                <p className="price white mb-0">
                                  <a href="#">
                                    <i className="flaticon-like white" />
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-lg-4 col-md-12 mb-4">
                      <div className="trend-item">
                        <div className="trend-image">
                          <img
                            src="images/trending/trending9.jpg"
                            alt="image"
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
                              <span className="ml-2">25 Reviews</span>
                            </div>
                            <h4>
                              <a href="#">America Special Tour</a>
                            </h4>
                            <p className="mb-0">
                              <i className="fa fa-eye mr-1" /> 926 Visiting
                              Places{" "}
                              <i className="fa fa-map-marker mr-1 ml-3" />{" "}
                              America.
                            </p>
                          </div>
                          <div className="trend-last-main">
                            <p className="mb-0 trend-para">
                              A wonderful little cottage right on the seashore -
                              perfect for exploring.
                            </p>
                            <div className="trend-last d-flex align-items-center justify-content-between">
                              <p className="mb-0 white d-flex align-items-center">
                                <img
                                  src="images/reviewer/1.jpg"
                                  className="d-author mr-2"
                                  alt=""
                                />{" "}
                                Thu Astudillo
                              </p>
                              <div className="trend-price">
                                <p className="price white mb-0">
                                  <a href="#">
                                    <i className="flaticon-like white" />
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dot-overlay" />
        </section>
        {/* Fav destination Ends */}
        {/* top deal starts */}
        <section className="top-deals bg-grey pt-9">
          <div className="container">
            <div className="section-title text-center mb-5 pb-2 w-50 mx-auto">
              <h2 className="m-0">
                Today's <span>Top Deal</span>
              </h2>
              <p className="mb-0">
                Travel has helped us to understand the meaning of life and it
                has helped us become better people. Each time we travel, we see
                the world with new eyes.
              </p>
            </div>
            <div className="row team-slider">
              <div className="col-lg-4 slider-item">
                <div className="slider-image">
                  <img src="images/new-deal/deal1.jpg" alt="image" />
                </div>
                <div className="slider-content">
                  <h6 className="font-weight-normal pink">
                    <i className="fa fa-map-marker-alt" /> United Kingdom
                  </h6>
                  <h4>
                    <a href="#">Earning Asiana Club Miles</a>
                  </h4>
                  <p>With upto 30% Off, experience Europe your way!</p>
                  <div className="deal-price">
                    <p className="price font-weight-bold pink mb-0">
                      From <span>$250.00</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 slider-item">
                <div className="slider-image">
                  <img src="images/new-deal/deal2.jpg" alt="image" />
                </div>
                <div className="slider-content">
                  <h6 className="font-weight-normal pink">
                    <i className="fa fa-map-marker-alt" /> Thailand
                  </h6>
                  <h4>
                    <a href="#">Save big on hotels!</a>
                  </h4>
                  <p>With upto 30% Off, experience Europe your way!</p>
                  <div className="deal-price">
                    <p className="price font-weight-bold pink mb-0">
                      From <span>$250.00</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 slider-item">
                <div className="slider-image">
                  <img src="images/new-deal/deal3.jpg" alt="image" />
                </div>
                <div className="slider-content">
                  <h6 className="font-weight-normal pink">
                    <i className="fa fa-map-marker-alt" /> South Korea
                  </h6>
                  <h4>
                    <a href="#">Experience Europe Your Way</a>
                  </h4>
                  <p>With upto 30% Off, experience Europe your way!</p>
                  <div className="deal-price">
                    <p className="price font-weight-bold pink mb-0">
                      From <span>$250.00</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 slider-item">
                <div className="slider-image">
                  <img src="images/new-deal/deal4.jpg" alt="image" />
                </div>
                <div className="slider-content">
                  <h6 className="font-weight-normal pink">
                    <i className="fa fa-map-marker-alt" /> Germany
                  </h6>
                  <h4>
                    <a href="#">Earning Asiana Club Miles</a>
                  </h4>
                  <p>With upto 30% Off, experience Europe your way!</p>
                  <div className="deal-price">
                    <p className="price font-weight-bold pink mb-0">
                      From <span>$250.00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* top deal ends */}
        {/* testomonial start */}
        <section
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
                    <a href="#">
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
                    <a href="#">
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
                    <a href="#">
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
        </section>
        {/* testimonial ends */}
        {/* Instagram starts */}
        <section className="insta-main p-0">
          <div className="insta-inner">
            <div className="follow-button">
              <h5 className="m-0">
                <a href="#" title="">
                  Follow on Instagram
                </a>
              </h5>
            </div>
            <div className="row attract-slider">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="insta-image">
                  <a href="#">
                    <img src="images/insta/ins-3.jpg" alt="insta" />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="insta-image">
                  <a href="#">
                    <img src="images/insta/ins-4.jpg" alt="insta" />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="insta-image">
                  <a href="#">
                    <img src="images/insta/ins-5.jpg" alt="insta" />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="insta-image">
                  <a href="#">
                    <img src="images/insta/ins-1.jpg" alt="insta" />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="insta-image">
                  <a href="#">
                    <img src="images/insta/ins-7.jpg" alt="insta" />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="insta-image">
                  <a href="#">
                    <img src="images/insta/ins-8.jpg" alt="insta" />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="insta-image">
                  <a href="#">
                    <img src="images/insta/ins-2.jpg" alt="insta" />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="insta-image">
                  <a href="#">
                    <img src="images/insta/ins-6.jpg" alt="insta" />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="insta-image">
                  <a href="#">
                    <img src="images/insta/ins-9.jpg" alt="insta" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Instagram ends */}
        {/* News Starts */}
        <section className="news pb-2 pt-9">
          <div className="container">
            <div className="section-title text-center mb-5 pb-2 w-50 mx-auto">
              <h2 className="m-0">
                <span>Articles &amp; Travel</span> Guidings
              </h2>
              <p className="mb-0 ">
                Travel has helped us to understand the meaning of life and it
                has helped us become better people. Each time we travel, we see
                the world with new eyes.
              </p>
            </div>
            <div className="news-outer">
              <div className="row">
                <div className="col-lg-5 col-md-12 col-xs-12 mb-4">
                  <div className="news-item overflow-hidden">
                    <div className="news-image">
                      <img src="images/blog/blog1.jpg" alt="image" />
                    </div>
                    <div className="news-list mt-2 border-b pb-2 mb-2">
                      <ul>
                        <li>
                          <a href="single-right.html" className="pr-3">
                            <i className="fa fa-calendar pink pr-1" /> 4th AUg
                            2020{" "}
                          </a>
                        </li>
                        <li>
                          <a href="single-right.html" className="pr-3">
                            <i className="fa fa-comment pink pr-1" /> 3
                          </a>
                        </li>
                        <li>
                          <a href="single-right.html" className="">
                            <i className="fa fa-tag pink pr-1" /> Tour, Tourism,
                            Travel
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="news-content mt-2">
                      <h4 className="pb-2 mb-2 border-b">
                        <a href="single-right.html">
                          The real voyage does not consist in seeking new
                          landscapes
                        </a>
                      </h4>
                      <p className="mb-3">
                        Excited him now natural saw passage offices you minuter.
                        At by asked being court hopes. Farther so friends am to
                        detract. Forbade concern do private be. Offending
                        residence but men engrossed shy. <br />
                        <br />
                        One of the programs is Save Our I have personally in
                        many of the programs mentioned on this site.
                      </p>
                      <div className="author-img">
                        <img src="images/reviewer/1.jpg" alt="Demo Image" />
                        <span>By - Jack Well Fardez</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12 col-xs-12">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-xs-12 mb-4">
                      <div className="news-item overflow-hidden">
                        <div className="news-image">
                          <img src="images/blog/blog2.jpg" alt="image" />
                        </div>
                        <div className="news-list mt-2 border-b pb-2 mb-2">
                          <ul>
                            <li>
                              <a href="single-right.html" className="pr-3">
                                <i className="fa fa-calendar pink pr-1" /> 4th
                                AUg 2020{" "}
                              </a>
                            </li>
                            <li>
                              <a href="single-right.html" className="pr-3">
                                <i className="fa fa-comment pink pr-1" /> 3
                              </a>
                            </li>
                            <li>
                              <a href="single-right.html" className="">
                                <i className="fa fa-tag pink pr-1" /> Travel
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="news-content mt-2">
                          <h4 className="bordernone mb-0">
                            <a href="single-right.html">
                              Mountains is always right destination.
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12 mb-4">
                      <div className="news-item overflow-hidden">
                        <div className="news-image">
                          <img src="images/blog/blog3.jpg" alt="image" />
                        </div>
                        <div className="news-list mt-2 border-b pb-2 mb-2">
                          <ul>
                            <li>
                              <a href="single-right.html" className="pr-3">
                                <i className="fa fa-calendar pink pr-1" /> 4th
                                AUg 2020{" "}
                              </a>
                            </li>
                            <li>
                              <a href="single-right.html" className="pr-3">
                                <i className="fa fa-comment pink pr-1" /> 3
                              </a>
                            </li>
                            <li>
                              <a href="single-right.html" className="">
                                <i className="fa fa-tag pink pr-1" /> Tourism
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="news-content mt-2">
                          <h4 className="bordernone mb-0">
                            <a href="single-right.html">
                              We have not all those who wander are lost.
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12 mb-4">
                      <div className="news-item overflow-hidden">
                        <div className="news-image">
                          <img src="images/blog/blog4.jpg" alt="image" />
                        </div>
                        <div className="news-list mt-2 border-b pb-2 mb-2">
                          <ul>
                            <li>
                              <a href="single-right.html" className="pr-3">
                                <i className="fa fa-calendar pink pr-1" /> 4th
                                AUg 2020{" "}
                              </a>
                            </li>
                            <li>
                              <a href="single-right.html" className="pr-3">
                                <i className="fa fa-comment pink pr-1" /> 3
                              </a>
                            </li>
                            <li>
                              <a href="single-right.html" className="">
                                <i className="fa fa-tag pink pr-1" /> Tour
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="news-content mt-2">
                          <h4 className="bordernone mb-0">
                            <a href="single-right.html">
                              Here Our's Life is either a daring adventure.
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12 mb-4">
                      <div className="news-item overflow-hidden">
                        <div className="news-image">
                          <img src="images/blog/blog5.jpg" alt="image" />
                        </div>
                        <div className="news-list mt-2 border-b pb-2 mb-2">
                          <ul>
                            <li>
                              <a href="single-right.html" className="pr-3">
                                <i className="fa fa-calendar pink pr-1" /> 4th
                                AUg 2020{" "}
                              </a>
                            </li>
                            <li>
                              <a href="single-right.html" className="pr-3">
                                <i className="fa fa-comment pink pr-1" /> 3
                              </a>
                            </li>
                            <li>
                              <a href="single-right.html" className="">
                                <i className="fa fa-tag pink pr-1" /> Travel
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="news-content mt-2">
                          <h4 className="bordernone mb-0">
                            <a href="single-right.html">
                              Take only memories, leave only footprints.
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* News Ends */}
      </>

      <Destination data={listDiaDiem} />
      <Festival data={listLeHoi} />
      <Specialty data={listDacSan} />
    </MainLayout>
  );
};

export default HomePage;
