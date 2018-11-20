import { useState, useEffect } from 'react';

import { useCollection } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firestore as db } from 'firebase';

import DatabaseInterface from 'src/models/databaseInterface';
import { KeyedArray, KeyedArrayItem } from 'src/models/standard';
import Drive from 'src/models/drive';
import { MockDatabase, drives } from './mock';
import { stringMapToKeyedArray, keyedArrayToStringMap } from './converter';
import * as Settings from './settings';

const generateKey = () => Math.random().toString(36);

const drivesDB = new MockDatabase<Drive>(drives);

// mock drive database watchers for changes in the database
const watchers: ((newAll: KeyedArray<Drive>) => void)[] = [];
function subscribe(watcher) {
  if (!watchers.find(w => w + '' === watcher + '')) {
    watchers.push(watcher);

    console.log('added');
    // initial update
    setTimeout(() => {
      MockDriveDatabase.getAll().then(d => watcher(d));
    }, 1000);
  }
}
function unsubscribe(watcher) {
  watchers.filter(w => w !== watcher);
}
function updateWatchers() {
  MockDriveDatabase.getAll().then(newDrives =>
    watchers.forEach(w => w(newDrives))
  );
}

const MockDriveDatabase: DatabaseInterface<Drive> = {
  getAll() {
    return Promise.resolve(stringMapToKeyedArray(drivesDB.getAll()));
  },
  useGetAll() {
    const [all, setAll] = useState<KeyedArray<Drive>>([]);

    function onChange(newAll) {
      setAll(newAll);
    }

    useEffect(() => {
      subscribe(onChange);

      return () => unsubscribe(onChange);
    });

    return all;
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

    updateWatchers();
    return Promise.resolve();
  },
  has(key: string) {
    return Promise.resolve(drivesDB.has(key));
  },
  remove(key: string) {
    drivesDB.remove(key);

    updateWatchers();
    return Promise.resolve();
  },
  add(item: Drive) {
    const key = generateKey();
    drivesDB.set(key, item);

    updateWatchers();
    return Promise.resolve(key);
  },
};

const drivesCollection = db()
  .collection('users')
  .doc('6obYv9VLwucZAGtiigGr75krfCv2')
  .collection(Settings.database.driving);
export const DriveDatabase: DatabaseInterface<Drive> = {
  async getAll() {
    const drives = await drivesCollection.get();

    return drives.docs.map(doc => ({
      ...(doc.data() as Drive),
      key: doc.id,
    }));
  },
  useGetAll() {
    const { value: drives } = useCollection(drivesCollection);

    if (drives) {
      console.log(drives.docs[0].data());
      return drives.docs.map(doc => {
        const data = doc.data();
        data.recordTime = new Date(
          data.recordTime.seconds * 1e3 + data.recordTime.nanoseconds / 1e6
        );
        data.time = new Date(
          data.time.seconds * 1e3 + data.time.nanoseconds / 1e6
        );

        return {
          ...(data as Drive),
          key: doc.id,
        };
      });
    } else {
      return [];
    }
  },
  async setAll(items: KeyedArray<Drive>) {
    await Promise.all(
      items.map(keyedDrive => {
        const { key, ...drive } = keyedDrive;
        this.set(key, drive);
      })
    );
  },
  async get(key: string) {
    const drive = await drivesCollection.doc(key).get();

    return { ...(drive.data() as Drive), key };
  },
  set(key: string, item: Drive) {
    return drivesCollection.doc(key).set(item);
  },
  async has(key: string) {
    const maybeDrive = await drivesCollection.doc(key).get();
    return maybeDrive.exists;
  },
  remove(key: string) {
    return drivesCollection.doc(key).delete();
  },
  async add(item: Drive) {
    const doc = await drivesCollection.add(item);
    return doc.id;
  },
};

// DEBUG ONLY
(window as any).__debug = {
  getDrives() {
    return MockDriveDatabase.getAll();
  },
  addRandomDrive() {
    MockDriveDatabase.add({
      duration: Math.random() * 60,
      time: new Date(2018, 9, 10),
      recordTime: new Date(2018, 9, 12, 13, 44, 22),
      supervisor: 'Gang Liu',
      night: Math.random() > 0.5,
    });
  },
};
