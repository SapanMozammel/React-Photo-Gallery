import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({ category, index, filterCategoryWise }) => {
	return (
		<div
			key={index}
			style={{ backgroundImage: `url(${category.parent.url})` }}
			onClick={() => filterCategoryWise(category)}
			className='single-category'>
			<h3>{category.item}</h3>
		</div>
	);
};

export default SingleCategory;
