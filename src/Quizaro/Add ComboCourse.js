import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { makeStyles } from "@mui/styles";
import { Grid, TextField, Button, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Swal from "sweetalert2";
import { postDataImage, postData, getData } from "./FetchNodeServices";
import { StreamOutlined } from "@mui/icons-material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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

function AddComboCourse(props) {
  const theme = useTheme();
  const classes = useStyles();
  const [streamid, setStreamId] = useState("");
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
  const [list, setList] = useState([]);
  const [icon, setIcon] = useState({ bytes: "", filename: "/quizaro.png" });

  const handleStreamChange = (event) => {
    setStreamId(event.target.value);
    fetchCourses(event.target.value);
  };

  const fetchStreams = async () => {
    var result = await getData("stream/allstreams");
    setList(result.result);
  };
  useEffect(function () {
    fetchStreams();
  }, []);

  const fillStream = () => {
    return list.map((item) => {
      return <MenuItem value={item.streamid}>{item.streamname}</MenuItem>;
    });
  };
  const handleCourseChange = (event) => {
    setStreamId(event.target.value);
  };

  const fetchCourses = async () => {
    var result = await getData("course/allcourses");
    setList(result.result);
  };
  useEffect(function () {
    fetchCourses();
  }, []);

  const fillCourses = () => {
    return list.map((item) => {
      return <MenuItem value={item.courseid}>{item.coursename}</MenuItem>;
    });
  };
  const handleCertificationChange = (event) => {
    setCertificationId(event.target.value);
  };

  const fetchCertification = async () => {
    var result = await getData("certification/allcertifications");
    setList(result.result);
  };
  useEffect(function () {
    fetchCertification();
  }, []);

  const fillCertification = () => {
    return list.map((item) => {
      return <MenuItem value={item.certificationid}>{item.certificationname}</MenuItem>;
    });
  };
  const handleInstructorChange = (event) => {
    setStreamId(event.target.value);
  };

  const fetchInstructors = async () => {
    var result = await getData("instructor/allinstructors");
    setList(result.result);
  };
  useEffect(function () {
    fetchInstructors();
  }, []);

  const fillInstructors = () => {
    return list.map((item) => {
      return <MenuItem value={item.instructorid}>{item.instructorname}</MenuItem>;
    });
  };

  const handleIconChange = (event) => {
    setIcon({ bytes: event.target.files[0], filename: URL.createObjectURL(event.target.files[0]) });
  };

  const handleSubmit = async () => {
    var formData = new FormData();
    formData.append("streamid", streamid);
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
    var result = await postDataImage("combocourses/savecombocourses", formData);
    if (result.result) {
      Swal.fire({
        icon: "success",
        title: "Combo Course has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "fail",
        title: "Fail to submit Combo Course",
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

  function getStyles(name, personName, theme) {
    return {
      fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    };
  }

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
            Add Combo Courses
          </Grid>
          <Grid item xs={2.5}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#fff" }} id="demo-multiple-chip-label">
                Stream
              </InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Stream" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2.5}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#FFF" }} id="demo-multiple-chip-label">
                Courses
              </InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Courses" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2.5}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#FFF" }} id="demo-multiple-chip-label">
                Certification
              </InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Certification" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2.5}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#FFF" }} id="demo-multiple-chip-label">
                Instructors
              </InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Instructors" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#FFF" }} id="demo-multiple-chip-label">
                Languages
              </InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Languages" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2.5}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#FFF" }} id="demo-multiple-chip-label">
                Institutes
              </InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Institutes" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                    {name}
                  </MenuItem>
                ))}
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
export default AddComboCourse;
