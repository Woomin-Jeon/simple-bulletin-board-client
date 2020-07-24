import React, { useState } from 'react';

import CryptoJS from 'crypto-js';
import sha256 from 'crypto-js/sha256';

export default function Crypto() {
  const [state, setState] = useState("");
  const [crypto, setCrypto] = useState("");
  const [sha, setSha] = useState("");

  const click = () => {
    setCrypto(CryptoJS.AES.encrypt(state, 'dal96k@hanmail.net').toString());
    setSha(sha256(state).words.join(""));
  }

  return (
    <div>
      <input type="text" onChange={(e) => setState(e.target.value)} />
      <button type="button" onClick={click}>get</button>
      <br /><br /><br /><br /><br /><br />
      {crypto}
      <br /><br /><br />
      {sha}
    </div>
  );
}
