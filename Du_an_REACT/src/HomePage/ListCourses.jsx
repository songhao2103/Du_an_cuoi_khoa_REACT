import { useState } from "react";
import CartCourses from "./CartCourses";
import { listDataCourses } from "../listDataCourses";
import { BoxListCourses } from "./listCoursesStyle";

const ListCourses = () => {
  const [viewAllCourses, setViewAllCourses] = useState(false);

  const handleViewAllCourses = () => {
    setViewAllCourses(!viewAllCourses);
  };

  return (
    <BoxListCourses className="featured_courses">
      <div className="top">
        <div className="left">
          <p className="title_h2">Featured Courses</p>
          <p className="desc_gray">Explore our Popular Courses</p>
        </div>
        <div className="right">
          <button onClick={handleViewAllCourses} className="btn_white">
            All Courses
          </button>
        </div>
      </div>
      <div className={`list_courses ${viewAllCourses ? "view_all" : ""}`}>
        {listDataCourses.map((course, index) => (
          <CartCourses key={index} course={course}></CartCourses>
        ))}
      </div>
    </BoxListCourses>
  );
};

export default ListCourses;
