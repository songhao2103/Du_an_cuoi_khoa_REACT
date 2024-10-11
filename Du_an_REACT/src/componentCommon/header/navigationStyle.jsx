import styled from "styled-components";
import "../../variables_CSS.css";

export const NavigationBox = styled.div`
  padding-left: 60px;
  .list_nav {
    display: flex;
    align-items: center;

    li .link {
      padding: 0 20px;
      cursor: pointer;
      color: var(--Black, #000);
      font-family: Exo;
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 120%; /* 19.2px */
      text-transform: capitalize;
    }

    li .link:active {
      transform: scale(0.97);
    }

    li .link.active {
      color: var(--Primary, #ff782d);
    }

    li .link:hover {
      color: var(--Primary, #ff782d);
    }

    .page {
      display: flex;
      position: relative;

      .box_page {
        display: flex;
        height: 40px;
        align-items: center;

        i {
          margin-left: -15px;
        }
      }
      .box_page:hover i {
        color: var(--Primary, #ff782d);
      }

      .list_option {
        display: none;
        flex-direction: column;
        gap: 10px;
        position: absolute;
        top: 30px;
        left: 30px;
        background-color: white;
        padding: 10px 20px;
        border-radius: 10px;
        border: 1px solid rgb(211, 211, 211);

        li {
          padding: 0 20px;
          cursor: pointer;
          color: var(--Black, #000);
          font-family: Exo;
          font-size: 1.6rem;
          font-weight: 600;
          line-height: 120%; /* 19.2px */
          text-transform: capitalize;
        }

        li:hover {
          color: var(--Primary, #ff782d);
        }

        li:active {
          transform: scale(0.97);
        }
      }
    }

    .page:hover .list_option {
      display: flex;
    }
  }
  /* .list_nav li .link  */
`;
