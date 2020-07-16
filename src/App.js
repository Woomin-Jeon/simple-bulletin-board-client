import React, { useState, useEffect } from 'react';
import Login from './Login.js';
import PCB from './PCB.js';

const password = ["loglab"];

const App = () => {
  const [pw, setPw] = useState("");
  const [state, setState] = useState("");

  return (
    <>
      <div>
        {
        state === "loglab"
          ? <PCB />
          : <Login
              setState={setState}
              setPw={setPw}
              pw={pw}
            />
        }
      </div>
    </>
  );
};

export default App;
