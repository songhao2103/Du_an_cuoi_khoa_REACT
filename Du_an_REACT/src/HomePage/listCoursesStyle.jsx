import styled from "styled-components";
import "../variables_CSS.css";

export const BoxListCourses = styled.div`
  margin-top: 90px;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .title_h2 {
      margin-bottom: 12px;
    }
  }

  .list_courses {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    height: 1040px;
    overflow: hidden;
    padding-top: 30px;

    .cart_course {
      display: flex;
      width: 410px;
      padding: 20px;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      border-radius: 20px 20px 0px 0px;
      box-shadow: var(--Box-shadow1);
      transition: 0.3s;

      &:hover {
        transform: translateY(-15px);
        box-shadow: var(--Box-shadow2);

        .content .title_h4 {
          color: var(--Primary);
        }
      }

      img {
        transform: translate(-20px, -20px);
        cursor: pointer;
      }

      .content {
        width: 100%;

        .title_h4 {
          margin-top: 12px;
          margin-bottom: 16px;
        }

        .info {
          display: flex;
          gap: 24px;
          margin-bottom: 33px;

          .box {
            display: flex;
            align-items: center;
            gap: 8px;

            .icon i {
              color: var(--Primary);
            }
          }
        }

        .bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .price {
            display: flex;
            gap: 8px;

            .old {
              color: var(--Black, #9d9d9d);
            }

            .old.sale {
              color: var(--Grey, #9d9d9d);
              text-decoration-line: line-through;
            }

            .new {
              color: var(--Red, #f51a1a);
              font-weight: 500;
              text-transform: capitalize;
            }

            .new.free {
              color: green;
            }
          }

          .view {
            color: var(--Dark_gray);
            font-weight: 600;
            text-transform: capitalize;
            cursor: pointer;
            font-size: 1.6rem;
          }

          .view:hover {
            color: var(--Black);
          }

          .view:active {
            transform: scale(0.97);
          }
        }
      }
    }
  }

  .list_courses.view_all {
    height: auto;
    overflow: initial;
  }
`;
