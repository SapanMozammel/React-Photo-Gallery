import React from 'react'

const singleItem = (props) => {
    return (
        <div>
            {console.log(props)}
            <img src={props.url} alt=""/>
        </div>
    )
}

export default singleItem
