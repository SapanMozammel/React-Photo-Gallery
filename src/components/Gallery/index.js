import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import JsonData from './../../data/images.json';
import GalleryItem from './Gallery-item/Gallery-item';
const Gallery = ({selectedCategory, allFavorite, allItem, showItemDetails}) => {
	const [images, setImages] = useState([]);
	const [mainImages, setMainImages] = useState([]);
	useEffect(() => {
		setImages(JsonData);
		setMainImages(JsonData);
	}, []);
	useEffect(() => {
		if (
			selectedCategory &&
			selectedCategory.item
		) {
			setImages([
				...mainImages.filter((image) =>
					image.categories
						.map((category) => category.toLowerCase())
						.includes(selectedCategory.item)
				),
			]);
		}
	}, [selectedCategory]);
	useEffect(() => {
		if (
			allFavorite 
		) {
			setImages([
				...mainImages.filter((image) =>
					image.isFav
				),
			]);
		}
	}, [allFavorite]);
	useEffect(() => {
		if (
			allItem 
		) {
			setImages([
				...mainImages
			]);
		}
	}, [allItem]);
	const breakpointColumnsObj = {
		default: 4,
		1200: 3,
		700: 2,
		500: 1,
	};

	const handleMyFavoriteClick = (img, index) => {
		let favorite = images.find((image) => image.id === img.id);
		if (favorite.isFav) {
			favorite.favorite = img.favorite - 1;
		} else {
			favorite.favorite = img.favorite + 1;
		}
		favorite.isFav = !favorite.isFav;
		images[index] = favorite;
		setImages([...images]);
	};

	const handleMyDownloadClick = (img, index) => {
		let download = images.find((image) => image.id === img.id);
		download.downloads = img.downloads + 1;
		images[index] = download;
		setImages([...images]);
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
					showItemDetails={showItemDetails}
				/>
			))}
		</Masonry>
	);
};

export default Gallery;
