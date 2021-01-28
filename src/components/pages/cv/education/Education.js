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

import MenuBookIcon from "@material-ui/icons/MenuBook";

const useStyles = makeStyles({
  cardEducation: {
    flexGrow: 1,
  },
  educationTitle: {
    display: "flex",
    alignItems: "center",
  },
  educationIcon: {
    marginRight: "25px",
  },
  educationItemTitle: {
    fontSize: "",
  },
});

export default function Education() {
  const classes = useStyles();

  return (
    <Card className={classes.cardEducation}>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="h2"
            className={classes.educationTitle}
          >
            <MenuBookIcon fontSize="large" className={classes.educationIcon} />
            Education
          </Typography>
          <List>
            <ListItem key="">
              <List>
                <ListItem key="">
                  <ListItemText primary="Radio Engineering Faculty / Kiev Polytechnic Institute" />
                </ListItem>
                <ListItem key="">
                  <ListItemIcon>
                    <DateRangeIcon />
                  </ListItemIcon>
                  <ListItemText primary="2016 - 2020" />
                </ListItem>
                <ListItem key="">
                  <ListItemText primary="Bachelors Degree" />
                </ListItem>
              </List>
            </ListItem>
            <hr />
            <ListItem key="">
              <List>
                <ListItem key="">
                  <ListItemText primary="Software Engineer  / ITStep Academy" />
                </ListItem>
                <ListItem key="">
                  <ListItemIcon>
                    <DateRangeIcon />
                  </ListItemIcon>
                  <ListItemText primary="2018 - 2019" />
                </ListItem>
                <ListItem key="">
                  <ListItemText primary="Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste." />
                </ListItem>
              </List>
            </ListItem>
            <hr />
            <ListItem key="">
              <List>
                <ListItem key="">
                  <ListItemText primary="Front End Developer / GoIT Academy" />
                </ListItem>
                <ListItem key="">
                  <ListItemIcon>
                    <DateRangeIcon />
                  </ListItemIcon>
                  <ListItemText primary="2019 - 2020" />
                </ListItem>
                <ListItem key="">
                  <ListItemText primary="Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste." />
                </ListItem>
              </List>
            </ListItem>
          </List>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
