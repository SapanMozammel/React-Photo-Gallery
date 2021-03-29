/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const TopBar = (images) => {
	const hasLogo = false;
	return (
		<div className='pg-topbar'>
			<div className='pg-topbar-branding'>
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
			</div>
			<div className='search-input-control'>
				<input
					className='search-input'
					type='text'
					placeholder='Search here...'
				/>
			</div>
			<button className='pg-button pg-love-button only-icon'>
				<span className='icon'>
					<i className='pgicon pg-like'></i>
				</span>
			</button>
			<button className='pg-button pg-success-button'>
				<span className='text'>Upload</span>{' '}
				<span className='icon'>
					<i className='pgicon pg-download'></i>
				</span>
			</button>
		</div>
	);
};

export default TopBar;
