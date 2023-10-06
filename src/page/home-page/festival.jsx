import React from "react";
import { showImageCommon } from "../../infratructure/utils/helper";

const Festival = ({ data }) => {
  return (
    <section className="news pb-2 pt-9">
      <div className="container">
        <div className="section-title text-center mb-5 pb-2 w-50 mx-auto">
          <h2 className="m-0">
            Lễ <span>hội</span>
          </h2>
          <p className="mb-0">
            Du lịch đã giúp chúng ta hiểu được ý nghĩa của cuộc sống và nó đã
            giúp chúng ta trở thành những người tốt hơn. Mỗi lần đi du lịch,
            chúng ta nhìn thế giới bằng con mắt mới.
          </p>
        </div>
        {data.length > 0 && (
          <div className="news-outer">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-xs-12 mb-4">
                <div className="news-item overflow-hidden">
                  <div className="news-image">
                    <img src={showImageCommon(data[0].hinhAnh)} alt="image" />
                  </div>
                  <div className="news-list mt-2 border-b pb-2 mb-2">
                    <ul>
                      <li>
                        <a href="single-right.html" className="pr-3">
                          <i className="fa fa-calendar pink pr-1" />{" "}
                          {data[0].gioDongCua}{" "}
                        </a>
                      </li>
                      <li>
                        <a href="single-right.html" className="pr-3">
                          <i className="fa fa-eye pink pr-1" />{" "}
                          {data[0].luotXem}
                        </a>
                      </li>
                      <li>
                        <a href="single-right.html" className="">
                          <i className="fa fa-tag pink pr-1" />{" "}
                          {data[0].tenQuanHuyen}, Bạc Liêu
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="news-content mt-2">
                    <h4 className="pb-2 mb-2 border-b">
                      <a href="single-right.html">{data[0].tenDiaDiem}</a>
                    </h4>
                    <p className="mb-3">
                      {data[0].moTa.length > 500
                        ? data[0].moTa.slice(0, 500) + " ..."
                        : data[0].moTa}
                    </p>
                    <div className="author-img">
                      <img
                        src={
                          "https://cdn-icons-png.flaticon.com/512/8196/8196995.png"
                        }
                        alt="Demo Image"
                      />
                      <span>Tìm hiểu ngay !</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 col-xs-12">
                <div className="row">
                  {data.map((it, index) => (
                    <div
                      key={index}
                      className="col-lg-6 col-md-6 col-xs-12 mb-4"
                    >
                      <div className="news-item overflow-hidden">
                        <div className="news-image">
                          <img src={showImageCommon(it.hinhAnh)} alt="image" />
                        </div>
                        <div className="news-list mt-2 border-b pb-2 mb-2">
                          <ul>
                            <li>
                              <a href="single-right.html" className="pr-3">
                                <i className="fa fa-calendar pink pr-1" />{" "}
                                {it.gioDongCua}{" "}
                              </a>
                            </li>
                            <li>
                              <a href="single-right.html" className="pr-3">
                                <i className="fa fa-eye pink pr-1" />{" "}
                                {it.luotXem}
                              </a>
                            </li>
                            <li>
                              <a href="single-right.html" className="">
                                <i className="fa fa-tag pink pr-1" />{" "}
                                {data[0].tenQuanHuyen}, Bạc Liêu
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="news-content mt-2">
                          <h4 className="bordernone mb-0">
                            <a href="single-right.html">{it.tenDiaDiem}</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Festival;
