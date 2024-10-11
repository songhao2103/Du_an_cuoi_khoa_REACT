import styled from "styled-components";
import "../variables_CSS.css";

// =================STYLE===================
const BoxLearnPressLMS = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 125px;
  margin-top: 90px;

  .right {
    .title_h2 {
      margin-bottom: 24px;
    }
    .right ul {
      margin-top: 20px;

      li {
        margin-bottom: 12px;
        color: var(--Black);
      }
      li::before {
        content: "\f00c"; /* Unicode của biểu tượng dấu tích trong Font Awesome */
        font-family: "Font Awesome 5 Free"; /* Font Family của Font Awesome */
        font-weight: 900; /* Độ đậm của Font Awesome 5 Free */
        color: green; /* Màu sắc của dấu tích */
        margin-right: 10px; /* Khoảng cách giữa dấu tích và nội dung */
      }
    }
  }
`;
const LearnPressLMS = () => {
  return (
    <BoxLearnPressLMS>
      <div className="img">
        <img
          src="https://songhao2103.github.io/IMG_du_an_REACT/img_/img_media/Nhom_hoc_sinh.png"
          alt=""
        />
      </div>
      <div className="right">
        <p className="title_h2">Grow us your skill with LearnPress LMS</p>
        <p className="desc">
          We denounce with righteous indignation and dislike men who are so
          beguiled and demoralized that cannot trouble.
        </p>
        <ul>
          <li className="desc">Certification Home</li>
          <li className="desc">Certification Home</li>
          <li className="desc">Certification Home</li>
          <li className="desc">Certification Home</li>
        </ul>
        <button className="btn">Explorer Course</button>
      </div>
    </BoxLearnPressLMS>
  );
};

export default LearnPressLMS;
