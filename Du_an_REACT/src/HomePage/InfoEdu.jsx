import styled from "styled-components";
import "../variables_CSS.css";

const BoxInfoEdu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 90px;

  .info {
    display: flex;
    width: 300px;
    padding: 50px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 20px;
    background: var(--White_grey, #f5f5f5);

    .title_h2 {
      color: var(--Primary);
      margin-bottom: 0px;
    }

    .desc_black {
      font-weight: 500;
    }
  }
`;

const InfoEdu = () => {
  return (
    <BoxInfoEdu className="info_edu">
      <div className="info">
        <p className="title_h2">25K+</p>
        <p className="desc_black">Active Student</p>
      </div>
      <div className="info">
        <p className="title_h2">899</p>
        <p className="desc_black">Total Courses</p>
      </div>
      <div className="info">
        <p className="title_h2">158</p>
        <p className="desc_black">Instructor</p>
      </div>
      <div className="info">
        <p className="title_h2">100%</p>
        <p className="desc_black">Satisfaction Rate</p>
      </div>
    </BoxInfoEdu>
  );
};

export default InfoEdu;
