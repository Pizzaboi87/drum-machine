import React from 'react';

const Slider = (props) => {
    
    const sliderHandler = (e) => {
            let volume = e.target.value;
            if (volume > 1) volume = 1;
            else if (volume < 0) volume = 0;
            props.setInfo('Volume: ' + (volume*100).toFixed(0));
    }
    
    const setIt = (e) => {
        props.setVolume(e.target.value);
    }
    
    return (
        <input 
            type='range'
            min='0'
            max='1'
            step='0.01'
            className='volume'
            onClick={setIt}
            onMouseMove={sliderHandler}
            onMouseOut={() => props.setInfo('INFO')}
        />
    )
}

export default Slider;