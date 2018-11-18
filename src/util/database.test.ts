import { DriveDatabase } from './database';
import { drives } from './mock';
import { stringMapToKeyedArray } from './converter';

describe('drive database', () => {
  test('set all and get all', async () => {
    expect.assertions(1);

    await DriveDatabase.setAll(stringMapToKeyedArray(drives));

    await expect(DriveDatabase.getAll()).resolves.toEqual(
      stringMapToKeyedArray(drives)
    );
  });

  test('set', async () => {
    expect.assertions(1);
    const keyedDrives = stringMapToKeyedArray(drives);

    await DriveDatabase.set('abc', keyedDrives[0]);

    await expect(DriveDatabase.getAll()).resolves.toEqual([
      ...keyedDrives,
      { ...drives['r9ce23'], key: 'abc' },
    ]);
  });

  test('get', async () => {
    expect.assertions(2);

    const data = await DriveDatabase.get('r9ce223x3');
    expect(data).toEqual({
      duration: 67,
      time: new Date('2018-09-14'),
      recordTime: new Date(2018, 9, 14, 16, 3, 24),
      night: false,
      supervisor: 'Gang Liu',
      key: 'r9ce223x3',
    });

    await expect(
      DriveDatabase.get('none_existant_key')
    ).rejects.toBeUndefined();
  });

  test('has', async () => {
    expect.assertions(3);

    await expect(DriveDatabase.has('r9ce223x3')).resolves.toBeTruthy();
    await expect(DriveDatabase.has('non_existant_key')).resolves.toBeFalsy();

    DriveDatabase.set('new_one', {
      duration: 67,
      time: new Date('2018-09-14'),
      recordTime: new Date(2018, 9, 14, 16, 3, 24),
      night: false,
      supervisor: 'Gang Liu',
    });
    await expect(DriveDatabase.has('new_one')).resolves.toBeTruthy();
  });
});

test('promises work', () => {
  return new Promise(resolve => resolve('foo')).then(data => {
    expect(data).toBe('foo');
  });
});
