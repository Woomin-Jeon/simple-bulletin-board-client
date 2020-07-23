import React from 'react';

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
    height: `${screen.height - 350}px`,
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
  logo: "../src/images/LogLab-logo.png",
  flag: "../src/images/LogLab-flag.png",
  customerName: "LogLab, Korea",
  customerId: "1",
  inCharge: "Ms. Tom Park",
  excelURL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQopZ2UOBkDyDnK0_RoVPI0Sa1w6-pdgt6DQxEPSUfH2gxgFJxhaoRWDes7NujRIdWQN6V_-KEV1cCz/pubhtml?widget=true&amp;headers=false"
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
          src={data.excelURL}
        >Use Chrome Browser, please.</iframe>
      </div>

    </div>
  );
}
