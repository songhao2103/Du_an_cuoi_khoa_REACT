import styled from "styled-components";
import "../../variables_CSS.css";

export const BoxRightStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  padding: 5px 0 5px 70px;

  .box_sign {
    display: flex;

    .desc_gray {
      color: var(--Black, #000);
      font-weight: 500;
      text-transform: capitalize;
      cursor: pointer;
    }

    .desc_gray:hover {
      color: var(--Primary, #ff782d);
    }
  }

  .search {
    display: flex;
    position: relative;
    align-items: center;

    input {
      width: 250px;
      position: absolute;
      left: 40px;
      padding: 12px 45px 12px 12px;
      border-radius: 20px;
      transition: 0.4s;
      border: 1px solid rgb(216, 216, 216);
    }

    input.active {
      left: -210px;
    }

    .icon_search {
      display: flex;
      width: 40px;
      height: 40px;
      justify-content: center;
      align-items: center;
      border-radius: 24px;
      border: 2px solid var(--Primary, #ff782d);
      cursor: pointer;
      z-index: 3;
      background-color: white;

      i {
        font-size: 18px;
        color: var(--Primary, #ff782d);
      }
    }

    .icon_search:active {
      transform: scale(0.97);
    }
  }
`;
