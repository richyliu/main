import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  IconButton
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { StyleRules, StyledComponentProps } from '@material-ui/core/styles';
import { withRouter, RouteComponentProps } from 'react-router';

const styles: StyleRules = {
  root: {},
  grow: {
    flexGrow: 1,
  },
};

interface TitleBarProps extends RouteComponentProps, StyledComponentProps {
  title: string;
}

class TitleBar extends React.Component<TitleBarProps, {}> {
  public render() {
    const { title, classes, location } = this.props;
    // TODO: set title from route or props?
    const path = location.pathname;

    return (
      <AppBar position="static" className={classes!.root}>
        <Toolbar>
          <IconButton>
            {path.split('/').length > 2 && <ArrowBackIcon />}
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes!.grow}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(withRouter(TitleBar));
