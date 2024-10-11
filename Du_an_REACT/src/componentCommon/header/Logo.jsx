import styled from "styled-components";
import "../../variables_CSS.css";

// ==========Style Css=====================================
const BoxLogo = styled.div`
  display: flex;
  gap: 2px;
  .text {
    color: var(--Black, #000);
    font-family: Exo;
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 33.6px */
  }
`;
// /////////////////////////////////////////////////////////////////////////////////////

const Logo = () => {
  return (
    <BoxLogo>
      <img
        src="https://songhao2103.github.io/IMG_du_an_REACT/img_/img_media/Logo.svg"
        alt=""
        className="icon"
      />
      <p className="text">EduPress</p>
    </BoxLogo>
  );
};

export default Logo;
