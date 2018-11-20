import React from 'react';
import { useState } from 'react';

import {
  default as withStyles,
  WithStyles,
  StyleRules,
} from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';

import DrivesList from './DrivesList';
import AddDriveDialog from './AddDriveDialog';
import BasePage from 'src/global/BasePage';

import { DriveDatabase } from 'src/util/database';
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
  const drives = DriveDatabase.useGetAll();
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const menuItems: MenuContent[] = [
    {
      text: ['Edit', 'Done'],
      icon: [<EditIcon />, <DoneIcon />],
      onClick: () => setEdit(!edit),
    },
    {
      text: 'Save',
      icon: <SaveIcon />,
      onClick: () => DriveDatabase.setAll(drives),
    },
  ];

  // useEffect(
  //   () => {
  //     DriveDatabase.getAll().then(d => setDrives(d));
  //   },
  //   [setDrives]
  // );

  return (
    <BasePage
      pageTitle="Driving Log"
      right={menuItems}
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
        removeDrive={key => DriveDatabase.remove(key)}
      />
      <AddDriveDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        addDrive={newDrive => DriveDatabase.add(newDrive)}
      />
    </BasePage>
  );
};

export default withStyles(styles)(DrivingPage);
