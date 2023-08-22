import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Grid, TextField, Button, Avatar } from "@mui/material";
import Swal from "sweetalert2";

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
    width: "50%",
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

function Institute(props) {
  const classes = useStyles();
  const [institutename, setInstituteName] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState({ bytes: "", filename: "/quizaro.png" });

  const handleIconChange = (event) => {
    setIcon({ bytes: event.target.files[0], filename: URL.createObjectURL(event.target.files[0]) });
  };

  const handleSubmit = async () => {
    var formData = new FormData();
    formData.append("institutename", institutename);
    formData.append("description", description);
    formData.append("icon", icon.bytes);
    var result = await postDataImage("institute/saveinstitute", formData);
    if (result.result) {
      Swal.fire({
        icon: "success",
        title: "Institute has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      handleClear();
    } else {
      Swal.fire({
        icon: "fail",
        title: "Fail to submit Institute",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleClear = () => {
    setInstituteName("");
    setDescription("");
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
        <Grid container spacing={3}>
          <Grid item xs={12} style={{ fontSize: 20, fontWeight: "bold", color: "#FFF" }}>
            Add Institute
          </Grid>
          <Grid item xs={3}>
            <CssTextField
              variant="outlined"
              InputLabelProps={{
                style: { color: "#FFF" },
              }}
              inputProps={{ style: { color: "#FFF" } }}
              label="Institution Name:"
              value={institutename}
              onChange={(event) => setInstituteName(event.target.value)}
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
              label="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              fullWidth
            />
          </Grid>

          <Grid item xs={3} style={{ justifyContent: "center", alignItems: "center" }}>
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

export default Institute;
