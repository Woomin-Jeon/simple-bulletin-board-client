import React from 'react';

const styles = {
  whole: {
    fontFamily: 'Helvetica',
  },
  box: {
    display: "flex",
    fontWeight: 'bold',
    fontSize: '16px',
  },
  title: {
    float: 'right',
  },
  titleTop: {
    float: 'right',
    height: '32px',
    position: 'relative',
    top: '12px'
  },
  value: {
    marginLeft: '20px',
  },
  flag: {
    maxWidth: "40px",
    marginLeft: "15px",
    position: "relative",
    top: "4px",
  },
  provide: {
    float: 'right',
  },
  excel: {
    width: "100%",
    height: "500px",
    border: "1px solid"
  },
  italic: {
    fontStyle: "italic",
  },
  bold: {
    fontWeight: 'bold',
  }
}

export default function PCB() {
  return (
    <div css={styles.whole}>
      <img src="../src/images/PCB-logo.png" />
      <br/>
      <br/>
      <div css={styles.box}>
        <div>
          <div css={styles.titleTop}>
            Customer Name:
          </div>
          <br/>
          <div css={styles.title}>
            Customer ID:
          </div>
          <br/>
          <div css={styles.title}>
            In Charge:
          </div>
        </div>
        <div css={styles.value}>
          <div>
            <span >PCB Technologies, Israel</span>
            <img css={styles.flag} src="../src/images/PCB-flag.png" />
          </div>
          <div>
            101
          </div>
          <div>
            Ms. Eti Ben-David
          </div>
        </div>
      </div>

      <br/>

      <div>
        <div css={styles.provide}>
          <span css={styles.italic}>Provided by</span><span css={styles.bold}> LogLab ERP System™</span>
        </div>
        <iframe
          css={styles.excel}
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSkNEl6icOxxng5EyCZmIWGQj9DWxEqvwuWYXC_QB0Zxa5WDjuXEKgkBc881-qxzLsPsI7d9c58zfPd/pubhtml?widget=true&amp;headers=false"
        >Use Chrome Browser, please.</iframe>
      </div>

    </div>
  );
}
