import * as React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

export default interface Page {
  name: string;
  route: string;
  component: React.ComponentType;
  icon: React.ReactElement<SvgIconProps>;
  redirectTo?: string;
}
