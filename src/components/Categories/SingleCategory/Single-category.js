import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const SingleCategory = ({ category, index, filterCategoryWise }) => {
	// console.log(filterCategoryWise)
	return (
		<Router>
			<Link
				to={`/${category.item}`}
				key={index}
				style={{ backgroundImage: `url(${category.parent.url})` }}
				onClick={() => filterCategoryWise(category)}
				className='single-category'>
				<h3>{category.item}</h3>
			</Link>
		</Router>
	);
};

export default SingleCategory;
