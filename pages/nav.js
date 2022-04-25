import styled from "styled-components";
import { useState } from "react";

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px;
  min-width: 1464px;

  position: absolute;
  height: 128px;
  left: 228px;
  right: 228px;
  top: 0px;
  z-index: 2;
  background: var(--neutrals0);
`;

const AeropayModule = styled.div`
  position: absolute;
  width: 312px;
  height: 404px;
  right: 228px;
  top: 96px;
  background: var(--neutrals0);
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  z-index: 3;
  transition: all 0.5s ease;
  transform: translateX(200%);
  opacity: 0;
  &.showAeroPay {
    transform: translateX(0%);
    opacity: 1;
  }

  .header {
    display: flex;
    padding: 16px 24px;
    height: 59px;
    border: 1px solid var(--neutrals300);
    box-sizing: border-box;
    border-radius: 16px 16px 0px 0px;
    .titleAndIcon {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0px;
      .title {
        /* Add Balance */
        /* Desktop/Text/L1/Default| */
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 150%;
        color: var(--neutrals900);
      }
      .icon {
        width: 24px;
        height: 24px;
        order: 1;
        background-image: url("/icons/cross-default.svg");
      }
    }
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 24px;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 58px;
    bottom: 0px;
    border: 1px solid var(--neutrals300);
    box-sizing: border-box;
    border-radius: 0px 0px 16px 16px;
    .aerocard {
      position: static;
      width: 264px;
      height: 148px;
      filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.05));
      margin: 40px 0px;
      .cardBg {
        height: 148px;
        background: var(--neutrals900);
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        overflow-y: clip;
        .nameAndIcon {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 0px;
          position: absolute;
          height: 27px;
          left: 16px;
          right: 16px;
          top: 16px;
          .cardName {
            /* Aerocard */
            position: static;
            width: 85px;
            height: 27px;
            left: 0px;
            top: 0px;

            /* Desktop/Text/L1/Default| */
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 150%;
            color: var(--neutrals100);
          }
          .cardIcon {
            position: static;
            left: 89.66%;
            right: 0%;
            top: 5.56%;
            bottom: 5.56%;
            background: var(--neutrals100);
            border-radius: 40px;
            order: 1;
            margin: 0px 115px;
          }
        }
        .nameAndDate {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          height: 21px;
          left: 16px;
          right: 16px;
          top: 111px;
          .userName {
            /* Desktop/Text/L2/Default */
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 150%;
            color: var(--neutrals100);
          }
          .cardDate {
            /* Desktop/Text/L2/Default */
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 150%;
            text-align: right;
            color: var(--neutrals100);
          }
        }
        .wavePatternMask {
          position: absolute;
          width: 264px;
          height: 148px;
          top: 60px;
          background-image: url(/illustrations/path.svg);
          transform: rotate(-4.26deg);
        }
      }
    }
    .amountAndCTA {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 264px;
      height: 110px;
      left: 0px;
      top: 188px;
      order: 1;
      margin: 40px 0px;
      .amounts {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        width: 264px;
        height: 35px;
        .selectors {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 4px 16px;
          width: 85.33px;
          height: 35px;
          background: #e6f0ff;
          border-radius: 12px;
          flex-grow: 1;
          &:nth-of-type(2) {
            margin: 0 4px;
          }
        }
        .selectorsText {
          /* Desktop/Text/L1/Default| */
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 150%;
          background: var(--brandDefault);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0px 10px;
        }
      }
    }
    .CTA {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 12px 16px;
      width: 264px;
      height: 51px;
      left: 0px;
      top: 59px;
      background: var(--brandDefault);
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
      border: none;
      border-radius: 16px;
      order: 1;
      align-self: stretch;
      margin: 24px 0px;
      &:hover {
        background: var(--brandHover);
        box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
        cursor: pointer;
      }
      .CTAIcon {
        left: 0%;
        right: 82.09%;
        top: 5.56%;
        bottom: 5.56%;
        background: var(--neutrals0);
        border-radius: 40px;
        margin: 0px 8px;
      }
      .CTAText {
        /* Add Points */
        width: 102px;
        height: 27px;
        left: 32px;
        top: 0px;
        /* Desktop/Text/L1/Default| */
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 150%;
        color: var(--neutrals0);
        order: 1;
        margin: 0px 8px;
      }
    }
  }
`;

// Get user data from the API
var XMLHttpRequest = require("xhr2");
var request = new XMLHttpRequest();

request.open("GET", "https://coding-challenge-api.aerolab.co/user/me");

request.setRequestHeader("Content-Type", "application/json");
request.setRequestHeader("Accept", "application/json");
request.setRequestHeader(
  "Authorization",
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjYyMGRhN2VhZDIzNzAwMWFhMmZiYmYiLCJpYXQiOjE2NTA1OTMxOTF9.5TtSt4ijKv_SRXE7HHTilJjSbxOC9x68Ulm4Tq7fBqk"
);

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log("Status:", this.status);
    console.log("Headers:", this.getAllResponseHeaders());
    console.log("Body:", this.responseText);

    let response = JSON.parse(this.responseText);
  }
};

request.send();

export default function Nav() {
  // States
  const [userName, setUserName] = useState("");
  const [showAeroPay, setShowAeroPay] = useState(false);

  return (
    <div>
      <StyledNav>
        <a href="https://aerolab.us/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/aerolab-logo-1.svg" alt="aerolab logo" />
        </a>
        <button
          className="aeroPayDropDownBtn"
          onClick={() => setShowAeroPay(!showAeroPay)}
        >
          <img src="/icons/aeropay-1.svg" width="32px" height="32px"></img>
          <p>10.000</p>
          <img
            className={`${showAeroPay ? "rotateArrow" : ""}`}
            src="/icons/chevron-default.svg"
            alt="arrow pointing down"
          ></img>
        </button>
      </StyledNav>

      {/* Aeropay module */}
      <AeropayModule className={`${showAeroPay ? "showAeroPay" : ""}`}>
        <div className="header">
          <div className="titleAndIcon">
            <h4 className="title">Add Balance</h4>
            <div className="icon"></div>
          </div>
        </div>

        <div className="content">
          <div className="container">
            {/* Aerocard */}
            <div className="aerocard">
              <div className="cardBg">
                <div className="nameAndIcon">
                  <p className="cardName">Aerocard</p>
                  <img
                    className="cardIcon"
                    src="/icons/aeropay-2.svg"
                    alt="aeropay icon"
                  />
                </div>
                <div className="nameAndDate">
                  <p className="userName">John Kite</p>
                  <p className="cardDate">07/23</p>
                </div>
                <div className="wavePatternMask"></div>
              </div>
            </div>
            {/* Amounts and CTA */}
            <div className="amountAndCTA">
              <div className="amounts">
                <div className="selectors">
                  <p className="selectorsText">1000</p>
                </div>
                <div className="selectors">
                  <p className="selectorsText">5000</p>
                </div>
                <div className="selectors">
                  <p className="selectorsText">7500</p>
                </div>
              </div>

              <button className="CTA">
                <img
                  className="CTAIcon"
                  src="/icons/aeropay-3.svg"
                  alt="aeropay icon"
                />
                <p className="CTAText">Add Points</p>
              </button>
            </div>
          </div>
        </div>
      </AeropayModule>
    </div>
  );
}
