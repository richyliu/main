import * as React from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import {
  default as withStyles,
  WithStyles,
  StyleRules
} from '@material-ui/core/styles/withStyles';

import BasePage from 'src/global/BasePage';

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
  const [fat, setFat] = useState<boolean>(true);

  return (
    <BasePage pageTitle="Driving Log">
      Driving page{' '}
      <span className={fat ? classes.green : classes.red}>
        {fat ? 'true' : 'false'}
      </span>
      <Button onClick={() => setFat(!fat)}>Toggle</Button>
    </BasePage>
  );
};

export default withStyles(styles)(DrivingPage);
