import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { postData } from "./FetchNodeServices";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Slv1-webpage">
        Quizaro ExtendedEdge
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Admin() {
  const [email, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  var navigate = useNavigate();

  const handleSubmit = async () => {
    var result = await postData("adminlogin/chkadminlogin", { email: email, password: password });
    if (result.result) {
      navigate("/AdminDashboard");
    } else {
      Swal.fire({
        icon: "warning",
        title: "Invalid Email Address/Password",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              //   background: "rgba(0, 0, 0, 0.7)",
              //   boxShadow: "0 15px 25px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Avatar sx={{ background: "white", width: 80, height: 80 }}>
              <img alt="Quizaro ExtendedEdge" src="./quizaro.png" width="70" />
            </Avatar>

            <Typography mt={2} component="h1" variant="h5">
              Admin
            </Typography>
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                onChange={(e) => setEmailId(e.target.value)}
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
              <Button onClick={() => handleSubmit()} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Welcome
              </Button>

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
