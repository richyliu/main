import * as React from 'react';
import Page from 'src/models/page';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { withRouter, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { StyleRules, withStyles, WithStyles } from '@material-ui/core/styles';

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
