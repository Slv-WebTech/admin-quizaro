import React from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Grid, TextField, Button, Avatar } from "@mui/material";
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
            Personal Details
          </Grid>
          <Grid item xs={2}>
            <CssTextField
              variant="outlined"
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              inputProps={{ style: { color: "#FFF" } }}
              label="First Name:"
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
              label="Last Name"
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
              label="Email Id:"
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
              label="Mobile:"
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
              label="Password"
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
              label="Confirm Password"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <CssTextField
              variant="outlined"
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              inputProps={{ style: { color: "#FFF" } }}
              label="Detail:"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} style={{ fontSize: 20, fontWeight: "bold", color: "#FFF" }}>
            Address Details
          </Grid>
          <Grid item xs={4}>
            <CssTextField
              variant="outlined"
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              inputProps={{ style: { color: "#FFF" } }}
              label="Address:"
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                State:
              </InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" label="State">
                <MenuItem value={"Andhra Pradesh"}>Andhra Pradesh </MenuItem>
                <MenuItem value={"Arunachal Pradesh"}> Arunachal Pradesh</MenuItem>
                <MenuItem value={"Assam"}>Assam</MenuItem>
                <MenuItem value={"Bihar"}>Bihar</MenuItem>
                <MenuItem value={"Chhattisgarh"}>Chhattisgarh</MenuItem>
                <MenuItem value={"Goa"}>Goa</MenuItem>
                <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
                <MenuItem value={"Haryana"}>Haryana</MenuItem>
                <MenuItem value={"Himachal Pradesh"}>Himachal Pradesh</MenuItem>
                <MenuItem value={"Jharkhand"}>Jharkhand</MenuItem>
                <MenuItem value={"Karnataka"}> Karnataka</MenuItem>
                <MenuItem value={"Kerala"}>Kerala</MenuItem>
                <MenuItem value={"Madhya Pradesh"}>Madhya Pradesh</MenuItem>
                <MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
                <MenuItem value={"Manipur"}>Manipur</MenuItem>
                <MenuItem value={"Meghalaya"}>Meghalaya</MenuItem>
                <MenuItem value={"Mizoram"}>Mizoram</MenuItem>
                <MenuItem value={"Nagaland"}>Nagaland</MenuItem>
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
              label="City:"
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                Country:
              </InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Country">
                <MenuItem value={"India"}>India</MenuItem>
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
              label="Pincode:"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} style={{ fontSize: 20, fontWeight: "bold", color: "#FFF" }}>
            Social Profile
          </Grid>
          <Grid item xs={3}>
            <CssTextField
              variant="outlined"
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              inputProps={{ style: { color: "#FFF" } }}
              label="Facebook Url:"
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
              label="Twitter Url:"
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
              label="Youtube Url:"
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
              label="Linkedin Url:"
              fullWidth
            />
          </Grid>

          <Grid item xs={6} style={{ justifyContent: "center", alignItems: "center" }}>
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
                Upload - Image
              </Button>
            </label>
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar alt="Remy Sharp" variant="rounded" sx={{ width: 100, height: 100 }} />
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
