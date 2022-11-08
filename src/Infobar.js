import React from 'react';

const InfoBar = (props) => {
    return (
        <div className='info'>
        <p className='info-msg'>{props.info}</p>
        </div>
    )
}

export default InfoBar;