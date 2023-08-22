import React, { useEffect, useState } from "react";
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

export default function DisplayAllStudents(props) {
  const classes = useStyles();
  const [fname, setFName] = useState("");
  const [studentid, setStudentId] = React.useState([]);
  const [courseid, setCourseId] = React.useState([]);
  const [courselist, setCourseList] = useState([]);
  const [instructorid, setInstructorId] = React.useState([]);
  const [instructorlist, setInstructorList] = useState([]);
  const [due, setDue] = useState([]);
  const [accesstill, setAccessTill] = useState([]);
  const [offer, setOffer] = useState([]);
  const [status, setStatus] = useState([]);
  const [enrollment, setEnrollment] = useState([]);
  const [list, setList] = useState([]);

  const [open, setOpen] = useState(false);

  const handleOpen = (rowData) => {
    setStudentId(rowData.studentid);
    setFName(rowData.fname);
    fetchCourse(rowData.course);
    setCourseId(rowData.courseid);
    fetchInstructors(rowData.instructor);
    setInstructorId(rowData.instructorid);
    setDue(rowData.due);
    setAccessTill(rowData.accesstill);
    setOffer(rowData.offer);
    setStatus(rowData.status);
    setEnrollment(rowData.enrollment);

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    fetchStudents();
  };

  useEffect(function () {
    fetchStudents();
  }, []);

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
  const handleInstructorChange = (event) => {
    setInstructorId(event.target.value);
  };
  const fetchInstructors = async () => {
    var result = await getData("instructors/allinstructors");
    console.log(result);
    setInstructorList(result.result);
  };

  const fillInstructors = () => {
    return instructorlist.map((item) => {
      return <MenuItem value={item.instructorid}>{item.fname}</MenuItem>;
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
        var dresult = await postData("students/deletedata", { studentid: rowData.studentid });
        if (dresult.result) {
          Swal.fire("Deleted!", "student has been deleted.", "success");
        }
      }
      fetchStudents();
    });
  };

  const handleSubmit = async () => {
    var result = await postData("students/editdata", {
      studentid: studentid,
      courseid: courseid,
      instructorid: instructorid,
      due: due,
      accesstill: accesstill,
      offer: offer,
      status: status,
      enrollment: enrollment,
    });
    if (result.result) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Student has been updated",
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "fail",
        title: "Fail to update student",
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
                    Edit Student
                  </Grid>
                  <Grid item xs={4}>
                    <CssTextField
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: "#FFF" },
                      }}
                      inputProps={{ style: { color: "#FFF" } }}
                      label="Student Name"
                      value={fname}
                      onChange={(event) => setFName(event.target.value)}
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
                    <FormControl fullWidth>
                      <InputLabel style={{ color: "#FFF" }} id="demo-simple-select-label">
                        Instructor Name
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={instructorid}
                        label="Instructor"
                        onChange={(event) => handleInstructorChange(event)}
                      >
                        {fillInstructors()}
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
                      value={due}
                      onChange={(event) => setDue(event.target.value)}
                      label="Due"
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
                      value={accesstill}
                      onChange={(event) => setAccessTill(event.target.value)}
                      label="Access Till"
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
                      value={offer}
                      onChange={(event) => setOffer(event.target.value)}
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
                      value={status}
                      onChange={(event) => setStatus(event.target.value)}
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
                      value={enrollment}
                      onChange={(event) => setEnrollment(event.target.value)}
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
                      onClick={handleSubmit}
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

  const fetchStudents = async () => {
    var result = await getData("students/allstudents");
    setList(result.result);
  };
  useEffect(function () {
    fetchStudents();
  }, []);

  function display() {
    return (
      <MaterialTable
        title="List Students"
        columns={[
          { title: "Student ID", field: "studentid" },

          {
            title: "Image",
            field: "image",
            render: (rowData) => <img src={`${serverURL}/images/${rowData.image}`} style={{ maxWidth: 70, borderRadius: "25%" }} alt="" />,
          },
          { title: "Student Name", field: "fname" },
          { title: "Details", field: "details" },
          { title: "Due", field: "due" },
          { title: "Access Till", field: "accesstill" },
          { title: "Status", field: "status" },
          { title: "Enrollement", field: "enrollment" },
          { title: "College Name", field: "collegename" },
          { title: "Year", field: "year" },
          { title: "Offer", field: "offer" },
        ]}
        data={list}
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
