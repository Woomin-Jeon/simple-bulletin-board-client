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
  logo: "../src/images/BPS-logo.png",
  flag: "../src/images/BPS-flag.png",
  customerName: "BusBoard Prototype Systems LTD., Canada",
  customerId: "604",
  inCharge: "Scott Kornak",
  excelURL: "U2FsdGVkX1+lJN+Hnc6HwE+GauHbwARJP+wEHcOzKT1zlZLKW3qz08nTiBnwqut5oizyjEJKYV24v6xxSkWyYViZUzcSMguE4JZopLskeNZjYRkWv8t/EQQsUR4KZxdF1VkXmXYatheYx892GjTSMyENXqYh/pbrX+RNe1oJhrLtjSbG1Ril8DQkpmOA1ewiEB7zYdGdcMEamsVKzFYGXQ=="
};

export default function BPS() {
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
