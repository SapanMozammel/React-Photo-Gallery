import React, { useEffect, useState } from 'react';
import JsonData from './../../data/images.json';
import Masonry from 'react-masonry-css';
import GalleryItem from './Gallery-item/Gallery-item';
const Gallery = () => {
	const [images, setImages] = useState([]);
	useEffect(() => {
		setImages(JsonData);
	}, []);
	const breakpointColumnsObj = {
		default: 4,
		1200: 3,
		700: 2,
		500: 1,
	};

	const myFavCount = 0;

	return (
		<Masonry
			breakpointCols={breakpointColumnsObj}
			className='PG-masonry-gallery'
			columnClassName='PG-masonry-column'>
			{images.map((img, index) => (
				<GalleryItem img={img} index={index} myFavCount={myFavCount} />
			))}
		</Masonry>
	);
};

export default Gallery;
