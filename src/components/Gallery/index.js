import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import JsonData from './../../data/images.json';
import GalleryItem from './Gallery-item/Gallery-item';
const Gallery = (selectedCategory) => {
	const [images, setImages] = useState([]);
	const [mainImages, setMainImages] = useState([]);
	useEffect(() => {
		setImages(JsonData);
		setMainImages(JsonData);
	}, []);
	useEffect(() => {
		if (
			selectedCategory.selectedCategory &&
			selectedCategory.selectedCategory.item
		) {
			setImages([
				...mainImages.filter((image) =>
					image.categories
						.map((category) => category.toLowerCase())
						.includes(selectedCategory.selectedCategory.item)
				),
			]);
		}
	}, [selectedCategory]);
	const breakpointColumnsObj = {
		default: 4,
		1200: 3,
		700: 2,
		500: 1,
	};

	const handleMyFavoriteClick = (img) => {
		let favorite = images.find((image) => image.id === img.id);
		if (favorite.isFav) {
			favorite.favorite = img.favorite - 1;
		} else {
			favorite.favorite = img.favorite + 1;
		}
		favorite.isFav = !favorite.isFav;
		setImages([...images, favorite]);
	};

	const handleMyDownloadClick = (img) => {
		let download = images.find((image) => image.id === img.id);
		download.downloads = img.downloads + 1;
		setImages([...images, download]);
	};

	return (
		<Masonry
			breakpointCols={breakpointColumnsObj}
			className='PG-masonry-gallery'
			columnClassName='PG-masonry-column'>
			{images.map((img, index) => (
				<GalleryItem
					img={img}
					index={index}
					key={index}
					onMyFavoriteClick={handleMyFavoriteClick}
					onMyDownloadClick={handleMyDownloadClick}
				/>
			))}
		</Masonry>
	);
};

export default Gallery;
