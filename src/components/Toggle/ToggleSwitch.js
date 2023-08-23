import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

function ToggleSwitch() {
  const [checado, setChecado] = useState(true);

  const mudanca = val => {
    setChecado(val)
  }

  return (
      <ReactSwitch
        checked={checado}
        onChange={mudanca}
        offColor = '#004A8D'
        height={40}
        width={70}
        
      />
  );
}

export default ToggleSwitch;