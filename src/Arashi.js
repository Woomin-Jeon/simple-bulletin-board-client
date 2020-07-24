import React from 'react';

import CryptoJS from 'crypto-js';

const styles = {
  whole: {
    fontFamily: 'Helvetica'
  },
  box: {
    display: "flex",
    fontWeight: 'bold',
    fontSize: '16px'
  },
  title: {
    float: 'right'
  },
  titleTop: {
    float: 'right',
    height: '32px',
    position: 'relative',
    top: '12px'
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
  }
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
            <span >{data.customerName}</span>
            <img css={styles.flag} src={data.flag} />
          </div>
          <div>
            {data.customerId}
          </div>
          <div>
            {data.inCharge}
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
          src={CryptoJS.AES.decrypt(data.excelURL, 'dal96k@hanmail.net').toString(CryptoJS.enc.Utf8)}
        >Use Chrome Browser, please.</iframe>
      </div>

    </div>
  );
}
