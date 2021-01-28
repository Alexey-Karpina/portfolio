import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import WorkOutlineRoundedIcon from "@material-ui/icons/WorkOutlineRounded";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import LocalPhoneRoundedIcon from "@material-ui/icons/LocalPhoneRounded";
import ReorderRoundedIcon from "@material-ui/icons/ReorderRounded";
import LanguageIcon from "@material-ui/icons/Language";
import BeenhereIcon from "@material-ui/icons/Beenhere";

import noAvatar from "../../../../images/no-avatar.png";

const useStyles = makeStyles({
  cardInfo: {
    maxWidth: 345,
    marginRight: "15px",
  },
  container: {
    width: "100%",
    backgroundColor: "#ddd",
    borderRadius: "350px 350px 350px 350px",
    boxShadow: "0px 0px 5px 0px rgba(50, 50, 50, 1)",
  },
  skillsItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  skillEnglish: {
    width: "60%",
    textAlign: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
    color: "white",
    backgroundColor: "#2196F3",
    borderRadius: "350px 350px 350px 350px",
  },
  skillUkrainian: {
    width: "100%",
    textAlign: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
    color: "white",
    backgroundColor: "#2196F3",
    borderRadius: "350px 350px 350px 350px",
  },
  skillRussian: {
    width: "100%",
    textAlign: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
    color: "white",
    backgroundColor: "#2196F3",
    borderRadius: "350px 350px 350px 350px",
  },
  skillTitle: {
    display: "flex",
    alignItems: "center",
  },
  titleIcon: {
    marginRight: "25px",
  },
  skillList: {
    display: "flex",
    flexWrap: "wrap",
  },
  skillItem: {
    width: "50%",
  },
  skillIcon: {
    minWidth: "30px",
  },
});

export default function Info() {
  const classes = useStyles();

  return (
    <Card className={classes.cardInfo}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Photo"
          height="200"
          image={noAvatar}
          title="Profile Photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Alexey Karpina
          </Typography>
          <hr />
          <List>
            <ListItem key="Specialty">
              <ListItemIcon>
                <WorkOutlineRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Front-End Developer" />
            </ListItem>
            <ListItem key="Home">
              <ListItemIcon>
                <HomeRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Kyiv, Ukraine" />
            </ListItem>
            <ListItem key="Mail">
              <ListItemIcon>
                <MailOutlineRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="alexey.karpina@gmail.com" />
            </ListItem>
            <ListItem key="Phone">
              <ListItemIcon>
                <LocalPhoneRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="+380990154102" />
            </ListItem>
          </List>
          <hr />
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.skillTitle}
          >
            <ReorderRoundedIcon
              fontSize="large"
              className={classes.titleIcon}
            />{" "}
            Skills
          </Typography>
          <List className={classes.skillList}>
            <ListItem key="html" className={classes.skillItem}>
              <ListItemIcon className={classes.skillIcon}>
                <BeenhereIcon />
              </ListItemIcon>
              <ListItemText primary="HTML5" />
            </ListItem>
            <ListItem key="css" className={classes.skillItem}>
              <ListItemIcon className={classes.skillIcon}>
                <BeenhereIcon />
              </ListItemIcon>
              <ListItemText primary="CSS3" />
            </ListItem>
            <ListItem key="sass" className={classes.skillItem}>
              <ListItemIcon className={classes.skillIcon}>
                <BeenhereIcon />
              </ListItemIcon>
              <ListItemText primary="SASS" />
            </ListItem>
            <ListItem key="javascript" className={classes.skillItem}>
              <ListItemIcon className={classes.skillIcon}>
                <BeenhereIcon />
              </ListItemIcon>
              <ListItemText primary="JS" />
            </ListItem>
            <ListItem key="react-redux" className={classes.skillItem}>
              <ListItemIcon className={classes.skillIcon}>
                <BeenhereIcon />
              </ListItemIcon>
              <ListItemText primary="React/Redux" />
            </ListItem>
            <ListItem key="webpack" className={classes.skillItem}>
              <ListItemIcon className={classes.skillIcon}>
                <BeenhereIcon />
              </ListItemIcon>
              <ListItemText primary="Webpack" />
            </ListItem>
            <ListItem key="gulp" className={classes.skillItem}>
              <ListItemIcon className={classes.skillIcon}>
                <BeenhereIcon />
              </ListItemIcon>
              <ListItemText primary="Gulp" />
            </ListItem>
            <ListItem key="bootstrap" className={classes.skillItem}>
              <ListItemIcon className={classes.skillIcon}>
                <BeenhereIcon />
              </ListItemIcon>
              <ListItemText primary="Bootstrap" />
            </ListItem>
            <ListItem key="m-ui" className={classes.skillItem}>
              <ListItemIcon className={classes.skillIcon}>
                <BeenhereIcon />
              </ListItemIcon>
              <ListItemText primary="Material-ui" />
            </ListItem>
            <ListItem key="git" className={classes.skillItem}>
              <ListItemIcon className={classes.skillIcon}>
                <BeenhereIcon />
              </ListItemIcon>
              <ListItemText primary="Git" />
            </ListItem>
            <ListItem key="ps" className={classes.skillItem}>
              <ListItemIcon className={classes.skillIcon}>
                <BeenhereIcon />
              </ListItemIcon>
              <ListItemText primary="Photoshop" />
            </ListItem>
          </List>
          <hr />
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.skillTitle}
          >
            <LanguageIcon fontSize="large" className={classes.titleIcon} />{" "}
            Languages
          </Typography>
          <List>
            <ListItem key="eng" className={classes.skillsItem}>
              <ListItemText primary="English" />
              <div className={classes.container}>
                <div className={classes.skillEnglish}>60%</div>
              </div>
            </ListItem>
            <ListItem key="ukr" className={classes.skillsItem}>
              <ListItemText primary="Ukrainian" />
              <div className={classes.container}>
                <div className={classes.skillUkrainian}>100%</div>
              </div>
            </ListItem>
            <ListItem key="rus" className={classes.skillsItem}>
              <ListItemText primary="Russian" />
              <div className={classes.container}>
                <div className={classes.skillRussian}>100%</div>
              </div>
            </ListItem>
          </List>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
