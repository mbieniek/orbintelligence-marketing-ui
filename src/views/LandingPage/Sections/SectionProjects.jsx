/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Build from "@material-ui/icons/Build";
import Subject from "@material-ui/icons/Subject";
import Code from "@material-ui/icons/Code";
import Dashboard from "@material-ui/icons/Dashboard";
import Timeline from "@material-ui/icons/Timeline";
import Group from "@material-ui/icons/Group";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.jsx";

import twitterResultsSummary from "assets/img/twitter/results_summary.png"
import twitterTimeline from "assets/img/twitter/timeline.png"

function SectionProjects({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div className={`${classes.projects} ${classes.projects4}`}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
              }`}
            >
              <h2 className={classes.title}>
                Real Time Twitter Insights and Analytics
              </h2>
              <h5 className={classes.description}>
              The Orb Intelligence platform provides real time AI powered Twitter insights and analytics.
              You can craft your customer engagement to improve messaging, increase receptiveness of sales/marketing and understand the impact you are making with your end customer.
              <a
                href="https://platform.orbintelligence.com/pages/register-page"
                className={classes.link}>
                Try it now for free!
              </a>
              </h5>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card
                background
                className={classes.card4}
                style={{ backgroundImage: `url(${twitterResultsSummary})` }}
              >
                <CardBody background className={classes.cardBody4}>
                    <h3 className={classes.cardTitle}>Sentiment Analysis</h3>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <InfoArea
                className={classes.info4}
                title="AI Powered Sentiment Analysis"
                description="Our sentiment machine learning algorithm analyzes relevant Tweets and assigns them a score."
                icon={Build}
                iconColor="info"
              />
              <InfoArea
                className={classes.info4}
                title="Export"
                description="You can export the Tweets and sentiment analysis to a CSV."
                icon={Code}
                iconColor="primary"
              />
              <InfoArea
                className={classes.info4}
                title="Results Dashboard"
                description="There is also a dashboard which provides analytics to give you a high level overview of the sentiment from the collected Tweets."
                icon={Dashboard}
                iconColor="danger"
              />
            </GridItem>
          </GridContainer>
          <hr />
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <InfoArea
                className={classes.info4}
                title="Tweet Timeline"
                description="We provide a timeline of Tweets and their sentiment. You can visually see sentiment fluctuations over time."
                icon={Timeline}
                iconColor="rose"
              />
              <InfoArea
                className={classes.info4}
                title="Collect Tweets"
                description="We can collect Tweets and analyze them over hours, days, weeks, or months to allow you to see the big picture."
                icon={Subject}
                iconColor="success"
              />
              <InfoArea
                className={classes.info4}
                title="Instant Analysis"
                description="We can perform instant analysis so you can get an immediate picture of sentiment."
                icon={Group}
                iconColor="info"
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <Card
                background
                className={classes.card4}
                style={{ backgroundImage: `url(${twitterTimeline})` }}
              >
                <CardBody background className={classes.cardBody4}>
                    <h3 className={classes.cardTitle}>Timeline</h3>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(projectsStyle)(SectionProjects);
