import styled from "styled-components";
import "../variables_CSS.css";

const BoxCartegories = styled.div`
  .top {
    display: flex;
    margin-top: 90px;
    justify-content: space-between;

    .title_h2 {
      margin-bottom: 12px;
    }
  }

  .list_categories {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 50px;

    .category {
      display: flex;
      width: 234px;
      height: 234px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 24px;
      flex-shrink: 0;
      box-shadow: var(--Box-shadow1);
      cursor: pointer;
      transition: 0.2s;
      border-radius: 10px;

      .icon i {
        font-size: 38px;
        color: var(--Primary);
      }
      .content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      .title_h4 {
        margin-bottom: 12px;
      }
      &:hover {
        box-shadow: var(--Box-shadow2);
        transform: translateY(-10px);

        .content .title_h4 {
          color: var(--Primary);
        }
      }
    }
  }
`;
const Categories = () => {
  return (
    <BoxCartegories className="categories">
      <div className="top">
        <div className="left">
          <p className="title_h2">Top Categories</p>
          <p className="desc_gray">Explore our Popular Categories</p>
        </div>
        <div className="right">
          <button className="btn_white">All Categories</button>
        </div>
      </div>

      <div className="list_categories">
        <div className="category">
          <div className="icon">
            <i className="fa-solid fa-palette"></i>
          </div>
          <div className="content">
            <p className="title_h4">Art & Design</p>
            <p className="desc_gray">38 Courses</p>
          </div>
        </div>
        <div className="category">
          <div className="icon">
            <i className="fa-solid fa-code"></i>
          </div>
          <div className="content">
            <p className="title_h4">Development</p>
            <p className="desc_gray">38 Courses</p>
          </div>
        </div>
        <div className="category">
          <div className="icon">
            <i className="fa-brands fa-nfc-symbol"></i>
          </div>
          <div className="content">
            <p className="title_h4">Communiication</p>
            <p className="desc_gray">38 Courses</p>
          </div>
        </div>
        <div className="category">
          <div className="icon">
            <i className="fa-solid fa-photo-film"></i>
          </div>
          <div className="content">
            <p className="title_h4">Videography</p>
            <p className="desc_gray">38 Courses</p>
          </div>
        </div>
        <div className="category">
          <div className="icon">
            <i className="fa-solid fa-camera-retro"></i>
          </div>
          <div className="content">
            <p className="title_h4">Photography</p>
            <p className="desc_gray">38 Courses</p>
          </div>
        </div>
        <div className="category">
          <div className="icon">
            <i className="fa-solid fa-chart-simple"></i>
          </div>
          <div className="content">
            <p className="title_h4">Marketing</p>
            <p className="desc_gray">38 Courses</p>
          </div>
        </div>
        <div className="category">
          <div className="icon">
            <i className="fa-regular fa-pen-to-square"></i>
          </div>
          <div className="content">
            <p className="title_h4">Content Writing</p>
            <p className="desc_gray">38 Courses</p>
          </div>
        </div>
        <div className="category">
          <div className="icon">
            <i className="fa-solid fa-coins"></i>
          </div>
          <div className="content">
            <p className="title_h4">Finance</p>
            <p className="desc_gray">38 Courses</p>
          </div>
        </div>
        <div className="category">
          <div className="icon">
            <i className="fa-solid fa-dna"></i>
          </div>
          <div className="content">
            <p className="title_h4">Science</p>
            <p className="desc_gray">38 Courses</p>
          </div>
        </div>
        <div className="category">
          <div className="icon">
            <i className="fa-solid fa-globe"></i>
          </div>
          <div className="content">
            <p className="title_h4">Network</p>
            <p className="desc_gray">38 Courses</p>
          </div>
        </div>
      </div>
    </BoxCartegories>
  );
};

export default Categories;
