import React from 'react';

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import {
  default as withStyles,
  WithStyles,
  StyleRulesCallback,
} from '@material-ui/core/styles/withStyles';

import TitleBar from './nav/TitleBar';
import MenuContent from 'src/models/menuContent';
import ButtonMenu from './ButtonMenu';

const styles: StyleRulesCallback = (theme: Theme) => ({
  content: {
    padding: 20,
    overflowX: 'hidden',
    overflowY: 'scroll',
    // subtract height of top menu bar
    height: `calc(100% - ${theme.spacing.unit * 7 + 40}px)`,
  },
  fab: {
    position: 'absolute',
    // TODO: make theme.spacing.unit * 7 a variable (height of TabBar)
    bottom: theme.spacing.unit + theme.spacing.unit * 7,
    right: theme.spacing.unit,
  },
});

interface BasePageProps extends WithStyles {
  pageTitle: string;
  left?: JSX.Element;
  right?: JSX.Element | MenuContent[];
  fab?: JSX.Element;
}

const BasePage: React.FunctionComponent<BasePageProps> = ({
  classes,
  children,
  pageTitle,
  left,
  right,
  fab,
}) => {
  return (
    <React.Fragment>
      <TitleBar
        title={pageTitle}
        left={left}
        right={
          right instanceof Array ? <ButtonMenu menuItems={right} /> : right
        }
      />
      <div className={classes.content}>{children}</div>
      <div className={classes.fab}>{fab}</div>
    </React.Fragment>
  );
};
export default withStyles(styles)(BasePage);
