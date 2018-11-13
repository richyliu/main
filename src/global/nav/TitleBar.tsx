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
  root: {},
  grow: {
    flexGrow: 1,
  },
};

interface TitleBarProps extends WithStyles {
  title: string;
  displayBack: boolean;
}

class TitleBar extends React.PureComponent<TitleBarProps> {
  public render() {
    const {
      title,
      displayBack,
      classes: { root, grow },
    } = this.props;

    return (
      <AppBar position="static" className={root}>
        <Toolbar>
          <IconButton>{displayBack && <ArrowBackIcon />}</IconButton>
          <Typography variant="h6" color="inherit" className={grow}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(TitleBar);
