import React, { useEffect, useState } from "react";
import MainLayout from "../../infratructure/common/layout/main-layout";
import BreadcumbCommon from "../../infratructure/common/layout/breadcumb";
import LoadingFullPage from "../../infratructure/common/controls/loading";
import RelationCommon from "../../infratructure/common/layout/relation";
import Constants from "../../core/common/constant";
import { useLocation } from "react-router-dom";
import api from "../../infratructure/api";
import EvaluateDestination from "./evaluate";
import { WarningMessage } from "../../infratructure/common/toast/toastMessage";
import ModalLogin from "../../infratructure/common/modal/login-modal";
import ModalRegister from "../../infratructure/common/modal/register-modal";
import { convertNumber, showImageCommon } from "../../infratructure/utils/helper";
import { ViewStarCommon } from "../../infratructure/common/controls/view-star";
import { ShowImageModal } from "../../infratructure/common/modal/show-image-modal";

const DetailDestination = () => {
  const [loading, setLoading] = useState(false);
  const [detailDestination, setDetailDestination] = useState({});
  const [dsDiaDiemLienQuan, setDiaDiemLienQuan] = useState([]);
  const [soSao, setSoSao] = useState(0);
  const [noiDung, setNoiDung] = useState("");
  const [listEvaluate, setListEvaluate] = useState([]);
  const [pagination, setPagination] = useState({});
  const [totalItem, setTotalItem] = useState();
  const [pageSize, setPageSize] = useState(Constants.PaginationConfigs.Size);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const [isOpenListImage, setIsOpenListImage] = useState(false);

  let storage = sessionStorage.getItem(Constants.TOKEN);
  const location = useLocation();
  const dateTime = new Date();

  const converDateTime = (date) => {
    const dateLength = date.toString().split("").length
    if (dateLength < 2) {
      return `0${date}`
    }
    return date
  }

  const timeNow = `${converDateTime(dateTime.getFullYear())}-${converDateTime(dateTime.getMonth() + 1)}-${dateTime.getDate()}`
  const param = location.search.replace("?", "");

  const onGetDetailDiemDenAsync = async () => {
    const response = await api.getDiaDiemById(
      `dichvu/top/${param}?idDanhMuc=${Constants.CategoryConfig.Location.value}&limit=${pageSize}`,
      setLoading
    );
    setDetailDestination(response.diaDiem);
    const responses = await api.getAllDiaDiem(
      `dichvu/top?idDanhMuc=${response.diaDiem.idDanhMuc}&${Constants.Params.limit
      }=${3}&idQuanHuyen=${response.diaDiem.idQuanHuyen}`,
      setLoading
    );
    setDiaDiemLienQuan(responses.data.diaDiems);
  };

  useEffect(() => {
    onGetDetailDiemDenAsync().then((_) => { });
  }, []);

  const getAllEvaluate = async () => {
    const response = await api.getAllDanhGiaDiaDiem(
      `idDiaDiem=${param}`,
      setLoading
    );
    setListEvaluate(response.data.danhGias);
    setPagination(response.data.pagination);
    setTotalItem(response.data.totalItems);
  };

  useEffect(() => {
    getAllEvaluate().then((_) => { });
  }, [pageSize]);

  const showMore = (prev) => {
    setPageSize(prev + Constants.Params.limit);
  };

  const onOpenLogin = () => {
    setIsOpenLogin(true);
  };

  const onCloseLogin = () => {
    setIsOpenLogin(false);
  };

  const onOpenRegister = () => {
    setIsOpenRegister(true);
  };

  const onCloseRegister = () => {
    setIsOpenRegister(false);
  };

  const onEvaluate = async () => {
    if (storage) {
      if (soSao && noiDung) {
        api.danhGiaDiaDiem({
          soSao: soSao,
          noiDung: noiDung,
          thoiGianDanhGia: timeNow,
          idDiaDiem: param
        },
          () => {
            getAllEvaluate();
            onGetDetailDiemDenAsync()
          },
          setLoading,
        )
        setNoiDung("");
        setSoSao(0);
      }

      else {
        WarningMessage("Không thể đánh giá", "Vui lòng đánh giá số sao và nhập đánh giá của bạn")
      }
    }
    else {
      onOpenLogin()
    }
  }

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
      <LoadingFullPage loading={loading} />
      <BreadcumbCommon title={"Điểm du lịch"} breadcumb={"Trang chủ"} />
      <section className="blog trending destination-b">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="single-content">
                <div className="description-images mb-4">
                  <div className="thumbnail-images">
                    <div className="slider-store">
                      <div>
                        <img src={detailDestination.hinhAnh?.indexOf("http") == -1
                          ?
                          showImageCommon(detailDestination.hinhAnh)
                          :
                          detailDestination.hinhAnh
                        }
                          alt="1" />
                      </div>
                    </div>
                    {/* <div className="slider-thumbs">
                                            <div>
                                                <img src={data.img} alt="1" />
                                            </div>
                                        </div> */}
                  </div>
                </div>

                <div className="description" id="description">
                  <div className="single-full-title border-b mb-2 pb-2">
                    <div className="single-title">
                      <h3 className="mb-1">{detailDestination.tenDiaDiem}</h3>
                      <div className="rating-main d-sm-flex align-items-center">
                        <p className="mb-0 mr-2">
                          <i className="flaticon-location-pin"></i>
                          {detailDestination.diaChi}{" "}
                        </p>

                        <span>({detailDestination.luotXem} lượt xem)</span>
                      </div>
                    </div>
                  </div>
                  <div className="description-inner mb-2">
                    {/* <h4>{detailDestination.title} </h4> */}
                    <p>{detailDestination.moTa} </p>
                  </div>

                  <div className="tour-includes mb-2">
                    <table>
                      <tbody>
                        <tr>
                          <td>Giờ mở cửa : {detailDestination.gioMoCua} </td>
                          <td>
                            Giờ đóng cửa : {detailDestination.gioDongCua}{" "}
                          </td>
                          <td>Giá vé : {detailDestination.giaVe} </td>
                        </tr>
                        <tr>
                          <td>
                            Số điện thoại liên hệ: {detailDestination.sdtLienHe}
                          </td>
                          <td>
                            Email liên hệ : {detailDestination.emailLienHe}{" "}
                          </td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <br />
                    <br />
                    <a target="_blank"
                      href={detailDestination.uriVideo}
                      style={{
                        color: "#F56961",
                      }}
                    >
                      Video mô tả {detailDestination.tenDiaDiem}
                    </a>
                    <br />
                    <br />

                    <a target="_blank"
                      href={detailDestination.uriBaiViet}
                      style={{
                        color: "#F56961",
                      }}
                    >
                      Bài viết mô tả {detailDestination.tenDiaDiem}
                    </a>
                    <br />
                    <br />
                    <a target="_blank"
                      // href={detailDestination.thoiGianGhe}
                      onClick={onOpenListImage}
                      style={{
                        color: "#F56961",
                      }}
                    >
                      Album ảnh về {detailDestination.tenDiaDiem}
                    </a>
                  </div>
                </div>

                {
                  listEvaluate.length
                    ?
                    <div className="single-review mb-4 mt-4" id="single-review">
                      <h4>Đánh giá</h4>
                      <div className="row d-flex align-items-center">
                        <div className="col">
                          <div className="review-box bg-blue text-center pb-4 pt-4">
                            <h4 class="white mb-1">Địa điểm này được đánh giá</h4>

                            <h2 className="mb-1 white"><span>{convertNumber(detailDestination.soSaoTrungBinh)} </span>/5 Sao</h2>
                            <div class="rating mar-right-15">
                              {ViewStarCommon(convertNumber(detailDestination.soSaoTrungBinh, false), true)}
                              {
                                Number.isInteger(Number(detailDestination.soSaoTrungBinh))
                                  ?
                                  null
                                  :
                                  <span className="fa fa-star-half checked bigStar"></span>
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    : null
                }

                <EvaluateDestination
                  listEvaluate={listEvaluate}
                  onEvaluate={onEvaluate}
                  soSao={soSao}
                  setSoSao={setSoSao}
                  noiDung={noiDung}
                  setNoiDung={setNoiDung}
                  showMore={showMore}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {
        dsDiaDiemLienQuan.length > 0 && (
          <RelationCommon
            data={dsDiaDiemLienQuan}
            title={"Địa Điểm"}
            slogan={Constants.Slogan}
          />
        )
      }
      <ModalLogin
        visible={isOpenLogin}
        handleCancel={onCloseLogin}
        setLoading={setLoading}
        onOpenRegister={onOpenRegister}
        isCurrentPage={true}
      />
      <ModalRegister
        visible={isOpenRegister}
        handleCancel={onCloseRegister}
        setLoading={setLoading}
      />
      <ShowImageModal
        visible={isOpenListImage}
        onCancel={onCloseListImage}
        detailDestination={detailDestination}
        setLoading={setLoading}
      />
    </MainLayout >
  );
};

export default DetailDestination;
