import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

import pages from './global/nav/pages';
import TabBar from './global/nav/TabBar';
import { StyleRules, StyledComponentProps } from '@material-ui/core/styles';
import TitleBar from './global/nav/TitleBar';

const styles: StyleRules = {
  // ensure page content takes up most of the space
  root: {
    // padding: 20,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  pageContent: {
    padding: 20,
    flexGrow: 1,
  },
};

const App: React.SFC<StyledComponentProps> = ({ classes }) => (
  <div className={classes!.root}>
    <TitleBar title="hello"/>
    <div className={classes!.pageContent}>
      <Switch>
        {pages.map(page => (
          <Route
            exact
            path={page.route}
            component={page.component}
            key={page.route}
          />
        ))}
      </Switch>
    </div>
    <TabBar pages={pages} />
  </div>
);
export default withStyles(styles)(App);
