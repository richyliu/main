import * as React from 'react';
import {
  default as withStyles,
  WithStyles,
  StyleRules
} from '@material-ui/core/styles/withStyles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoreIcon from '@material-ui/icons/MoreVert';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';

const styles: StyleRules = {
  grow: {
    flexGrow: 1,
  },
};

const TitleBar: React.FunctionComponent<
  {
    title: string;
    displayBack: boolean;
    menuItems?: JSX.Element;
  } & WithStyles
> = ({ title, displayBack, menuItems, classes }) => {
  // set anchor element to null initially. The anchor el is used by the menu to position itself
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement>(null as unknown as HTMLElement);
  // whether or not to show the menu
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  // set the anchor el on click, show menu
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    setAnchorEl(e.currentTarget);
    setShowMenu(true);
  }

  // hide menu
  function handleClose() {
    setShowMenu(false);
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>{displayBack && <ArrowBackIcon />}</IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {title}
        </Typography>
        {Boolean(menuItems) && (
          <IconButton onClick={handleClick}>
            <MoreIcon />
          </IconButton>
        )}
        <Menu
          anchorEl={anchorEl}
          open={showMenu}
          onClose={handleClose}
        >
          {menuItems}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(TitleBar);
