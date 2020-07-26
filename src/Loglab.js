import React from 'react';

import CryptoJS from 'crypto-js';

const styles = {
  whole: {
    fontFamily: 'Helvetica'
  },
  box: {
    fontWeight: 'bold',
    fontSize: '16px'
  },
  value: {
    marginLeft: '20px'
  },
  flag: {
    maxWidth: "40px",
    marginLeft: "15px",
    position: "relative",
    top: "4px"
  },
  provide: {
    float: 'right'
  },
  excel: {
    width: "100%",
    height: `${screen.height - 350}px`,
    border: "1px solid"
  },
  italic: {
    fontStyle: "italic"
  },
  bold: {
    fontWeight: 'bold'
  },
  customerName: {
    marginRight: '20px',
  },
  customerId: {
    marginRight: '20px',
    marginLeft: '27px',
  },
  inCharge: {
    marginRight: '20px',
    marginLeft: '48px',
  },
}

const data = {
  logo: "../src/images/LogLab-logo.png",
  flag: "../src/images/LogLab-flag.png",
  customerName: "LogLab, Korea",
  customerId: "1",
  inCharge: "Ms. Tom Park",
  excelURL: "U2FsdGVkX1+gSvbSuVrcv0dYs6oN9rDObPTd7C9f+JV4zPMvKRz1WgNtCd4KIBDZ/GWQRbKz0EL0/KAOL1Q4D27NMiV62+H7AT6bKRZb7Kfi7AopGWmLCRbhXfyL/BBIi4S95q1unHKyQUyJ/gplEvEu/MdzSKVRhw3LjZ7rsr3SGO3jW2RfvPQGbLm62WlJgITmOn3AY1m+Liu+jt7YryP+YkddG2LZwVDWc/RKvEnE0lr619XbWiKBXDysMz7D"
};

export default function LogLab() {
  return (
    <div css={styles.whole}>
      <img src={data.logo} />
      <br/>
      <br/>
      <div css={styles.box}>
        <div>
          <span css={styles.customerName}>Customer Name: </span>
          <span>{data.customerName}</span>
          <img css={styles.flag} src={data.flag} />
          <br />
          <span css={styles.customerId}>Customer ID: </span>
          <span>{data.customerId}</span>
          <br />
          <span css={styles.inCharge}>In Charge: </span>
          <span>{data.inCharge}</span>
        </div>
      </div>
      <br/>
      <div>
        <div css={styles.provide}>
          <span css={styles.italic}>Provided by</span><span css={styles.bold}> LogLab ERP System™</span>
        </div>
        <iframe
          css={styles.excel}
          src={CryptoJS.AES.decrypt(data.excelURL, 'dal96k@hanmail.net').toString(CryptoJS.enc.Utf8)}
        >Use Chrome Browser, please.</iframe>
      </div>
    </div>
  );
}
