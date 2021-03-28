import React, { useState } from 'react';
const GalleryItem = ({ img, index, myFavCount }) => {
	const [myFav, setMyFav] = useState(false);
	const favCountFunc = () => {
        if(myFav) {
            setMyFav(false)
            img.favorite -= 1;
        } else{
            setMyFav(true)
            img.favorite += 1;
        }
    };
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
					<button className={`pg-masonry-item-favorite-count ${myFav? "my-fav" : ""}`} onClick={favCountFunc}>
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
