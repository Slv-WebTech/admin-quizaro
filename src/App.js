import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Quizaro/Dashboard";
import Dropdown from "./Quizaro/Dropdown";
import Course from "./Quizaro/Course";
import Courses from "./Quizaro/FullStack";
import AllCourses from "./Quizaro/AllCourses";
import Header from "./Quizaro/Header";
import FullStack from "./Quizaro/Fullstackcourse";
import Finance from "./Quizaro/Finance";
import HR from "./Quizaro/HR";
import ML from "./Quizaro/ML";
import Law from "./Quizaro/Law";
import Test from "./Quizaro/Test";
import Test2 from "./Quizaro/Test2";
import Test3 from "./Quizaro/Test3";
import Test4 from "./Quizaro/Test4";
import Test5 from "./Quizaro/Test5";
import Test6 from "./Quizaro/test6";
import Test8 from "./Quizaro/test8";
import Test9 from "./Quizaro/test9";
import "./Quizaro/videoinput.css";
import VideoInput from "./Quizaro/InputVideo";
import StudentDashboard from "./Quizaro/StudentDashboard";

import AdminDashboard from "./Quizaro/AdminDashboard";
import Adminlogin from "./Quizaro/Adminlogin";
import Home from "./Quizaro/Home";
import AddressForm from "./Quizaro/AddressForm";
import Orders from "./Quizaro/Orders";
import Chart from "./Quizaro/Chart";
import Deposits from "./Quizaro/Deposits";
import Students from "./Quizaro/Students";
import AddInstitute from "./Quizaro/Add Institute";

// import { SContainer } from "./Quizaro/SContainer";

function App(props) {
  return (
    <div>
      <BrowserRouter basename="/admin-quizaro">
        <Routes>
          <Route history={props.history} element={<AdminDashboard />} path="/Admindashboard" />
          <Route history={props.history} element={<Header />} path="/header" />
          <Route history={props.history} element={<Dashboard />} path="/dashboard" />
          <Route history={props.history} element={<Dropdown />} path="/dropdown" />
          <Route history={props.history} element={<Course />} path="/course" />
          <Route history={props.history} element={<Courses />} path="/courses" />
          <Route history={props.history} element={<AllCourses />} path="/allcourses" />
          <Route history={props.history} element={<Law />} path="/law" />
          <Route history={props.history} element={<HR />} path="/hr" />
          <Route history={props.history} element={<Finance />} path="/finance" />
          <Route history={props.history} element={<ML />} path="/ml" />
          <Route history={props.history} element={<FullStack />} path="/fullstack" />
          <Route history={props.history} element={<Test />} path="/test" />
          <Route history={props.history} element={<Test2 />} path="/test2" />
          <Route history={props.history} element={<Test3 />} path="/test3" />
          <Route history={props.history} element={<Test4 />} path="/test4" />
          <Route history={props.history} element={<Test6 />} path="/test6" />
          <Route history={props.history} element={<Test5 />} path="/test5" />
          <Route history={props.history} element={<Test8 />} path="/test8" />
          <Route history={props.history} element={<Test9 />} path="/test9" />
          <Route history={props.history} element={<VideoInput />} path="/videoinput" />
          <Route history={props.history} element={<StudentDashboard />} path="/studentdashboard" />

          <Route history={props.history} element={<login />} path="/login" />
          <Route history={props.history} element={<Adminlogin />} path="/adminlogin" />
          <Route history={props.history} element={<Home />} path="/home" />
          <Route history={props.history} element={<Chart />} path="/Chart" />
          <Route history={props.history} element={<Orders />} path="/orders" />
          <Route history={props.history} element={<Deposits />} path="/deposit" />
          <Route history={props.history} element={<AddressForm />} path="/addressform" />
          <Route history={props.history} element={<Students />} path="/students" />
          <Route history={props.history} element={<AddInstitute />} path="/addinstitute" />

          {/* <Route history={props.history} element={<SContainer />} path="/container" /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
