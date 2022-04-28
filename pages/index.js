import Head from "next/head";
import styled from "styled-components";
import Nav from "./nav";
import Walkthrough from "./walkthrough";
import Products from "./products";
import Footer from "./footer";
import { useRef } from "react";

const StyledHome = styled.div`
  padding-top: 201px;
  background-color: #ffffff;
  .wavesContainer {
    width: 100%;
    height: 1364px;
    background-image: url("/illustrations/single-wave-pattern2.svg");
    background-repeat: repeat;
  }

  .mainContainer {
    position: absolute;
    height: 920px;
    width: 100%;
    top: 0;
    left: 0;
    padding: 240px 228px;
    display: flex;
    justify-content: space-between;
  }

  .illustrationBg {
    display: flex;
    width: 722px;
    height: 600px;
    order: 2;
    background: linear-gradient(
      102.47deg,
      rgba(23, 111, 235, 0.5) -5.34%,
      rgba(255, 128, 255, 0.5) 106.58%
    );
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
    border-radius: 104px;
  }

  .heroIllustration {
    position: absolute;
    bottom: 80px;
    right: 150px;
    width: 897px;
    height: 820px;
  }

  .landingCopyContainer {
    width: 602px;
    height: 577px;
    .textL1AllCaps {
      /* EXPLORE THE */
      width: 174px;
      font-size: 16px;
      color: var(--neutrals600);
    }
    .titleL1 {
      background: var(--brandDefault);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .textL1Default {
      margin-top: 24px;
      color: var(--neutrals600);
    }
    .landingCTA {
    }
  }
`;


export default function Home() {

const productsSection = useRef(null);

function scrollToProducts () {
  window.scrollTo({top: productsSection.current.offsetTop, behavior: "smooth"})
}

  return (
    <StyledHome>
      <Nav />
      <Head>
        <title>Aerolab coding challenge</title>
        <meta
          name="description"
          content="Coding challenge for a frontend developer position at Aerolab"
        />
        <link rel="icon" href="/favicon.svg" />

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <div className="wavesContainer"></div>
      <div className="mainContainer">
        <div className="illustrationBg">
          <img
            className="heroIllustration"
            src="/illustrations/hero-desktop.png"
            alt="character with VR headset"
          />
        </div>

        <div className="landingCopyContainer">
          <p className="textL1AllCaps">explore the</p>
          <h1 className="titleL1">tech zone</h1>
          <p className="textL1Default">
            Here you’ll be able to exchange all of your hard-earned Aeropoints
            and exchange them for cool tech.
          </p>
          <button className="landingCTA" onClick={() => scrollToProducts()}>
            <p>VIEW ALL PRODUCTS</p>
            <img src="/icons/arrow-icon.svg" alt="arrow down icon" />
          </button>
        </div>
      </div>

      <Walkthrough />
      <Products productsSection={productsSection}/>
      <Footer />
    </StyledHome>
  );
}
