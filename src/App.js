import React from 'react';
import { useState } from 'react';
import Box from './Box.js';
import Slider from './Slider.js';
import Toggle from './Toggle.js';
import InfoBar from './Infobar.js';
import soundButtons from './data.js';
import './App.css';

function App() {
  
  const [info, setInfo] = useState('INFO');
  const [onOff, setOnOff] = useState(false);
  const [module, setModule] = useState(false);
  const [volume, setVolume] = useState(0.5);
  
  const button = soundButtons.map(button => {
        return (
                <Box 
                key={button.id}
                button={button}
                setInfo={setInfo}
                onOff={onOff}
                setOnOff={setOnOff}
                volume={volume}
                module={module}
                />
        )
    });
  
  return (
    <div id='drum-machine' className='container'>
      <div className='buttons'>
        {button}
      </div>
      <div className='controls'>
        <Toggle 
          title = 'Power'
          setInfo={setInfo}
          setOnOff={setOnOff}
          onOff={onOff}
        />
        <InfoBar 
          id='display' 
          info={info} 
        />
        <Slider 
          setInfo={setInfo}
          setVolume={setVolume}
        />
        <Toggle 
          title = 'Module'
          setInfo={setInfo}
          setOnOff={setModule}
          onOff={module}
        />
      </div>
    </div>
  )
}

export default App;