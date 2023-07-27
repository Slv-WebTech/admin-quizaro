import React, { useState } from "react";
import MaterialTable from "@material-table/core";
import { makeStyles } from "@mui/styles";

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

export default function DisplayAllProducts(props) {
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
        title="List Instructors"
        columns={[
          { title: "Instructor ID", field: "instructorid" },
          { title: "Courses", field: "course" },
          { title: "Image", field: "image" },
          { title: "Name", field: "name" },
          { title: "Payroll", field: "payment" },
          { title: "Access Till", field: "access" },
          { title: "Status", field: "status" },
          { title: "Enrollment", field: "enrollment" },
        ]}
        data={[
          {
            instructorid: "090510",
            course: "Full Stack,AWS",
            image: "Mehmet",
            name: "Rohan Jha",
            payment: 25000,
            access: "26 August",
            status: "Active",
            enrollment: "Active",
          },
          {
            instructorid: "090512",
            course: "Finance,HR",
            image: "Mehak",
            name: "Kavya OJha",
            payment: 17000,
            access: "26 April",
            status: "Deactivated",
            enrollment: "Finished",
          },
        ]}
        actions={[
          {
            icon: "edit",
            tooltip: "edit Student",
            onClick: (event, rowData) => {
              handleOpen(rowData);
            },
          },
          {
            icon: "delete",
            tooltip: "Delete Category",
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
