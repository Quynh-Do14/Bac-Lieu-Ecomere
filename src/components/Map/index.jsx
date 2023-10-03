import React, { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import HeaderPage from "../../infratructure/common/layout/header";
import Footer from "../../infratructure/common/layout/footer";
mapboxgl.accessToken =
  "pk.eyJ1IjoibnRkMTAxMDIwMDAiLCJhIjoiY2tvbzJ4anl1MDZjMzJwbzNpcnA5NXZpcCJ9.dePfFDv0RlCLnWoDq1zHlw";
const Map = () => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState("{}");

  const fecthData = async () => {
    let map = new mapboxgl.Map({
      container: mapContainer.current,
      zoom: 13,
      center: [105.7119304, 9.2684649],
      style: "mapbox://styles/mapbox/satellite-streets-v12",
    });
    setMap(map);
    map.addControl(new mapboxgl.NavigationControl());
  };

  useEffect(() => {
    fecthData();
  }, []);

  return (
    <>
      {/* Preloader */}
      <div id="preloader">
        <div id="status" />
      </div>
      {/* Preloader Ends */}

      {/* header starts */}
      <HeaderPage />
      {/* header ends */}

      {/* BreadCrumb Starts */}
      <section
        className="breadcrumb-main pb-0"
        style={{ backgroundImage: "url(images/bg/bg8.jpg)" }}
      >
        <div className="breadcrumb-outer pt-10">
          <div className="container">
            <div className="breadcrumb-content d-md-flex align-items-center pt-10">
              <h2>Bản đồ</h2>
              <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Trang chủ</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Bản đồ
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="dot-overlay" />
      </section>
      {/* BreadCrumb Ends */}

      <section className="overflow-hidden d-flex align-items-center" style={{justifyContent: 'center'}}>
        <div id="map" ref={mapContainer} />
      </section>

      {/* footer starts */}
      <Footer />
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

export default Map;
