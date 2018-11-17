import * as React from 'react';
import { useState } from 'react';

import {
  default as withStyles,
  WithStyles,
  StyleRules,
} from '@material-ui/core/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import AddIcon from '@material-ui/icons/Add';

import BasePage from 'src/global/BasePage';
import Drive from 'src/models/drive';
import * as Mock from 'src/helpers/mock';
import { KeyedArray, BooleanMap } from 'src/models/standard';
import DrivesList from './DrivesList';
import AddDriveDialog from './AddDriveDialog';
import MenuContent from 'src/models/menuContent';

const styles: StyleRules = {
  red: {
    color: 'red',
    fontWeight: 'bold',
  },
  green: {
    color: 'green',
    fontWeight: 'lighter',
  },
};

const DrivingPage: React.FunctionComponent<WithStyles> = ({ classes }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [drives, setDrives] = useState<KeyedArray<Drive>>(Mock.drives);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [menuItems, setMenuItems] = useState<any[]>([
    {
      text: 'Done',
      icon: <EditIcon />,
    },
    {
      text: 'Hello',
    },
  ]);

  // stores the event handlers for the menu links
  const menuItemOnClicks: { onClick: () => void }[] = [
    {
      onClick: () => {
        setMenuItems(
          // update 0th element to new edit/done text and icon
          Object.assign([], menuItems, {
            0: {
              text: edit ? 'Edit' : 'Done',
              icon: edit ? <EditIcon /> : <DoneIcon />,
            },
          })
        );
        setEdit(!edit);
      },
    },
    {
      onClick: () => {},
    },
  ];
  if (menuItems.length != menuItemOnClicks.length) {
    console.error({ menuItems, menuItemOnClicks });
    throw 'Menu items and menu item clicks must be of the same length! (Programmer error)';
  }

  function addDrive(newDrive: Drive) {
    // TODO: add via backend, key should not be randomly generated here
    setDrives(
      drives.concat({
        ...newDrive,
        key: Math.random()
          .toString(2)
          .slice(2),
      })
    );
  }

  return (
    <BasePage
      pageTitle="Driving Log"
      right={menuItems.map((menuItem, index) => ({
        ...menuItem,
        ...menuItemOnClicks[index],
      }))}
      fab={
        <Button
          variant="fab"
          color="secondary"
          onClick={() => setDialogOpen(true)}
        >
          <AddIcon />
        </Button>
      }
    >
      <DrivesList
        edit={edit}
        drives={drives}
        removeDrive={(key: string) =>
          setDrives(drives.filter(d => d.key !== key))
        }
      />
      <AddDriveDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        addDrive={addDrive}
      />
    </BasePage>
  );
};

export default withStyles(styles)(DrivingPage);
