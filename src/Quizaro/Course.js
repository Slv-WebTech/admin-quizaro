import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

import Rating from "@mui/material/Rating";

export default function MediaCard() {
  return (
    <Grid container m={4} spacing={3}>
      <Grid item sx={4}>
        <Card sx={{ maxWidth: 370, borderRadius: 3, height: 400, background: "rgb(243,244,246)" }}>
          <CardMedia sx={{ height: 200 }} image="./one.jpg" />
          <CardContent sx={{ height: 150 }}>
            <Typography gutterBottom variant="h6" component="div">
              Python
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By Quizaro
            </Typography>
            <Typography mt={2} variant="body2" color="text.secondary">
              <Rating name="read-only" value={4} readOnly />
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
          <CardMedia sx={{ height: 200 }} image="./one.jfif" />
          <CardContent sx={{ height: 150 }}>
            <Typography gutterBottom variant="h6" component="div">
              JavaScript
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By Quizaro
            </Typography>
            <Typography mt={2} variant="body2" color="text.secondary">
              <Rating name="read-only" value={4} readOnly />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <AvTimerOutlinedIcon />
              5-6.5 hours
            </Button>
            <Button size="small">
              <DoneOutlinedIcon /> 6 Tasks
            </Button>
            <Button size="small">
              <LocalOfferOutlinedIcon /> Data
            </Button>
          </CardActions>
        </Card>
      </Grid>{" "}
      <Grid item sx={4}>
        <Card sx={{ maxWidth: 370, borderRadius: 3, height: 400, background: "rgb(243,244,246)" }}>
          <CardMedia sx={{ height: 200 }} image="./two.jfif" />
          <CardContent sx={{ height: 150 }}>
            <Typography gutterBottom variant="h6" component="div">
              Full Stack Web Development
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By Quizaro
            </Typography>
            <Typography mt={2} variant="body2" color="text.secondary">
              <Rating name="read-only" value={3} readOnly />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <AvTimerOutlinedIcon />
              10-14 hours
            </Button>
            <Button size="small">
              <DoneOutlinedIcon /> 2 Tasks
            </Button>
            <Button size="small">
              <LocalOfferOutlinedIcon /> Data
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sx={4}>
        <Card sx={{ maxWidth: 370, borderRadius: 3, height: 400, background: "rgb(243,244,246)" }}>
          <CardMedia sx={{ height: 200 }} image="./three.jfif" />
          <CardContent sx={{ height: 150 }}>
            <Typography gutterBottom variant="h6" component="div">
              Artificial Intelligence
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By Quizaro
            </Typography>
            <Typography mt={2} variant="body2" color="text.secondary">
              <Rating name="read-only" value={4} readOnly />
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
          <CardMedia sx={{ height: 200 }} image="./four.jfif" />
          <CardContent sx={{ height: 150 }}>
            <Typography gutterBottom variant="h6" component="div">
              Human Resources
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By Quizaro
            </Typography>
            <Typography mt={2} variant="body2" color="text.secondary">
              <Rating name="read-only" value={4} readOnly />
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
      {/* </Grid>{" "}
      <Grid item sx={4}>
        <Card sx={{ maxWidth: 370, borderRadius: 3, height: 400, background: "rgb(243,244,246)" }}>
          <CardMedia sx={{ height: 200 }} image="./one.jpg" />
          <CardContent sx={{ height: 150 }}>
            <Typography gutterBottom variant="h6" component="div">
              Python
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By Quizaro
            </Typography>
            <Typography mt={2} variant="body2" color="text.secondary">
              <Rating name="read-only" value={4} readOnly />
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
      </Grid>{" "}
      <Grid item sx={4}>
        <Card sx={{ maxWidth: 370, borderRadius: 3, height: 400, background: "rgb(243,244,246)" }}>
          <CardMedia sx={{ height: 200 }} image="./one.jpg" />
          <CardContent sx={{ height: 150 }}>
            <Typography gutterBottom variant="h6" component="div">
              Python
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By Quizaro
            </Typography>
            <Typography mt={2} variant="body2" color="text.secondary">
              <Rating name="read-only" value={4} readOnly />
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
      </Grid>{" "}
      <Grid item sx={4}>
        <Card sx={{ maxWidth: 370, borderRadius: 3, height: 400, background: "rgb(243,244,246)" }}>
          <CardMedia sx={{ height: 200 }} image="./one.jpg" />
          <CardContent sx={{ height: 150 }}>
            <Typography gutterBottom variant="h6" component="div">
              Python
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By Quizaro
            </Typography>
            <Typography mt={2} variant="body2" color="text.secondary">
              <Rating name="read-only" value={4} readOnly />
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
      </Grid>{" "}
      <Grid item sx={4}>
        <Card sx={{ maxWidth: 370, borderRadius: 3, height: 400, background: "rgb(243,244,246)" }}>
          <CardMedia sx={{ height: 200 }} image="./one.jpg" />
          <CardContent sx={{ height: 150 }}>
            <Typography gutterBottom variant="h6" component="div">
              Python
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By Quizaro
            </Typography>
            <Typography mt={2} variant="body2" color="text.secondary">
              <Rating name="read-only" value={4} readOnly />
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
      </Grid>{" "}
      <Grid item sx={4}>
        <Card sx={{ maxWidth: 370, borderRadius: 3, height: 400, background: "rgb(243,244,246)" }}>
          <CardMedia sx={{ height: 200 }} image="./one.jpg" />
          <CardContent sx={{ height: 150 }}>
            <Typography gutterBottom variant="h6" component="div">
              Python
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By Quizaro
            </Typography>
            <Typography mt={2} variant="body2" color="text.secondary">
              <Rating name="read-only" value={4} readOnly />
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
      </Grid>{" "}
      <Grid item sx={4}>
        <Card sx={{ maxWidth: 370, borderRadius: 3, height: 400, background: "rgb(243,244,246)" }}>
          <CardMedia sx={{ height: 200 }} image="./one.jpg" />
          <CardContent sx={{ height: 150 }}>
            <Typography gutterBottom variant="h6" component="div">
              Python
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By Quizaro
            </Typography>
            <Typography mt={2} variant="body2" color="text.secondary">
              <Rating name="read-only" value={4} readOnly />
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
      </Grid>{" "}
      <Grid item sx={4}>
        <Card sx={{ maxWidth: 370, borderRadius: 3, height: 400, background: "rgb(243,244,246)" }}>
          <CardMedia sx={{ height: 200 }} image="./one.jpg" />
          <CardContent sx={{ height: 150 }}>
            <Typography gutterBottom variant="h6" component="div">
              Python
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By Quizaro
            </Typography>
            <Typography mt={2} variant="body2" color="text.secondary">
              <Rating name="read-only" value={4} readOnly />
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
      </Grid>{" "}
      <Grid item sx={4}>
        <Card sx={{ maxWidth: 370, borderRadius: 3, height: 400, background: "rgb(243,244,246)" }}>
          <CardMedia sx={{ height: 200 }} image="./one.jpg" />
          <CardContent sx={{ height: 150 }}>
            <Typography gutterBottom variant="h6" component="div">
              Python
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By Quizaro
            </Typography>
            <Typography mt={2} variant="body2" color="text.secondary">
              <Rating name="read-only" value={4} readOnly />
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
      </Grid>{" "}
      <Grid item sx={4}>
        <Card sx={{ maxWidth: 370, borderRadius: 3, height: 400, background: "rgb(243,244,246)" }}>
          <CardMedia sx={{ height: 200 }} image="./one.jpg" />
          <CardContent sx={{ height: 150 }}>
            <Typography gutterBottom variant="h6" component="div">
              Python
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By Quizaro
            </Typography>
            <Typography mt={2} variant="body2" color="text.secondary">
              <Rating name="read-only" value={4} readOnly />
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
      </Grid>{" "}
      <Grid item sx={4}>
        <Card sx={{ maxWidth: 370, borderRadius: 3, height: 400, background: "rgb(243,244,246)" }}>
          <CardMedia sx={{ height: 200 }} image="./one.jpg" />
          <CardContent sx={{ height: 150 }}>
            <Typography gutterBottom variant="h6" component="div">
              Python
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By Quizaro
            </Typography>
            <Typography mt={2} variant="body2" color="text.secondary">
              <Rating name="read-only" value={4} readOnly />
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
      </Grid>{" "}
      <Grid item sx={4}>
        <Card sx={{ maxWidth: 370, borderRadius: 3, height: 400, background: "rgb(243,244,246)" }}>
          <CardMedia sx={{ height: 200 }} image="./one.jpg" />
          <CardContent sx={{ height: 150 }}>
            <Typography gutterBottom variant="h6" component="div">
              Python
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By Quizaro
            </Typography>
            <Typography mt={2} variant="body2" color="text.secondary">
              <Rating name="read-only" value={4} readOnly />
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
          <CardMedia sx={{ height: 200 }} image="./one.jfif" />
          <CardContent sx={{ height: 150 }}>
            <Typography gutterBottom variant="h6" component="div">
              JavaScript
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ⨀ Specialization in Domain Certificate
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ⨀ Training and Program Completion Certificate
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ⨀ Project Completion Certificate
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ⨀ LOR - Letter of recommendation
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
            </Button>{" "}
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
            </Button>{" "}
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
            </Button>{" "}
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
        </Card> */}
      </Grid>
    </Grid>
  );
}
