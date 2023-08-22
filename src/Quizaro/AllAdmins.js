import React, { useEffect, useState } from "react";
import MaterialTable from "@material-table/core";
import { makeStyles } from "@mui/styles";
import { getData, postData, serverURL } from "./FetchNodeServices";

import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import { Grid, TextField, Button } from "@mui/material";

import Swal from "sweetalert2";

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
    padding: 15,
    width: "100%",
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
    marginTop: 10,
  },
});

export default function DisplayAllAdmins(props) {
  const classes = useStyles();
  const [adminid, setAdminId] = React.useState([]);
  const [adminname, setAdminName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [list, setList] = useState([]);
  const fetchAdmins = async () => {
    var result = await getData("Admins/allAdmins");
    setList(result.result);
  };
  useEffect(function () {
    fetchAdmins();
  }, []);
  const [open, setOpen] = useState(false);

  const handleOpen = (rowData) => {
    setAdminId(rowData.adminid);
    setAdminName(rowData.fname);
    setEmail(rowData.email);
    setPassword(rowData.password);

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        var dresult = await postData("admins/deletedata", { adminid: rowData.adminid });
        if (dresult.result) {
          Swal.fire("Deleted!", "admin has been deleted.", "success");
        }
      }
      fetchAdmins();
    });
  };

  const handleSubmit = async () => {
    var result = await postData("admins/editdata", {
      adminid: adminid,
      email: email,
      password: password,
    });
    if (result.result) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Admin has been updated",
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "fail",
        title: "Fail to update Admin",
        showConfirmButton: false,
        timer: 3000,
      });
    }
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
                    Edit Admin
                  </Grid>

                  <Grid item xs={3.5}>
                    <CssTextField
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: "#FFF" },
                      }}
                      inputProps={{ style: { color: "#FFF" } }}
                      label="Admin Name"
                      value={adminname}
                      onChange={(event) => setAdminName(event.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <CssTextField
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: "#FFF" },
                      }}
                      inputProps={{ style: { color: "#FFF" } }}
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      label="Email ID"
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
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      label="Password"
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
        title="List Admins"
        columns={[
          { title: "Admins ID", field: "adminid" },

          {
            title: "Image",
            field: "image",
            render: (rowData) => <img src={`${serverURL}/images/${rowData.image}`} style={{ maxWidth: 70, borderRadius: "25%" }} alt="" />,
          },
          { title: "Admin Name", field: "fname" },
          { title: "Details", field: "details" },
          { title: "Email Id", field: "email" },
          { title: "Password", field: "password" },
          { title: "Linkedin", field: "linkedinurl" },
        ]}
        data={list}
        actions={[
          {
            icon: "edit",
            tooltip: "edit Admin",
            onClick: (event, rowData) => {
              handleOpen(rowData);
            },
          },
          {
            icon: "delete",
            tooltip: "Delete Admin",
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
