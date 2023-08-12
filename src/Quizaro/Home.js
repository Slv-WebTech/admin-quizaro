import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
// import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Course from "./Course";

import Law from "./Law";
import HR from "./HR";
import AI from "./AI";
import Finance from "./Finance";
import FullStack from "./Fullstackcourse";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const RegistrationForm = () => {
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
const useStyles = makeStyles({
  root: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
  },

  subdiv: {
    padding: 10,
    marginLeft: 80,
    // width: 700,
  },
  card: {
    backgroundColor: "#F6F6F6",
  },
  courseCards: {
    zIndex: 1,
    boxShadow: "#b4b2b2",
    transform: "scale(1.02)",
    borderRadius: 1,
  },
});

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Dashboard(props) {
  const [view, setView] = useState(<Course />);

  const classes = useStyles();
  // const theme = useTheme();
  // const [personName, setPersonName] = React.useState([]);
  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };
  // const handleClick = (v) => {
  //   setViewContainer(v);
  // };
  // const setViewContainer = (v) => {
  //   setView(v);
  // };
  const handleClick = (event) => {
    const clickedView = event;
    setView(clickedView);
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              MUI
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>

      <div className={classes.root}>
        <div className={classes.subdiv}>
          <CardContent>
            <Typography sx={{ fontSize: 30, fontWeight: 500 }} color="black" gutterBottom>
              Welcome To Quizaro ExtendedEdge
            </Typography>
          </CardContent>
          <Box sx={{ width: 1 }}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={16}>
              <Box gridColumn="span 5">
                <CardContent>
                  <Typography sx={{ fontSize: 17 }}>
                    Quizaro ExtendedEdge students are 71% more likely to land a job than the average applicant by completing a company's virtual experience
                    program. Find a program now:
                  </Typography>
                  <Card className="courseCards" sx={{ m: 1, mt: 5, minWidth: 275, padding: 1, borderRadius: 4 }}>
                    {/* <Button { onClick = ( ) =>handleOpen( ) } > */}
                    <CardContent>
                      <Typography sx={{ fontSize: 13, fontWeight: "bold" }} color="black" gutterBottom>
                        Register for your first Virtual Experience Program
                      </Typography>
                      <Typography sx={{ fontSize: 13 }}>Get access to leading firms and learn desired skills →</Typography>
                    </CardContent>
                    {/* </Button> */}
                  </Card>
                </CardContent>
              </Box>
              <Box gridColumn="span 3">
                <Card sx={{ minWidth: 550 }}>
                  <CardContent sx={{ height: 200, background: "rgb(243,244,246)", padding: 5 }}>
                    <Typography sx={{ fontSize: 16, fontWeight: "bold" }} color="black" gutterBottom>
                      When employers review your profile, they can see that:
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <hr></hr>
                    </Typography>
                    <Typography variant="body3" sx={{ mb: 1.5, display: "flex", alignItems: "center" }}>
                      <VerifiedOutlinedIcon /> My Achievements
                    </Typography>
                    <Typography sx={{ mb: 1.5 }}> 0 Completion Certificate</Typography>
                    <Typography>0 Badges</Typography>
                    <CardActions>
                      <Button size="small">View all achievements →</Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Box>
          <div>
            <Typography sx={{ fontSize: 30, fontWeight: 400, marginLeft: 4 }} color="rgb(47, 95, 167)" gutterBottom>
              Explore Quizaro ExtendedEdge work experience programs
            </Typography>
            <Typography sx={{ fontSize: 20, fontWeight: 300, marginLeft: 4 }} color="black" gutterBottom>
              Find the perfect program to showcase your knowledge & get noticed by recruiters from top companies
            </Typography>
          </div>
        </div>
        <Grid container spacing={-55}>
          <Grid item xs={4}>
            <div style={{ marginLeft: 70 }}>
              <FormControl sx={{ ml: 7, width: 300, mt: 3 }}>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" >
                  <MenuItem disabled value="">
                    <em>CAREER INTEREST</em>
                  </MenuItem>
                  <MenuItem value="Full Stack" onClick={() => handleClick(<FullStack />)}>Full Stack Development</MenuItem>
                  <MenuItem value="HR" onClick={() => handleClick(<HR />)}>HR</MenuItem>
                  <MenuItem onClick={() => handleClick(<Finance />)}>Finance</MenuItem>
                  <MenuItem onClick={() => handleClick(<Law />)}>Law</MenuItem>
                  <MenuItem onClick={() => handleClick(<AI />)}>AI</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                <Select
                  style={{ borderRadius: 14 }}
                  // displayEmpty
                  value=""
                  // onChange={handleChange}
                  input={<OutlinedInput />}
                  // renderValue={(selected) => {
                  //   if (selected.length === 0) {
                  //     return <em>Company</em>;
                  //   }

                  //   return selected.join(", ");
                  // }}
                  MenuProps={MenuProps}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem disabled value="">
                    <em>Company</em>
                  </MenuItem>
                  <MenuItem>Full Stack Development</MenuItem> <MenuItem>HR</MenuItem> <MenuItem>Finance</MenuItem> <MenuItem>Law</MenuItem>
                  <MenuItem>ML</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid item sx={2} style={{ display: "flex", alignItems: "center" }}>
            <div>
              <Checkbox {...label} sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
            </div>
          </Grid>
          <Grid item sx={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography style={{ fontWeight: 300 }}>SHOW ME NEW PROGRAMS</Typography>
          </Grid>
        </Grid>
        <div style={{ marginLeft: 70 }}>{view}</div>
        {/* <div style={{ marginLeft: 70 }}>
          <Grid container m={4} spacing={3}>
            <Grid item sx={4}>
              <Card className={classes.courseCards} sx={{ maxWidth: 370, borderRadius: 3, height: 400, background: "rgb(243,244,246)" }}>
                <CardMedia sx={{ height: 140 }} image="./one.jpg" />
                <CardContent sx={{ height: 150 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    Data Visualisation: Empowering Business with Effective
                  </Typography>
                  <Typography variant="body2.5" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <AvTimerOutlinedIcon />
                    3.5-4.5 hours
                  </Button>
                  <Button size="small">
                    <DoneOutlinedIcon /> 4 Tasks
                  </Button>
                  <Button size="small">
                    <LocalOfferOutlinedIcon /> Data
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sx={4}>
              <Card sx={{ maxWidth: 370, borderRadius: 3, height: 400, background: "rgb(243,244,246)" }}>
                <CardMedia sx={{ height: 140 }} image="./one.jfif" />
                <CardContent sx={{ height: 150 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    Data Visualisation: Empowering Business with Effective
                  </Typography>
                  <Typography variant="body2.5" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <AvTimerOutlinedIcon />
                    3.5-4.5 hours
                  </Button>
                  <Button size="small">
                    <DoneOutlinedIcon /> 4 Tasks
                  </Button>
                  <Button size="small">
                    <LocalOfferOutlinedIcon /> Data
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sx={4}>
              <Card sx={{ maxWidth: 370, borderRadius: 3, height: 400, background: "rgb(243,244,246)" }}>
                <CardMedia sx={{ height: 140 }} image="./two.jfif" />
                <CardContent sx={{ height: 150 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    Data Visualisation: Empowering Business with Effective
                  </Typography>
                  <Typography variant="body2.5" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions sx={{ paddingLeft: 3 }}>
                  <Button size="small">
                    <AvTimerOutlinedIcon />
                    3.5-4.5 hours
                  </Button>
                  <Button size="small">
                    <DoneOutlinedIcon /> 4 Tasks
                  </Button>
                  <Button size="small">
                    <LocalOfferOutlinedIcon /> Data
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sx={4}>
              <Card sx={{ maxWidth: 370, borderRadius: 3, height: 400, background: "rgb(243,244,246)" }}>
                <CardMedia sx={{ height: 140 }} image="./three.jfif" />
                <CardContent sx={{ height: 150 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    Data Visualisation: Empowering Business with Effective
                  </Typography>
                  <Typography variant="body2.5" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions sx={{ paddingLeft: 3 }}>
                  <Button size="small">
                    <AvTimerOutlinedIcon />
                    3.5-4.5 hours
                  </Button>
                  <Button size="small">
                    <DoneOutlinedIcon /> 4 Tasks
                  </Button>
                  <Button size="small">
                    <LocalOfferOutlinedIcon /> Data
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sx={4}>
              <Card sx={{ maxWidth: 370, borderRadius: 3, height: 400, background: "rgb(243,244,246)" }}>
                <CardMedia sx={{ height: 140 }} image="./four.jfif" />
                <CardContent sx={{ height: 150 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    Data Visualisation: Empowering Business with Effective
                  </Typography>
                  <Typography variant="body2.5" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions sx={{ paddingLeft: 3 }}>
                  <Button size="small">
                    <AvTimerOutlinedIcon />
                    3.5-4.5 hours
                  </Button>
                  <Button size="small">
                    <DoneOutlinedIcon /> 4 Tasks
                  </Button>
                  <Button size="small">
                    <LocalOfferOutlinedIcon /> Data
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sx={4}>
              <Card sx={{ maxWidth: 370, borderRadius: 3, height: 400, background: "rgb(243,244,246)" }}>
                <CardMedia sx={{ height: 140 }} image="./one.jpg" />
                <CardContent sx={{ height: 150 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    Data Visualisation: Empowering Business with Effective
                  </Typography>
                  <Typography variant="body2.5" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions sx={{ paddingLeft: 3 }}>
                  <Button size="small">
                    <AvTimerOutlinedIcon />
                    3.5-4.5 hours
                  </Button>
                  <Button size="small">
                    <DoneOutlinedIcon /> 4 Tasks
                  </Button>
                  <Button size="small">
                    <LocalOfferOutlinedIcon /> Data
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sx={4}>
              <Card sx={{ maxWidth: 370, borderRadius: 3, height: 400, background: "rgb(243,244,246)" }}>
                <CardMedia sx={{ height: 140 }} image="./two.jfif" />
                <CardContent sx={{ height: 150 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    Data Visualisation: Empowering Business with Effective
                  </Typography>
                  <Typography variant="body2.5" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions sx={{ paddingLeft: 3 }}>
                  <Button size="small">
                    <AvTimerOutlinedIcon />
                    3.5-4.5 hours
                  </Button>
                  <Button size="small">
                    <DoneOutlinedIcon /> 4 Tasks
                  </Button>
                  <Button size="small">
                    <LocalOfferOutlinedIcon /> Data
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sx={4}>
              <Card sx={{ maxWidth: 370, borderRadius: 3, height: 400, background: "rgb(243,244,246)" }}>
                <CardMedia sx={{ height: 140 }} image="./three.jfif" />
                <CardContent sx={{ height: 150 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    Data Visualisation: Empowering Business with Effective
                  </Typography>
                  <Typography variant="body2.5" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions sx={{ paddingLeft: 3 }}>
                  <Button size="small">
                    <AvTimerOutlinedIcon />
                    3.5-4.5 hours
                  </Button>
                  <Button size="small">
                    <DoneOutlinedIcon /> 4 Tasks
                  </Button>
                  <Button size="small">
                    <LocalOfferOutlinedIcon /> Data
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid> */}

        {/* </div> */}
      </div>
      {RegistrationForm()}
    </div>
  );
}

export default Dashboard;
