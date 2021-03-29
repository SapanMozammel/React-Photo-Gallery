import React from 'react';
const GalleryItem = ({ img, index, onMyFavoriteClick }) => {
	return (
		<div className='PG-masonry-item'>
			<div className='PG-masonry-item-inner'>
				<img src={img.url} alt={img.alt} key={index} />
				<div className='overlay'>
					<h5 className='pg-masonry-item-author'>
						<span>by</span>
						{img.author}
					</h5>
					<button className='pg-button only-icon pg-primary-button'>
						<i className='pgicon pg-download'></i>
					</button>
				</div>
			</div>
			<div className='PG-masonry-item-outer'>
				<h4 className='PG-masonry-item-title'>{img.title}</h4>
				<div className='PG-masonry-item-outer-overflow'>
					<button
						className={`pg-masonry-item-favorite-count ${
							img.isFav ? 'my-fav' : ''
						}`}
						onClick={() => onMyFavoriteClick(img)}>
						<i className='pgicon pg-like'></i>
						<span>{img.favorite}</span>
					</button>
					<button className='pg-masonry-item-download-count'>
						<i className='pgicon pg-download'></i>
						<span>{img.downloads}</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default GalleryItem;
