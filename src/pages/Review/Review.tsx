import {
  Box,
  Button,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { FC } from "react";

import { useHistory, useLocation } from "react-router-dom";
import BlackCar from "../../assets/images/BlackCar.png";
import BlueCar from "../../assets/images/BlueCar.png";
import DarkGreyCar from "../../assets/images/DarkGreyCar.png";
import GreyCar from "../../assets/images/GreyCar.png";
import RedCar from "../../assets/images/RedCar.png";
import WhiteCar from "../../assets/images/WhiteCar.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#929497",
      border: "2px solid #929497",
      marginInline: "min(-2vw, -12px)",
      marginTop: -25,
    },
    headerBox: {
      display: "flex",
      flexDirection: "column",
      alignSelf: "center",
      flexGrow: 1,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      [theme.breakpoints.up("md")]: {
        alignSelf: "flex-start",
        marginLeft: theme.spacing(6),
        marginRight: theme.spacing(6),
      },
    },
    box: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      textAlign: "center",
      [theme.breakpoints.up("md")]: {
        margin: "15px 100px 15px 6px",
        flexDirection: "column",
        textAlign: "end",
      },
    },
    milestonesBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textTransform: "capitalize",
      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
      },
    },
    infoPanel: {
      textTransform: "uppercase",
    },
    activeButton: {
      color: "#000 !important",
      backgroundColor: "#929497",
      "&:hover": {
        backgroundColor: "#717273",
      },
    },
    button: {
      width: "100%",
      color: "#929497",
      borderRadius: 0,
      paddingInline: 45,
      fontSize: "medium",
      fontWeight: "bold",
    },
    controls: {
      display: "flex",
      flexDirection: "column",
      border: "2px solid #929394",
      borderRadius: 0,
      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
      },
    },
    icon: {
      color: "#929394",
    },
    gridList: {
      // height: "auto",
    },
    galleryContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    tile: {
      width: "100%",
      height: "auto",
    },
    gridContainer: {
      color: "#929497",
      textTransform: "uppercase",
    },
  })
);
// const views = {
//   presentation: "Presentation",
//   gallery: "Gallery",
// };
function createProjectNameData(projectName: string) {
  return { projectName };
}
const ProjectNameData = createProjectNameData("PROJECT NAME");

function createMilestonesData(
  milestonesTitle: string,
  feedbackDue: string,
  date: string
) {
  return { milestonesTitle, feedbackDue, date };
}
const MilestonesData = createMilestonesData(
  "Milestones Title",
  "Feedback Due",
  "02/15/21"
);

function createStatusData(status: string) {
  return { status };
}
const StatusData = createStatusData("In Production");
const tileData = [
  {
    img: RedCar,
    title: "Red car",
    author: "author",
  },
  {
    img: DarkGreyCar,
    title: "Dark Grey car",
    author: "author",
  },
  {
    img: WhiteCar,
    title: "White car",
    author: "author",
  },
  {
    img: DarkGreyCar,
    title: "Dark Grey car",
    author: "author",
  },
  {
    img: GreyCar,
    title: "Grey car",
    author: "author",
  },
  {
    img: BlueCar,
    title: "Blue car",
    author: "author",
  },
  {
    img: BlackCar,
    title: "Black car",
    author: "author",
  },
];
export const Review: FC = () => {
  const classes = useStyles();
  // const location = useLocation();
  // const history = useHistory();
  // const query = new URLSearchParams(location.search);
  // const view = query.get("view");

  // useEffect(() => {
  //   if (!view) {
  //     const url = new URL(window.location.href);
  //     url.search = "?view=presentation";

  //     history.replace(url.pathname + url.search);
  //   }
  // }, [history, location.pathname, location.search, view]);

  // console.log("views: ", views);

  return (
    <div>
      <div className={classes.root}>
        <Grid container alignItems="center" className={classes.infoPanel}>
          <Grid item xs={12} sm={4}>
            <Box className={classes.headerBox}>
              <Typography variant="h5" noWrap={true}>
                {ProjectNameData.projectName}
              </Typography>

              <Box className={classes.controls}>
                <Button className={classes.button}>CAMERA</Button>
                <Button className={clsx(classes.button, classes.activeButton)}>
                  CONFIG
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            container
            direction="column"
            justify="center"
            alignItems="flex-end"
          >
            <Box className={classes.box}>
              <Box className={classes.milestonesBox}>
                <Typography variant="h5">
                  {MilestonesData.milestonesTitle}
                </Typography>
                <Typography variant="h5">&nbsp;/&nbsp;</Typography>
                <Typography variant="h5">
                  {`${MilestonesData.feedbackDue}: ${MilestonesData.date}`}
                </Typography>
              </Box>
              <Typography variant="h5">
                {`Status: ${StatusData.status}`}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={3} className={classes.gridContainer}>
        {tileData.map((tile, idx) => (
          <Grid key={idx} item xs={12} sm={4} md={3}>
            <Typography align="left">{tile.title}</Typography>
            <img src={tile.img} alt={tile.title} className={classes.tile} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
