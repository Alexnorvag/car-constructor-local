import React, { FC, useMemo } from "react";
import clsx from "clsx";
import { Box, createStyles, Grid, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import PlainTable from "../../components/PlainTable";
import { createProjectsData, createDetailsData } from "./helpers/create-data";
import { TableColumn } from "../../components/PlainTable/state/types";
import { DetailsData, ProjectData } from "./state/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      gap: 30,
      [theme.breakpoints.up("md")]: {
        gap: 40,
        flexWrap: "nowrap",
      },
      [theme.breakpoints.up("lg")]: {
        gap: 60,
      },
    },
    cellActive: {
      color: "#055AFC",
    },
  })
);

const projectsData = [
  createProjectsData(
    "Kona OS RTE",
    "DATA",
    "01/25/21",
    { current: 0, amount: 7 },
    "03/15/21"
  ),
  createProjectsData(
    "Sante Fe TDI",
    "REVIEW",
    "01/07/21",
    { current: 3, amount: 5 },
    "02/01/21"
  ),
  createProjectsData(
    "Kona OS Reveal",
    "PRODUCTION",
    "01/08/21",
    { current: 3, amount: 4 },
    "02/15/21"
  ),
  createProjectsData(
    "Kona EV RTE",
    "GARAGING",
    "01/31/21",
    { current: 2, amount: 7 },
    "04/01/21"
  ),
  createProjectsData(
    "Sonata NLine Wheel Cap",
    "DATA",
    "02/20/21",
    { current: 0, amount: 4 },
    "03/15/21"
  ),
  createProjectsData(
    "Nexo Hydrogen Decal",
    "DATA",
    "01/18/21",
    { current: 0, amount: 4 },
    "03/15/21"
  ),
  createProjectsData(
    "MY22 Hyundai Packshots",
    "DATA",
    "02/12/21",
    { current: 0, amount: 7 },
    "03/15/21"
  ),
];

const detailsData = [
  createDetailsData("MY21 Elantra", "150% Model"),
  createDetailsData("MY21 Santa Fe", "Garaging"),
  createDetailsData("MY21 Tuscon", "Garaging"),
];

export const Dashboard: FC = () => {
  const classes = useStyles();

  const projectsColumns: TableColumn<ProjectData>[] = useMemo(
    () => [
      {
        label: "Project Name",
        dataKey: "projectName",
      },
      {
        label: "Status",
        dataKey: "status",
      },
      {
        label: "Next Review",
        dataKey: "nextReview",
        align: "center",
      },
      {
        label: "Milestones",
        dataKey: "milestones",
        formatter: (item) =>
          `${item.milestones?.current}/${item.milestones?.amount}`,
        classes: (item) =>
          clsx({ [classes.cellActive]: item.milestones?.current }),
        align: "center",
      },
      {
        label: "Delivery",
        dataKey: "delivery",
        align: "center",
      },
    ],
    [classes]
  );

  const detailsColumns: TableColumn<DetailsData>[] = useMemo(
    () => [
      {
        label: "Model",
        dataKey: "model",
      },
      {
        label: "Status",
        dataKey: "status",
        align: "right",
      },
    ],
    []
  );

  return (
    <Box display="flex" flexWrap="wrap" className={classes.root}>
      <Grid item xs={12} md={8}>
        <PlainTable<ProjectData>
          columns={projectsColumns}
          rows={projectsData}
          withMenu={true}
          menuItems={["Open", "Edit", "Duplicate", "Download"]}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <PlainTable<DetailsData> columns={detailsColumns} rows={detailsData} />
      </Grid>
    </Box>
  );
};
