import styled from "styled-components";
import Product from "./product";
import { useState } from "react";

const StyledProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 228px;

  height: 2598px;
  .titleAndControls {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 100%;
    height: 142px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
  .titleL2 {
    background: var(--brandDefault);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .filterAndSort {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 64px;
    margin: 40px 0;
    .frame228 {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 1051px;
      height: 59px;
      .filter {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 353px;
        height: 59px;
        .filterText {
          width: 90px;
          height: 27px;
          /* Desktop/Text/L1/Default| */
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 150%;
          color: var(--neutrals600);
          margin: 0px 16px;
        }
        .filterBtn {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 16px 8px 16px 24px;
          width: 256px;
          height: 59px;
          background: var(--neutrals0);
          border: 1px solid var(--neutrals300);
          border-radius: 16px;
          margin: 8px 0px;
          &:hover {
            cursor: pointer;
            box-shadow: 0 0 11px rgba(33,33,33,.2); 
          }
          p {
            position: static;
            width: 113px;
            height: 27px;
            left: 24px;
            top: 16px;
            /* Desktop/Text/L1/Default| */
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 150%;
            color: var(--neutrals600);
            margin: 0px 16px;
          }
          .arrowIcon {
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 12px solid #000000;
            margin: 10px;
          }
        }
        .filtersDropdown {
          position: absolute;
          top: 1932px;
          left: 340px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 8px 0px;
          width: 256px;
          height: 271px;
          background: var(--neutrals0);
          border: 1px solid var(--neutrals300);
          border-radius: 8px;
          margin: 8px 0px;
          z-index: 4;
          .filterOption {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 12px 24px;
            width: 254px;
            height: 51px;
            background: var(--neutrals0);
            &:hover {
              background: var(--neutrals100);
              cursor: pointer;
            }
            p {
              /* Desktop/Text/L1/Default| */
              font-family: "Montserrat";
              font-style: normal;
              font-weight: 600;
              font-size: 18px;
              line-height: 150%;
              color: var(--neutrals600);
              margin: 0px 16px;
            }
          }
        }
        .hidden {
          display: none;
        }
      }
    }
    .divider {
      width: 2px;
      height: 59px;
      left: 393px;
      top: 0px;
      background: var(--neutrals300);
      margin: 0px 40px;
    }
    .sorter {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 616px;
      height: 43px;
      .sorterText {
        width: 71px;
        height: 27px;
        /* Desktop/Text/L1/Default| */
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 150%;
        color: var(--neutrals600);
      }
      .sortRow {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        width: 529px;
        height: 43px;
        .sortBtn {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 173px;
          height: 43px;
          background: #e6f0ff;
          border-radius: 12px;
          margin: 0px 5px;
          &:hover {
            cursor: pointer;
            box-shadow: 0 0 11px rgba(33,33,33,.2); 
          }
          p {
            height: 27px;
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
      .activeFilter {
        background: var(--brandDefault);
      }
    }
  }
  .numberProductsAndPager {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 64px;
    .emptyDiv {
      width: 259px;
      height: 64px;
    }
    .numberOfProducts {
      width: 156px;
      height: 27px;
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
      margin: 0px 292px;
    }
  }
  .pager {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 12px 16px;
      width: 259px;
      height: 64px;
      border: 1px solid var(--neutrals300);
      box-sizing: border-box;
      border-radius: 16px;
      .pagerArrowPrevBtn {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 8px;
        width: 40px;
        height: 40px;
        background: var(--neutrals200);
        border-radius: 8px;
        transform: rotate(-180deg);
        &:hover {
          cursor: pointer;
          background-color: var(--brandLight2);
        }
        .pagerArrowPrev {
          border: none;
        }
      }
      .pagerText {
        width: 99px;
        height: 27px;
        /* Desktop/Text/L1/Default| */
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 150%;
        color: var(--neutrals600);
        margin: 0px 20px;
      }
      .pagerArrowNextBtn {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 8px;
        width: 40px;
        height: 40px;
        background: var(--neutrals200);
        border-radius: 8px;
        &:hover {
          cursor: pointer;
          background-color: var(--brandLight2);
        }
        .pagerArrowNext {
          border: none;
        }
      }
    }
`;

export default function Products() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);

  return (
    <StyledProducts>
      <div className="titleAndControls">
        <h2 className="titleL2">tech products</h2>
        <div className="filterAndSort">
          <div className="frame228">
            <div className="filter">
              <p className="filterText">Filter by:</p>
              <div
                className="filterBtn"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <p>All Products</p>
                <img
                  className="arrowIcon"
                  src="/icons/arrow-icon.svg"
                  alt="arrow pointing down"
                />
              </div>
              <div
                className={`filtersDropdown ${showDropdown ? "" : "hidden"}`}
              >
                <div className="filterOption">
                  <p>All Products</p>
                </div>
                <div className="filterOption">
                  <p>Gaming</p>
                </div>
                <div className="filterOption">
                  <p>Audio</p>
                </div>
                <div className="filterOption">
                  <p>Smart Home</p>
                </div>
                <div className="filterOption">
                  <p>Monitors & TV</p>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="sorter">
              <p className="sorterText">Sort by:</p>
              <div className="sortRow">
                <div
                  className={`sortBtn ${activeFilter ? "activeFilter" : ""}`}
                  onClick={() => setActiveFilter(!activeFilter)}
                >
                  <p>Most Recent</p>
                </div>
                <div
                  className={`sortBtn ${activeFilter ? "activeFilter" : ""}`}
                >
                  <p>Lowest Price</p>
                </div>
                <div
                  className={`sortBtn ${activeFilter ? "activeFilter" : ""}`}
                >
                  <p>Highest Price</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pager">
            <div className="pagerArrowPrevBtn">
              <img
                className="pagerArrowPrev"
                src="/icons/chevron-default.svg"
                alt="arrow pointing left"
              />
            </div>
            <p className="pagerText">Page 1 of 2</p>
            <div className="pagerArrowNextBtn">
              <img
                className="pagerArrowNext"
                src="/icons/chevron-default.svg"
                alt="arrow pointing right"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="productsGrid">
        <Product />
      </div>
      <div className="numberProductsAndPager">
        <div className="emptyDiv"></div>
        <p className="numberOfProducts">16 of 32 products</p>
        {/* Pager */}
        <div className="pager">
          <div className="pagerArrowPrevBtn">
            <img
              className="pagerArrowPrev"
              src="/icons/chevron-default.svg"
              alt="arrow pointing left"
            />
          </div>
          <p className="pagerText">Page 1 of 2</p>
          <div className="pagerArrowNextBtn">
            <img
              className="pagerArrowNext"
              src="/icons/chevron-default.svg"
              alt="arrow pointing right"
            />
          </div>
        </div>
      </div>
    </StyledProducts>
  );
}
