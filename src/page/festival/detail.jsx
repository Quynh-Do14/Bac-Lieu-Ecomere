import React, { useEffect, useState } from "react";
import MainLayout from "../../infratructure/common/layout/main-layout";
import BannerCommon from "../../infratructure/common/layout/banner";
import BreadcumbCommon from "../../infratructure/common/layout/breadcumb";
import LoadingFullPage from "../../infratructure/common/controls/loading";
import RelationCommon from "../../infratructure/common/layout/relation";
import Constants from "../../core/common/constant";
import { useLocation } from "react-router-dom";
import {
  convertTimeOnly,
  showImageCommon,
} from "../../infratructure/utils/helper";
import api from "../../infratructure/api";

const DetailFestival = () => {
  const [loading, setLoading] = useState(false);
  const [detailFestival, setDetailFestival] = useState({});
  const location = useLocation();
  const search = location.search.replace("?", "");
  console.log("search", search);
  const onGetDetailDiemDenAsync = async () => {
    const response = await api.getDiaDiemById(
      `dichvu/top/${search}?idDanhMuc=${Constants.CategoryConfig.Festival.value}`,
      setLoading
    );
    setDetailFestival(response.diaDiem);
  };

  useEffect(() => {
    onGetDetailDiemDenAsync().then((_) => {});
  }, []);

  return (
    <MainLayout>
      <BreadcumbCommon title={"Lễ hội"} breadcumb={"Trang chủ"} />
      <section class="blog trending destination-b">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="single-content">
                <div class="description-images mb-4">
                  <div class="thumbnail-images">
                    <div class="slider-store">
                      <div>
                        <img
                          src={showImageCommon(detailFestival.hinhAnh)}
                          alt="1"
                        />
                      </div>
                    </div>
                    {/* <div class="slider-thumbs">
                                            <div>
                                                <img src="images/bg/bg1.jpg" alt="1" />
                                            </div>
                                        </div> */}
                  </div>
                </div>

                <div class="description" id="description">
                  <div class="single-full-title border-b mb-2 pb-2">
                    <div class="single-title">
                      <h3 class="mb-1">{detailFestival.tenDiaDiem} </h3>
                      <div class="rating-main d-sm-flex align-items-center">
                        <p class="mb-0 mr-2">
                          <i class="flaticon-location-pin"></i>
                          {detailFestival.diaChi}{" "}
                        </p>
                        <span>({detailFestival.luotXem} Lượt xem)</span>
                      </div>
                    </div>
                  </div>
                  <div class="description-inner mb-2">
                    <p> {detailFestival.moTa} </p>
                  </div>

                  <div class="tour-includes mb-2">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            Giờ mở cửa :{" "}
                            {convertTimeOnly(detailFestival.gioMoCua)}{" "}
                          </td>
                          <td>
                            Giờ đóng cửa :{" "}
                            {convertTimeOnly(detailFestival.gioDongCua)}{" "}
                          </td>
                          <td>Giá vé : {detailFestival.giaVe} </td>
                        </tr>
                        <tr>
                          <td>
                            Số điện thoại liên hệ: {detailFestival.sdtLienHe}
                          </td>
                          <td>Email liên hệ : {detailFestival.emailLienHe} </td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <br />
                    <br />
                    <a
                      target="_blank"
                      href={detailFestival.uriVideo}
                      style={{
                        color: "#F56961",
                      }}
                    >
                      Video lễ hội {detailFestival.tenDiaDiem}
                    </a>
                    <br />
                    <br />

                    <a
                      target="_blank"
                      href={detailFestival.uriBaiViet}
                      style={{
                        color: "#F56961",
                      }}
                    >
                      Bài viết mô tả {detailFestival.tenDiaDiem}
                    </a>
                    <br />
                    <br />
                    <a
                      target="_blank"
                      href={detailFestival.thoiGianGhe}
                      style={{
                        color: "#F56961",
                      }}
                    >
                      Album ảnh về {detailFestival.tenDiaDiem}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <RelationCommon
                data={dataR}
                title={"Địa Điểm"}
                slogan={Constants.Slogan}
            /> */}
      {/* <LoadingFullPage loading={loading} /> */}
      <LoadingFullPage loading={loading} />
    </MainLayout>
  );
};

export default DetailFestival;
