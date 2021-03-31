import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
const GalleryItem = ({ img, index, onMyFavoriteClick, onMyDownloadClick }) => {
	return (
		<Router>
			<div className='PG-masonry-item'>
				<div className='PG-masonry-item-inner'>
					<Link to={`/${img.title}`}>
						<img src={img.url} alt={img.alt} key={index} />
					</Link>
					<div className='overlay'>
						<Link
							to={`/${img.author}`}
							className='pg-masonry-item-author'>
							<span>by</span>
							{img.author}
						</Link>
						<button className='pg-button only-icon pg-primary-button'>
							<i className='pgicon pg-download'></i>
						</button>
					</div>
				</div>
				<div className='PG-masonry-item-outer'>
					<Link
						to={`/${img.title}`}
						className='PG-masonry-item-title'>
						{img.title}
					</Link>
					<div className='PG-masonry-item-outer-overflow'>
						<button
							className={`pg-masonry-item-favorite-count ${
								img.isFav ? 'my-fav' : ''
							}`}
							onClick={() => onMyFavoriteClick(img)}>
							<i className='pgicon pg-like'></i>
							<span>{img.favorite}</span>
						</button>
						<button
							className='pg-masonry-item-download-count'
							onClick={() => onMyDownloadClick(img)}>
							<i className='pgicon pg-download'></i>
							<span>{img.downloads}</span>
						</button>
					</div>
				</div>
			</div>
		</Router>
	);
};

export default GalleryItem;
