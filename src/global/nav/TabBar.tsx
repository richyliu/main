import * as React from 'react';
import Page from 'src/models/page';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { withRouter, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import {
  StyleRules,
  withStyles,
  StyledComponentProps
} from '@material-ui/core/styles';

const styles: StyleRules = {
  root: {},
};

interface TabBarProps extends RouteComponentProps, StyledComponentProps {
  pages: Page[];
}

const TabBar: React.SFC<TabBarProps> = ({ pages, location, classes }) => (
  <BottomNavigation
    value={location.pathname}
    className={classes!.root}
  >
    {pages.map(page => (
      <BottomNavigationAction
        key={page.route}
        showLabel
        label={page.name}
        value={page.route}
        icon={page.icon}
        // @ts-ignore
        to={page.route}
        component={Link}
      />
    ))}
  </BottomNavigation>
);

export default withStyles(styles)(withRouter(TabBar));
