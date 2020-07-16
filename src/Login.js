import React from 'react';

const styles = {
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
}

export default function Login({ setState, setPw, pw }) {
  const getPassword = (password) => {
    setPw(password)
  }

  const click = (e) => {
    e.preventDefault();
    setState(pw);
    setPw("");
  }

  return (
    <div>
      <div css={styles.title}>
        LogLab ERP System™
      </div>
      <form>
        <input placeholder="Enter password" type="password" value={pw} onChange={e=> getPassword(e.target.value)}/>
        <button type="submit" onClick={(e) => click(e)} >Enter</button>
      </form>
    </div>
  );
}
