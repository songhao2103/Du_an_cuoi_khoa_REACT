import AddOns from "./AddOns";
import Articles from "./Articles";
import Categories from "./Categories";
import Feedbacks from "./Feedbacks";
import InfoEdu from "./InfoEdu";
import LearnPressLMS from "./LearnPressLMS";
import ListCourses from "./ListCourses";
import PostComments from "./PostComments";
import Providing from "./Providing";
import Student from "./Student";
import "./styleHomePage.module.css";

const HomePage = () => {
  return (
    <div className="home_page">
      <PostComments></PostComments>
      <Categories></Categories>
      <ListCourses></ListCourses>
      <AddOns></AddOns>
      <InfoEdu></InfoEdu>
      <LearnPressLMS></LearnPressLMS>
      <Providing></Providing>
      <Feedbacks></Feedbacks>
      <Student></Student>
      <Articles></Articles>
    </div>
  );
};

export default HomePage;
