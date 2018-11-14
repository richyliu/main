import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {
  default as withStyles,
  WithStyles,
  StyleRules
} from '@material-ui/core/styles/withStyles';

import Page from 'src/models/page';

const styles: StyleRules = {
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
};

const TabBar: React.FunctionComponent<
  {
    pages: Page[];
  } & RouteComponentProps &
    WithStyles
> = ({ pages, location: { pathname }, classes }) => {
  function wrapLink(url: string) {
    return props => <Link to={url} {...props} />;
  }

  return (
    <BottomNavigation value={pathname} className={classes.root}>
      {pages.map(({ route, name, icon }) => (
        <BottomNavigationAction
          key={route}
          showLabel
          label={name}
          value={route}
          icon={icon}
          component={wrapLink(route)}
        />
      ))}
    </BottomNavigation>
  );
};

export default withStyles(styles)(withRouter(TabBar));
