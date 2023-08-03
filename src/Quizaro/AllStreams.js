import React, { useState, useEffect } from "react";
import MaterialTable from "@material-table/core";
import { makeStyles } from "@mui/styles";
import { getData, serverURL } from "./FetchNodeServices";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import { Grid, TextField, Button, Avatar, Divider } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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

export default function DisplayAllInstitutes(props) {
  const classes = useStyles();
  const [list, setList] = useState([]);
  const fetchInstructors = async () => {
    var result = await getData("stream/allstreams");
    setList(result.result);
  };
  useEffect(function () {
    fetchInstructors();
  }, []);
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
                    Edit Student
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

  function display() {
    return (
      <MaterialTable
        title="List Streams"
        columns={[
          { title: "Stream ID", field: "streamid" },

          {
            title: "Image",
            field: "image",
            render: (rowData) => <img src={`${serverURL}/images/${rowData.icon}`} style={{ maxWidth: 70, borderRadius: "10%" }} alt="" />,
          },
          { title: "Stream Name", field: "streamname" },

         
        ]}
        data={list}
        actions={[
          {
            icon: "edit",
            tooltip: "edit Stream",
            onClick: (event, rowData) => {
              handleOpen(rowData);
            },
          },
          {
            icon: "delete",
            tooltip: "Delete Stream",
          },
        ]}
      />
    );
  }

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.subdiv}>
          {display()}
          {showDialog()}
        </div>
      </div>
    </div>
  );
}
