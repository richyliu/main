import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

import pages from './global/nav/pages';
import TabBar from './global/nav/TabBar';
import {
  WithStyles,
  StyleRulesCallback,
  Theme
} from '@material-ui/core/styles';

const styles: StyleRulesCallback = (theme: Theme) => ({
  // ensure page content takes up most of the space
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  pageContent: {
    // flexGrow: 1,
    maxHeight: window.innerHeight - theme.spacing.unit * 7,
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
