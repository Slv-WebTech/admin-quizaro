import React, { useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import { Box, Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import { makeStyles } from "@mui/styles";

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
const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  subdiv: {
    padding: 10,
    // width: 700,
  },
  card: {
    backgroundColor: "#F6F6F6",
  },
});

export default function Collaboration() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="inherit" position="static">
          <Toolbar>
            <Typography variant="h3" sx={{ width: "100%", display: "flex", justifyContent: "center", alignItem: "center" }}>
              Collaborations
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid mt={6} container spacing={2}>
        <Grid item xs={6}>
          <img style={{ width: 800, height: 550, marginLeft: 90 }} src="./one.jpg" alt="" />
        </Grid>
        <Grid item xs={6}>
          <List sx={{ width: "100%", maxWidth: 660, marginTop: 10, bgcolor: "background.paper" }}>
            <ListItem alignItems="flex-center">
              <ListItemAvatar>
                <Avatar sx={{ width: 80, height: 80, marginRight: 1 }} alt="Remy Sharp" src="./one.jfif" />
              </ListItemAvatar>

              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography sx={{ display: "inline" }} component="span" variant="body1" color="text.primary">
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-center">
              <ListItemAvatar>
                <Avatar sx={{ width: 80, height: 80, marginRight: 1 }} alt="Travis Howard" src="./picture.png" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography sx={{ display: "inline" }} component="span" variant="body1" color="text.primary">
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-center">
              <ListItemAvatar>
                <Avatar sx={{ width: 80, height: 80, marginRight: 1 }} alt="Cindy Baker" src="two.jfif" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography sx={{ display: "inline" }} component="span" variant="body1" color="text.primary">
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-center">
              <ListItemAvatar>
                <Avatar sx={{ width: 80, height: 80, marginRight: 1 }} alt="Cindy Baker" src="three.jfif" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography sx={{ display: "inline" }} component="span" variant="body1" color="text.primary">
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid mt={4} container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ width: "100%", display: "flex", justifyContent: "center", alignItem: "center" }}>
            Offline Placement Drive
          </Typography>
          <Divider>College Drive</Divider>
        </Grid>
      </Grid>
    </div>
  );
}
