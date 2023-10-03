import React from "react";

const Home = () => {
  return (
    <>
      {/* Preloader */}
      <div id="preloader">
        <div id="status" />
      </div>
      {/* Preloader Ends */}
      {/* header starts */}
      <header className="main_header_area headerstye-1">
        {/* Navigation Bar */}
        <div className="header_menu" id="header_menu">
          <nav className="navbar navbar-default">
            <div className="container">
              <div className="navbar-flex d-flex align-items-center justify-content-between w-100 pb-2 pt-2">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                  <a className="navbar-brand" href="index.html">
                    <img src="./images/logo-white.png" alt="image" />
                    <img src="./images/logo.png" alt="image" />
                  </a>
                </div>
                {/* Collect the nav links, forms, and other content for toggling */}
                <div
                  className="navbar-collapse1 d-flex align-items-center"
                  id="bs-example-navbar-collapse-1"
                >
                  <ul className="nav navbar-nav" id="responsive-menu">
                    <li>
                      <a href="contact.html">Trang chủ</a>
                    </li>
                    <li>
                      <a href="contact.html">Điểm du lịch</a>
                    </li>
                    <li>
                      <a href="contact.html">Lễ hội</a>
                    </li>
                    <li>
                      <a href="contact.html">Đặc sản</a>
                    </li>
                    <li>
                      <a href="contact.html">Bản đồ</a>
                    </li>
                  </ul>
                </div>
                {/* /.navbar-collapse */}
                <div className="register-login">
                  <a
                    href="#"
                    className="mr-2"
                    data-toggle="modal"
                    data-target="#register"
                  >
                    <i className="icon-user mr-1" /> Đăng kí
                  </a>
                  <a href="#" data-toggle="modal" data-target="#login">
                    <i className="icon-login mr-1" /> Đăng nhập
                  </a>
                </div>
                <div id="slicknav-mobile" />
              </div>
            </div>
            {/* /.container-fluid */}
          </nav>
        </div>
        {/* Navigation Bar Ends */}
      </header>
      {/* header ends */}
      {/* banner starts */}
      <section className="banner overflow-hidden">
        <div className="slider">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="slide-inner">
                  <div
                    className="slide-image"
                    style={{ backgroundImage: "url(images/slider/slide1.png)" }}
                  />
                  <div className="swiper-content container">
                    <h4 className="blue">Bạc liêu, vùng đất tuyệt vời !</h4>
                    <h1 className="white mb-4">
                      Cùng tôi tham gia du lịch Bạc Liêu
                    </h1>
                    <a href="#" className="per-btn">
                      <span className="white">Khám phá</span>
                      <i className="fa fa-arrow-right white" />
                    </a>
                  </div>
                  <div className="overlay" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide-inner">
                  <div
                    className="slide-image"
                    style={{ backgroundImage: "url(images/slider/2.jpg)" }}
                  />
                  <div className="swiper-content container">
                    <h4 className="blue">Feel Free To Travel</h4>
                    <h1 className="white mb-4">
                      Make you Free to <span>travel</span> with us
                    </h1>
                    <a href="#" className="per-btn">
                      <span className="white">Discover</span>
                      <i className="fa fa-arrow-right white" />
                    </a>
                  </div>
                  <div className="overlay" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide-inner">
                  <div
                    className="slide-image"
                    style={{ backgroundImage: "url(images/slider/3.jpg)" }}
                  />
                  <div className="swiper-content container">
                    <h4 className="blue">Trip For Your Kids</h4>
                    <h1 className="white mb-4">
                      <span>Sensation Ice Trip</span> Is Coming For Kids
                    </h1>
                    <a href="#" className="per-btn">
                      <span className="white">Discover</span>
                      <i className="fa fa-arrow-right white" />
                    </a>
                  </div>
                  <div className="overlay" />
                </div>
              </div>
            </div>
            {/* Add Arrows */}
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </div>
        </div>
      </section>
      {/* banner ends */}
      {/* form main starts */}
      <div className="form-main">
        <div className="container-fluid">
          <div className="form-content">
            <h3 className="form-title text-center d-inline white">
              Tìm một địa điểm
            </h3>
            <div className="d-lg-flex align-items-center justify-content-between">
              <div className="form-group pr-4 m-0">
                <div className="input-box">
                  <i className="fa fa-map-marker" />
                  <select className="niceSelect">
                    <option value={1}>Đích đến của bạn</option>
                    <option value={2}>
                      Các điểm du lịch Bạc Liêu tại khu vực trung tâm
                    </option>
                    <option value={3}>
                      Các điểm du lịch tại khu vực Giá Rai
                    </option>
                    <option value={4}>Khu vực huyện Đông Hải</option>
                    <option value={5}>Khu vực huyện Vĩnh Lợi</option>
                  </select>
                </div>
              </div>
              <div className="form-group pr-4 m-0">
                <div className="input-box">
                  <i className="fa fa-calendar" />
                  <input
                    id="date-range0"
                    type="text"
                    placeholder="Ngày khởi hành"
                  />
                </div>
              </div>
              <div className="form-group pr-4 m-0">
                <div className="input-box">
                  <i className="fa fa-calendar" />
                  <input
                    id="date-range1"
                    type="text"
                    placeholder="Ngày trở lại"
                  />
                </div>
              </div>
              <div className="form-group pr-4 m-0">
                <div className="input-box">
                  <i className="fa fa-clock" />
                  <select className="niceSelect">
                    <option value={1}>Tổng thời gian</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>
              </div>
              <div className="form-group m-0 w-100">
                <a href="#" className="nir-btn">
                  <i className="fa fa-search" /> Kiểm tra
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* form main ends */}
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
                      <a href="#">Giá cả hợp lý</a>
                    </h4>
                    <p className="mb-0">
                      Với hơn 500+ nhà hàng, khách sạn và khu nghỉ dưỡng từ bình
                      dân đến sang trọng
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
                      <a href="#">Vui chơi</a>
                    </h4>
                    <p className="mb-0">
                      Nhiều điểm vui chơi và nhưng phần quà hấp dẫn
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
                      <a href="#">Hỗ trợ tìm kiếm</a>
                    </h4>
                    <p className="mb-0">
                      Tìm kiếm địa điểm , trực quan hoá , gợi ý di chuyển trên
                      bản đồ
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
                    Giới thiệu về Bạc Liêu Travel
                  </h4>
                  <h2>
                    Chúng tôi thực sự tận tâm để mang lại trải nghiệm du lịch
                    tốt nhất cho bạn
                  </h2>
                  <p className="mb-3">
                    Các nhà điều hành tour và đại lý du lịch hàng đầu. Chúng tôi
                    cung cấp tổng cộng 793 chuyến du lịch và kỳ nghỉ trên khắp
                    thế giới. Kết hợp chúng tôi đã nhận được 1532 đánh giá của
                    khách hàng và xếp hạng trung bình là 5 trên 5 sao. <br />
                    <br />
                    Tra cứu thông tin chi tiết 192 / 5.000 Kết quả dịch Kết quả
                    bản dịch Du lịch đã giúp chúng ta hiểu được ý nghĩa cuộc
                    sống và nó đã giúp chúng tôi trở thành những người tốt hơn.
                    Mỗi lần chúng tôi đi du lịch, chúng ta nhìn thế giới bằng
                    con mắt mới.
                  </p>
                  <div className="about-imagelist">
                    <ul className="d-flex justify-content-between">
                      <li className="mr-2">
                        <img
                          style={{ maxWidth: 100, maxHeight: 100 }}
                          src="./images/destination/destination7.jpg"
                          alt=""
                        />
                      </li>
                      <li className="mr-2">
                        <img
                          style={{ maxWidth: 100, maxHeight: 100 }}
                          src="./images/destination/destination5.jpg"
                          alt=""
                        />
                      </li>
                      <li className="mr-2">
                        <img
                          style={{ maxWidth: 100, maxHeight: 100 }}
                          src="./images/destination/destination6.jpg"
                          alt=""
                        />
                      </li>
                      <li className="mr-2">
                        <img
                          style={{ maxWidth: 100, maxHeight: 100 }}
                          src="./images/destination/destination3.jpg"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          style={{ maxWidth: 100, maxHeight: 100 }}
                          src="./images/destination/destination4.jpg"
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 mb-4">
                <div className="about-image">
                  <img src="./images/destination/destination12.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about-us ends */}
      {/* Trending Starts */}
      <section className="trending pb-6 pt-5">
        <div className="container">
          <div className="section-title text-center mb-5 pb-2 w-50 mx-auto">
            <h2 className="m-0">
              Các <span>địa điểm du lịch</span>
            </h2>
            <p className="mb-0">
              Du lịch đã giúp chúng ta hiểu được ý nghĩa của cuộc sống và nó có
              đã giúp chúng tôi trở thành những người tốt hơn. Mỗi lần đi du
              lịch, chúng ta đều thấy thế giới với con mắt mới.
            </p>
          </div>
          <div className="trend-box">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-xs-12 mb-4">
                <div className="trend-item">
                  <div className="trend-image">
                    <img src="./images/trending/trending1.jpg" alt="image" />
                    <div className="trend-tags">
                      <a href="#">
                        <i className="flaticon-like" />
                      </a>
                    </div>
                  </div>
                  <div className="trend-content-main">
                    <div className="trend-content">
                      <h6 className="font-weight-normal pink">
                        <i className="fa fa-map-marker-alt" /> Khu vực trung tâm
                      </h6>
                      <h4>
                        <a href="#">Khu nhà Công tử Bạc Liêu</a>
                      </h4>
                      <div className="rating-main d-flex align-items-center">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                        </div>
                        <span className="ml-2">1 Đánh giá</span>
                      </div>
                    </div>
                    <div className="trend-last-main">
                      <p className="mb-0 trend-para">
                        Khu nhà Công Tử Bạc Liêu là một trong những công trình
                        có quy mô bề thế nhất lục tỉnh Nam Kỳ thời bấy giờ.
                      </p>
                      <div className="trend-last d-flex align-items-center justify-content-between">
                        <p className="mb-0 white">
                          <i className="fa fa-clock-o" aria-hidden="true" />{" "}
                          07:00 đến 18:30
                        </p>
                        <div className="trend-price">
                          <p className="price white mb-0">Hàng ngày</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12 mb-4">
                <div className="trend-item">
                  <div className="trend-image">
                    <img src="./images/trending/trending2.jpg" alt="image" />
                    <div className="trend-tags">
                      <a href="#">
                        <i className="flaticon-like" />
                      </a>
                    </div>
                  </div>
                  <div className="trend-content-main">
                    <div className="trend-content">
                      <h6 className="font-weight-normal pink">
                        <i className="fa fa-map-marker-alt" /> Các điểm du lịch
                        tại khu vực Giá Rai
                      </h6>
                      <h4>
                        <a href="#">Nhà thờ Tắc Sậy</a>
                      </h4>
                      <div className="rating-main d-flex align-items-center">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                        </div>
                        <span className="ml-2">5 Đánh giá</span>
                      </div>
                    </div>
                    <div className="trend-last-main">
                      <p className="mb-0 trend-para">
                        Nhà thờ Tắc Sậy, địa điểm hành hương Công giáo nổi tiếng
                        nhất miền Tây.
                      </p>
                      <div className="trend-last d-flex align-items-center justify-content-between">
                        <p className="mb-0 white">
                          <i className="fa fa-clock-o" aria-hidden="true" />{" "}
                          4:00 đến 21:00
                        </p>
                        <div className="trend-price">
                          <p className="price white mb-0">Hàng ngày</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12 mb-4">
                <div className="trend-item">
                  <div className="trend-image">
                    <img src="./images/trending/trending3.jpg" alt="image" />
                    <div className="trend-tags">
                      <a href="#">
                        <i className="flaticon-like" />
                      </a>
                    </div>
                  </div>
                  <div className="trend-content-main">
                    <div className="trend-content">
                      <h6 className="font-weight-normal pink">
                        <i className="fa fa-map-marker-alt" /> Khu vực huyện
                        Đông Hải
                      </h6>
                      <h4>
                        <a href="#">Đồng muối Đông Hải</a>
                      </h4>
                      <div className="rating-main d-flex align-items-center">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                        </div>
                        <span className="ml-2">9 Đánh giá</span>
                      </div>
                    </div>
                    <div className="trend-last-main">
                      <p className="mb-0 trend-para">
                        Cánh đồng muối Đông Hải là tọa độ du lịch "mới toanh" ở Bạc Liêu.
                      </p>
                      <div className="trend-last d-flex align-items-center justify-content-between">
                        <p className="mb-0 white">
                          <i className="fa fa-clock-o" aria-hidden="true" /> Luôn luôn
                        </p>
                        <div className="trend-price">
                          {/* <p className="price white mb-0">
                            From <span>$350.00</span>
                          </p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12 mb-4">
                <div className="trend-item">
                  <div className="trend-image">
                    <img src="./images/trending/trending4.jpg" alt="image" />
                    <div className="trend-tags">
                      <a href="#">
                        <i className="flaticon-like" />
                      </a>
                    </div>
                  </div>
                  <div className="trend-content-main">
                    <div className="trend-content">
                      <h6 className="font-weight-normal pink">
                        <i className="fa fa-map-marker-alt" /> Khu vực huyện Vĩnh Lợi
                      </h6>
                      <h4>
                        <a href="#">
                          Tháp cổ Vĩnh Hưng
                        </a>
                      </h4>
                      <div className="rating-main d-flex align-items-center">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                        </div>
                        <span className="ml-2">2 Đánh giá</span>
                      </div>
                    </div>
                    <div className="trend-last-main">
                      <p className="mb-0 trend-para">
                        Tháp cổ Vĩnh Hưng được công nhận là Di tích lịch lịch sử cấp quốc gia.
                      </p>
                      <div className="trend-last d-flex align-items-center justify-content-between">
                        <p className="mb-0 white">
                          <i className="fa fa-clock-o" aria-hidden="true" /> Luôn luôn
                        </p>
                        <div className="trend-price">
                          <p className="price white mb-0">
                            {/* From <span>$350.00</span> */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12 mb-4">
                <div className="trend-item">
                  <div className="trend-image">
                    <img src="./images/trending/trending5.jpg" alt="image" />
                    <div className="trend-tags">
                      <a href="#">
                        <i className="flaticon-like" />
                      </a>
                    </div>
                  </div>
                  <div className="trend-content-main">
                    <div className="trend-content">
                      <h6 className="font-weight-normal pink">
                        <i className="fa fa-map-marker-alt" /> Khu vực huyện Đông Hải
                      </h6>
                      <h4>
                        <a href="#">
                          Lăng Ông Nam Hải
                        </a>
                      </h4>
                      <div className="rating-main d-flex align-items-center">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                        </div>
                        <span className="ml-2">10 Đánh giá</span>
                      </div>
                    </div>
                    <div className="trend-last-main">
                      <p className="mb-0 trend-para">
                        Lăng Ông Nam Hải, niềm tự hào của "xứ biển phương Nam".
                      </p>
                      <div className="trend-last d-flex align-items-center justify-content-between">
                        <p className="mb-0 white">
                          <i className="fa fa-clock-o" aria-hidden="true" /> Luôn luôn
                        </p>
                        <div className="trend-price">
                          <p className="price white mb-0">
                            {/* From <span>$350.00</span> */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12 mb-4">
                <div className="trend-item">
                  <div className="trend-image">
                    <img src="./images/trending/trending6.jpg" alt="image" />
                    <div className="trend-tags">
                      <a href="#">
                        <i className="flaticon-like" />
                      </a>
                    </div>
                  </div>
                  <div className="trend-content-main">
                    <div className="trend-content">
                      <h6 className="font-weight-normal pink">
                        <i className="fa fa-map-marker-alt" /> Các điểm du lịch tại khu vực Giá Rai
                      </h6>
                      <h4>
                        <a href="#">
                          Di tích Đồng Nọc Nạng
                        </a>
                      </h4>
                      <div className="rating-main d-flex align-items-center">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                        </div>
                        <span className="ml-2">1 Đánh giá</span>
                      </div>
                    </div>
                    <div className="trend-last-main">
                      <p className="mb-0 trend-para">
                        Di tích Đồng Nọc Nạng, bản hùng ca tráng lệ của một thời vàng son.
                      </p>
                      <div className="trend-last d-flex align-items-center justify-content-between">
                        <p className="mb-0 white">
                          <i className="fa fa-clock-o" aria-hidden="true" /> Luôn luôn
                        </p>
                        <div className="trend-price">
                          <p className="price white mb-0">
                            {/* From <span>$350.00</span> */}
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
      </section>
      {/* Trending Ends */}
      {/* top destination starts */}
      <section className="top-destination overflow-hidden pb-9">
        <div className="container">
          <div className="desti-inner">
            <div className="row d-flex align-items-center">
              <div className="col-lg-4 col-md-6 p-1">
                <div className="desti-title text-center">
                  <h2 className="white">
                    Travel <br />
                    Best Holidays Trips <br />
                    In The World
                  </h2>
                  <p className="white mb-0">
                    Lorem Ipsum is simply dummy text the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 p-1">
                <div className="desti-image">
                  <img
                    src="./images/destination/destination3.jpg"
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
                    src="./images/destination/destination4.jpg"
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
                    src="./images/destination/destination5.jpg"
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
                    src="./images/destination/destination7.jpg"
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
                    src="./images/destination/destination8.jpg"
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
                    src="./images/destination/destination9.jpg"
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
                    View Details <i className="fa fa-arrow-right white pl-1" />
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
              Travel has helped us to understand the meaning of life and it has
              helped us become better people. Each time we travel, we see the
              world with new eyes.
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
                          src="./images/trending/trending8.jpg"
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
                            <i className="fa fa-eye mr-1" /> 852 Visiting Places{" "}
                            <i className="fa fa-map-marker mr-1 ml-3" /> Nepal.
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
                                src="./images/reviewer/1.jpg"
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
                          src="./images/trending/trending11.jpg"
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
                            <i className="fa fa-eye mr-1" /> 615 Visiting Places{" "}
                            <i className="fa fa-map-marker mr-1 ml-3" /> Canada.
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
                                src="./images/reviewer/2.jpg"
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
                          src="./images/trending/trending12.jpg"
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
                            <i className="fa fa-eye mr-1" /> 926 Visiting Places{" "}
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
                                src="./images/reviewer/1.jpg"
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
                          src="./images/trending/trending14.jpg"
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
                            <i className="fa fa-eye mr-1" /> 852 Visiting Places{" "}
                            <i className="fa fa-map-marker mr-1 ml-3" /> Nepal.
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
                                src="./images/reviewer/1.jpg"
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
                          src="./images/trending/trending13.jpg"
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
                            <i className="fa fa-eye mr-1" /> 615 Visiting Places{" "}
                            <i className="fa fa-map-marker mr-1 ml-3" /> Canada.
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
                                src="./images/reviewer/2.jpg"
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
                          src="./images/trending/trending7.jpg"
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
                            <i className="fa fa-eye mr-1" /> 926 Visiting Places{" "}
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
                                src="./images/reviewer/1.jpg"
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
                          src="./images/trending/trending2.jpg"
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
                            <i className="fa fa-eye mr-1" /> 852 Visiting Places{" "}
                            <i className="fa fa-map-marker mr-1 ml-3" /> Nepal.
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
                                src="./images/reviewer/1.jpg"
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
                          src="./images/trending/trending3.jpg"
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
                            <i className="fa fa-eye mr-1" /> 615 Visiting Places{" "}
                            <i className="fa fa-map-marker mr-1 ml-3" /> Canada.
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
                                src="./images/reviewer/2.jpg"
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
                          src="./images/trending/trending4.jpg"
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
                            <i className="fa fa-eye mr-1" /> 926 Visiting Places{" "}
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
                                src="./images/reviewer/1.jpg"
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
                          src="./images/trending/trending6.jpg"
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
                            <i className="fa fa-eye mr-1" /> 852 Visiting Places{" "}
                            <i className="fa fa-map-marker mr-1 ml-3" /> Nepal.
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
                                src="./images/reviewer/1.jpg"
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
                          src="./images/trending/trending5.jpg"
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
                            <i className="fa fa-eye mr-1" /> 615 Visiting Places{" "}
                            <i className="fa fa-map-marker mr-1 ml-3" /> Canada.
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
                                src="./images/reviewer/2.jpg"
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
                          src="./images/trending/trending9.jpg"
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
                            <i className="fa fa-eye mr-1" /> 926 Visiting Places{" "}
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
                                src="./images/reviewer/1.jpg"
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
              Travel has helped us to understand the meaning of life and it has
              helped us become better people. Each time we travel, we see the
              world with new eyes.
            </p>
          </div>
          <div className="row team-slider">
            <div className="col-lg-4 slider-item">
              <div className="slider-image">
                <img src="./images/new-deal/deal1.jpg" alt="image" />
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
                <img src="./images/new-deal/deal2.jpg" alt="image" />
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
                <img src="./images/new-deal/deal3.jpg" alt="image" />
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
                <img src="./images/new-deal/deal4.jpg" alt="image" />
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
              Travel has helped us to understand the meaning of life and it has
              helped us become better people. Each time we travel, we see the
              world with new eyes.
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
                    <img src="./images/testimonial/img1.jpg" alt="" />
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
                    <img src="./images/testimonial/img2.jpg" alt="" />
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
                    <img src="./images/testimonial/img3.jpg" alt="" />
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
                  <img src="./images/insta/ins-3.jpg" alt="insta" />
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="insta-image">
                <a href="#">
                  <img src="./images/insta/ins-4.jpg" alt="insta" />
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="insta-image">
                <a href="#">
                  <img src="./images/insta/ins-5.jpg" alt="insta" />
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="insta-image">
                <a href="#">
                  <img src="./images/insta/ins-1.jpg" alt="insta" />
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="insta-image">
                <a href="#">
                  <img src="./images/insta/ins-7.jpg" alt="insta" />
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="insta-image">
                <a href="#">
                  <img src="./images/insta/ins-8.jpg" alt="insta" />
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="insta-image">
                <a href="#">
                  <img src="./images/insta/ins-2.jpg" alt="insta" />
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="insta-image">
                <a href="#">
                  <img src="./images/insta/ins-6.jpg" alt="insta" />
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="insta-image">
                <a href="#">
                  <img src="./images/insta/ins-9.jpg" alt="insta" />
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
              Travel has helped us to understand the meaning of life and it has
              helped us become better people. Each time we travel, we see the
              world with new eyes.
            </p>
          </div>
          <div className="news-outer">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-xs-12 mb-4">
                <div className="news-item overflow-hidden">
                  <div className="news-image">
                    <img src="./images/blog/blog1.jpg" alt="image" />
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
                      One of the programs is Save Our I have personally in many
                      of the programs mentioned on this site.
                    </p>
                    <div className="author-img">
                      <img src="./images/reviewer/1.jpg" alt="Demo Image" />
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
                        <img src="./images/blog/blog2.jpg" alt="image" />
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
                        <img src="./images/blog/blog3.jpg" alt="image" />
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
                        <img src="./images/blog/blog4.jpg" alt="image" />
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
                        <img src="./images/blog/blog5.jpg" alt="image" />
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
      {/* cta-horizon starts */}
      <div className="cta-horizon bg-blue pt-4 pb-2">
        <div className="container d-md-flex align-items-center justify-content-between">
          <h4 className="mb-2 white">
            Didn't find the service suite you! Need a custom service?
          </h4>
          <a href="#" className="nir-btn-black">
            Let's talk
          </a>
        </div>
      </div>
      {/* cta-horizon Ends */}
      {/* footer starts */}
      <footer className="pt-10 bubbles footermain">
        <div className="footer-upper pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
                <div className="footer-about bg-white p-4">
                  <img src="./images/logo.png" alt="" />
                  <p className="mt-3">
                    In ut odio libero, at vulputate urna. Nulla tristique mi a
                    massa convallis cursus. Nulla eu mi magna
                  </p>
                  <ul>
                    <li>
                      <strong>PO Box:</strong> +47-252-254-2542
                    </li>
                    <li>
                      <strong>Location:</strong> Collins Street, sydney,
                      Australia
                    </li>
                    <li>
                      <strong>Email:</strong> info@Yatriiworld.com
                    </li>
                    <li>
                      <strong>Website:</strong> www.Yatriiworld.com
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12 mb-4">
                <div className="footer-links">
                  <h4 className="white">Company</h4>
                  <ul>
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="#">Delivery Information</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Customer Service</a>
                    </li>
                    <li>
                      <a href="#">Return Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12 mb-4">
                <div className="footer-links">
                  <h4 className="white">Services</h4>
                  <ul>
                    <li>
                      <a href="#">Payment</a>
                    </li>
                    <li>
                      <a href="#">Feedback</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Our Service</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Site map</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
                <div className="footer-links">
                  <h4 className="white">Newsletter</h4>
                  <p>
                    Want to be notified when we launch a new template or an
                    udpate. Just sign up and we'll send you a notification by
                    email.
                  </p>
                  <div className="newsletter-form">
                    <form>
                      <input type="email" placeholder="Enter your email" />
                      <input
                        type="submit"
                        className="nir-btn mt-2 w-100"
                        defaultValue="Subscribe"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-payment">
          <div className="container">
            <div className="footer-pay d-md-flex align-items-center justify-content-between pt-2 pb-2">
              <div className="footer-payment-nav">
                <ul className="d-md-flex align-items-center">
                  <li className="mr-2">We Support:</li>
                  <li className="mr-2">
                    <i className="fab fa-cc-mastercard" />
                  </li>
                  <li className="mr-2">
                    <i className="fab fa-cc-paypal" />
                  </li>
                  <li className="mr-2">
                    <i className="fab fa-cc-stripe" />
                  </li>
                  <li className="mr-2">
                    <i className="fab fa-cc-visa" />
                  </li>
                  <li className="mr-2">
                    <i className="fab fa-cc-discover" />
                  </li>
                </ul>
              </div>
              <div className="footer-payment-nav mb-0">
                <ul>
                  <li>
                    <select>
                      <option>English (United States)</option>
                      <option>English (United States)</option>
                      <option>English (United States)</option>
                      <option>English (United States)</option>
                      <option>English (United States)</option>
                    </select>
                  </li>
                  <li>
                    <select>
                      <option>$ USD</option>
                      <option>$ USD</option>
                      <option>$ USD</option>
                      <option>$ USD</option>
                      <option>$ USD</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright pt-2 pb-2">
          <div className="container">
            <div className="copyright-inner d-md-flex align-items-center justify-content-between">
              <div className="copyright-text">
                <p className="m-0 white">
                  2020 Yatriiworld. All rights reserved.
                </p>
              </div>
              <div className="social-links">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer ends */}
      {/* Back to top start */}
      <div id="back-to-top">
        <a href="#" />
      </div>
      {/* Back to top ends */}
      {/* Register Modal */}
      <div
        className="modal fade"
        id="register"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header bordernone p-0">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <div className="login-content p-4 text-center">
                <div className="login-title section-border">
                  <h3 className="pink mb-1">Register</h3>
                  <p>
                    Access thousands of online classes in design, business, and
                    more!
                  </p>
                </div>
                <div className="login-form text-center">
                  <form>
                    <div className="form-group">
                      <input type="text" placeholder="Enter Full Name" />
                    </div>
                    <div className="form-group">
                      <input type="email" placeholder="Enter email address" />
                    </div>
                    <div className="form-group">
                      <input type="password" placeholder="Enter password" />
                    </div>
                    <div className="form-group">
                      <input type="password" placeholder="Confirm password" />
                    </div>
                  </form>
                  <div className="form-btn">
                    <a href="#" className="nir-btn">
                      Register
                    </a>
                  </div>
                  <div className="form-group mb-0 form-checkbox mt-3">
                    <input type="checkbox" /> By clicking this, you are agree to
                    to
                    <a href="#" className="">
                      {" "}
                      our terms of use
                    </a>{" "}
                    and{" "}
                    <a href="#" className="">
                      privacy policy
                    </a>{" "}
                    including the use of cookies
                  </div>
                </div>
                <div className="login-social border-t mt-3 pt-2 mb-3">
                  <p className="mb-2">OR continue with</p>
                  <a href="#" className="btn-facebook">
                    <i className="fab fa-facebook" aria-hidden="true" />{" "}
                    Facebook
                  </a>
                  <a href="#" className="btn-twitter">
                    <i className="fab fa-twitter" aria-hidden="true" /> Twitter
                  </a>
                  <a href="#" className="btn-google">
                    <i className="fab fa-google" aria-hidden="true" /> Google
                  </a>
                </div>
                <div className="sign-up">
                  <p className="m-0">
                    Already have an account?{" "}
                    <a href="login.html" className="pink">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* login Modal */}
      <div
        className="modal fade"
        id="login"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header bordernone p-0">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <div className="login-content p-4 text-center">
                <div className="login-title section-border">
                  <h3 className="pink">Login</h3>
                </div>
                <div className="login-form">
                  <form>
                    <div className="form-group">
                      <input type="email" placeholder="Enter email address" />
                    </div>
                    <div className="form-group">
                      <input type="password" placeholder="Enter password" />
                    </div>
                  </form>
                  <div className="form-btn">
                    <a href="#" className="nir-btn">
                      LOGIN
                    </a>
                  </div>
                  <div className="form-group mb-0 form-checkbox mt-3">
                    <input type="checkbox" /> Remember Me |{" "}
                    <a href="#" className="">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="login-social border-t mt-3 pt-2 mb-3">
                  <p className="mb-2">OR continue with</p>
                  <a href="#" className="btn-facebook">
                    <i className="fab fa-facebook" aria-hidden="true" />{" "}
                    Facebook
                  </a>
                  <a href="#" className="btn-twitter">
                    <i className="fab fa-twitter" aria-hidden="true" /> Twitter
                  </a>
                </div>
                <div className="sign-up">
                  <p className="m-0">
                    Do not have an account?{" "}
                    <a href="login.html" className="pink">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header side menu */}
      <div className="header_sidemenu">
        <div className="header_sidemenu_in">
          <div className="menu">
            <div className="close-menu">
              <i className="fa fa-times white" />
            </div>
            <div className="m-contentmain">
              <div className="cart-main">
                <div className="cart-box">
                  <div className="popup-container">
                    <h5 className="p-3 mb-0 bg-pink white text-caps">
                      My Carts(3 Items)
                    </h5>
                    <div className="cart-entry d-flex align-items-center p-3">
                      <a href="#" className="image">
                        <img src="./images/shop/shop1.jpg" alt="" />
                      </a>
                      <div className="content">
                        <a href="#" className="title font-weight-bold">
                          Pullover Batwing
                        </a>
                        <p className="quantity m-0">Quantity: 3</p>
                        <span className="price">$45.00</span>
                      </div>
                      <div className="button-x">
                        <i className="icon-close" />
                      </div>
                    </div>
                    <div className="cart-entry d-flex align-items-center p-3">
                      <a href="#" className="image">
                        <img src="./images/shop/shop2.jpg" alt="" />
                      </a>
                      <div className="content">
                        <a href="#" className="title font-weight-bold">
                          Pullover Batwing
                        </a>
                        <p className="quantity m-0">Quantity: 3</p>
                        <span className="price">$90.00</span>
                      </div>
                      <div className="button-x">
                        <i className="icon-close" />
                      </div>
                    </div>
                    <div className="cart-entry d-flex align-items-center p-3">
                      <a href="#" className="image">
                        <img src="./images/shop/shop6.jpg" alt="" />
                      </a>
                      <div className="content">
                        <a href="#" className="title font-weight-bold">
                          Pullover Batwing
                        </a>
                        <p className="quantity m-0">Quantity: 3</p>
                        <span className="price">$90.00</span>
                      </div>
                      <div className="button-x">
                        <i className="icon-close" />
                      </div>
                    </div>
                    <div className="summary-total">
                      <div className="summary d-flex align-items-center justify-content-between">
                        <div className="subtotal font-weight-bold">
                          Delivery Charge
                        </div>
                        <div className="price-s">$10</div>
                      </div>
                      <div className="summary d-flex align-items-center justify-content-between">
                        <div className="subtotal font-weight-bold">
                          Sub Total
                        </div>
                        <div className="price-s">$200</div>
                      </div>
                      <div className="summary d-flex align-items-center justify-content-between">
                        <div className="subtotal font-weight-bold">
                          Discount
                        </div>
                        <div className="price-s">$2</div>
                      </div>
                      <div className="summary d-flex align-items-center justify-content-between">
                        <div className="subtotal font-weight-bold">Total</div>
                        <div className="price-s">$208</div>
                      </div>
                    </div>
                    <div className="cart-buttons d-flex align-items-center justify-content-between">
                      <a href="#" className="nir-btn">
                        View Cart
                      </a>
                      <a href="#" className="nir-btn-black">
                        Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlay hide" />
        </div>
      </div>
    </>
  );
};

export default Home;
