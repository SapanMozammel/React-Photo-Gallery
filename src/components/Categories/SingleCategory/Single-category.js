import React from 'react';

const SingleCategory = ({ category, index, filterCategoryWise }) => {
    // console.log(filterCategoryWise)
	return (
		<button
			key={index}
			style={{ backgroundImage: `url(${category.parent.url})` }}
            onClick={() => filterCategoryWise(category)}
			className='single-category'>
			<h3>{category.item}</h3>
		</button>
	);
};

export default SingleCategory;
