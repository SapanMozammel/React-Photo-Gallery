import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({ category, index, filterCategoryWise }) => {
	return (
		<Link
			to={`/${category.item}`}
			key={index}
			style={{ backgroundImage: `url(${category.parent.url})` }}
			onClick={() => filterCategoryWise(category)}
			className='single-category'>
			<h3>{category.item}</h3>
		</Link>
	);
};

export default SingleCategory;
