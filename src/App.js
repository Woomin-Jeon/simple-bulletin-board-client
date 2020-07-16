import React, { useState, useEffect } from 'react';

import Login from './Login.js';
import Loglab from './Loglab.js';
import PCB from './PCB.js';

const password = {
  "Loglab": "1059449896-4289951361154796983177727653319412907762136379186849971862-1822538207",
  "PCB": "-839571035-457210203969050011304863746-767411930-193193055519621305901941520120"
};

const App = () => {
  const [pw, setPw] = useState("");
  const [state, setState] = useState("");

  const check = (state) => {
    if (state === password.Loglab) {
      return <Loglab />
    }
    
    if (state === password.PCB) {
      return <PCB />
    }

    return <Login setState={setState} setPw={setPw} pw={pw} />
  }

  return (
    <>
      <div>
        {check(state)}
      </div>
    </>
  );
};

export default App;
