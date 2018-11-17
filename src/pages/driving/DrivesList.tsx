import * as React from 'react';
import { useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';

import DeleteIcon from '@material-ui/icons/Delete';

import * as Time from 'src/helpers/time';
import { KeyedArray, BooleanMap } from 'src/models/standard';
import Drive from 'src/models/drive';

interface DrivesListProps {
  drives: KeyedArray<Drive>;
  removeDrive: (key: string) => void;
  edit: boolean;
}

const DrivesList: React.FunctionComponent<DrivesListProps> = ({
  drives,
  removeDrive,
  edit
}) => {
  const [transitions, setTransitions] = useState<BooleanMap>(
    drives.reduce((map, { key }) => ({ ...map, [key]: false }), {})
  );

  function scheduleDeleteDrive(key: string) {
    setTransitions({ ...transitions, [key]: true });
  }

  function deleteDrive(key: string) {
    const { [key]: _, ...others } = transitions;
    setTransitions(others);
    removeDrive(key);
  }

  return (
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
  );
};

export default DrivesList;
