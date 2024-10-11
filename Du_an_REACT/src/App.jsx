import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./HomePage/HomePage";
import Footer from "./componentCommon/footer/Footer";
import Header from "./componentCommon/header/Header";
import Courses from "./Courses/Courses";
function App() {
  return (
    <div className="main_content">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/courses" element={<Courses></Courses>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
