import { FC } from "react";
import Box from "@material-ui/core/Box";
import { formatTime } from "../../utils/datetime";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: 16,
  },
  time: {
    fontSize: 20,
    opacity: 0.5,
  },
}));

export const TimeSpan: FC<{ title: string; time: Date }> = ({
  title,
  time,
}) => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column">
      <Box className={classes.title} component="span" color="inherit">
        {title}
      </Box>
      <Box className={classes.time} component="span" color="inherit">
        {formatTime(time)}
      </Box>
    </Box>
  );
};
