import React, { useState } from 'react'

const EvaluateDestination = ({ listEvaluate, onEvaluate, soSao, setSoSao, noiDung, setNoiDung }) => {

    const starEvaluateCount = (star) => {
        const stars = [];
        for (let i = 0; i < star; i++) {
            stars.push(
                <span key={i} class="fa fa-star checked"></span>
            );
        }
        return stars
    }

    const viewStarEvaluate = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} onClick={() => onSelectStar(i + 1)} class={`${i < soSao ? "fa fa-star  checked-star mr-1 pointer" : "fa fa-star un-checked-star checked mr-1 pointer"}`}></span>
            );
        }
        return stars
    }

    const onSelectStar = (prev) => {
        setSoSao(prev);
    }

    const onChangeNoiDung = (e) => {
        setNoiDung(e.target.value);
    }
    return (
        <div>
            <div class="single-comments single-box mb-4 mt-4" id="single-comments">
                <h5 class="border-b pb-2 mb-2">Tất cả các đánh giá</h5>
                {
                    listEvaluate.map((it, index) => {
                        return (
                            <div class="comment-box" key={index}>
                                <div class="comment-image">
                                    <img src="images/reviewer/avatar.png" alt="image" width={60} />
                                </div>
                                <div class="comment-content" style={{ width: "-webkit-fill-available" }}>
                                    <h5 class="mb-1">{it.firstName} {it.lastName}</h5>
                                    <p class="comment-date">{it.thoiGianDanhGia}</p>
                                    <div class="comment-rate">
                                        <div class="rating mar-right-15">
                                            {starEvaluateCount(it.soSao)}
                                        </div>
                                    </div>

                                    <p class="comment  w-100">{it.noiDung}</p>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
            {/* Viết đánh giá */}
            <div class="single-add-review" id="single-add-review">

                <h4>Viết đánh giá</h4>
                <div class="rating mr-2">
                    {viewStarEvaluate()}
                </div>
                <form>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <textarea value={noiDung} placeholder='Đánh giá của bạn' onChange={onChangeNoiDung} />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-btn">
                                <a onClick={onEvaluate} class="nir-btn white">Gửi đánh giá</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EvaluateDestination