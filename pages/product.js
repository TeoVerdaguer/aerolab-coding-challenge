import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

const StyledProduct = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0px;
  flex-direction: row;
  height: 2264px;
  margin: 64px 0px;
  flex-wrap: wrap;
  .productContainer {
    width: 348px;
    height: 506px;
    margin: 0 5px;
    .productCard {
      width: 351px;
      height: 431px;
      /* Elevation 1/Default */
      filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.05));
      margin: 0 12px;
      .imgContainer {
        position: absolute;
        width: 351px;
        height: 344.92px;
        background: #ffffff;
        /* Neutrals/300 */
        border: 1px solid #dae4f2;
        box-sizing: border-box;
        border-radius: 16px 16px 0px 0px;
        .productImage {
          margin-top: 64px;
          margin-left: 34px;
        }
      }
      .productDetail {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 16px 24px 24px;
        position: absolute;
        width: 351px;
        height: 88px;
        left: 0px;
        top: 343px;
        background: var(--neutrals0);
        border: 1px solid var(--neutrals300);
        box-sizing: border-box;
        border-radius: 0px 0px 16px 16px;
        .productName {
          width: 303px;
          height: 27px;
          /* Desktop/Text/L1/Default| */
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 150%;
          color: var(--neutrals900);
        }
        .productType {
          width: 303px;
          height: 21px;
          /* Desktop/Text/L2/All Caps */
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 150%;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--neutrals600);
        }
      }
    }

    .productCTAEnabled {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 16px 24px;
      position: static;
      width: 351px;
      height: 59px;
      background: var(--brandDefault);
      /* Elevation 1/Default */
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
      border-radius: 16px;
      margin: 16px 12px;
      &:hover {
        cursor: pointer;
        background: var(--brandHover);
      }
      .CTAText {
        height: 27px;
        /* Desktop/Text/L1/Default| */
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 150%;
        color: var(--neutrals0);
        margin: 0px 8px;
      }
      .aeroPayIcon {
        height: 24px;
      }
      &.processing {
        opacity: 0.5;
      }
    }

    .productCTADisabled {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 16px 24px;
      position: static;
      width: 351px;
      height: 59px;
      background: var(--neutrals200);
      /* Elevation 1/Default */
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
      border-radius: 16px;
      margin: 16px 12px;
      pointer-events: none;
      .CTAText {
        height: 27px;
        /* Desktop/Text/L1/Default| */
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 150%;
        color: var(--neutrals600);
        margin: 0px 8px;
      }
      .aeroPayIcon {
        height: 24px;
      }
    }
  }
