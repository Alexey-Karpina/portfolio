import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import List from "@material-ui/core/List";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DateRangeIcon from "@material-ui/icons/DateRange";

import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

const useStyles = makeStyles({
  cardWork: {
    flexGrow: 1,
    marginBottom: "20px",
  },
  workTitle: {
    display: "flex",
    alignItems: "center",
  },
  workIcon: {
    marginRight: "25px",
  },
  workItemTitle: {
    fontSize: "",
  },
});

export default function Work() {
  const classes = useStyles();
  return (
    <Card className={classes.cardWork}>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="h2"
            className={classes.workTitle}
          >
            <BusinessCenterIcon fontSize="large" className={classes.workIcon} />
            Work Experience
          </Typography>
          <List>
            <ListItem key="">
              <List>
                <ListItem key="">
                  <ListItemText primary="Front End Developer / VoBu.ua" />
                </ListItem>
                <ListItem key="">
                  <ListItemIcon>
                    <DateRangeIcon />
                  </ListItemIcon>
                  <ListItemText primary=" DEC 2019 - Current " />
                </ListItem>
                <ListItem key="">
                  <ListItemText primary="Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste." />
                </ListItem>
              </List>
            </ListItem>
          </List>
          <hr />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
