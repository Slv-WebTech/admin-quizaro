import React, { useState, useEffect } from "react";
import MaterialTable from "@material-table/core";
import { makeStyles } from "@mui/styles";
import { getData, postData, serverURL } from "./FetchNodeServices";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import { Grid, TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Swal from "sweetalert2";

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

export default function DisplayAllInstructors(props) {
  const classes = useStyles();
  const [instructorid, setInstructorId] = React.useState([]);
  const [instructorname, setInstructorName] = useState("");
  const [courseid, setCourseId] = React.useState([]);
  const [courselist, setCourseList] = useState([]);
  const [pending, setPending] = useState("");
  const [accesstill, setAccessTill] = useState("");
  const [status, setStatus] = useState("");
  const [list, setList] = useState([]);
  const fetchInstructors = async () => {
    var result = await getData("instructors/allInstructors");
    setList(result.result);
  };
  useEffect(function () {
    fetchInstructors();
  }, []);
  const [open, setOpen] = useState(false);

  const handleOpen = (rowData) => {
    setInstructorId(rowData.instructorid);
    setInstructorName(rowData.firstname + rowData.lastname);
    fetchCourse(rowData.course);
    setPending(rowData.pending);
    setAccessTill(rowData.accesstill);
    setStatus(rowData.status);

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    fetchInstructors();
  };

  /***********************Dialog ****************************************************/

  const handleCourseChange = (event) => {
    setCourseId(event.target.value);
    fetchInstructors(event.target.value);
  };
  const fetchCourse = async () => {
    var result = await getData("courses/allcourses");
    console.log(result);
    setCourseList(result.result);
  };
  useEffect(function () {
    fetchCourse();
  }, []);

  const fillCourses = () => {
    return courselist.map((item) => {
      return <MenuItem value={item.courseid}>{item.coursename}</MenuItem>;
    });
  };

  const handleDelete = async (rowData) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        var dresult = await postData("instructors/deletedata", { instructorid: rowData.instructorid });
        if (dresult.result) {
          Swal.fire("Deleted!", "Instructor has been deleted.", "success");
        }
      }
      fetchInstructors();
    });
  };

  const handleSubmit = async () => {
    var result = await postData("instructors/editdata", {
      instructorid: instructorid,
      courseid: courseid,
      pending: pending,
      accesstill: accesstill,
      status: status,
    });
    if (result.result) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Instructor has been updated",
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "fail",
        title: "Fail to update Instructor",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

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
                    Edit Instructor
                  </Grid>

                  <Grid item xs={4}>
                    <CssTextField
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: "#FFF" },
                      }}
                      inputProps={{ style: { color: "#FFF" } }}
                      value={instructorname}
                      onChange={(event) => setInstructorName(event.target.value)}
                      label="Instructor Name"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                        Course
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={courseid}
                        label="Course"
                        onChange={(event) => handleCourseChange(event)}
                      >
                        {fillCourses()}
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
                      label="Pending"
                      value={pending}
                      onChange={(event) => setPending(event.target.value)}
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
                      value={accesstill}
                      onChange={(event) => setAccessTill(event.target.value)}
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
                      value={status}
                      onChange={(event) => setStatus(event.target.value)}
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
                      onClick={handleSubmit}
                      fullWidth
                    >
                      Edit Data
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

  function display() {
    return (
      <MaterialTable
        title="List Instructors"
        columns={[
          { title: "Instructor ID", field: "instructorid" },

          {
            title: "Image",
            field: "image",
            render: (rowData) => <img src={`${serverURL}/images/${rowData.image}`} style={{ maxWidth: 70, borderRadius: "10%" }} alt="" />,
          },
          { title: "First Name", field: "firstname" },
          { title: "Last Name", field: "lastname" },
          { title: "Details", field: "details" },
          { title: "Course", field: "courseid" },
          { title: "Pending", field: "pending" },
          { title: "Access Till", field: "accesstill" },
          { title: "Status", field: "status" },
          { title: "Contact Number", field: "mobile" },
          { title: "Linkedin", field: "linkedinurl" },
        ]}
        data={list}
        actions={[
          {
            icon: "edit",
            tooltip: "edit Instructors",
            onClick: (event, rowData) => {
              handleOpen(rowData);
            },
          },
          {
            icon: "delete",
            tooltip: "Delete Instructors",
            onClick: (event, rowData) => {
              handleDelete(rowData);
            },
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
