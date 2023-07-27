import React from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Grid, TextField, Button, Avatar } from "@mui/material";
import Switch from "@mui/material/Switch";
// import { borderRadius } from "@mui/system";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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

const handleSubmit = () => {
  const scriptURL = "https://script.google.com/macros/s/AKfycbyqMtsKkZydlNcJ0zcfUZxFSc5SCI2f12m8skrhelqEc263IUqpjxc-z0g_IaYqYrc4/exec";
  const form = document.forms["google-sheet"];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
      .catch((error) => console.error("Error!", error.message));
  });
};

function Products(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
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
              <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Stream">
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
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                Certification
              </InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Certification">
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
              <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Instructor">
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
              <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Language">
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
              <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Institute">
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
              fullWidth
            />
          </Grid>
          <Grid item xs={1}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                Tag:
              </InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Tag">
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
              fullWidth
            />
          </Grid>
          <Grid item xs={1}>
            <FormControl fullWidth>
              Paid: <Switch checked={checked} onChange={handleChange} inputProps={{ "aria-label": "controlled" }} />
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <FormControl fullWidth>
              Featured: <Switch checked={checked} onChange={handleChange} inputProps={{ "aria-label": "controlled" }} />
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
              fullWidth
            />
          </Grid>
          <Grid item xs={1}>
            <FormControl fullWidth>
              Status: <Switch checked={checked} onChange={handleChange} inputProps={{ "aria-label": "controlled" }} />
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
              fullWidth
            />
          </Grid>

          <Grid item xs={1}>
            <FormControl fullWidth>
              Assignment <Switch checked={checked} onChange={handleChange} inputProps={{ "aria-label": "controlled" }} />
            </FormControl>
          </Grid>

          <Grid item xs={1}>
            <FormControl fullWidth>
              Certificate <Switch checked={checked} onChange={handleChange} inputProps={{ "aria-label": "controlled" }} />
            </FormControl>
          </Grid>

          <Grid item xs={1.5} style={{ justifyContent: "center", alignItems: "center" }}>
            <label htmlFor="contained-button-file">
              <Input accept="image/*" id="contained-button-file" multiple type="file" />
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
            <Avatar alt="Remy Sharp" variant="rounded" sx={{ width: 120, height: 120 }} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Button
              style={{
                background: "#FFF",
                color: "#7ed6df",
                fontWeight: "bold",
              }}
              variant="contained"
              fullWidth
              value="Add"
              onClick={() => handleSubmit()}
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

export default Products;
