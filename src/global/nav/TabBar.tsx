import React from 'react';
import { Link } from 'react-router-dom';
import useReactRouter from 'use-react-router';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {
  default as withStyles,
  WithStyles,
  StyleRules,
} from '@material-ui/core/styles/withStyles';

import Page from 'src/models/page';

const styles: StyleRules = {
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
};

interface TabBarProps extends WithStyles {
  pages: Page[];
}

const TabBar: React.FunctionComponent<TabBarProps> = ({ pages, classes }) => {
  const { location } = useReactRouter();

  function wrapLink(url: string) {
    return props => <Link to={url} {...props} />;
  }

  return (
    <BottomNavigation value={location.pathname} className={classes.root}>
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

export default withStyles(styles)(TabBar);
