import React from 'react';

import sha256 from 'crypto-js/sha256';

const styles = {
  god: {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'url(../src/images/background.png)',
    height: '-webkit-fill-available'
  },
  main: {
    fontFamily: 'Helvetica',
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid',
    width: '100%',
    background: 'white',
    padding: '80px 0 80px 0'
  },
  title: {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  input: {
    marginTop: '23px',
    width: '430px'
  },
  form: {
    fontSize: '20px'
  },
  img: {
    width: '110px',
    marginRight: '20px'
  }
}

export default function Login({ setState, setPw, pw }) {
  const getPassword = (password) => {
    setPw(password)
  }

  const click = (e) => {
    e.preventDefault();

    const hashDigest = sha256(pw).words.join("");

    setState(hashDigest);
    setPw("");
  }

  return (
    <div css={styles.god}>
      <div css={styles.main}>
        <img css={styles.img} src="../src/images/graphic.png" />
        <div>
          <div css={styles.title}>
            LogLab ERP System™
          </div>
          <div css={styles.input}>
            <form>
              <input css={styles.form} placeholder="Enter password" type="password" value={pw} onChange={e=> getPassword(e.target.value)}/>
              <button css={styles.form} type="submit" onClick={(e) => click(e)} >Enter</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
