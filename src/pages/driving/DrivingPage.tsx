import * as React from 'react';

import {
  default as withStyles,
  WithStyles,
  StyleRules
} from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Collapse from '@material-ui/core/Collapse';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';

import BasePage from 'src/global/BasePage';
import Drive from 'src/models/driving';
import * as Time from 'src/helpers/time';
import { KeyedArray, TransitionStates } from 'src/models/standard';

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
  const [edit, setEdit] = React.useState<boolean>(false);
  const [drives, setDrives] = React.useState<KeyedArray<Drive>>([
    {
      duration: 30,
      time: new Date('2018-09-11'),
      recordTime: new Date(2018, 9, 11, 9, 14, 24),
      night: false,
      supervisor: 'Gang Liu',
      key: 'r9ce23',
    },
    {
      duration: 67,
      time: new Date('2018-09-14'),
      recordTime: new Date(2018, 9, 14, 16, 3, 24),
      night: false,
      supervisor: 'Gang Liu',
      key: 'r9ce223x3',
    },
    {
      duration: 195,
      time: new Date('2018-09-20'),
      recordTime: new Date(2018, 9, 20, 22, 14, 42),
      night: false,
      supervisor: 'Gang Liu',
      key: 'r9cxvl8e23',
    },
  ]);
  const [transitions, setTransitions] = React.useState<TransitionStates>(
    drives.reduce((map, { key }) => ({ ...map, [key]: false }), {})
  );
  console.log({ drives, transitions });

  function toggleEdit() {
    setEdit(!edit);
  }

  function scheduleDeleteDrive(key: string) {
    setTransitions({ ...transitions, [key]: true });
  }

  function deleteDrive(key: string) {
    setDrives(drives.filter(d => d.key !== key));
    const { [key]: _, ...others } = transitions;
    setTransitions(others);
  }

  return (
    <BasePage
      pageTitle="Driving Log"
      menuItems={
        <div>
          <MenuItem onClick={toggleEdit}>
            <ListItemIcon>{edit ? <DoneIcon /> : <EditIcon />}</ListItemIcon>
            <ListItemText primary={edit ? 'Done' : 'Edit'} />
          </MenuItem>
          <MenuItem>Foo</MenuItem>
          <MenuItem>Foo</MenuItem>
        </div>
      }
    >
      <List>
        {drives.map(drive => (
          <Collapse
            in={!transitions[drive.key]}
            key={drive.key}
            onExited={() => deleteDrive(drive.key)}
          >
            <ListItem>
              <ListItemText
                primary={Time.toHourMinute(drive.duration)}
                secondary={Time.toShortDate(drive.time)}
              />
              {edit && (
                <ListItemSecondaryAction>
                  <IconButton onClick={() => scheduleDeleteDrive(drive.key)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              )}
            </ListItem>
          </Collapse>
        ))}
      </List>
    </BasePage>
  );
};

export default withStyles(styles)(DrivingPage);
