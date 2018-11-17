import * as React from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MoreIcon from '@material-ui/icons/MoreVert';

import MenuContent from 'src/models/menuContent';

interface ButtonMenuProps {
  menuItems: MenuContent[];
}

const ButtonMenu: React.FunctionComponent<ButtonMenuProps> = ({
  menuItems,
}) => {
  // set anchor element to null initially. The anchor el is used by the menu to position itself
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement>(
    // to make tslint happy
    (null as unknown) as HTMLElement
  );
  // whether or not to show the menu
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  // set the anchor el on click, show menu
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    setAnchorEl(e.currentTarget);
    setShowMenu(true);
  }

  // get the new icon and text
  function itemClicked(cb: () => void) {
    setShowMenu(false);
    cb();
  }

  return (
    <div>
      <IconButton onClick={handleClick} color="inherit">
        <MoreIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={showMenu}
        onClose={() => setShowMenu(false)}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => itemClicked(item.onClick)}
          >
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            <ListItemText primary={item.text} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ButtonMenu;
