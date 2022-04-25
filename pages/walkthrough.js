import styled from "styled-components";

const StyledWalkthrough = styled.div`
  .cardsBG {
    position: absolute;
    height: 528px;
    width: 100%;
    top: 1070px;
    background: var(--sectionBg);
    display: flex;
    justify-content: center;
  }
  .cardsContainer {
    position: absolute;
    top: 952px;
    display: flex;
    justify-content: center;
    #card1 {
      transform: rotate(-3deg);
      left: 228px;
      top: 30px;
    }

    #card2 {
      left: 694.32px;
    }

    #card3 {
      left: 1125px;
      top: 30px;
      transform: rotate(3deg);
      z-index: 2;
    }
    .introCard {
      display: flex;
      flex-direction: column;
      padding: 12px;
      position: absolute;
      width: 532px;
      height: 676px;
      background: var(--neutrals0);
      border: 1px solid var(--neutrals300);
      box-sizing: border-box;
      box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
      border-radius: 32px;
      .illustrationsBG {
        height: 498px;
        width: 508px;
        background: var(--illustrationBg);
        border: 1px solid var(--neutrals300);
        box-sizing: border-box;
        border-radius: 24px 24px 0px 0px;
      }
      .cardsIllustration {
        /* Saly-1 */
        position: absolute;
        height: 498px;
      }
      .bottomCard {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 16px 24px 24px;
        width: 508px;
        height: 154px;
        background: var(--neutrals0);
        border: 1px solid var(--neutrals300);
        box-sizing: border-box;
        border-radius: 0px 0px 24px 24px;
        order: 1;
        align-self: stretch;
        z-index: 1;
        .titleAndIcon {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          height: 48px;
          margin: 12px 0px;
          .iconWrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            margin-right: 13px;
            background: var(--brandLight);
            border-radius: 8px;
            .cardIcon {
              height: 32.5px;
            }
          }
          .cardTitle {
            height: 32px;
            left: 64px;
            top: 8px;
            /* Desktop/Headings/L3/Default */
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 900;
            font-size: 32px;
            line-height: 100%;
            text-transform: uppercase;
            background: var(--brandDefault);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0px 16px;
          }
        }
        .cardParagraph {
          width: 372px;
          height: 54px;
          left: 27.94px;
          top: 101.23px;
          /* Desktop/Text/L1/Default| */
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 150%;
          color: var(--neutrals600);
          margin: 12px 0px;
        }
      }
    }
  }
`;
export default function Walkthrough() {
  return (
    <StyledWalkthrough>
      <div className="cardsBG"></div>
      <div className="cardsContainer">
        <div className="introCard" id="card1">
          <div className="illustrationsBG"></div>
          <img
            className="cardsIllustration"
            src="/illustrations/walkthroug-1-desktop.png"
            alt="character sitting on a rocket"
          />
          <div className="bottomCard">
            <div className="titleAndIcon">
              <div className="iconWrapper">
                <img
                  className="cardIcon"
                  src="/icons/walkthrough-1.svg"
                  alt=""
                />
              </div>
              <h2 className="cardTitle">1—browse</h2>
            </div>
            <p className="cardParagraph">
              Browse our tech catalog with more than 20 top tech products
            </p>
          </div>
        </div>

        <div className="introCard" id="card2">
          <div className="illustrationsBG"></div>
          <img
            className="cardsIllustration"
            src="/illustrations/walkthroug-2-desktop.png"
            alt="two hands coming out of  two phone's screens and touching each other"
          />
          <div className="bottomCard">
            <div className="titleAndIcon">
              <div className="iconWrapper">
                <img
                  className="cardIcon"
                  src="/icons/walkthrough-2.svg"
                  alt=""
                />
              </div>
              <h2 className="cardTitle">2—choose</h2>
            </div>
            <p className="cardParagraph">
              Exchange your hard earned AeroPoints for the item you want
            </p>
          </div>
        </div>

        <div className="introCard" id="card3">
          <div className="illustrationsBG"></div>
          <img
            className="cardsIllustration"
            src="/illustrations/walkthroug-3-desktop.png"
            alt="character sitting on a desk with a computer"
          />
          <div className="bottomCard">
            <div className="titleAndIcon">
              <div className="iconWrapper">
                <img
                  className="cardIcon"
                  src="/icons/walkthrough-3.svg"
                  alt=""
                />
              </div>
              <h2 className="cardTitle">3—enjoy!</h2>
            </div>
            <p className="cardParagraph">
              All done, you can relax! We’ll take care of delivery of your tech
              item!
            </p>
          </div>
        </div>
      </div>
    </StyledWalkthrough>
  );
}
