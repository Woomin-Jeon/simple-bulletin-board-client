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
    height: `${screen.height - 360}px`,
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
  logo: "../src/images/Arashi-logo.png",
  flag: "../src/images/Arashi-flag.png",
  customerName: "I Trend Tech Co. Ltd, Taiwan",
  customerId: "105",
  inCharge: "Mr. Patrick Tu 涂程詠",
  excelURL: "U2FsdGVkX1+DWlQec2NKFBIGScCHqiyOVnbZVi8msNeq0+cdG/r+/JEecXWuUjJuaKmS2A2De+6FCd/UV6zB4cinQbeufuUFVRjufzGUvdfQLpbunL7OYz2Xf720qq9ktuaXtqsIxyaW08daSfJlugM7wimBDpg7ZHVYcJQDQnOwowJVm+0eClZW7eBSlfKaASpy0w4JTVuhrM4Cw8dEH4359Vj3KuPUvy3MHGpK9Ni7TEVexxAMcV35lSXBwRNP"
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
