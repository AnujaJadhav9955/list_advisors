import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Grid,
  Rating,
} from "@mui/material";
import { red } from "@mui/material/colors";

export interface AdvisorType {
  id: string;
  jobTitle: String;
  name: String;
  desciption: String;
  badge: String;
  image: string;
  status: string;
  review: number;
}
interface AdvisorProps {
  advisor: AdvisorType;
}
const Advisor = (props: AdvisorProps) => {
  const { advisor } = props;
  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={3}
      padding={"20px 30px 20px 30px"}
      boxShadow={"50px"}
    >
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {advisor.name.charAt(0)}
            </Avatar>
          }
          title={advisor.name}
        />
        <CardMedia
          component="img"
          height="194"
          image={advisor.image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {advisor.jobTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {advisor.desciption}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Rating name="read-only" value={advisor.review} readOnly />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Advisor;
