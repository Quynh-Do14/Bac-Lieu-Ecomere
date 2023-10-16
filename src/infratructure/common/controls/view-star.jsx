import React from 'react'

export const ViewStarCommon = (star, bigStar = false) => {
    const stars = [];
    for (let i = 0; i < star; i++) {
        stars.push(
            <span key={i} className={`fa fa-star checked ${bigStar ? "bigStar" : ""}`}></span>
        );
    }
    return stars
}
