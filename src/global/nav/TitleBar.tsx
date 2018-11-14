import * as React from 'react';
import {
  default as withStyles,
  WithStyles,
  StyleRules
} from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles: StyleRules = {
  grow: {
    flexGrow: 1,
  },
};

const TitleBar: React.FunctionComponent<
  {
    title: string;
    displayBack: boolean;
  } & WithStyles
> = ({ title, displayBack, classes }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>{displayBack && <ArrowBackIcon />}</IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(TitleBar);
