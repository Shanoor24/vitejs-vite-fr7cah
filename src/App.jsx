import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import LightComponent from './components/LightComponent';

function App() {
  const initialLightsData = [
    { color: 'green', isActive: true, id: 1, waitTime: 4000 },
    { color: 'yellow', isActive: false, id: 2, waitTime: 500 },
    { color: 'red', isActive: false, id: 3, waitTime: 3000 },
  ];
  const [lights, setLights] = useState(initialLightsData);

  const handleTraficLights = () => {
    const updatedLightsData = lights.map((light) => light.isActive ? ) 
  };

  useEffect(() => {
    let intervalId;
    setTimeout(() => {
      for(let i = 0; i < lights.length; i++) {
        intervalId = setInterval(() => {
          if(lights[i].color = "green" && lights[i].isActive) {
            lights
          }
        }, lights[i].waitTime)
      }
    }, 1000)
    
    
  }, []);

  return (
    <>
      <div>
        {lights.map((light) => (
          <LightComponent color={light.color} isActive={light.isActive} />
        ))}
      </div>
    </>
  );
}

export default App;
