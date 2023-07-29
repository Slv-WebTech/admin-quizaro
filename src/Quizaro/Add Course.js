import React, { useState } from "react";
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
import { postDataImage } from "./FetchNodeServices";

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

// const handleSubmit = () => {
//   const scriptURL = "https://script.google.com/macros/s/AKfycbyqMtsKkZydlNcJ0zcfUZxFSc5SCI2f12m8skrhelqEc263IUqpjxc-z0g_IaYqYrc4/exec";
//   const form = document.forms["google-sheet"];

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     fetch(scriptURL, { method: "POST", body: new FormData(form) })
//       .then((response) => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
//       .catch((error) => console.error("Error!", error.message));
//   });
// };

function Courses(props) {
  const classes = useStyles();
  const [stream, setStream] = useState("");
  const [coursename, setCourseName] = useState("");
  const [certification, setCertification] = useState("");
  const [instructorname, setInstructorName] = useState("");
  const [language, setLanguage] = useState("");
  const [institute, setInstitute] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [coursetag, setCourseTag] = useState("");
  const [paid, setPaid] = useState(true);
  const [featured, setFeatured] = useState(true);
  const [requirements, setRequirements] = useState("");
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState(true);
  const [duration, setDuration] = useState("");
  const [instructorrevenue, setInstructorRevenue] = useState("");
  const [price, setPrice] = useState("");
  const [offerprice, setOfferPrice] = useState("");
  const [offeravailable, setOfferAvailable] = useState("");
  const [assignment, setAssignment] = useState(true);
  const [certificate, setCertificate] = useState(true);

  const [icon, setIcon] = useState({ bytes: "", filename: "/quizaro.png" });

  const handleIconChange = (event) => {
    setIcon({ bytes: event.target.files[0], filename: URL.createObjectURL(event.target.files[0]) });
  };

  const handleSubmit = async () => {
    var formData = new FormData();
    formData.append("stream", stream);
    formData.append("coursename", coursename);
    formData.append("certification", certification);
    formData.append("instructorname", instructorname);
    formData.append("language", language);
    formData.append("institute", institute);
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
              <Select onChange={(event) => setStream(event.target.value)} labelId="demo-simple-select-label" id="demo-simple-select" label="Stream">
                <MenuItem value={"Technical"}>Technical</MenuItem>
                <MenuItem value={"Core"}>Core</MenuItem>
                <MenuItem value={"Management"}>Management</MenuItem>
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
                id="demo-simple-select"
                onChange={(event) => setCertification(event.target.value)}
                label="Certification"
              >
                <MenuItem value={"AICTE"}>AICTE </MenuItem>
                <MenuItem value={"IIIT"}>IIIT </MenuItem>
                <MenuItem value={"IIT"}>IIT </MenuItem>
                <MenuItem value={"NIT"}>NIT </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                Instructor Name
              </InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" onChange={(event) => setInstructorName(event.target.value)} label="Instructor">
                <MenuItem value={"Quizaro ExtendedEdge"}>Quizaro ExtendedEdge </MenuItem>
                <MenuItem value={"Lokesh Reddy"}>Lokesh Reddy </MenuItem>
                <MenuItem value={"Yuvraj Quizaro"}>Yuvraj Quizaro </MenuItem>
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
              <Select labelId="demo-simple-select-label" id="demo-simple-select" onChange={(event) => setInstitute(event.target.value)} label="Institute">
                <MenuItem value={"Quizaro ExtendedEdge"}>Quizaro ExtendedEdge </MenuItem>
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
              <Switch onChange={handlePaidChange} inputProps={{ "aria-label": "controlled" }} />
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <FormControl fullWidth>
              Featured: <Switch onChange={handleFeaturedChange} inputProps={{ "aria-label": "controlled" }} />
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
              Status: <Switch onChange={handleStatusChange} inputProps={{ "aria-label": "controlled" }} />
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
              Assignment <Switch onChange={handleAssignmentChange} inputProps={{ "aria-label": "controlled" }} />
            </FormControl>
          </Grid>

          <Grid item xs={1}>
            <FormControl fullWidth>
              Certificate <Switch onChange={handleCertificateChange} inputProps={{ "aria-label": "controlled" }} />
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
