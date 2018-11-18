import { drives, MockDatabase } from './mock';
import DrivesList from 'src/pages/driving/DrivesList';

test('drives mock source exists', () => {
  expect(Object.keys(drives).length).toBeGreaterThan(1);
});

test('mock database initializes', () => {
  new MockDatabase();
});

describe('mock database data tests', () => {
  const initialData = {
    banana: 'delicious',
    apple: 'disgusting',
    grape: 'juicy',
    orange: 'yellow???',
    animalis: '0',
  };
  const db = new MockDatabase<string>(initialData);

  test('getall works', () => {
    expect(db.getAll()).toEqual(initialData);
  });

  test('get works', () => {
    expect(db.get('banana')).toBe('delicious');
  });

  test('set works', () => {
    db.set('banana', 'yuck');
    expect(db.get('banana')).toBe('yuck');
  });

  test('setall works', () => {
    db.setAll(initialData);
    expect(db.getAll()).toEqual(initialData);
  })

  test('has works', () => {
    expect(db.has('banana')).toBeTruthy();
    expect(db.has('manzana')).toBeFalsy();
  })

  test('remove works', () => {
    db.remove('apple');
    expect(db.has('apple')).toBeFalsy();
    expect(db.get('apple')).toBeUndefined();
  })
});
