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
	const [allFavorite, setAllFavorite] = useState(false);
	const filterFavoriteWise = () => {
		setAllItem(false); // to change state
		setAllFavorite(true);
	};
	const [allItem, setAllItem] = useState(0);
	const showAllItem = () => {
		setAllFavorite(false); // to change state
		setAllItem(true);
	};
	return (
		<Router>
			<div className='PhotoGallery--wrapper'>
				<TopBar
					filterFavoriteWise={filterFavoriteWise}
					showAllItem={showAllItem}
				/>
				<div className='container-fluid'>
					<Switch>
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
					</Switch>
				</div>
			</div>
		</Router>
	);
}
