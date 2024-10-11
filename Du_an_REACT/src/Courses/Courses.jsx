import Contents from "./Contents";
import NavBar from "./NavBar";
// import "./styleCourses.modules.css";

const Courses = () => {
  return (
    <div className="courses">
      <div className="top"></div>
      <div className="bottom">
        <Contents></Contents>
        <NavBar></NavBar>
      </div>
    </div>
  );
};

export default Courses;
