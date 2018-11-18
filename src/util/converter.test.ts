import { keyedArrayToStringMap, stringMapToKeyedArray } from './converter';
import { KeyedArray, StringMap } from 'src/models/standard';

interface Person {
  name: string;
  age: number;
}

describe('keyed array to string map', () => {
  test('converts correctly', () => {
    expect(
      keyedArrayToStringMap<Person>([
        {
          name: 'John',
          age: 22,
          key: '9xusne',
        },
        {
          name: 'Bob',
          age: 59,
          key: '2390xS',
        },
      ])
    ).toEqual({
      '9xusne': {
        name: 'John',
        age: 22,
      },
      '2390xS': {
        name: 'Bob',
        age: 59,
      },
    });
  });

  test('empty array', () => {
    expect(keyedArrayToStringMap<Person>([])).toEqual({});
  });

  test('key only', () => {
    expect(
      keyedArrayToStringMap<{}>([
        {
          key: '9xusne',
        },
        {
          key: '2390xS',
        },
      ])
    ).toEqual({
      '9xusne': {},
      '2390xS': {},
    });
  });
});

describe('string map to keyed array', () => {
  test('converts correctly', () => {
    expect(
      stringMapToKeyedArray<Person>({
        foobar: {
          name: 'hello',
          age: 49,
        },
        bazbqz: {
          name: 'johe',
          age: 46,
        },
      })
    ).toEqual([
      {
        name: 'hello',
        age: 49,
        key: 'foobar',
      },
      {
        name: 'johe',
        age: 46,
        key: 'bazbqz',
      },
    ]);
  });

  test('empty map', () => {
    expect(stringMapToKeyedArray<Person>({})).toEqual([]);
  });

  test('key only', () => {
    expect(
      stringMapToKeyedArray({
        '9xusne': {},
        '2390xS': {},
      })
    ).toEqual([
      {
        key: '9xusne',
      },
      {
        key: '2390xS',
      },
    ]);
  });
});

describe('conversion consistency', () => {
  test('keyed array to string map to keyed array', () => {
    const source: KeyedArray<Person> = [
      {
        name: 'John',
        age: 22,
        key: '9xusne',
      },
      {
        name: 'Bob',
        age: 59,
        key: '2390xS',
      },
    ];
    expect(stringMapToKeyedArray(keyedArrayToStringMap(source))).toEqual(
      source
    );
  });

  test('string map to keyed array to string map', () => {
    const source: StringMap<Person> = {
      foobar: {
        name: 'hello',
        age: 49,
      },
      bazbqz: {
        name: 'johe',
        age: 46,
      },
    };

    expect(keyedArrayToStringMap(stringMapToKeyedArray(source))).toEqual(
      source
    );
  });
});
