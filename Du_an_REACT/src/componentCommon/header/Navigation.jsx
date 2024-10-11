import { NavLink } from "react-router-dom";
import { NavigationBox } from "./navigationStyle";

const Navigation = () => {
  return (
    <NavigationBox className="navigation">
      <ul className="list_nav">
        <li className="item desc">
          <NavLink
            to="/"
            className={`link ${({ isActive }) => (isActive ? "active" : "")}`}
          >
            Home
          </NavLink>
        </li>
        <li className="item desc">
          <NavLink
            to="/courses"
            className={`link ${({ isActive }) => (isActive ? "active" : "")}`}
          >
            Courses
          </NavLink>
        </li>
        <li className="item desc">
          <NavLink
            className={`link ${({ isActive }) => (isActive ? "active" : "")}`}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
        <li className="desc page">
          <div className="box_page">
            <p className="link">page</p>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
          <ul className="list_option">
            <li>Option1</li>
            <li>Option2</li>
            <li>Option3</li>
            <li>Option4</li>
          </ul>
        </li>
        <li className="item desc">
          <NavLink
            to="/learnPress"
            className={`link ${({ isActive }) => (isActive ? "active" : "")}`}
          >
            LearnPress Add-On
          </NavLink>
        </li>
        <li className="item desc">
          <NavLink
            to="/premium-theme"
            className={`link ${({ isActive }) => (isActive ? "active" : "")}`}
          >
            Premium Theme
          </NavLink>
        </li>
      </ul>
    </NavigationBox>
  );
};

export default Navigation;
