import styled from "styled-components";
import "../variables_CSS.css";

// Phần style cho component
const BoxPostComments = styled.div`
  display: flex;
  position: relative;

  .bgc img {
    width: 1920px;
    height: 700px;
    transform: translateX(-315px);
  }

  .content {
    display: flex;
    position: absolute;
    align-items: center;

    .comment {
      width: 500px;
      margin-right: 200px;

      .title_h1 {
        margin-bottom: 24px;
      }

      .desc_gray {
        margin-bottom: 20px;
      }
    }
  }
`;

// Phần component======================

const PostComments = () => {
  return (
    <BoxPostComments className="post_comment">
      <div className="bgc">
        <img
          src="https://songhao2103.github.io/IMG_du_an_REACT/img_/img_media/bgc_providing.png"
          alt=""
        />
      </div>
      <div className="content">
        <div className="comment">
          <p className="title_h1">Build Skills with Online Course</p>
          <p className="desc_gray">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized that cannot trouble.
          </p>
          <button className="btn_primary">Posts comment</button>
        </div>
        <div className="img">
          <img
            src="https://songhao2103.github.io/IMG_du_an_REACT/img_/img_media/studen_post_comment.png"
            alt=""
          />
        </div>
      </div>
    </BoxPostComments>
  );
};

export default PostComments;
