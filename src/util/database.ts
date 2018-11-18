import DatabaseInterface from 'src/models/databaseInterface';
import { StringMap, KeyedArray, KeyedArrayItem } from 'src/models/standard';
import Drive from 'src/models/drive';
import { MockDatabase, drives } from './mock';
import { stringMapToKeyedArray, keyedArrayToStringMap } from './converter';

const drivesDB = new MockDatabase<Drive>(drives);

const MockDriveDatabase: DatabaseInterface<Drive> = {
  getAll() {
    return Promise.resolve(stringMapToKeyedArray(drivesDB.getAll()));
  },
  setAll(all: KeyedArray<Drive>) {
    drivesDB.setAll(keyedArrayToStringMap(all));
    return Promise.resolve();
  },
  /**
   * Promise may be rejected if key does not exist
   * @param key Of the drive to get
   */
  get(key: string) {
    return new Promise((resolve, reject) => {
      const drive = drivesDB.get(key);
      if (drive) {
        resolve({ ...drive, key });
      } else {
        reject();
      }
    });
  },
  set(key: string, item: Drive) {
    drivesDB.set(key, item);

    return Promise.resolve();
  },
  has(key: string) {
    return Promise.resolve(drivesDB.has(key));
  },
  remove(key: string) {
    drivesDB.remove(key);

    return Promise.resolve();
  },
};

export const DriveDatabase = MockDriveDatabase;
