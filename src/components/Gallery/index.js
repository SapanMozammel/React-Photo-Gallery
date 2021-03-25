import React, { useEffect, useState } from 'react';
import JsonData from './../../data/images.json';
import Masonry from 'react-masonry-css';
const Gallery = () => {
	const [images, setImages] = useState([]);
	const breakpointColumnsObj = {
		default: 4,
		1100: 3,
		700: 2,
		500: 1,
	};

	useEffect(() => {
		setImages(JsonData);
	}, []);

	return (
		<Masonry
			breakpointCols={breakpointColumnsObj}
			className='PG-masonry-gallery'
			columnClassName='PG-masonry-column'>
			{images.map((img, index) => (
				<div className="PG-masonry-column">
					<img src={img.url} alt={img.alt} key={index} />
					<h2>{index}</h2>
				</div>
			))}
		</Masonry>
	);
};

export default Gallery;
