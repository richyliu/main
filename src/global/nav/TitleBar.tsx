import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  IconButton
} from '@material-ui/core';
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import { StyleRules, WithStyles } from '@material-ui/core/styles';

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
