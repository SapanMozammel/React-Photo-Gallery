import React from 'react'

const SingleCategory = ({category, index}) => {
    return (
        <div key={index} style={{backgroundImage: `url(${category.parent.url})`}} className="single-category">
            <h3>{category.item}</h3>
        </div>
    )
}

export default SingleCategory
