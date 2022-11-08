import React from 'react';
import { useRef } from 'react';

const Toggle = (props) => {
    
    const btn = useRef();

    const handleToggle = () => {
        props.setOnOff(prevState => !prevState);
        if (props.onOff){
            btn.current.style.marginLeft = '0%';
            props.setInfo(props.title + ': OFF')
            setTimeout(() => {props.setInfo('INFO')}, 2500);
        } else {
            btn.current.style.marginLeft = '50%'
            props.setInfo(props.title + ': ON')
            setTimeout(() => {props.setInfo('INFO')}, 2500);
        }
    }
    
    return (
        <div className='toggle'>
            <p>{props.title}</p>
            <div className='click' onClick={handleToggle}>
                <div className='click-btn' ref={btn}></div>
            </div>
        </div>
    )
}

export default Toggle;