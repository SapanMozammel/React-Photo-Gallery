/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const TopBar = (images) => {
	const hasLogo = false;
	return (
		<Router>
			<div className='pg-topbar'>
				<Link to="/" className='pg-topbar-branding'>
					{hasLogo && (
						<img
							className='pg-topbar-logo'
							src='#'
							alt='wp-photo-gallery'
						/>
					)}
					{!hasLogo && (
						<h3 className='pg-topbar-title'>
							WP <span>Photo</span> Gallery
						</h3>
					)}
				</Link>
				<div className='search-input-control'>
					<input
						className='search-input'
						type='text'
						placeholder='Search here...'
					/>
				</div>
				<Link to="/Favorite" className='pg-button pg-love-button only-icon'>
					<span className='icon'>
						<i className='pgicon pg-like'></i>
					</span>
				</Link>
				<Link to="/Upload" className='pg-button pg-success-button'>
					<span className='text'>Upload</span>{' '}
					<span className='icon'>
						<i className='pgicon pg-download'></i>
					</span>
				</Link>
			</div>
		</Router>
	);
};

export default TopBar;
