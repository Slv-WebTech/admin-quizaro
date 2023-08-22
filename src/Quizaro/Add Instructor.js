import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Grid, TextField, Button, Avatar } from "@mui/material";
import Swal from "sweetalert2";
import { object, string } from "yup";

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

function Instructors(props) {
  const classes = useStyles();
  const [fname, setFName] = useState("");
  const [email, setEmailId] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [details, setDetails] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [youtubeurl, setPYoutubeUrl] = useState("");
  const [twitterurl, setTwitterUrl] = useState("");
  const [facebookurl, setFacebookUrl] = useState("");
  const [linkedinurl, setLinkedinUrl] = useState("");

  const [image, setImage] = useState({ bytes: "", filename: "/quizaro.png" });

  const handleImageChange = (event) => {
    setImage({ bytes: event.target.files[0], filename: URL.createObjectURL(event.target.files[0]) });
  };
  const handleSubmit = async () => {
    alert("Submit");
    var formData = new FormData();
    formData.append("fname", fname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("mobile", mobile);
    formData.append("details", details);
    formData.append("address", address);
    formData.append("state", state);
    formData.append("city", city);
    formData.append("country", country);
    formData.append("pincode", pincode);
    formData.append("youtubeurl", youtubeurl);
    formData.append("twitterurl", twitterurl);
    formData.append("facebookurl", facebookurl);
    formData.append("linkedinurl", linkedinurl);
    formData.append("image", image.bytes);
    var result = await postDataImage("instructors/saveinstructors", formData);
    if (result.result) {
      Swal.fire({
        icon: "success",
        title: "Instructor details has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      handleClear();
    } else {
      Swal.fire({
        icon: "fail",
        title: "Fail to submit Instructor Details",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleClear = () => {
    setFName("");
    setEmailId("");
    setPassword("");
    setCPassword("");
    setMobile("");
    setDetails("");
    setAddress("");
    setState("");
    setCity("");
    setCountry("");
    setPincode("");
    setPYoutubeUrl("");
    setTwitterUrl("");
    setFacebookUrl("");
    setLinkedinUrl("");
    setImage({ bytes: "", filename: "/quizaro.png" });
  };

  const userSchema = object().shape({
    firstName: string().required(),
    email: string().email().required(),
    password: string().min(8).required(),
    mobile: string().min(10).required(),
  });

  async function validateForm() {
    let dataObject = {
      firstName: fname,
      email: email,
      password: password,
      mobile: mobile,
    };

    const isValid = await userSchema.isValid(dataObject);

    if (isValid) {
      if (password !== cpassword) {
        Swal.fire({
          icon: "error",
          title: "Password and Confirm Password Should be Same",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      } else {
        handleSubmit();
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Fill all the details Carefully...",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

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
            Instructor Details
          </Grid>
          <Grid item xs={2}>
            <CssTextField
              variant="outlined"
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              inputProps={{ style: { color: "#FFF" } }}
              label="Full Name:"
              value={fname}
              onChange={(event) => setFName(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={1.9}>
            <CssTextField
              variant="outlined"
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              inputProps={{ style: { color: "#FFF" } }}
              label="Email Id:"
              value={email}
              onChange={(event) => setEmailId(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={1.8}>
            <CssTextField
              variant="outlined"
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              inputProps={{ style: { color: "#FFF" } }}
              label="Mobile:"
              value={mobile}
              onChange={(event) => setMobile(event.target.value)}
              fullWidth
            />
          </Grid>

          <Grid item xs={1.8}>
            <CssTextField
              variant="outlined"
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              inputProps={{ style: { color: "#FFF" } }}
              label="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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
              value={cpassword}
              onChange={(event) => setCPassword(event.target.value)}
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
              label="Detail:"
              value={details}
              onChange={(event) => setDetails(event.target.value)}
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
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                State:
              </InputLabel>
              <Select onChange={(event) => setState(event.target.value)} labelId="demo-simple-select-label" value={state} id="demo-simple-select" label="State">
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
              value={city}
              onChange={(event) => setCity(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                Country:
              </InputLabel>
              <Select
                onChange={(event) => setCountry(event.target.value)}
                labelId="demo-simple-select-label"
                value={country}
                id="demo-simple-select"
                label="Country"
              >
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
              onChange={(event) => setPincode(event.target.value)}
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
              value={facebookurl}
              onChange={(event) => setFacebookUrl(event.target.value)}
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
              value={twitterurl}
              onChange={(event) => setTwitterUrl(event.target.value)}
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
              value={youtubeurl}
              onChange={(event) => setPYoutubeUrl(event.target.value)}
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
              value={linkedinurl}
              onChange={(event) => setLinkedinUrl(event.target.value)}
              fullWidth
            />
          </Grid>

          <Grid item xs={6} style={{ justifyContent: "center", alignItems: "center" }}>
            <label htmlFor="contained-button-file">
              <Input accept="image/*" onChange={(event) => handleImageChange(event)} id="contained-button-file" multiple type="file" />
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
            <Avatar alt="Remy Sharp" src={image.filename} variant="rounded" sx={{ width: 100, height: 100 }} />
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
              onClick={() => validateForm()}
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

export default Instructors;
