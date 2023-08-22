import React, { useState } from "react";
import { postDataImage } from "./FetchNodeServices";
import { Grid, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function VideoInput(props) {
  const { height } = props;
  const [title, setTitle] = useState("");
  const inputRef = React.useRef();
  const [source, setSource] = React.useState();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  const handleSubmit = async () => {
    alert("Submit");
    var formData = new FormData();
    formData.append("title", title);
    formData.append("video", source);
    var result = await postDataImage("video/uploadvideo", formData);
    console.log(title, source);
    alert(result.result);
  };
  return (
    <div className="VideoInput">
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ fontSize: 20, fontWeight: "bold", color: "#FFF" }}>
          Upload video
        </Grid>
        <Grid item xs={12}>
          <TextField id="outlined-basic" label="Outlined" onChange={(event) => setTitle(event.target.value)} variant="outlined" />
        </Grid>

        <Grid item xs={12}>
          <input ref={inputRef} className="VideoInput_input" type="file" onChange={handleFileChange} accept=".mov,.mp4" />
          {!source && <button onClick={handleChoose}>Choose</button>}
          {source && <video className="VideoInput_video" width="40%" height={height} controls src={source} />}
          <div className="VideoInput_footer">{source || "Nothing selectd"}</div>
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
            value="Add"
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
