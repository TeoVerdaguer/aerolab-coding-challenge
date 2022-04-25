import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px;
  position: absolute;
  height: 200px;
  left: 0px;
  right: 0px;
  top: 4591px;
  background: var(--neutrals0);
  order: 4;
  &:hover .footerImg {
    background: url('/icons/github-active.svg') no-repeat;
  }
  .footerImg {
    height: 32px;
    width: 32px;
    background: url("/icons/github-default.svg") no-repeat;
    display: inline-block;
  }
  .text {
    /* Desktop/Text/L1/Default| */
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    text-align: right;
    color: var(--neutrals600);
    margin: 0px 8px;
  }
  a {
    display: flex;
    text-decoration: none;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <a href="https://github.com/TeoVerdaguer/aerolab-coding-challenge" target="_blank">
        <div className="footerImg"></div>
        <p className="text">View this repository</p>
      </a>
    </StyledFooter>
  );
}
