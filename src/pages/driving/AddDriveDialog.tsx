import * as React from 'react';
import { useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Slider from '@material-ui/lab/Slider';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import CancelIcon from '@material-ui/icons/Cancel';

import * as Settings from 'src/helpers/settings';
import Drive from 'src/models/drive';
import BasePage from 'src/global/BasePage';

interface AddDriveDialogProps {
  open: boolean;
  onClose: () => void;
  addDrive: (drive: Drive) => void;
}

const SlideUp = (props): JSX.Element => <Slide direction="up" {...props} />;

const AddDriveDialog: React.FunctionComponent<AddDriveDialogProps> = ({
  open,
  onClose,
  addDrive,
}) => {
  const [time, setTime] = useState<number>(0);

  function addNewDrive() {
    addDrive({
      duration: 10,
      time: new Date(2018, 9, 11),
      recordTime: new Date(2018, 9, 12, 17, 3, 44),
      night: false,
      supervisor: Settings.driving.getDefaultSupervisor(),
    });
    onClose();
  }

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={SlideUp}
    >
      <BasePage
        pageTitle="Add new log"
        left={
          <IconButton onClick={() => console.log('hello')}>
            <CancelIcon/>
          </IconButton>
        }
        right={
          <Button onClick={addNewDrive} color="inherit">
            Add
          </Button>
        }
      >
        <Typography paragraph>Drive Time</Typography>
        <Tooltip title="Add" placement="top-start" open>
          <Slider value={time} onChange={(e, val) => setTime(val)} />
        </Tooltip>
      </BasePage>
    </Dialog>
  );
};

export default AddDriveDialog;
