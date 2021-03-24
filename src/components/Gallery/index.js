import React, { useEffect, useState } from 'react';
import JsonData from "./../../data/images.json";
const Gallery = () => {
    const [images, setImages] = useState([])
    useEffect(() => {
        setImages(JsonData)
      }, []); // Only re-run the effect if count changes
    
    return (
        <div className="PG-topbar-gallery">
            {images.map( (img, index) => (
                <img src={img.url} alt={`Images ${index}`} key={index} />
            ))}
        </div>
    )
}

export default Gallery;
