import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import cardProfile1Square from "assets/img/faces/stefan.jpg";
import cardProfile4Square from "assets/img/faces/veroljub.jpg";
import cardProfile6Square from "assets/img/faces/michael.jpg";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";
import teamStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.jsx";

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  }
};

class SectionTeam extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Here is our team</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                        <img src={cardProfile6Square} alt="..." />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardProfile6Square})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Michael Bieniek</h4>
                      <p className={classes.description}>
                        10+ years of experience in software and hardware. Masters in engineering and 1 pending patent application.
                      </p>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
             <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <img src={cardProfile4Square} alt="..." />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardProfile4Square})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Veroljub Mihajlovic</h4>
                      <p className={classes.description}>
                        Marketing and sales director with worldwide sales and marketing experience.
                      </p>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>      
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
             <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                        <img src={cardProfile1Square} alt="..." />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardProfile1Square})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Stefan Gavrilovic</h4>
          
                      <p className={classes.description}>
                        15+ years of software development experience including 6+ at Google.
                      </p>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(SectionTeam);
