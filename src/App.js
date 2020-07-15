import React, { useState, useEffect } from 'react';

const password = ["loglab"];

const App = () => {
  const [pw, setPw] = useState("");
  const [state, setState] = useState("");

  const getPassword = (password) => {
    setPw(password)
  }

  const click = () => {
    setState(pw);
  }

  return (
    <>
      <input type="text" onChange={e=> getPassword(e.target.value)}/>
      <button type="button" onClick={click} >확인</button>
      <div>
      {state === "loglab"
        ? <iframe 
            width="1000px"
            height="800px"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQopZ2UOBkDyDnK0_RoVPI0Sa1w6-pdgt6DQxEPSUfH2gxgFJxhaoRWDes7NujRIdWQN6V_-KEV1cCz/pubhtml?widget=true&amp;headers=false">크롬 브라우저를 이용해주세요</iframe>
        : <div>암호를 입력해주세요</div>}
      </div>
    </>
  );
};

export default App;
