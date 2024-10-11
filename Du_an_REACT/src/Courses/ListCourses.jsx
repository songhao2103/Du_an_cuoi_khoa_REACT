import { useState } from "react";
import Course from "./Course";
import { listDataCourses } from "../listDataCourses";

const ListCourses = () => {
  const [prevListDataCourses, setPrevListDataCourses] =
    useState(listDataCourses);
  return (
    <div className="list_courses">
      {prevListDataCourses.map((course) => (
        <Course key={course.id} course={course}></Course>
      ))}
    </div>
  );
};

export default ListCourses;
