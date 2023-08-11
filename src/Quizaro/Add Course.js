import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Grid, TextField, Button, Avatar } from "@mui/material";
import Switch from "@mui/material/Switch";
import Swal from "sweetalert2";

// import { borderRadius } from "@mui/system";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { postDataImage, getData, postData } from "./FetchNodeServices";

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

function Courses(props) {
  const classes = useStyles();
  const [streamid, setStreamId] = React.useState("");
  const [coursename, setCourseName] = useState("");
  const [certificationid, setCertificationId] = React.useState("");
  const [instructorid, setInstructorId] = React.useState("");
  const [language, setLanguage] = useState("");
  const [instituteid, setInstituteId] = React.useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [coursetag, setCourseTag] = useState("");
  const [paid, setPaid] = React.useState(true);
  const [featured, setFeatured] = React.useState(true);
  const [requirements, setRequirements] = useState("");
  const [url, setUrl] = useState("");
  const [status, setStatus] = React.useState(true);
  const [duration, setDuration] = useState("");
  const [instructorrevenue, setInstructorRevenue] = useState("");
  const [price, setPrice] = React.useState("");
  const [offerprice, setOfferPrice] = useState("");
  const [offeravailable, setOfferAvailable] = useState("");
  const [assignment, setAssignment] = React.useState(true);
  const [certificate, setCertificate] = React.useState(true);
  const [slist, setSList] = useState([]);
  const [clist, setCList] = useState([]);
  const [ilist, setIList] = useState([]);
  const [inlist, setInList] = useState([]);

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
  const handleCertificationChange = (event) => {
    setCertificationId(event.target.value);
  };

  const fetchCertification = async () => {
    var result = await getData("certification/allcertifications");
    setCList(result.result);
  };
  useEffect(function () {
    fetchCertification();
  }, []);

  const fillCertification = () => {
    return clist.map((item) => {
      return <MenuItem value={item.certificationid}>{item.certificationname}</MenuItem>;
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
      return <MenuItem value={item.instructorid}>{item.firstname}</MenuItem>;
    });
  };
  const handleInstituteChange = (event) => {
    setInstituteId(event.target.value);
  };

  const fetchInstitute = async () => {
    var result = await getData("institute/allinstitutes");
    setInList(result.result);
  };
  useEffect(function () {
    fetchInstitute();
  }, []);

  const fillInstitute = () => {
    return inlist.map((item) => {
      return <MenuItem value={item.instituteid}>{item.institutename}</MenuItem>;
    });
  };

  const handleSubmit = async () => {
    var formData = new FormData();
    formData.append("stream", streamid);
    formData.append("coursename", coursename);
    formData.append("certification", certificationid);
    formData.append("instructorname", instructorid);
    formData.append("language", language);
    formData.append("institute", instituteid);
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("subtitle", subtitle);
    formData.append("description", description);
    formData.append("tag", tag);
    formData.append("coursetag", coursetag);
    formData.append("paid", paid);
    formData.append("featured", featured);
    formData.append("requirements", requirements);
    formData.append("url", url);
    formData.append("status", status);
    formData.append("duration", duration);
    formData.append("instructorrevenue", instructorrevenue);
    formData.append("price", price);
    formData.append("offerprice", offerprice);
    formData.append("offeravailable", offeravailable);
    formData.append("assignment", assignment);
    formData.append("certificate", certificate);
    formData.append("icon", icon.bytes);
    var result = await postDataImage("courses/savecourses", formData);
    if (result.result) {
      Swal.fire({
        icon: "success",
        title: "Your Course has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "fail",
        title: "Fail to submit Course",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const handlePaidChange = (event) => {
    setPaid(event.target.checked);
  };
  const handleFeaturedChange = (event) => {
    setFeatured(event.target.checked);
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.checked);
  };
  const handleAssignmentChange = (event) => {
    setAssignment(event.target.checked);
  };
  const handleCertificateChange = (event) => {
    setCertificate(event.target.checked);
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
            Add Courses
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                Stream
              </InputLabel>
              <Select value={streamid} onChange={handleStreamChange} labelId="demo-simple-select-label" id="demo-simple-select" label="Stream">
                {fillStream()}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <CssTextField
              variant="outlined"
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              inputProps={{ style: { color: "#FFF" } }}
              label="Course Name"
              onChange={(event) => setCourseName(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                Certification
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                value={certificationid}
                id="demo-simple-select"
                onChange={handleCertificationChange}
                label="Certification"
              >
                {fillCertification()}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                Instructor Name
              </InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={instructorid} onChange={handleInstructorChange} label="Instructor">
                {fillInstructor()}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                Language:
              </InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" onChange={(event) => setLanguage(event.target.value)} label="Language">
                <MenuItem value={"Hindi"}>Hindi </MenuItem>
                <MenuItem value={"English"}>English </MenuItem>
                <MenuItem value={"French"}>French </MenuItem>
                <MenuItem value={"Spanish"}>Spanish </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                Institute:
              </InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={instituteid} onChange={handleInstituteChange} label="Institute">
                {fillInstitute()}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={1}>
            <CssTextField
              variant="outlined"
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              inputProps={{ style: { color: "#FFF" } }}
              label="Title:"
              onChange={(event) => setTitle(event.target.value)}
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
              label="Slug:"
              onChange={(event) => setSlug(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <CssTextField
              variant="outlined"
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              inputProps={{ style: { color: "#FFF" } }}
              label="SubTitle"
              onChange={(event) => setSubTitle(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={3.5}>
            <CssTextField
              variant="outlined"
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              inputProps={{ style: { color: "#FFF" } }}
              label="Description"
              onChange={(event) => setDescription(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={1}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                Tag:
              </InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" onChange={(event) => setTag(event.target.value)} label="Tag">
                <MenuItem value={"Trending"}>Trending</MenuItem>
                <MenuItem value={"Most Selling"}>Most Selling</MenuItem>
                <MenuItem value={"Popular"}>Popular</MenuItem>
                <MenuItem value={"Beginner"}>Beginner</MenuItem>
                <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <CssTextField
              variant="outlined"
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              inputProps={{ style: { color: "#FFF" } }}
              label="Course Tag"
              onChange={(event) => setCourseTag(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={1}>
            <FormControl fullWidth>
              Paid:
              <Switch checked={paid} onChange={handlePaidChange} inputProps={{ "aria-label": "controlled" }} />
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <FormControl fullWidth>
              Featured: <Switch checked={featured} onChange={handleFeaturedChange} inputProps={{ "aria-label": "controlled" }} />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <CssTextField
              variant="outlined"
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              inputProps={{ style: { color: "#FFF" } }}
              label="Requirements"
              onChange={(event) => setRequirements(event.target.value)}
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
              onChange={(event) => setUrl(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={1}>
            <FormControl fullWidth>
              Status: <Switch checked={status} onChange={handleStatusChange} inputProps={{ "aria-label": "controlled" }} />
            </FormControl>
          </Grid>

          <Grid item xs={1.5}>
            <CssTextField
              variant="outlined"
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              inputProps={{ style: { color: "#FFF" } }}
              label="Duration:"
              onChange={(event) => setDuration(event.target.value)}
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
              label="Instructor Revenue:"
              onChange={(event) => setInstructorRevenue(event.target.value)}
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
              label="Price"
              onChange={(event) => setPrice(event.target.value)}
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
              label="Offer Price"
              onChange={(event) => setOfferPrice(event.target.value)}
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
              label="Offer Available"
              onChange={(event) => setOfferAvailable(event.target.value)}
              fullWidth
            />
          </Grid>

          <Grid item xs={1}>
            <FormControl fullWidth>
              Assignment <Switch checked={assignment} onChange={handleAssignmentChange} inputProps={{ "aria-label": "controlled" }} />
            </FormControl>
          </Grid>

          <Grid item xs={1}>
            <FormControl fullWidth>
              Certificate <Switch checked={certificate} onChange={handleCertificateChange} inputProps={{ "aria-label": "controlled" }} />
            </FormControl>
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
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Courses;
