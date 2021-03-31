import React, {useState} from 'react';
import Categories from './components/Categories';
import Gallery from './components/Gallery';
import TopBar from './components/TopBar';
import Upload from './components/Upload';
export default function App() {
	const [selectedCategory, setSelectedCategory] = useState(null)
	const filterCategoryWise = (category) => {
		setSelectedCategory(category)
	};
	return (
		<div className='PhotoGallery--wrapper'>
			<TopBar />
			<div className='container-fluid'>
				{/* <Categories filterCategoryWise={filterCategoryWise} /> */}
				{/* <Gallery selectedCategory = {selectedCategory} /> */}
				<Upload />
			</div>
		</div>
	);
}