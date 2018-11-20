import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  default as withStyles,
  WithStyles,
  StyleRulesCallback,
} from '@material-ui/core/styles/withStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

import pages from './global/nav/pages';
import TabBar from './global/nav/TabBar';

const styles: StyleRulesCallback = (theme: Theme) => ({
  // ensure page content takes up most of the space
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  pageContent: {
    height: window.innerHeight - theme.spacing.unit * 7,
  },
});

const App: React.FunctionComponent<WithStyles> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.pageContent}>
        <Switch>
          {pages.map(({ route, component }) => (
            <Route exact path={route} component={component} key={route} />
          ))}
        </Switch>
      </div>
      <TabBar pages={pages} />
    </div>
  );
};
export default withStyles(styles)(App);
