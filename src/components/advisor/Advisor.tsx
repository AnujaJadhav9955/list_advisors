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
  Badge,
} from "@mui/material";
import { blue } from "@mui/material/colors";

export interface AdvisorType {
  id: string;
  jobTitle: String;
  name: String;
  desciption: String;
  badge: String;
  image: string;
  status: string;
  review: number;
  languages: string[];
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
      sm={6}
      md={3}
      padding={"10px 10px 10px 10px"}
      boxShadow={"50px"}
      data-testid="advisor"
    >
      <Card>
        <CardHeader
          data-testid="title"
          avatar={
            <Badge
              color={advisor.status === "Online" ? "success" : "error"}
              overlap="circular"
              badgeContent=" "
              variant="dot"
            >
              <Avatar sx={{ bgcolor: blue[200] }} aria-label="recipe">
                <h4>{advisor.name.charAt(0)}</h4>
              </Avatar>
            </Badge>
          }
          title={<h4>{advisor.name}</h4>}
        />
        <CardMedia
          component="img"
          height="194"
          image={advisor.image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            data-testid="jobTitle"
            variant="body1"
            color="text.Primary"
          >
            {advisor.jobTitle}
          </Typography>
          <Typography variant="body2" color="text.primary">
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

export default React.memo(Advisor);
