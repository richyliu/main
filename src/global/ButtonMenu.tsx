import React, { useState } from 'react';

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
  // whether the swapped text/icon should be shown for each menu item
  const [swapped, setSwapped] = useState<boolean[]>(
    Array(menuItems.length).fill(false)
  );

  // set the anchor el on click, show menu
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    setAnchorEl(e.currentTarget);
    setShowMenu(true);
  }

  // get the new icon and text
  function itemClicked(index: number, cb = () => {}) {
    setShowMenu(false);
    // toggle the swapped for the index
    setSwapped(Object.assign([], swapped, { [index]: !swapped[index] }));
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
            onClick={() => itemClicked(index, item.onClick)}
          >
            {item.icon && (
              <ListItemIcon>
                {item.icon instanceof Array
                  ? item.icon[swapped[index] ? 1 : 0]
                  : item.icon}
              </ListItemIcon>
            )}
            <ListItemText
              primary={
                item.text instanceof Array
                  ? item.text[swapped[index] ? 1 : 0]
                  : item.text
              }
            />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ButtonMenu;
