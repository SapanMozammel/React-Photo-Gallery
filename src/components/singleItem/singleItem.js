import React, {useState, useEffect} from 'react'
import JsonData from './../../data/images.json';

function SingleItem() {
	const [images, setImages] = useState([]);
	useEffect(() => {
		setImages(JsonData);
	}, []);
    const img = images.find((img) => img.id==4)
    return (
        <div className="singleItem">
            <div className="item__thumb">
                <img src={img && img.url} alt={img && img.alt} />
            </div>
            <div className="item__info__wrap">
                <div className="item__info">
                    <h2 className="item__title">{img && img.alt}</h2>
                    <p className="item__description">{img && img.description}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleItem;
