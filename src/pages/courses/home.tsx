import {
  Box,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import MyAppBar from "../../components/appbar";
import { CourseProps } from "./route";
import MyMarkdown from "../../components/markdown";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: theme.spacing(4),
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
  })
);
export default function CourseHomePage({ course }: CourseProps): ReactElement {
  const classes = useStyles();
  return (
    <div>
      <MyAppBar title="Course" subtitle={course.slug} />
      <Container>
        <Container maxWidth="lg">
          <Paper className={classes.paper}>
            <Grid container alignItems="stretch">
              <Grid item lg={5} md={7} sm={12}>
                {course.icon && (
                  <img
                    className={classes.img}
                    src="/assets/courses/example/icon.png"
                    alt="icon"
                  />
                )}
              </Grid>
              <Grid item lg={7} md={5} sm={12}>
                <Box p={2}>
                  <Typography variant="h4" color="primary">
                    {course.name}
                  </Typography>
                  <Typography>{course.description}</Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <Box p={2}>
              <MyMarkdown body={course.body} />
            </Box>
          </Paper>
        </Container>
      </Container>
    </div>
  );
}
