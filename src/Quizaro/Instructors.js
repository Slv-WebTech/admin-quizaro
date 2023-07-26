import React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import Grid from "@mui/material/Grid";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const images = [
  {
    url: "https://source.unsplash.com/random?hacker",
    title: "Admin",
    width: "100%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function Users() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="h4" color="secondary">
          Instructors
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Admin"
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            sx={{ width: 100, height: 100 }}
          />

          <Avatar alt="Admin" src="https://source.unsplash.com/random?lamp" sx={{ width: 100, height: 100 }} />

          <Avatar alt="Admin" src="https://source.unsplash.com/random?music" sx={{ width: 100, height: 100 }} />

          <Avatar alt="Admin" src="https://source.unsplash.com/random?tree" sx={{ width: 100, height: 100 }} />
          <Avatar alt="Admin" src="https://source.unsplash.com/random?bike" sx={{ width: 100, height: 100 }} />
          <Avatar alt="Admin" src="https://source.unsplash.com/random?coffe" sx={{ width: 100, height: 100 }} />
          <Avatar alt="Admin" src="https://source.unsplash.com/random?bottle" sx={{ width: 100, height: 100 }} />
          <Avatar alt="Admin" src="https://source.unsplash.com/random?fish" sx={{ width: 100, height: 100 }} />
          <Avatar alt="Admin" src="https://source.unsplash.com/random?temple" sx={{ width: 100, height: 100 }} />
          <Avatar alt="Admin" src="https://source.unsplash.com/random?road" sx={{ width: 100, height: 100 }} />

          <Avatar sx={{ width: 100, height: 100 }}>
            {images.map((image) => (
              <ImageButton
                focusRipple
                key={image.title}
                style={{
                  width: image.width,
                }}
              >
                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                  <Typography
                    component="span"
                    variant="h6"
                    color="inherit"
                    sx={{
                      position: "relative",
                      p: 4,
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                  >
                    {image.title}
                    <ImageMarked className="MuiImageMarked-root" />
                  </Typography>
                </Image>
              </ImageButton>
            ))}
          </Avatar>

          <Avatar sx={{ width: 100, height: 100 }}>
            <PersonAddAltOutlinedIcon sx={{ fontSize: 40 }} />
          </Avatar>
        </Stack>
      </Grid>
    </Grid>
  );
}
