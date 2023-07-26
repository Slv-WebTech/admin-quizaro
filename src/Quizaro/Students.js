import { React, useState } from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import Grid from "@mui/material/Grid";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";

import Dialog from "@mui/material/Dialog";

import { TextField, Button, Divider } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import AddStudent from "./Add Student";

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
  droot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dsubdiv: {
    background: "#7ed6df",
    padding: 20,
    width: 1000,
    marginTop: 50,
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

const handleClick = () => {
  alert("Clicked");
};

export default function Users() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [showButton, setShowButton] = useState(false);

  const [btnStatus, setBtnStatus] = useState(true);

  const handleCancel = () => {
    setShowButton(false);
    setBtnStatus(true);
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
            <div className={classes.droot}>
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

              <div className={classes.dsubdiv}>
                <Grid container spacing={2}>
                  <Grid item xs={12} style={{ fontSize: 20, fontWeight: "bold", color: "#FFF" }}>
                    Add Student
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                        Student Id
                      </InputLabel>
                      <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Student Id"></Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                        Course
                      </InputLabel>
                      <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Course"></Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                        Name
                      </InputLabel>
                      <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Name"></Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={8}>
                    <CssTextField
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: "#FFF" },
                      }}
                      inputProps={{ style: { color: "#FFF" } }}
                      label="Instructor Name"
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
                      label="Due"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CssTextField
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: "#FFF" },
                      }}
                      inputProps={{ style: { color: "#FFF" } }}
                      label="Access Till"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CssTextField
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: "#FFF" },
                      }}
                      inputProps={{ style: { color: "#FFF" } }}
                      label="Offer"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CssTextField
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: "#FFF" },
                      }}
                      inputProps={{ style: { color: "#FFF" } }}
                      label="Status"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CssTextField
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: "#FFF" },
                      }}
                      inputProps={{ style: { color: "#FFF" } }}
                      label="Enrollment"
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      style={{
                        background: "#FFF",
                        color: "#7ed6df",
                        fontWeight: "bold",
                      }}
                      variant="contained"
                      fullWidth
                    >
                      Edit Data
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider style={{ background: "#FFF" }} />
                  </Grid>

                  <Grid item xs={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {btnStatus ? (
                      <>
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
                            Upload
                          </Button>
                        </label>
                      </>
                    ) : (
                      <></>
                    )}
                    {showButton ? (
                      <div>
                        <Button style={{ color: "#FFF", fontWeight: "bold" }}>Save</Button>
                        <Button onClick={handleCancel} style={{ color: "#FFF", fontWeight: "bold" }}>
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      <></>
                    )}
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
                    <Avatar
                      alt="Remy Sharp"
                      src=""
                      // variant="rounded"
                      sx={{ width: 70, height: 70 }}
                    />
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
        <Typography variant="h4">Students</Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Admin"
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            sx={{ width: 100, height: 100 }}
          />

          <Avatar alt="Admin" src="https://source.unsplash.com/random?gift" sx={{ width: 100, height: 100 }} />

          <Avatar alt="Admin" src="https://source.unsplash.com/random?sea" sx={{ width: 100, height: 100 }} />

          <Avatar alt="Admin" src="https://source.unsplash.com/random?sky" sx={{ width: 100, height: 100 }} />
          <Avatar alt="Admin" src="https://source.unsplash.com/random?shoes" sx={{ width: 100, height: 100 }} />
          <Avatar alt="Admin" src="https://source.unsplash.com/random?tshirt" sx={{ width: 100, height: 100 }} />

          <Avatar alt="Admin" src="https://source.unsplash.com/random?kite" sx={{ width: 100, height: 100 }} />
          <Avatar alt="Admin" src="https://source.unsplash.com/random?nature" sx={{ width: 100, height: 100 }} />

          <Avatar alt="Admin" src="https://source.unsplash.com/random?bus" sx={{ width: 100, height: 100 }} />
          <Avatar alt="Admin" src="https://source.unsplash.com/random?technology" sx={{ width: 100, height: 100 }} />

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
