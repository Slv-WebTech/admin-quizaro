import React, { useState, useEffect } from "react";
import MaterialTable from "@material-table/core";
import { makeStyles } from "@mui/styles";
import { getData, postData, serverURL } from "./FetchNodeServices";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import { Grid, TextField, Button } from "@mui/material";

import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Swal from "sweetalert2";

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

export default function DisplayAllInstitutes(props) {
  const classes = useStyles();
  const [certificationid, setCertificationId] = useState("");
  const [certificationname, setCertificationName] = useState("");
  const [certifiedby, setCertifiedBy] = useState("");
  const [validtill, setValidTill] = useState("");
  const [credential, setCredential] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);
  const fetchCertification = async () => {
    var result = await getData("certification/allcertifications");
    setList(result.result);
  };
  useEffect(function () {
    fetchCertification();
  }, []);
  const [open, setOpen] = useState(false);

  const handleOpen = (rowData) => {
    setCertificationId(rowData.certificationid);
    setCertificationName(rowData.certificationname);
    setCertifiedBy(rowData.certifiedby);
    setValidTill(rowData.validtill);
    setCredential(rowData.validationcredential);
    setUrl(rowData.url);
    setDescription(rowData.description);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    fetchCertification();
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
        var dresult = await postData("certification/deletedata", { certificationid: rowData.certificationid });
        if (dresult.result) {
          Swal.fire("Deleted!", "Certification has been deleted.", "success");
        }
      }
      fetchCertification();
    });
  };

  const handleSubmit = async () => {
    var result = await postData("certification/editdata", {
      certificationid: certificationid,
      certificationname: certificationname,
      certifiedby: certifiedby,
      validtill: validtill,
      validationcredential: credential,
      url: url,
      description: description,
    });
    if (result.result) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Certification has been updated",
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "fail",
        title: "Fail to update Certification",
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
                    Edit Certification
                  </Grid>
                  <Grid item xs={6}>
                    <CssTextField
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: "#FFF" },
                      }}
                      inputProps={{ style: { color: "#FFF" } }}
                      label="Certification Name:"
                      value={certificationname}
                      onChange={(event) => setCertificationName(event.target.value)}
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
                      label="Certified By:"
                      value={certifiedby}
                      onChange={(event) => setCertifiedBy(event.target.value)}
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
                      label="validation  credential :"
                      value={credential}
                      onChange={(event) => setCredential(event.target.value)}
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
                  <Grid item xs={4}>
                    <CssTextField
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: "#FFF" },
                      }}
                      inputProps={{ style: { color: "#FFF" } }}
                      label="Valid Till :"
                      value={validtill}
                      onChange={(event) => setValidTill(event.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <CssTextField
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: "#FFF" },
                      }}
                      inputProps={{ style: { color: "#FFF" } }}
                      label="URL:"
                      value={url}
                      onChange={(event) => setUrl(event.target.value)}
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
        title="List Cerifications"
        columns={[
          { title: "Certification ID", field: "certificationid" },

          {
            title: "Image",
            field: "image",
            render: (rowData) => <img src={`${serverURL}/images/${rowData.icon}`} style={{ maxWidth: 70, borderRadius: "10%" }} alt="" />,
          },
          { title: "Certification Name", field: "certificationname" },
          { title: "Certified By", field: "certifiedby" },
          { title: "Valid Till", field: "validtill" },
          { title: "Validationcredential", field: "validationcredential" },
          { title: "Description", field: "description" },
          { title: "Url", field: "url" },
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
