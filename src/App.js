import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Categories from './components/Categories';
import Gallery from './components/Gallery';
import SingleItem from './components/singleItem/singleItem';
import TopBar from './components/TopBar';
import Upload from './components/Upload';

export default function App() {
	const [selectedCategory, setSelectedCategory] = useState(null);
	const filterCategoryWise = (category) => {
		setSelectedCategory(category);
	};
	const [allFavorite, setAllFavorite] = useState(0);
	const filterFavoriteWise = () => {
		setAllFavorite(true);
	};
	const [allItem, setAllItem] = useState(0);
	const showAllItem = () => {
		setAllItem(true);
	};
	return (
		<Router>
			<Switch>
				<div className='PhotoGallery--wrapper'>
					<TopBar
						filterFavoriteWise={filterFavoriteWise}
						showAllItem={showAllItem}
					/>
					<div className='container-fluid'>
						<Route path='/single-item' >
							<SingleItem />
						</Route>
						<Route path='/Upload'>
							<Upload />
						</Route>
						<Route exact path='/'>
							<Categories
								filterCategoryWise={filterCategoryWise}
							/>
							<Gallery
								selectedCategory={selectedCategory}
								allFavorite={allFavorite}
								allItem={allItem}
							/>
						</Route>
					</div>
				</div>
			</Switch>
		</Router>
	);
}
