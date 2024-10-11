import styled from "styled-components";
import "../variables_CSS.css";

// ==========Style cho component==================
const BoxAddOns = styled.div`
  background: url("https://songhao2103.github.io/IMG_du_an_REACT/img_/img_media/bgc_explorer_course.png");
  width: 100%;
  height: 324px;
  margin-top: 90px;
  display: flex;
  align-items: center;
  padding-left: 50px;

  .left {
    width: 450px;

    .title_h2 {
      margin-top: 12px;
      margin-bottom: 24px;
    }

    .btn_primary {
      margin-top: 20px;
    }
  }

  .right {
    display: flex;
    position: relative;
    height: 100%;
    width: 70%;
    overflow: hidden;

    .item {
      padding: 15px;
      position: absolute;
      border-radius: 10px;
    }

    .item1 {
      top: 50px;
      left: 100px;
      background-color: blue;
      transform: rotate(40deg);
    }

    .item2 {
      top: 200px;
      left: 200px;
      background-color: orangered;
    }

    .item3 {
      right: -10px;
      background-color: rebeccapurple;
      top: 100px;
      transform: rotate(-20deg);
    }

    .item4 {
      background-color: #ca0404;
      top: 150px;
      left: 300px;
      transform: rotate(-40deg);
    }

    .item5 {
      background-color: #197692;
      top: 50px;
      left: 400px;
      transform: rotate(-60deg);
    }

    .item6 {
      background-color: #c111d1;
      top: 200px;
      left: 500px;
      transform: rotate(40deg);
    }

    .item7 {
      background-color: #717533;
      top: 130px;
      left: 600px;
      transform: rotate(-30deg);
    }

    .item8 {
      bottom: -20px;
      background-color: #06045e;
      left: 330px;
      transform: rotate(-40deg);
    }
  }
`;

// ===============component======================

const AddOns = () => {
  return (
    <BoxAddOns className="add_ons">
      <div className="left">
        <p className="desc_gray">GET MORE POWER FROM</p>
        <p className="title_h2">LearnPress Add-Ons</p>
        <p className="desc_gray">
          The next level of LearnPress - LMS WordPress Plugin. More Powerful,
          Flexible and Magical Inside.
        </p>
        <button className="btn_primary">Explorer course</button>
      </div>
      <div className="right">
        <div className="item item1">
          <img
            src="https://songhao2103.github.io/IMG_du_an_REACT/img_/img_media/media_explorer_course/Stripe%20Logo.svg"
            alt=""
            className="icon"
          />
        </div>
        <div className="item item2">
          <img
            src="https://songhao2103.github.io/IMG_du_an_REACT/img_/img_media/media_explorer_course/Vector%20(1).svg"
            alt=""
            className="icon"
          />
        </div>
        <div className="item item3">
          <img
            src="https://songhao2103.github.io/IMG_du_an_REACT/img_/img_media/media_explorer_course/Vector%20(2).svg"
            alt=""
            className="icon"
          />
        </div>
        <div className="item item4">
          <img
            src="https://songhao2103.github.io/IMG_du_an_REACT/img_/img_media/media_explorer_course/Vector%20(4).svg"
            alt=""
            className="icon"
          />
        </div>
        <div className="item item5">
          <img
            src="https://songhao2103.github.io/IMG_du_an_REACT/img_/img_media/media_explorer_course/Vector%20(3).svg"
            alt=""
            className="icon"
          />
        </div>
        <div className="item item6">
          <img
            src="https://songhao2103.github.io/IMG_du_an_REACT/img_/img_media/media_explorer_course/Vector%20(5).svg"
            alt=""
            className="icon"
          />
        </div>
        <div className="item item7">
          <img
            src="https://songhao2103.github.io/IMG_du_an_REACT/img_/img_media/media_explorer_course/Vector%20(6).svg"
            alt=""
            className="icon"
          />
        </div>
        <div className="item item8">
          <img
            src="https://songhao2103.github.io/IMG_du_an_REACT/img_/img_media/media_explorer_course/Vector%20(6).svg"
            alt=""
            className="icon"
          />
        </div>
      </div>
    </BoxAddOns>
  );
};

export default AddOns;
