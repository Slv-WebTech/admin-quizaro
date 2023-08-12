import React, { useState, useEffect } from "react";
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
    marginTop: 10,
  },
});

export default function DisplayAllInstitutes(props) {
  const classes = useStyles();
  const [instituteid, setInstituteId] = React.useState([]);
  const [institutename, setInstituteName] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);
  const fetchInstitute = async () => {
    var result = await getData("institute/allinstitutes");
    setList(result.result);
  };
  useEffect(function () {
    fetchInstitute();
  }, []);
  const [open, setOpen] = useState(false);

  const handleOpen = (rowData) => {
    setInstituteId(rowData.instituteid);
    setInstituteName(rowData.institutename);
    setDescription(rowData.description);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    fetchInstitute();
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
        var dresult = await postData("institute/deletedata", { instituteid: rowData.instituteid });
        if (dresult.result) {
          Swal.fire("Deleted!", "student has been deleted.", "success");
        }
      }
      fetchInstitute();
    });
  };

  const handleSubmit = async () => {
    var result = await postData("institute/editdata", {
      instituteid: instituteid,
      institutename: institutename,
      description: description,
    });
    if (result.result) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Institute has been updated",
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "fail",
        title: "Fail to update Institute",
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
                    Edit Institute
                  </Grid>
                  <Grid item xs={5}>
                    <CssTextField
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: "#FFF" },
                      }}
                      inputProps={{ style: { color: "#FFF" } }}
                      label="Institute Name"
                      value={institutename}
                      onChange={(event) => setInstituteName(event.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={7}>
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

  function display() {
    return (
      <MaterialTable
        title="List Institutes"
        columns={[
          { title: "Institute ID", field: "instituteid" },

          {
            title: "Image",
            field: "image",
            render: (rowData) => <img src={`${serverURL}/images/${rowData.icon}`} style={{ maxWidth: 70, borderRadius: "10%" }} alt="" />,
          },
          { title: "Institute Name", field: "institutename" },

          { title: "Description", field: "description" },
        ]}
        data={list}
        actions={[
          {
            icon: "edit",
            tooltip: "edit Institute",
            onClick: (event, rowData) => {
              handleOpen(rowData);
            },
          },
          {
            icon: "delete",
            tooltip: "Delete Institute",
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
