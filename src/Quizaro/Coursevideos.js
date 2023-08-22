import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Grid, TextField, Button, Avatar } from "@mui/material";
import Swal from "sweetalert2";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { postDataImage, getData } from "./FetchNodeServices";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  subdiv: {
    background: "#7ed6df",
    padding: 20,
    width: "100%",
    marginTop: 5,
  },
});
const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1.5px solid #FFF",
      borderRadius: 0,
    },
    "&:hover fieldset": {
      borderColor: "#FFF",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FFF",
    },
  },
});
const Input = styled("input")({
  display: "none",
});

function CourseVideos(props) {
  const classes = useStyles();
  const [streamid, setStreamId] = React.useState("");
  const [courseid, setCourseId] = React.useState("");
  const [instructorid, setInstructorId] = React.useState("");
  const [language, setLanguage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [duration, setDuration] = useState("");
  const [slist, setSList] = useState([]);
  const [clist, setCList] = useState([]);
  const [ilist, setIList] = useState([]);

  const [icon, setIcon] = useState({ bytes: "", filename: "/quizaro.png" });

  const handleIconChange = (event) => {
    setIcon({ bytes: event.target.files[0], filename: URL.createObjectURL(event.target.files[0]) });
  };

  const handleStreamChange = (event) => {
    setStreamId(event.target.value);
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
  const handleCourseChange = (event) => {
    setCourseId(event.target.value);
  };

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
  const handleInstructorChange = (event) => {
    setInstructorId(event.target.value);
  };

  const fetchInstructor = async () => {
    var result = await getData("instructors/allinstructors");
    setIList(result.result);
  };
  useEffect(function () {
    fetchInstructor();
  }, []);

  const fillInstructor = () => {
    return ilist.map((item) => {
      return <MenuItem value={item.instructorid}>{item.fname}</MenuItem>;
    });
  };

  const handleSubmit = async () => {
    var formData = new FormData();
    formData.append("streamid", streamid);
    formData.append("courseid", courseid);
    formData.append("instructorid", instructorid);
    formData.append("language", language);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("url", url);
    formData.append("duration", duration);
    formData.append("icon", icon.bytes);
    var result = await postDataImage("videos/coursevideo", formData);
    console.log(result);
    console.log(formData);
    if (result.result) {
      Swal.fire({
        icon: "success",
        title: "Your Course video has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      handleClear();
    } else {
      Swal.fire({
        icon: "fail",
        title: "Fail to submit Course video",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const handleClear = () => {
    setStreamId("");
    setCourseId("");
    setInstructorId("");
    setLanguage("");
    setTitle("");
    setDescription("");
    setUrl("");
    setDuration("");
    setIcon({ bytes: "", filename: "/quizaro.png" });
  };

  return (
    <div className={classes.root}>
      <style jsx>
        {`
          fieldset.MuiOutlinedInput-notchedOutline {
            border-color: white !important;
          }

          svg.MuiSelect-icon {
            color: white !important;
          }

          div.MuiOutlinedInput-input.MuiSelect-select {
            color: #fff !important;
          }
        `}
      </style>

      <div className={classes.subdiv}>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ fontSize: 20, fontWeight: "bold", color: "#FFF" }}>
            Upload Videos
          </Grid>
          <Grid item xs={1.5}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                Stream
              </InputLabel>
              <Select value={streamid} onChange={handleStreamChange} labelId="demo-simple-select-label" id="demo-simple-select" label="Stream">
                {fillStream()}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1.5}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                Course
              </InputLabel>
              <Select value={courseid} onChange={handleCourseChange} labelId="demo-simple-select-label" id="demo-simple-select" label="Stream">
                {fillCourses()}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={1.5}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                Instructor Name
              </InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={instructorid} onChange={handleInstructorChange} label="Instructor">
                {fillInstructor()}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1.5}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                Language:
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                label="Language"
              >
                <MenuItem value={"Hindi"}>Hindi </MenuItem>
                <MenuItem value={"English"}>English </MenuItem>
                <MenuItem value={"French"}>French </MenuItem>
                <MenuItem value={"Spanish"}>Spanish </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={1.5}>
            <CssTextField
              variant="outlined"
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              inputProps={{ style: { color: "#FFF" } }}
              label="Title:"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              fullWidth
            />
          </Grid>

          <Grid item xs={3}>
            <CssTextField
              variant="outlined"
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              inputProps={{ style: { color: "#FFF" } }}
              label="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              fullWidth
            />
          </Grid>

          <Grid item xs={1.5}>
            <CssTextField
              variant="outlined"
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              inputProps={{ style: { color: "#FFF" } }}
              label="Duration:"
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={2.5}>
            <CssTextField
              variant="outlined"
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              inputProps={{ style: { color: "#FFF" } }}
              label="URL:"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              fullWidth
            />
          </Grid>

          <Grid item xs={1.5} style={{ justifyContent: "center", alignItems: "center" }}>
            <label htmlFor="contained-button-file">
              <Input onChange={(event) => handleIconChange(event)} accept="image/*" id="contained-button-file" multiple type="file" />
              <Button
                style={{
                  background: "#FFF",
                  color: "#7ed6df",
                  fontWeight: "bold",
                }}
                variant="contained"
                component="span"
                fullWidth
              >
                Upload - Picture
              </Button>
            </label>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar alt="Remy Sharp" variant="rounded" src={icon.filename} sx={{ width: 100, height: 100 }} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Button
              onClick={() => handleSubmit()}
              style={{
                background: "#FFF",
                color: "#7ed6df",
                fontWeight: "bold",
              }}
              variant="contained"
              fullWidth
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              style={{
                background: "#FFF",
                color: "#7ed6df",
                fontWeight: "bold",
              }}
              variant="contained"
              fullWidth
              onClick={() => handleClear()}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CourseVideos;
