import React from 'react';

import {
  default as withStyles,
  WithStyles,
  StyleRules,
} from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles: StyleRules = {
  grow: {
    flexGrow: 1,
  },
};

interface TitleBarProps extends WithStyles {
  title: string;
  left?: JSX.Element;
  right?: JSX.Element;
}

const TitleBar: React.FunctionComponent<TitleBarProps> = ({
  title,
  left,
  right,
  classes,
}) => {
  return (  
    <AppBar position="static">
      <Toolbar>
        {left}
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {title}
        </Typography>
        {right}
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(TitleBar);
