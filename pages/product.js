import styled from "styled-components";

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

const userPoints = 2000;

function checkPrice(prod) {
  if (prod.cost <= userPoints) {
    return (
      <div className="productCTAEnabled">
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
};

export default function Product({ currentProducts }) {
  // console.log(currentProducts);
  return (
    <StyledProduct>
      {currentProducts ? currentProducts.map((product) => (
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
        {/* <div className="productCTA">
          <p className="CTAText">Redeem for</p>
          <img
            className="aeroPayIcon"
            src="/icons/aeropay-4.svg"
            alt="aero pay icon"
          />
          <p className="CTAText">{product.cost}</p>
        </div> */}
      </div>
      )) : null}
    </StyledProduct>
  );
}
