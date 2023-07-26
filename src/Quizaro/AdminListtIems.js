import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

import Law from "./Law";
import ML from "./ML";

import FullStack from "./FullStack";
import AWS from "./AWS";
import Android from "./Android";
import CyberSecurity from "./CyberSecurity";

import Dashboard from "./Dashboard";
import Checkout from "./Checkout";
import Users from "./Users";
import Students from "./Students";
import Admins from "./Admins";
import Instructors from "./Instructors";
import AddCourse from "./Add Course";
import AddAdmin from "./Add Admin";
import AddInstructor from "./Add Instructor";
import AddStudent from "./Add Student";
import UploadVideo from "./Upoad Video";
import AllStudents from "./AllStudents";
import AllCourses from "./AllCourses";

export default function AdminListItems(props) {
  const handleClick = (v) => {
    props.setViewContainer(v);
    // alert("Clicked");
  };
  const [courseopen, setCourseOpen] = React.useState(true);
  const [formopen, setFormOpen] = React.useState(true);
  const [usersopen, setUsersOpen] = React.useState(true);
  const [display, setDisplay] = React.useState(true);
  const [technicalopen, setTechnicalopen] = React.useState(true);

  const handleCourseOpen = () => {
    setCourseOpen(!courseopen);
  };
  const handleFormOpen = () => {
    setFormOpen(!formopen);
  };
  const handleUsersOpen = () => {
    setUsersOpen(!usersopen);
  };
  const handleDisplay = () => {
    setDisplay(!display);
  };
  const handleTechicalopen = () => {
    setTechnicalopen(!technicalopen);
  };
  return (
    <React.Fragment>
      <ListItemButton onClick={() => handleClick(<Dashboard setViewContainer={props.setViewContainer} />)}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={() => handleClick(<Law setViewContainer={props.setViewContainer} />)}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Law" />
      </ListItemButton>
      <ListItemButton onClick={() => handleClick(<ML setViewContainer={props.setViewContainer} />)}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="ML" />
      </ListItemButton>
      <ListItemButton onClick={handleCourseOpen}>
        <ListItemIcon onClick={() => handleClick(<AllCourses setViewContainer={props.setViewContainer} />)}>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Course" />
        {courseopen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={courseopen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={handleTechicalopen}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Technical" />
            {technicalopen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={technicalopen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton onClick={() => handleClick(<FullStack setViewContainer={props.setViewContainer} />)}>
                <ListItemIcon>
                  <FilterListOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Full Stack Development" />
              </ListItemButton>
              <ListItemButton onClick={() => handleClick(<AWS setViewContainer={props.setViewContainer} />)}>
                <ListItemIcon>
                  <FilterListOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="AWS Cloud" />
              </ListItemButton>
              <ListItemButton onClick={() => handleClick(<Android setViewContainer={props.setViewContainer} />)}>
                <ListItemIcon>
                  <FilterListOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Android Development" />
              </ListItemButton>
              <ListItemButton onClick={() => handleClick(<CyberSecurity setViewContainer={props.setViewContainer} />)}>
                <ListItemIcon>
                  <FilterListOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Cyber Security" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Human Resources" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Finance" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListSubheader component="div" inset>
        Services
      </ListSubheader>
      <ListItemButton onClick={() => handleClick(<Checkout setViewContainer={props.setViewContainer} />)}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Payments" />
      </ListItemButton>
      <ListItemButton onClick={handleUsersOpen}>
        <ListItemIcon onClick={() => handleClick(<Users setViewContainer={props.setViewContainer} />)}>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
        {usersopen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={usersopen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => handleClick(<Admins setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Admin" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<Students setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Students" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<Instructors setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Instructors" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleFormOpen}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Form" />
        {formopen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={formopen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => handleClick(<AddStudent setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Add Student" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<AddInstructor setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Add Instructor" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<AddAdmin setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Add Admin" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<AddCourse setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Add Course" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<UploadVideo setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Upload Video" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleDisplay}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Display All" />
        {display ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={display} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => handleClick(<AllStudents setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="All Student" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<AllStudents setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="All Admins" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<AllStudents setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="All Instructors" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<AllStudents setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="All Courses" />
          </ListItemButton>
        </List>
      </Collapse>
    </React.Fragment>
  );
}
