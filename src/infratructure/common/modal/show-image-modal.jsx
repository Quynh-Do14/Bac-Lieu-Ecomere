import { Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import api from '../../api';
import { showImageCommon } from '../../utils/helper';

export const ShowImageModal = (props) => {
    const { detailDestination, visible, onCancel, setLoading } = props;
    const [listImage, setListImage] = useState([]);

    const getAllHinhAnh = async () => {
        if (detailDestination.idDiaDiem) {
            const response = await api.getHinhAnhByIdDiaDiem(
                `${detailDestination.idDiaDiem}`,
                setLoading
            );
            setListImage(response.data);
        }
    };

    useEffect(() => {
        if (detailDestination.idDiaDiem) {
            getAllHinhAnh().then((_) => { });
        }
    }, [detailDestination]);
    return (
        <Modal
            visible={visible}
            footer={false}
            onCancel={onCancel}
            centered
            width={"98%"}
        >
            <section className="blog trending destination-b p-3">
                <div className="container padding-show-image">
                    <div className="single-full-title border-b mb-2 pb-2">
                        <div className="single-title">
                            <h3 className="mb-1">{detailDestination.tenDiaDiem}</h3>
                            <div className="rating-main d-sm-flex align-items-center">
                                <p className="mb-0 mr-2">
                                    <i className="flaticon-location-pin"></i>
                                    {detailDestination.diaChi}{" "}
                                </p>
                            </div>
                        </div>
                        <a
                            style={{
                                color: "#F56961",
                            }}
                        >
                            Album ảnh về {detailDestination.tenDiaDiem}
                        </a>
                    </div>
                    {
                        listImage.length
                            ?
                            <div className="row">
                                <div className="col-md-12 col-xs-12">
                                    <div className="trend-box">
                                        <div className="row">
                                            {listImage?.map((it, index) => {
                                                return (
                                                    <div className="col-lg-4 col-md-6 col-xs-12 mb-4 pointer" key={index}>
                                                        <div className="trend-item">
                                                            <div className="trend-image">
                                                                <img
                                                                    className='image-show'
                                                                    src={
                                                                        it.uri?.indexOf("http") == -1
                                                                            ? showImageCommon(it.uri)
                                                                            : it.uri
                                                                    } alt="image" height={255} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div class="single-comments single-box mb-4 mt-4" id="single-comments">
                                <h5 class="border-b pb-2 mb-2 text-center">Tất cả các đánh giá</h5>
                            </div>
                    }

                </div>
            </section>
        </Modal>
    )
}
