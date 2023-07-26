import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";

import CardContent from "@mui/material/CardContent";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  maxWidth: 400,
}));

const message = `Education is the key to Success.`;

export default function Cards() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <Typography variant="caption" sx={{ fontSize: 40 }}>
          Your Dashboard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Today's Dashboard
        </Typography>
        <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
          <Item
            sx={{
              my: 3,
              p: 2,
            }}
          >
            <Stack spacing={2} direction="row">
              <PeopleAltOutlinedIcon sx={{ fontSize: 30 }} />

              <Typography noWrap>{message}</Typography>
            </Stack>
          </Item>
          <Item
            sx={{
              my: 3,

              p: 2,
            }}
          >
            <Stack spacing={2} direction="row">
              <Stack>
                <CastForEducationOutlinedIcon sx={{ fontSize: 30 }} />
              </Stack>
              <Stack sx={{ minWidth: 0 }}>
                <Typography noWrap>{message}</Typography>
              </Stack>
            </Stack>
          </Item>
          <Item
            sx={{
              my: 3,
              p: 2,
            }}
          >
            <Stack spacing={2} direction="row">
              <Stack>
                <Avatar>W</Avatar>
              </Stack>
              <Stack sx={{ minWidth: 0 }}>
                <Typography noWrap>{message}</Typography>
              </Stack>
            </Stack>
          </Item>
          <Item
            sx={{
              my: 3,

              p: 2,
            }}
          >
            <Stack spacing={2} direction="row">
              <Stack>
                <Avatar>W</Avatar>
              </Stack>
              <Stack sx={{ minWidth: 0 }}>
                <Typography noWrap>{message}</Typography>
              </Stack>
            </Stack>
          </Item>
          <Item
            sx={{
              my: 3,

              p: 2,
            }}
          >
            <Stack spacing={2} direction="row">
              <Stack>
                <Avatar>W</Avatar>
              </Stack>
              <Stack sx={{ minWidth: 0 }}>
                <Typography noWrap>{message}</Typography>
              </Stack>
            </Stack>
          </Item>
          <Item
            sx={{
              my: 3,

              p: 2,
            }}
          >
            <Stack spacing={2} direction="row">
              <Stack>
                <Avatar>W</Avatar>
              </Stack>
              <Stack sx={{ minWidth: 0 }}>
                <Typography noWrap>{message}</Typography>
              </Stack>
            </Stack>
          </Item>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={3}>
          <Item>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar sx={{ background: "rgb(232,232,232)", borderRadius: 5 }} />
            </LocalizationProvider>
          </Item>
          <Item>
            <Card sx={{ borderRadius: 5, width: 300 }}>
              <CardContent sx={{ height: 330, background: "rgb(243,244,246)", padding: 6 }}>
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }} color="black" gutterBottom>
                  Good Evening , Sir
                </Typography>
                <Typography m={0.5} variant="body2">
                  "It's a fact that online learning is the future and will undoubtedly replace land-based learning in the future."
                </Typography>
                <Typography>Have a nice day....</Typography>
                <Typography variant="body3" sx={{ mt: 1, display: "flex", alignItems: "center" }}>
                  Don't Forgot to attend Classes ...
                </Typography>
                {/* <CardActions>
                  <Button size="80">Your report →</Button>
                </CardActions> */}
              </CardContent>
            </Card>
          </Item>
          <Item>
            <Deposits />
            <hr />
            <Typography variant="h5" fontWeight={900}>
              Revenue
            </Typography>
            <hr />
            <Deposits />
          </Item>
        </Stack>
        <Grid item xs={12}>
          <Typography sx={{ fontSize: 30 }}>Today's Classes</Typography>
          <div>
            <Stack direction="row" spacing={2}>
              <Item sx={{ width: 100, height: 120, display: "flex", justifyContent: "center" }}>
                <Avatar alt="Admin" src="https://source.unsplash.com/random?mobile" sx={{ marginTop: 2, width: 70, height: 70 }} />
              </Item>
              <Item sx={{ width: 100, height: 120, display: "flex", justifyContent: "center" }}>
                <Avatar alt="Admin" src="https://source.unsplash.com/random?computer" sx={{ marginTop: 2, width: 70, height: 70 }} />
              </Item>
              <Item sx={{ width: 100, height: 120, display: "flex", justifyContent: "center" }}>
                <Avatar alt="Admin" src="https://source.unsplash.com/random?nature" sx={{ marginTop: 2, width: 70, height: 70 }} />
              </Item>
              <Item sx={{ width: 100, height: 120, display: "flex", justifyContent: "center" }}>
                <Avatar alt="Admin" src="https://source.unsplash.com/random?robot" sx={{ marginTop: 2, width: 70, height: 70 }} />
              </Item>
              <Item sx={{ width: 100, height: 120, display: "flex", justifyContent: "center" }}>
                <Avatar alt="Admin" src="https://source.unsplash.com/random?AI" sx={{ marginTop: 2, width: 70, height: 70 }} />
              </Item>
            </Stack>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ fontSize: 30 }}>Recent Classes</Typography>
          <div>
            <Stack direction="row" spacing={2}>
              <Item sx={{ width: 100, height: 120, display: "flex", justifyContent: "center" }}>
                <Avatar alt="Admin" src="https://source.unsplash.com/random?boy" sx={{ marginTop: 2, width: 70, height: 70 }} />
              </Item>
              <Item sx={{ width: 100, height: 120, display: "flex", justifyContent: "center" }}>
                <Avatar alt="Admin" src="https://source.unsplash.com/random?girl" sx={{ marginTop: 2, width: 70, height: 70 }} />
              </Item>
              <Item sx={{ width: 100, height: 120, display: "flex", justifyContent: "center" }}>
                <Avatar alt="Admin" src="https://source.unsplash.com/random?cat" sx={{ marginTop: 2, width: 70, height: 70 }} />
              </Item>
              <Item sx={{ width: 100, height: 120, display: "flex", justifyContent: "center" }}>
                <Avatar alt="Admin" src="https://source.unsplash.com/random?dog" sx={{ marginTop: 2, width: 70, height: 70 }} />
              </Item>
              <Item sx={{ width: 100, height: 120, display: "flex", justifyContent: "center" }}>
                <Avatar alt="Admin" src="https://source.unsplash.com/random?monkey" sx={{ marginTop: 2, width: 70, height: 70 }} />
              </Item>
            </Stack>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Chart />
      </Grid>
      <Grid item xs={6}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
              9:30 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <FastfoodIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Eat
              </Typography>
              <Typography>Because you need strength</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2" color="text.secondary">
              10:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Code
              </Typography>
              <Typography>Because it&apos;s awesome!</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                <HotelIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Sleep
              </Typography>
              <Typography>Because you need rest</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              <TimelineDot color="secondary">
                <RepeatIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Repeat
              </Typography>
              <Typography>Because this is the life you love!</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid>
      <Grid item xs={6}>
        <Orders />
      </Grid>
    </Grid>
  );
}
