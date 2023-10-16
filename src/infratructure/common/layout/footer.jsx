import React from "react";

const Footer = () => {
  return (
    <div>
      {/* <footer classNameName="pt-10 bubbles footermain">
                <div classNameName="footer-upper pb-5">
                    <div classNameName="container">
                        <div classNameName="footer-about bg-white p-4 d-flex justify-content-between">
                            <div>
                                <img src="./images/logo.png" alt="" />
                            </div>
                            <div>
                                <ul style={{ display: "flex", flexDirection: "column", justifyContent: "start" }}>
                                    <li>
                                        <strong>Hotline:</strong> +84944125693
                                    </li>
                                    <li>
                                        <strong>Địa chỉ:</strong> 5 D. Nguyễn Tất Thành, Phường 1, Bạc Liêu
                                    </li>
                                    <li>
                                        <strong>Email:</strong> vpubndt@baclieu.gov.vn
                                    </li>
                                    <li>
                                        <strong>Website:</strong> https://vpubnd.baclieu.gov.vn
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </footer> */}
      <footer className="pt-10 bubbles footermain">
        <div className="footer-upper pb-5">
          <div className="container">
            <div className="row w-100">
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
                <div
                  className="d-flex  flex-column footer-about bg-white p-4 justify-content-center align-items-center"
                  style={{ alignItems: "center" }}
                >
                  <img src="images/logo.png" alt="" style={{ maxWidth: 170 }} />
                  <p className="mt-3">
                    Nếu có cơ hội về thăm miền Tây Nam Bộ
                    <br />
                    Du khách đừng bỏ qua tỉnh Bạc Liêu.
                    <br />
                    Bạc liêu, vùng đất tuyệt vời !
                    <br />
                    Cùng tôi tham gia du lịch Bạc Liêu
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63003.66873809114!2d105.71193037574447!3d9.26846490738424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a10a2351f087b3%3A0x4949992f9e65b750!2zVHAuIELhuqFjIExpw6p1LCBC4bqhYyBMacOqdSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1696579104318!5m2!1svi!2s"
                  style={{ border: 0, width: "100%", height: "100%" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
                <div className="footer-links">
                  <h4 className="white">Thông tin liên hệ</h4>
                  <ul>
                    <li>
                      <strong>Hotline:</strong> +84944125693
                    </li>
                    <li>
                      <strong>Địa chỉ:</strong> Nguyễn Tất Thành, Phường 1,
                      Bạc Liêu
                    </li>
                    <li>
                      <strong>Email:</strong> vpubndt@baclieu.gov.vn
                    </li>
                    <li>
                      <strong>Website:</strong> https://vpubnd.baclieu.gov.vn
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
