import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  //   textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs>
          <Item>
            <Stack direction="row" spacing={2}>
              <Item>
                <Typography variant="h4">Your Courses</Typography>
              </Item>
              <Item>
                <Typography variant="body3">Statistic</Typography>
              </Item>
            </Stack>
            <Typography variant="body1" color="text.secondary">
              <span>15</span> courses
            </Typography>
            <Typography varient="h5">Introduction into Motion Design</Typography>
           
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>xs=6</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
