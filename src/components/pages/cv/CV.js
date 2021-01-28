import React from "react";
import { Page, Document } from "@react-pdf/renderer";

import { makeStyles } from "@material-ui/core/styles";

import Info from "./personalInfo/Info";
import Work from "./workExperiance/Work";
import Education from "./education/Education";

const useStyles = makeStyles({
  cvContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  expContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default function CV() {
  const classes = useStyles();

  return (
    <Document>
      <Page size="A4">
        <div className={classes.cvContainer}>
          <Info />
          <div>
            <Work />
            <Education />
          </div>
        </div>
      </Page>
    </Document>
  );
}
