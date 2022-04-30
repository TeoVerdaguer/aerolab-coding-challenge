import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

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
  right: 11%;
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
        &:hover {
          cursor: pointer;
        }
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
          background: var(--brandLight);
          border-radius: 12px;
          flex-grow: 1;
          z-index: 3;
          &:nth-of-type(2) {
            margin: 0 4px;
          }
          &:hover {
            cursor: pointer;
            box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
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
        .activeSelector {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 4px 16px;
          width: 85.33px;
          height: 35px;
          background: var(--brandDefault);
          border-radius: 12px;
          flex-grow: 1;
          z-index: 3;
          p.selectorsText {
            /* Desktop/Text/L1/Default| */
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 150%;
            color: var(--neutrals0);
            margin: 0px 10px;
          }
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

const authToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjYyMGRhN2VhZDIzNzAwMWFhMmZiYmYiLCJpYXQiOjE2NTA1OTMxOTF9.5TtSt4ijKv_SRXE7HHTilJjSbxOC9x68Ulm4Tq7fBqk";

export default function Nav({ userPoints, setUserPoints }) {
  // States
  const [userName, setUserName] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [showAeroPay, setShowAeroPay] = useState(false);
  const [points, setPoints] = useState(0);

  const selector1000 = useRef(null);
  const selector5000 = useRef(null);
  const selector7500 = useRef(null);

  // Effects
  useEffect(() => {
    getUserPoints();
  }, []);

  // Constants
  const url = "https://coding-challenge-api.aerolab.co/user/me";
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: authToken,
    },
  };

  // Get user points from API call
  function getUserPoints() {
    axios
      .get(url, config)
      .then((data) => {
        setUserName(data.data.name);
        setUserPoints(data.data.points);
        setCardDate(getDate(data.data.createDate));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function setSelectedPoints(points) {
    switch (points) {
      case 1000:
        setPoints(1000);
        selector1000.current.className = "activeSelector";
        selector5000.current.className = "selectors";
        selector7500.current.className = "selectors";
        break;
      case 5000:
        setPoints(5000);
        selector5000.current.className = "activeSelector";
        selector1000.current.className = "selectors";
        selector7500.current.className = "selectors";
        break;
      case 7500:
        setPoints(7500);
        selector7500.current.className = "activeSelector";
        selector1000.current.className = "selectors";
        selector5000.current.className = "selectors";
        break;
    }
  }

  // Add points to the user
  function addPoints(points) {
    // Set constants used for the API call
    const urlPoints = "https://coding-challenge-api.aerolab.co/user/points";
    const body = { amount: points };
    const configPoints = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: authToken,
        "Access-Control-Allow-Origin": "*",
      },
    };

    // POST user points
    axios
      .post(urlPoints, JSON.stringify(body), configPoints)
      .then((status) => {
        console.log(status);
        setUserPoints(getUserPoints());
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Format date as: mm/yy
  function getDate(date) {
    let splittedDate = date.split("-");
    let year = splittedDate[0].slice(-2);
    let month = splittedDate[1];
    let newDate = year + "/" + month;
    return newDate;
  }

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
          <p>{userPoints}</p>
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
            <div
              className="icon"
              onClick={() => setShowAeroPay(!showAeroPay)}
            ></div>
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
                  {userName && <p className="userName">{userName}</p>}
                  <p className="cardDate">{cardDate}</p>
                </div>
                <div className="wavePatternMask"></div>
              </div>
            </div>
            {/* Amounts and CTA */}
            <div className="amountAndCTA">
              <div className="amounts">
                <div
                  className="selectors"
                  ref={selector1000}
                  onClick={() => setSelectedPoints(1000)}
                >
                  <p className="selectorsText">1000</p>
                </div>
                <div
                  className="selectors"
                  ref={selector5000}
                  onClick={() => setSelectedPoints(5000)}
                >
                  <p className="selectorsText">5000</p>
                </div>
                <div
                  className="selectors"
                  ref={selector7500}
                  onClick={() => setSelectedPoints(7500)}
                >
                  <p className="selectorsText">7500</p>
                </div>
              </div>

              <button className="CTA" onClick={() => addPoints(points)}>
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
