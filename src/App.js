import React from 'react';
import Categories from './components/Categories';
import Gallery from './components/Gallery';
import TopBar from './components/TopBar';
import Upload from './components/Upload';
export default function App() {
	return (
		<div className='PhotoGallery--wrapper'>
			<TopBar />
			<div className='container'>
				<Categories />
				<Gallery />
				<Upload />
			</div>
		</div>
	);
}
