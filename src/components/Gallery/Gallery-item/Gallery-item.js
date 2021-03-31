import React from 'react';
import { Link } from 'react-router-dom';
const GalleryItem = ({ img, index, onMyFavoriteClick, onMyDownloadClick, showItemDetails }) => {
	return (
		<div className='PG-masonry-item'>
			<div className='PG-masonry-item-inner'>
				<Link to="/single-item" onClick={showItemDetails(img, index)}>
					<img src={img.url} alt={img.alt} key={index} />
				</Link>
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
				<Link to="/single-item" className='PG-masonry-item-title'>
					{img.title}
				</Link>
				<div className='PG-masonry-item-outer-overflow'>
					<button
						className={`pg-masonry-item-favorite-count ${
							img.isFav ? 'my-fav' : ''
						}`}
						onClick={() => onMyFavoriteClick(img, index)}>
						<i className='pgicon pg-like'></i>
						<span>{img.favorite}</span>
					</button>
					<button
						className='pg-masonry-item-download-count'
						onClick={() => onMyDownloadClick(img, index)}>
						<i className='pgicon pg-download'></i>
						<span>{img.downloads}</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default GalleryItem;
