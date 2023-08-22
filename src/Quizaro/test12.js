import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { getData } from "./FetchNodeServices";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [clist, setCList] = useState([]);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorE3, setAnchorE3] = React.useState(null);
  const aopen = Boolean(anchorE3);
  const handle3Click = (event) => {
    setAnchorE3(event.currentTarget);
  };
  const handle3Close = () => {
    setAnchorE3(null);
  };
  const [slist, setSList] = useState([]);
  const fetchCourse = async () => {
    var result = await getData("courses/allcourses");
    setCList(result.result);
  };
  useEffect(function () {
    fetchCourse();
  }, []);

  const fillCourses = () => {
    return clist.map((item) => {
      return <MenuItem value={item.courseid}>{item.coursename}</MenuItem>;
    });
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const sopen = Boolean(anchorE2);
  const handlesClick = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handlesClose = () => {
    setAnchorE2(null);
  };
  const fetchStream = async () => {
    var result = await getData("stream/allstreams");
    setSList(result.result);
  };
  useEffect(function () {
    fetchStream();
  }, []);

  const fillStream = () => {
    return slist.map((item) => {
      return <MenuItem value={item.streamid}>{item.streamname}</MenuItem>;
    });
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Course
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {fillCourses()}
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handlesClick}
      >
        Stream
      </Button>
      <Menu
        id="basic-menu"
        anchorE2={anchorE2}
        open={sopen}
        onClose={handlesClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {fillStream()}
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>

      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handle3Click}
      >
        Dashboard
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorE3={anchorE3}
        open={aopen}
        onClose={handle3Close}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
