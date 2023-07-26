import * as React from "react";
import Input from "@mui/base/Input";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
import { FormControl, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return <Input slots={{ input: StyledInputElement }} {...props} ref={ref} />;
});
const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url('https://source.unsplash.com/random?wallpapers')",
    height: 926,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },

  subdiv: {
    display: "flex",
    justifyContent: "center",
    padding: 10,
    // marginLeft: 80,
    // width: 700,
    backgroundImage: "url('https://source.unsplash.com/random?wallpapers')",
    height: 500,
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: 20,
  },
});
export default function UnstyledInputIntroduction() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.subdiv}>
        <FormControl>
          <Grid width={300} container spacing={2} m={4}>
            <Grid item xs={8}>
              <CustomInput type="email" aria-label="Demo input" placeholder="Enter Mail" />
            </Grid>
            <Grid item xs={8}>
              <CustomInput type="password" aria-label="Demo input" placeholder="Password" />
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: 250 },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="standard-basic" label="Standard" variant="standard" />
              </Box>
            </Grid>
            <Grid item xs={8}>
              {/* <CustomInput aria-label="Demo input" placeholder="Contact" /> */}
              <Button sx={{ color: "black", size: 24 }}>Submit</Button>
            </Grid>
            {/* <Grid item xs={6}>
              <CustomInput aria-label="Demo input" placeholder="Captcha" />
            </Grid>  */}
          </Grid>
        </FormControl>
      </div>
    </div>
  );
}

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 20em;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 24px ${theme.palette.mode === "dark" ? blue[900] : blue[100]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);
