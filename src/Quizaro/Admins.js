import { React, useState } from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Grid, TextField, Button, Avatar } from "@mui/material";
import { postDataImage } from "./FetchNodeServices";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import Swal from "sweetalert2";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

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

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  subdiv: {
    background: "#7ed6df",
    padding: 20,
    width: 1500,
    marginTop: 5,
  },
});

const images = [
  {
    url: "https://source.unsplash.com/random?hacker",
    title: "Admin",
    width: "100%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function Admins(props) {
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmailId] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
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
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
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
    var result = await postDataImage("admins/saveadmins", formData);
    if (result.result) {
      Swal.fire({
        icon: "success",
        title: "Admin details has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "fail",
        title: "Fail to submit Admin details",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleOpen = (rowData) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /***********************Dialog ****************************************************/

  const showDialog = () => {
    return (
      <div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
          <DialogContent>
            <div className={classes.root}>
              <style jsx>
                {`
                  fieldset.MuiOutlinedInput-notchedOutline {
                    border-color: white !important;
                  }

                  svg.MuiSvgIcon-root {
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
                    Add Student
                  </Grid>
                  <Grid item xs={4}>
                    <CssTextField
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: "#FFF" },
                      }}
                      inputProps={{ style: { color: "#FFF" } }}
                      label="First Name:"
                      onChange={(event) => setFirstName(event.target.value)}
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
                      label="Last Name"
                      onChange={(event) => setLastName(event.target.value)}
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
                      label="Email Id:"
                      onChange={(event) => setEmailId(event.target.value)}
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
                      label="Mobile:"
                      onChange={(event) => setMobile(event.target.value)}
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
                      label="Password"
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
                      label="Confirm Password"
                      onChange={(event) => setPassword(event.target.value)}
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
                      onChange={(event) => setDetails(event.target.value)}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} style={{ fontSize: 20, fontWeight: "bold", color: "#FFF" }}>
                    Address Details
                  </Grid>
                  <Grid item xs={6}>
                    <CssTextField
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: "#FFF" },
                      }}
                      inputProps={{ style: { color: "#FFF" } }}
                      label="Address:"
                      onChange={(event) => setAddress(event.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                        State:
                      </InputLabel>
                      <Select onChange={(event) => setState(event.target.value)} labelId="demo-simple-select-label" id="demo-simple-select" label="State">
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
                  <Grid item xs={4}>
                    <CssTextField
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: "#FFF" },
                      }}
                      inputProps={{ style: { color: "#FFF" } }}
                      label="City:"
                      onChange={(event) => setCity(event.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                        Country:
                      </InputLabel>
                      <Select onChange={(event) => setCountry(event.target.value)} labelId="demo-simple-select-label" id="demo-simple-select" label="Country">
                        <MenuItem value={"India"}>India</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
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
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  /**********************Dialog End ****************************************************/

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="h4" color="primary">
          Admins
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Admin"
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            sx={{ width: 100, height: 100 }}
          />

          <Avatar alt="Admin" src="https://source.unsplash.com/random?wallpapers" sx={{ width: 100, height: 100 }} />
          <Avatar alt="Admin" src="https://source.unsplash.com/random?car" sx={{ width: 100, height: 100 }} />
          <Avatar alt="Admin" src="https://source.unsplash.com/random?boy" sx={{ width: 100, height: 100 }} />
          <Avatar alt="Admin" src="https://source.unsplash.com/random?watch" sx={{ width: 100, height: 100 }} />
          <Avatar alt="Admin" src="https://source.unsplash.com/random?ring" sx={{ width: 100, height: 100 }} />
          <Avatar alt="Admin" src="https://source.unsplash.com/random?house" sx={{ width: 100, height: 100 }} />
          <Avatar alt="Admin" src="https://source.unsplash.com/random?beach" sx={{ width: 100, height: 100 }} />
          <Avatar alt="Admin" src="https://source.unsplash.com/random?office" sx={{ width: 100, height: 100 }} />
          <Avatar alt="Admin" src="https://source.unsplash.com/random?dog" sx={{ width: 100, height: 100 }} />

          <Avatar sx={{ width: 100, height: 100 }}>
            {images.map((image) => (
              <ImageButton
                focusRipple
                key={image.title}
                style={{
                  width: image.width,
                }}
              >
                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                  <Typography
                    component="span"
                    variant="h6"
                    color="inherit"
                    sx={{
                      position: "relative",
                      p: 4,
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                  >
                    {image.title}
                    <ImageMarked className="MuiImageMarked-root" />
                  </Typography>
                </Image>
              </ImageButton>
            ))}
          </Avatar>

          <Avatar sx={{ width: 100, height: 100 }}>
            <PersonAddAltOutlinedIcon sx={{ fontSize: 40 }} onClick={() => handleOpen()} />
          </Avatar>
        </Stack>
      </Grid>
      <div>
        <div>{showDialog()}</div>
      </div>
    </Grid>
  );
}
