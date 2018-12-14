import React from 'react';

let SmaillImage = (props) => {
    if (props.images) {
        return props.images.map(
            (el) => {
                return <img src={el.thumbnail} data-largesrc={el.large} key={el} onClick={props.passedFunc}/>
            }
        );
    }
    return "";
}

export default SmaillImage;