import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import {
  default as withStyles,
  WithStyles,
  StyleRulesCallback
} from '@material-ui/core/styles/withStyles';

import TitleBar from './nav/TitleBar';

const styles: StyleRulesCallback = (theme: Theme) => ({
  content: {
    padding: 20,
    overflow: 'scroll',
    maxHeight: window.innerHeight - theme.spacing.unit * 14 - 40,
  },
  fab: {
    position: 'absolute',
    // TODO: make theme.spacing.unit * 7 a variable (height of TabBar)
    bottom: theme.spacing.unit + theme.spacing.unit * 7,
    right: theme.spacing.unit,
  },
});

const BasePage: React.FunctionComponent<
  {
    pageTitle: string;
    displayBack?: boolean;
    menuItems?: JSX.Element;
    fab?: JSX.Element;
  } & WithStyles
> = ({ classes, children, pageTitle, displayBack, fab, menuItems }) => {
  return (
    <div>
      <TitleBar
        title={pageTitle}
        displayBack={Boolean(displayBack)}
        menuItems={menuItems}
      />
      <div className={classes.content}>{children}</div>
      <div className={classes.fab}>{fab}</div>
    </div>
  );
};
export default withStyles(styles)(BasePage);