`;

const SuccessToast = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  position: fixed;
  left: 80px;
  bottom: 40px;
  width: 532px;
  height: 80px;
  background: var(--neutrals0);
  border: 2px solid var(--greenDefault);
  box-sizing: border-box;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  z-index: 5;
  transform: translateX(-200%);
  transition: all 0.5s ease;
  &.showToast {
    transform: translateX(0);
  }
  .iconAndText {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 32px;
    margin: 0px 23px;
    img {
      margin: 0 15px;
    }
    p {
      color: var(--neutrals600);
    }
  }
  .crossIcon {
    width: 24px;
    height: 24px;
    margin: 0px 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const FailedToast = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  position: fixed;
  left: 80px;
  bottom: 40px;
  width: 532px;
  height: 80px;
  background: var(--neutrals0);
  border: 2px solid var(--redDefault);
  box-sizing: border-box;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  z-index: 5;
  transform: translateX(-200%);
  transition: all 0.5s ease;
  &.showToast {
    transform: translateX(0);
  }
  .iconAndText {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 32px;
    margin: 0px 23px;
    img {
      margin: 0 15px;
    }
    p {
      color: var(--neutrals600);
    }
  }
  .crossIcon {
    width: 24px;
    height: 24px;
    margin: 0px 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default function Product({
  currentProducts,
  userPoints,
  setUserPoints,
}) {

  // States
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showFailedToast, setShowFailedToast] = useState(false);

  // Effects
  useEffect(() => {
    if (showSuccessToast) {
      setTimeout( () => {
        setShowSuccessToast(false);
      }, 4000)
    }
  }, [showSuccessToast])
  
  function showToast(name) {
    setShowSuccessToast(true);
    setTimeout( () => {
      setShowSuccessToast(false);
    }, 4000)
    return (
      <SuccessToast className={ showSuccessToast ? 'showToast' : ''}>
        <div className="iconAndText">
          <img
            src="/icons/system-success.svg"
            alt="green check icon"
            className="icon"
          />
          <p>Product redeemed successfully</p>
        </div>
        <img className="crossIcon" src="/icons/cross-default.svg" alt="cross icon"  onClick={() => setShowSuccessToast(false)}/>
      </SuccessToast>
    );
  }

  useEffect(() => {
    if (showFailedToast) {
      setTimeout( () => {
        setShowFailedToast(false);
      }, 4000)
    }
  }, [showFailedToast])


  const authToken =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjYyMGRhN2VhZDIzNzAwMWFhMmZiYmYiLCJpYXQiOjE2NTA1OTMxOTF9.5TtSt4ijKv_SRXE7HHTilJjSbxOC9x68Ulm4Tq7fBqk";
  
  // Constants for the API call to redeem products
  const redeemProductUrl = "https://coding-challenge-api.aerolab.co/redeem";
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: authToken,
      "Access-Control-Allow-Origin": "*",
    },
  };

  // Get user points from API
  function getUserPoints() {
    const url = "https://coding-challenge-api.aerolab.co/user/me";
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: authToken,
      },
    };

    // GET user data from API
    axios
      .get(url, config)
      .then((data) => {
        setUserPoints(data.data.points);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Redeem product API call
  function redeem(prodId, prodName) {
    let body = { productId: prodId };
    axios
      .post(redeemProductUrl, JSON.stringify(body), config)
      .then((status) => {
        console.log(status);
        getUserPoints();
        showToast(prodName);
      })
      .catch((err) => {
        console.log(err);
        setShowFailedToast(true);
      });
  }

  // Set product CTA depending on the cost
  function checkPrice(prod) {
    if (prod.cost <= userPoints) {
      return (
        <div className="productCTAEnabled" onClick={() => redeem(prod._id, prod.name)}>
          <p className="CTAText">Redeem for</p>
          <img
            className="aeroPayIcon"
            src="/icons/aeropay-3.svg"
            alt="aero pay icon"
          />
          <p className="CTAText">{prod.cost}</p>
        </div>
      );
    } else {
      return (
        <div className="productCTADisabled">
          <p className="CTAText">You need</p>
          <img
            className="aeroPayIcon"
            src="/icons/aeropay-4.svg"
            alt="aero pay icon"
          />
          <p className="CTAText">{prod.cost - userPoints}</p>
        </div>
      );
    }
  }

  return (
    <StyledProduct>
      {currentProducts
        ? currentProducts.map((product) => (
            <div className="productContainer" key={product._id}>
              <div className="productCard">
                <div className="imgContainer">
                  <img
                    className="productImage"
                    src={product.img.url}
                    alt="product image"
                  />
                </div>
                <div className="productDetail">
                  <h3 className="productName">{product.name}</h3>
                  <p className="productType">{product.category}</p>
                </div>
              </div>
              {checkPrice(product)}
            </div>
          ))
        : null}

      {showSuccessToast ? showToast() : null}

      <FailedToast className={ showFailedToast ? 'showToast' : ''}>
        <div className="iconAndText">
          <img
            src="/icons/system-error.svg"
            alt="red cross icon"
            className="icon"
          />
          <p>There was a problem with the transaction</p>
        </div>
        <img className="crossIcon" src="/icons/cross-default.svg" alt="cross icon" onClick={() => setShowFailedToast(false)}/>
      </FailedToast>
    </StyledProduct>
  );
}
