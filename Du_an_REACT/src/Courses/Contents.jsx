// import "./styleCourses.modules.css";

import ListCourses from "./ListCourses";

const Contents = () => {
  return (
    <div className="contents">
      <div className="top_contents">
        <p className="title">All Courses</p>
        <div className="right">
          <div className="box_input">
            <input type="text" placeholder="Search" />
            <div className="icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="box_icon">
            <i className="fa-solid fa-table"></i>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
      <ListCourses></ListCourses>
    </div>
  );
};

export default Contents;
