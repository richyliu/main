import { KeyedArray } from 'src/models/standard';
import Drive from 'src/models/drive';

export const drives: KeyedArray<Drive> = [
  {
    duration: 30,
    time: new Date('2018-09-11'),
    recordTime: new Date(2018, 9, 11, 9, 14, 24),
    night: false,
    supervisor: 'Gang Liu',
    key: 'r9ce23'
  },
  {
    duration: 67,
    time: new Date('2018-09-14'),
    recordTime: new Date(2018, 9, 14, 16, 3, 24),
    night: false,
    supervisor: 'Gang Liu',
    key: 'r9ce223x3'
  },
  {
    duration: 195,
    time: new Date('2018-09-20'),
    recordTime: new Date(2018, 9, 20, 22, 14, 42),
    night: false,
    supervisor: 'Gang Liu',
    key: 'r9cxvl8e23'
  }
];
