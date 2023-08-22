import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";

import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";

import Divider from "@mui/material/Divider";
import LogoutIcon from "@mui/icons-material/Logout";
import FullStack from "./FullStack";
import AWS from "./AWS";
import Android from "./Android";
import CyberSecurity from "./CyberSecurity";
import AutoCad from "./AutoCad";
import Stock from "./Stock";
import SettingsIcon from "@mui/icons-material/Settings";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SchoolIcon from "@mui/icons-material/School";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import CloudIcon from "@mui/icons-material/Cloud";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import SecurityIcon from "@mui/icons-material/Security";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import HandymanIcon from "@mui/icons-material/Handyman";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

import DvrIcon from "@mui/icons-material/Dvr";
import Dashboard from "./Dashboard";
import Checkout from "./Checkout";
import Users from "./Users";
import Students from "./Students";
import Admins from "./Admins";
import Instructors from "./Instructors";
import AddCourse from "./Add Course";
// import AddComboCourse from "./Add ComboCourse";
import AddStream from "./Add Stream";
import AddInstitute from "./Add Institute";
import AddCertification from "./Add Certification";
import AddLanguage from "./Add Language";
import AddAdmin from "./Add Admin";
import AddInstructor from "./Add Instructor";
import AddStudent from "./Add Student";
import NewUser from "./New User";

import AllStudents from "./AllStudents";
import AllCourses from "./AllCourses";
import AllInstructors from "./AllInstructors";
import AllAdmins from "./AllAdmins";
import AllInstitutes from "./AllInstitutes";
import AllStreams from "./AllStreams";
import AllCertifications from "./AllCertifications";
// import AdminLogin from "./Adminlogin";
import { Avatar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GroupsIcon from "@mui/icons-material/Groups";
import CourseVideos from "./Coursevideos";

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
  const [coreopen, setCoreopen] = React.useState(true);
  const [managementopen, setManagementopen] = React.useState(true);

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
  const handleCoreopen = () => {
    setCoreopen(!coreopen);
  };
  const handleManagementopen = () => {
    setManagementopen(!managementopen);
  };
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/AdminLogin");
  };
  return (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <Avatar alt="Admin" src="https://source.unsplash.com/random?flower" sx={{ width: 50, height: 50 }} />
        </ListItemIcon>
        <div>
          <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>Admin</Typography>
          <Typography sx={{ fontSize: 13 }}>@adminvivek</Typography>
        </div>
      </ListItemButton>
      <Divider />
      <ListItemButton onClick={() => handleClick(<Dashboard setViewContainer={props.setViewContainer} />)}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>

      <ListItemButton onClick={handleCourseOpen}>
        <ListItemIcon onClick={() => handleClick(<AllCourses setViewContainer={props.setViewContainer} />)}>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Course" />
        {courseopen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={courseopen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={handleTechicalopen}>
            <ListItemIcon>
              <ImportantDevicesIcon />
            </ListItemIcon>
            <ListItemText primary="Technical" />
            {technicalopen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={technicalopen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton onClick={() => handleClick(<FullStack setViewContainer={props.setViewContainer} />)}>
                <ListItemIcon>
                  <DvrIcon />
                </ListItemIcon>
                <ListItemText primary="Full Stack Development" />
              </ListItemButton>
              <ListItemButton onClick={() => handleClick(<AWS setViewContainer={props.setViewContainer} />)}>
                <ListItemIcon>
                  <CloudIcon />
                </ListItemIcon>
                <ListItemText primary="AWS Cloud" />
              </ListItemButton>
              <ListItemButton onClick={() => handleClick(<Android setViewContainer={props.setViewContainer} />)}>
                <ListItemIcon>
                  <AppShortcutIcon />
                </ListItemIcon>
                <ListItemText primary="Android Development" />
              </ListItemButton>
              <ListItemButton onClick={() => handleClick(<CyberSecurity setViewContainer={props.setViewContainer} />)}>
                <ListItemIcon>
                  <SecurityIcon />
                </ListItemIcon>
                <ListItemText primary="Cyber Security" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleCoreopen}>
            <ListItemIcon>
              <HandymanIcon />
            </ListItemIcon>
            <ListItemText primary="Core" />
            {coreopen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={coreopen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton onClick={() => handleClick(<AutoCad setViewContainer={props.setViewContainer} />)}>
                <ListItemIcon>
                  <PrecisionManufacturingIcon />
                </ListItemIcon>
                <ListItemText primary="AutoCad" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleManagementopen}>
            <ListItemIcon>
              <ManageAccountsIcon />
            </ListItemIcon>
            <ListItemText primary="Management" />
            {technicalopen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={managementopen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton onClick={() => handleClick(<Stock setViewContainer={props.setViewContainer} />)}>
                <ListItemIcon>
                  <ShowChartIcon />
                </ListItemIcon>
                <ListItemText primary="Stock Market" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <AirlineSeatReclineNormalIcon />
                </ListItemIcon>
                <ListItemText primary="Human Resources" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <AccountBalanceWalletIcon />
                </ListItemIcon>
                <ListItemText primary="Finance" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Collapse>

      <ListSubheader component="div" inset>
        Services
      </ListSubheader>
      <ListItemButton onClick={() => handleClick(<Checkout setViewContainer={props.setViewContainer} />)}>
        <ListItemIcon>
          <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText primary="Payments" />
      </ListItemButton>
      <ListItemButton onClick={handleUsersOpen}>
        <ListItemIcon onClick={() => handleClick(<Users setViewContainer={props.setViewContainer} />)}>
          <GroupsIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
        {usersopen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={usersopen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => handleClick(<Admins setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <AdminPanelSettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Admin" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<Students setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <ManIcon />
              <WomanIcon />
            </ListItemIcon>
            <ListItemText primary="Students" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<Instructors setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <CastForEducationIcon />
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
          <ListItemButton onClick={() => handleClick(<NewUser setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="New User" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<AddStudent setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Student" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<AddInstructor setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Instructor" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<AddAdmin setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Admin" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<AddStream setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Add Stream" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<AddCertification setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Add Certification" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<AddInstitute setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Add Institute" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<AddLanguage setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Add Language" />
          </ListItemButton>
          {/* <ListItemButton onClick={() => handleClick(<AddComboCourse setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Add Combo Course" />
          </ListItemButton> */}
          <ListItemButton onClick={() => handleClick(<AddCourse setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Add Course" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<CourseVideos setViewContainer={props.setViewContainer} />)}>
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
              <ManIcon />
              <WomanIcon />
            </ListItemIcon>
            <ListItemText primary="All Student" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<AllAdmins setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <AdminPanelSettingsIcon />
            </ListItemIcon>
            <ListItemText primary="All Admins" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<AllInstructors setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <CastForEducationIcon />
            </ListItemIcon>
            <ListItemText primary="All Instructors" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<AllInstitutes setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <CorporateFareIcon />
            </ListItemIcon>
            <ListItemText primary="All Institutes" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<AllCertifications setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <CardMembershipIcon />
            </ListItemIcon>
            <ListItemText primary="All Certifications" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClick(<AllStreams setViewContainer={props.setViewContainer} />)}>
            <ListItemIcon>
              <HistoryEduIcon />
            </ListItemIcon>
            <ListItemText primary="All Streams" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={() => handleClick(<AllStreams setViewContainer={props.setViewContainer} />)}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Setting" />
      </ListItemButton>
      <ListItemButton onClick={navigateToLogin}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Log Out" />
      </ListItemButton>
    </React.Fragment>
  );
}
