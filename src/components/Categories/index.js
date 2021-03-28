import React, { useState, useEffect } from 'react';
import JsonData from './../../data/images.json';
import Slider from 'react-slick';
import SingleCategory from './SingleCategory/Single-category';

const Categories = () => {
	const [images, setImages] = useState([]);
	useEffect(() => {
		setImages(JsonData);
	}, []);
	let uniqueCategories = [
		...new Set(
			images
				.map((img) => img.categories)
				.flat()
				.map((img) => img.toLowerCase())
		),
	];
	const generateUniqueCategoryObject = () => {
		let uniqueCategoryObject;
		let uniqueCategoryObjectElement = uniqueCategories.map((item) => {
			let parent = images.find((img) =>
				img.categories.map((img) => img.toLowerCase()).includes(item)
			);
			return {
				item: item,
				parent: parent,
			};
		});
		uniqueCategoryObject = [...uniqueCategoryObjectElement];
		return uniqueCategoryObject;
	};
	const sliderSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<div>
			<Slider {...sliderSettings} className="category-slider">
				{generateUniqueCategoryObject().sort( () => .5 - Math.random() ).map((category, index) => (
					<SingleCategory category={category} index={index} />
				))}
			</Slider>
		</div>
	);
};

export default Categories;
