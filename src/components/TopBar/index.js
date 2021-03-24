/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const TopBar = () => {
    const hasLogo = false;
    return (
        <div className="pg-topbar">
            <div className="pg-topbar-branding">
                { hasLogo && (<img  className="pg-topbar-logo" src="#" alt="wp-photo-gallery"/>) }
                { !hasLogo && (<h3 className="pg-topbar-title">WP <span>Photo</span> Gallery</h3>) }
            </div>
            <form action="">
                <input type="text" placeholder="Search here..."/>
            </form>
            <button type="pg-button pg-love__button pg-button:only-icon"><span className="icon"><i className="pgicon pg-like"></i></span></button>
            <button type="pg-button pg-success__button"><span className="text">Upload</span> <span className="icon"><i className="pgicon pg-download"></i></span></button>
        </div>
    )
}

export default TopBar;
