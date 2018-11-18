import { StringMap } from 'src/models/standard';
import Drive from 'src/models/drive';

export const drives: StringMap<Drive> = {
  r9ce23: {
    duration: 30,
    time: new Date('2018-09-11'),
    recordTime: new Date(2018, 9, 11, 9, 14, 24),
    night: false,
    supervisor: 'Gang Liu',
  },
  r9ce223x3: {
    duration: 67,
    time: new Date('2018-09-14'),
    recordTime: new Date(2018, 9, 14, 16, 3, 24),
    night: false,
    supervisor: 'Gang Liu',
  },
  r9cxvl8e23: {
    duration: 195,
    time: new Date('2018-09-20'),
    recordTime: new Date(2018, 9, 20, 22, 14, 42),
    night: false,
    supervisor: 'Gang Liu',
  },
};

export class MockDatabase<T> {
  private items: Map<string, T>;

  constructor(initial?: StringMap<T>) {
    if (initial) this.setAll(initial);
  }

  public get(key: string): T | undefined {
    return this.items.get(key);
  }

  public set(key: string, item: T): boolean {
    this.items.set(key, item);
    return true;
  }

  public getAll(): StringMap<T> {
    return Array.from(this.items[Symbol.iterator]()).reduce(
      (map: StringMap<T>, cur: [string, T]) => {
        map[cur[0]] = cur[1];
        return map;
      },
      {} as StringMap<T>
    );
  }

  public setAll(items: StringMap<T>): boolean {
    this.items = Object.keys(items).reduce(
      (map, key) => map.set(key, items[key]),
      new Map<string, T>()
    );
    return true;
  }

  public has(key: string): boolean {
    return this.items.has(key);
  }

  public remove(key: string): boolean {
    return this.items.delete(key);
  }
}
