import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    /* -- COLORS -- */
    --neutrals0: #FFFFFF;
    --neutrals100: #F5F9FF;
    --neutrals200: #E6EDF7;
    --neutrals300: #DAE4F2;
    --neutrals500: #8FA3BF;
    --neutrals600: #7C899C;
    --neutrals900: #252F3D;
    --brandDefault: linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%);
    --brandHover: linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%);
    --brandLight: #E5F0FF;
    --brandLight2: #CCE1FF;
    --greenDefault: #29CC74;
    --greenLight: #CCFFE3;
    --redDefault: #E07F4F;
    --redLight: #FFDFD9;
    --illustrationBg: linear-gradient(102.47deg, #7296EB -5.34%, #EAC0E9 106.58%, #EAC0E9 106.58%);
    --sectionBg: linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%);
    --aerolab: linear-gradient(180deg, #FF8800 0%, #FF6600 100%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
  }

  /* Texts */
  .titleL1 {
    font-weight: 900;
    font-size: 200px;
    line-height: 80%;
    letter-spacing: 0;
    text-transform: uppercase;
    color: $neutrals900;
  }

  .titleL2 {
    font-weight: 900;
    font-size: 48px;
    line-height: 80%;
    letter-spacing: 0;
    text-transform: uppercase;
    color: $neutrals900;
  }

  .titleL3 {
    font-weight: 900;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0;
    text-transform: uppercase;
    color: $neutrals900;
  }

  .textL1Default {
    font-size: 18px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0;
  }

  .textL1AllCaps {
    font-size: 18px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0.24em;
    text-transform: uppercase;
  }

  .textL1Light {
    font-size: 18px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0;
  }

  .textL2Default {
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0;
  }

  .textL2AllCaps {
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0.5em;
    text-transform: uppercase;
  }

  /* Button, selectors and links */
  .landingCTA {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    position: static;
    width: 318px;
    height: 80px;
    left: 0px;
    top: 497px;
    background: var(--brandDefault);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 24px;
    border: none;
    margin: 64px 0px;
    &:hover {
      background: var(--brandHover);
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
      cursor: pointer;
    }
    p {
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      font-size: 18px;
      line-height: 150%;
      color: var(--neutrals0);
    }
    img {
      height: 27px;
    }
  }

  .aeroPayDropDownBtn {
    /* AeroCoins */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    width: 172px;
    height: 48px;
    background: var(--neutrals0);
    border: 1px solid var(--neutrals300);
    box-sizing: border-box;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
    border-radius: 16px;
    transition: all 0.2s ease;
    /* Aerolab icon */
    img:nth-child(1) {
      background: var(--brandDefault);
      border-radius: 40px;
      margin: 0 8px;
    }
    p {
      /* Desktop/Text/L1/Default| */
      font-family: "Montserrat";
      font-weight: 600;
      font-size: 18px;
      line-height: 150%;
      background: var(--brandDefault);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    img:nth-child(3) {
      display: flex;
      order: 2;
      margin: 0 16px;
      transform: rotate(90deg);
      transition: all 0.5s ease;
    }
    .rotateArrow {
      transform: rotate(270deg) !important;
    }
    &:hover {
    transform: scale(1.05);
    cursor: pointer;
}
}

`;
