import React, { useState, useEffect } from 'react';

import Login from './Login.js';
import Crypto from './Crypto.js';
import Loglab from './Loglab.js';
import PCB from './PCB.js';
import Arashi from './Arashi.js';

const password = {
  "Crypto": "69787318775772130815178694348523949971458826545-133647373964947556500666712",
  "Loglab": "1059449896-4289951361154796983177727653319412907762136379186849971862-1822538207",
  "PCB": "-839571035-457210203969050011304863746-767411930-193193055519621305901941520120",
  "Arashi": "414507175-4784117391258177528-11303909-25082503619945077601443078459-496604151",
};

const App = () => {
  const [pw, setPw] = useState("");
  const [state, setState] = useState("");

  const check = (state) => {
    if (state === password.Crypto) {
      return <Crypto />
    }

    if (state === password.Loglab) {
      return <Loglab />
    }
    
    if (state === password.PCB) {
      return <PCB />
    }

    if (state === password.Arashi) {
      return <Arashi />
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
