import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  //   textAlign: "center",
  color: theme.palette.text.secondary,
}));
function notificationsLabel(count) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}

const lightTheme = createTheme({ palette: { mode: "light" } });

export default function Cards() {
  return (
    <Grid container spacing={2}>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={2.5} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
              }}
            >
              {[16].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h6" component="div">
                        50
                      </Typography>
                      <Typography color="text.secondary">Users</Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", justifyContent: "right" }} item xs={6}>
                      <PeopleAltOutlinedIcon sx={{ fontSize: 80 }} />
                    </Grid>
                  </Grid>
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
      {[lightTheme].map((theme, index) => (
        <Grid item xs={2.5} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
              }}
            >
              {[16].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h6" component="div">
                        150
                      </Typography>
                      <Typography color="text.secondary">Courses</Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", justifyContent: "right" }} item xs={6}>
                      <CastForEducationOutlinedIcon sx={{ fontSize: 70 }} />
                    </Grid>
                  </Grid>
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
      {[lightTheme].map((theme, index) => (
        <Grid item xs={2.5} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
              }}
            >
              {[16].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  <Grid container spacing={2}>
                    <Grid sx={{ display: "flex", justifyContent: "left" }} item xs={6}>
                      <PeopleAltOutlinedIcon sx={{ fontSize: 80 }} />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" component="div">
                        15
                      </Typography>
                      <Typography color="text.secondary">Categories</Typography>
                    </Grid>
                  </Grid>
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
      {[lightTheme].map((theme, index) => (
        <Grid item xs={2.5} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
              }}
            >
              {[16].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h6" component="div">
                        50
                      </Typography>
                      <Typography color="text.secondary">Users</Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", justifyContent: "right" }} item xs={6}>
                      <PeopleAltOutlinedIcon sx={{ fontSize: 80 }} />
                    </Grid>
                  </Grid>
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
      {[lightTheme].map((theme, index) => (
        <Grid item xs={2.5} key={index}>
          <ThemeProvider theme={theme}>
            {[16].map((elevation) => (
              <Item sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} key={elevation} elevation={elevation}>
                <IconButton aria-label={notificationsLabel(100)}>
                  <Badge badgeContent={100} color="secondary">
                    <PeopleAltOutlinedIcon color="disabled" sx={{ fontSize: 90 }} />
                  </Badge>
                </IconButton>
              </Item>
            ))}
          </ThemeProvider>
        </Grid>
      ))}
      {[lightTheme].map((theme, index) => (
        <Grid item xs={2.5} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
              }}
            >
              {[16].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h6" component="div">
                        50
                      </Typography>
                      <Typography color="text.secondary">Users</Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", justifyContent: "right" }} item xs={6}>
                      <PeopleAltOutlinedIcon sx={{ fontSize: 80 }} />
                    </Grid>
                  </Grid>
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
      {[lightTheme].map((theme, index) => (
        <Grid item xs={2.5} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
              }}
            >
              {[16].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h6" component="div">
                        50
                      </Typography>
                      <Typography color="text.secondary">Users</Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", justifyContent: "right" }} item xs={6}>
                      <PeopleAltOutlinedIcon sx={{ fontSize: 80 }} />
                    </Grid>
                  </Grid>
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
      {[lightTheme].map((theme, index) => (
        <Grid item xs={2.5} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
              }}
            >
              {[16].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h6" component="div">
                        50
                      </Typography>
                      <Typography color="text.secondary">Users</Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", justifyContent: "right" }} item xs={6}>
                      <PeopleAltOutlinedIcon sx={{ fontSize: 80 }} />
                    </Grid>
                  </Grid>
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
      {[lightTheme].map((theme, index) => (
        <Grid item xs={2.5} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
              }}
            >
              {[16].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h6" component="div">
                        50
                      </Typography>
                      <Typography color="text.secondary">Users</Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", justifyContent: "right" }} item xs={6}>
                      <PeopleAltOutlinedIcon sx={{ fontSize: 80 }} />
                    </Grid>
                  </Grid>
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
      {[lightTheme].map((theme, index) => (
        <Grid item xs={2.5} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
              }}
            >
              {[16].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h6" component="div">
                        50
                      </Typography>
                      <Typography color="text.secondary">Users</Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", justifyContent: "right" }} item xs={6}>
                      <PeopleAltOutlinedIcon sx={{ fontSize: 80 }} />
                    </Grid>
                  </Grid>
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
      {[lightTheme].map((theme, index) => (
        <Grid item xs={2.5} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
              }}
            >
              {[16].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h6" component="div">
                        50
                      </Typography>
                      <Typography color="text.secondary">Users</Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", justifyContent: "right" }} item xs={6}>
                      <PeopleAltOutlinedIcon sx={{ fontSize: 80 }} />
                    </Grid>
                  </Grid>
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
      {[lightTheme].map((theme, index) => (
        <Grid item xs={2.5} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
              }}
            >
              {[16].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h6" component="div">
                        50
                      </Typography>
                      <Typography color="text.secondary">Users</Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", justifyContent: "right" }} item xs={6}>
                      <PeopleAltOutlinedIcon sx={{ fontSize: 80 }} />
                    </Grid>
                  </Grid>
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
      {[lightTheme].map((theme, index) => (
        <Grid item xs={2.5} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
              }}
            >
              {[16].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h6" component="div">
                        50
                      </Typography>
                      <Typography color="text.secondary">Users</Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", justifyContent: "right" }} item xs={6}>
                      <PeopleAltOutlinedIcon sx={{ fontSize: 80 }} />
                    </Grid>
                  </Grid>
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
}
