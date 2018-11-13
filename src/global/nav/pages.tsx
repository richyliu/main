import * as React from 'react';
import {
  Home as HomeIcon,
  CalendarToday as CalendarTodayIcon,
  DirectionsCar as DirectionsCarIcon,
  VpnKey as VpnKeyIcon
} from '@material-ui/icons';

import Page from 'src/models/page';
import HomePage from 'src/pages/home/HomePage';
import HabitsPage from 'src/pages/habits/HabitsPage';
import DrivingPage from 'src/pages/driving/DrivingPage';
import PasspassPage from 'src/pages/passpass/PasspassPage';

const pages: Page[] = [
  {
    name: 'Home',
    route: '/home',
    component: HomePage,
    icon: <HomeIcon />,
  },
  {
    name: 'Habits',
    route: '/habits',
    component: HabitsPage,
    icon: <CalendarTodayIcon />,
  },
  {
    name: 'Driving Log',
    route: '/driving',
    component: DrivingPage,
    icon: <DirectionsCarIcon />,
  },
  {
    name: 'Passpass',
    route: '/passpass',
    component: PasspassPage,
    icon: <VpnKeyIcon />,
  },
];

export default pages;
