import React from 'react'
import { Link } from 'react-router-dom';

function SingleItem({ img, index, onMyFavoriteClick, onMyDownloadClick }) {
    return (
        <div className="singleItem">
            <div className="item__thumb">
                <img src={img.url} alt={img.alt} key={index} />
            </div>
            <div className="item__info__wrap">
                <div className="item__info">
                    <h2 className="item__title">{img.alt}</h2>
                    <div className="item__meta">
                        <p>Download: {img.download}</p>
                        <p>Favourite: {img.favourite}</p>
                    </div>
                    <p className="item__description">{img.description}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleItem;
