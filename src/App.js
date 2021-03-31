import React, { useState } from 'react';
import Categories from './components/Categories';
import Gallery from './components/Gallery';
import TopBar from './components/TopBar';
import Upload from './components/Upload';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
	const [selectedCategory, setSelectedCategory] = useState(null);
	const filterCategoryWise = (category) => {
		setSelectedCategory(category);
	};
	return (
		<Router>
			<Switch>
				<Route path='/Favorite'>
					<h2>Favorite</h2>
				</Route>
				<Route path='/Upload'>
					<h2>Upload</h2></Route>
				<Route path='/'>
					<div className='PhotoGallery--wrapper'>
						<TopBar />
						<div className='container-fluid'>
							<Categories
								filterCategoryWise={filterCategoryWise}
							/>
							<Gallery selectedCategory={selectedCategory} />
							<Upload />
						</div>
					</div>
				</Route>
			</Switch>
		</Router>
	);
}
