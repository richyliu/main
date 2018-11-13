import * as React from 'react';
import {
  withStyles,
  StyleRulesCallback,
  Theme,
  WithStyles
} from '@material-ui/core';
import TitleBar from './nav/TitleBar';

const styles: StyleRulesCallback = (theme: Theme) => ({
  content: {
    padding: 20,
    overflow: 'scroll',
    maxHeight: window.innerHeight - theme.spacing.unit * 14 - 40,
  },
  fab: {
    position: 'absolute',
    // TODO: make 56 a variable (height of TabBar)
    bottom: theme.spacing.unit + theme.spacing.unit * 7,
    right: theme.spacing.unit,
  },
});

interface BasePageProps extends WithStyles {
  pageTitle: string;
  displayBack: boolean;
  fab?: JSX.Element;
}

class BasePage extends React.Component<BasePageProps, {}> {
  public render() {
    const { classes, children, pageTitle, displayBack, fab } = this.props;

    return (
      <div>
        <TitleBar title={pageTitle} displayBack={displayBack} />
        <div className={classes.content}>{children}</div>
        <div className={classes.fab}>{fab}</div>
      </div>
    );
  }
}

export default withStyles(styles)(BasePage);
