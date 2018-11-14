import * as React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

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
