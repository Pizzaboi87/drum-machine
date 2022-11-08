import React from 'react';
import { useRef, useEffect, useCallback } from 'react';

const Box = (props) => {
    
    const button = useRef();
    
    const handleKeys = useCallback((e) => {
        if (e.key === props.button.letter ||
            e.key === props.button.sletter){
            pushButton();
        }
    // eslint-disable-next-line
    }, [props.setOnOff, props.module])
    
    const releaseKeys = useCallback((e) => {
        releaseButton();
    // eslint-disable-next-line
    }, [props.setOnOff])
    
    useEffect(() => {
    if (props.onOff) {
        window.addEventListener('keypress', handleKeys);
        window.addEventListener('keyup', releaseKeys);
    } else {
        window.removeEventListener('keypress', handleKeys);
        window.removeEventListener('keyup', releaseKeys);
    }

    return () => {
        window.removeEventListener('keypress', handleKeys);
        window.removeEventListener('keyup', releaseKeys);
    }
    // eslint-disable-next-line
    }, [props.onOff, handleKeys])
    
    const buttonClick = () => {
        if (props.onOff) pushButton();
    }
    
    const releaseClick = () => {
        if (props.onOff) releaseButton();
    }
    
    //const sound = new Audio(`${props.button.sound_a}`);
    //const sound2 = new Audio(`${props.button.sound_b}`);
    
    const pushButton = () => {
        const sound = document.getElementById(`${props.button.letter}`)
        const sound2 = document.getElementById(`${props.button.bid}`)
        button.current.style.backgroundColor = '#f0249b';
        button.current.classList.add('active');
        props.setInfo(props.button.letter);
        if (props.module){
            sound2.play();
            sound2.volume = props.volume;
        } else {
            sound.play();
            sound.volume = props.volume;  
        } 
        setTimeout(() => {props.setInfo('INFO')}, 1000);
    }
    
    const releaseButton = () => {
        button.current.style.backgroundColor = '#24F057';
        button.current.classList.remove('active');
    }
    
    return (
        <div className='drum-pad' onMouseDown={buttonClick} onMouseUp={releaseClick} ref={button}>
            <h5>{props.button.letter}</h5>
            <audio className='clip' id={props.button.letter}>
                <source src={props.button.sound_a}></source>
            </audio>
            <audio className='clip' id={props.button.bid}>
                <source src={props.button.sound_b}></source>
            </audio>
        </div>
    )
}

export default Box;