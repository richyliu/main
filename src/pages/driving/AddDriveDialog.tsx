import React, { useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Slider from '@material-ui/lab/Slider';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import * as Time from 'src/helpers/time';
import * as Settings from 'src/helpers/settings';
import Drive from 'src/models/drive';
import BasePage from 'src/global/BasePage';
import BackButton from 'src/global/BackButton';
import withStyles, {
  WithStyles,
  StyleRules,
} from '@material-ui/core/styles/withStyles';

const styles: StyleRules = {
  slider: {
    paddingBottom: 20,
  },
  formElement: {
    marginTop: 0,
    marginBottom: 20,
  },
};

interface AddDriveDialogProps extends WithStyles {
  open: boolean;
  onClose: () => void;
  addDrive: (drive: Drive) => void;
}

const SlideUp = (props): JSX.Element => <Slide direction="up" {...props} />;

const AddDriveDialog: React.FunctionComponent<AddDriveDialogProps> = ({
  open,
  onClose,
  addDrive,
  classes,
}) => {
  const [duration, setDuration] = useState<number>(0);
  const [time, setTime] = useState<Date>(new Date());
  const [night, setNight] = useState<boolean>(false);
  // max time of slider
  const [maxTime, setMaxTime] = useState<number>(60);
  const [supervisor, setSupervisor] = useState<string>(
    Settings.driving.getDefaultSupervisor()
  );

  function addNewDrive() {
    addDrive({
      recordTime: new Date(),
      duration,
      time,
      night,
      supervisor,
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
        left={<BackButton onClose={onClose} />}
        right={
          <Button onClick={addNewDrive} color="inherit">
            Add
          </Button>
        }
      >
        <Typography className={classes.formElement}>
          Drive Time: {Time.toHourMinute(duration)}
        </Typography>
        <Slider
          value={duration}
          onChange={(_, val) => setDuration(val)}
          max={maxTime}
          className={classes.slider}
        />
        <div className={classes.formElement}>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={() => setMaxTime(maxTime == 60 ? 180 : 60)}
          >
            {maxTime == 60 ? 'More' : 'Less'}
          </Button>
        </div>

        <TextField
          label="Time"
          type="date"
          value={Time.toISODate(time)}
          onChange={e => setTime(new Date(e.target.value))}
          className={classes.formElement}
        />

        <FormGroup className={classes.formElement}>
          <FormControlLabel
            control={
              <Switch
                checked={night}
                onChange={e => setNight(e.target.checked)}
                value="night"
              />
            }
            label="Night"
          />
        </FormGroup>

        <TextField
          label="Supervisor"
          margin="normal"
          value={supervisor}
          onChange={e => setSupervisor(e.target.value)}
          className={classes.formElement}
        />
      </BasePage>
    </Dialog>
  );
};

export default withStyles(styles)(AddDriveDialog);
