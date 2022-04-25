import styles from "../styles/Nav.module.css";
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

  return (
    <div>
      <StyledNav>
        <a href="https://aerolab.us/" target="_blank" rel="noopener noreferrer">
          <img
            className={styles.aeroLabLogo}
            src="/icons/aerolab-logo-1.svg"
            alt="aerolab logo"
          />
        </a>
        <button className={styles.aeroPayDropDownBtn}>
          <img
            className={styles.aeroLabIcon}
            src="/icons/aeropay-1.svg"
            width="32px"
            height="32px"
          ></img>
          <p className={styles.coinAmount}>10.000</p>
          <img
            className={styles.dropDownArrow}
            src="/icons/chevron-default.svg"
            alt="arrow pointing down"
          ></img>
        </button>
      </StyledNav>

      {/* Aeropay module */}
      <AeropayModule>
        <div className={styles.header}>
          <div className={styles.titleAndIcon}>
            <h4 className={styles.title}>Add Balance</h4>
            <div className={styles.icon}></div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.cardAndAmount}>
            {/* Aerocard */}
            <div className={styles.aerocard}>
              <div className={styles.cardBg}>
                <div className={styles.nameAndIcon}>
                  <p className={styles.cardName}>Aerocard</p>
                  <img
                    className={styles.cardIcon}
                    src="/icons/aeropay-2.svg"
                    alt="aeropay icon"
                  />
                </div>
                <div className={styles.nameAndDate}>
                  <p className={styles.userName}>{userName}</p>
                  <p className={styles.cardDate}>07/23</p>
                </div>
                <div className={styles.wavePatternMask}>
                  <div className={styles.wavePattern}></div>
                </div>
              </div>
            </div>
            {/* Amounts and CTA */}
            <div className={styles.amountAndCTA}>
              <div className={styles.amounts}>
                <div className={styles.selectors}>
                  <p className={styles.selectorsText}>1000</p>
                </div>
                <div className={styles.selectors}>
                  <p className={styles.selectorsText}>5000</p>
                </div>
                <div className={styles.selectors}>
                  <p className={styles.selectorsText}>7500</p>
                </div>
              </div>

              <button className={styles.CTA}>
                <img
                  className={styles.CTAIcon}
                  src="/icons/aeropay-3.svg"
                  alt="aeropay icon"
                />
                <p className={styles.CTAText}>Add Points</p>
              </button>
            </div>
          </div>
        </div>
      </AeropayModule>
    </div>
  );
}
