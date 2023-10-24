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
import { ShowImageModal } from "../../infratructure/common/modal/show-image-modal";

const DetailFestival = () => {
  const [loading, setLoading] = useState(false);
  const [detailFestival, setDetailFestival] = useState({});
  const [isOpenListImage, setIsOpenListImage] = useState(false);

  const location = useLocation();
  const search = location.search.replace("?", "");
  const onGetDetailDiemDenAsync = async () => {
    const response = await api.getDiaDiemById(
      `dichvu/top/${search}?idDanhMuc=${Constants.CategoryConfig.Festival.value}`,
      setLoading
    );
    setDetailFestival(response.diaDiem);
  };

  useEffect(() => {
    onGetDetailDiemDenAsync().then((_) => { });
  }, []);
  ///////////////////
  const onOpenListImage = () => {
    setIsOpenListImage(true);
  };

  const onCloseListImage = () => {
    setIsOpenListImage(false);
  };
  ///////////////////
  return (
    <MainLayout>
      <BreadcumbCommon title={"Lễ hội"} breadcumb={"Trang chủ"} />
      <section className="blog trending destination-b">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="single-content">
                <div className="description-images mb-4">
                  <div className="thumbnail-images">
                    <div className="slider-store">
                      <div>
                        <img
                          src={
                            detailFestival.hinhAnh?.indexOf("http") == -1
                              ?
                              showImageCommon(detailFestival.hinhAnh)
                              :
                              detailFestival.hinhAnh
                          }
                          alt="1"
                        />
                      </div>
                    </div>
                    {/* <div className="slider-thumbs">
                                            <div>
                                                <img src="images/bg/bg1.jpg" alt="1" />
                                            </div>
                                        </div> */}
                  </div>
                </div>

                <div className="description" id="description">
                  <div className="single-full-title border-b mb-2 pb-2">
                    <div className="single-title">
                      <h3 className="mb-1">{detailFestival.tenDiaDiem} </h3>
                      <div className="rating-main d-sm-flex align-items-center">
                        <p className="mb-0 mr-2">
                          <i className="flaticon-location-pin"></i>
                          {detailFestival.diaChi}{" "}
                        </p>
                        <span>({detailFestival.luotXem} Lượt xem)</span>
                      </div>
                    </div>
                  </div>
                  <div className="description-inner mb-2">
                    <p> {detailFestival.moTa} </p>
                  </div>

                  <div className="tour-includes mb-2">
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
                      // target="_blank"
                      // href={detailFestival.thoiGianGhe}
                      style={{
                        color: "#F56961",
                      }}
                      onClick={onOpenListImage}
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
      <ShowImageModal
        visible={isOpenListImage}
        onCancel={onCloseListImage}
        detailDestination={detailFestival}
        setLoading={setLoading}
      />
    </MainLayout>
  );
};

export default DetailFestival;
