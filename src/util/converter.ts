import { KeyedArray, StringMap, KeyedArrayItem } from 'src/models/standard';

export function keyedArrayToStringMap<T extends object>(
  keyedArray: KeyedArray<T>
): StringMap<T> {
  const map: StringMap<T> = {};

  keyedArray.forEach((item: KeyedArrayItem<T>) => {
    // explicit cast to object to prevent rest spread error
    const { key, ...others } = item as KeyedArrayItem<object>;
    map[key] = others as KeyedArrayItem<T>;
  });

  return map;
}

export function stringMapToKeyedArray<T extends object>(
  stringMap: StringMap<T>
): KeyedArray<T> {
  return Object.keys(stringMap).reduce(
    (arr, key) =>
      // explicit cast to object and back to KeyedArrayItem to prevent rest spread error
      arr.concat([{ ...(stringMap[key] as object), key } as KeyedArrayItem<T>]),
    [] as KeyedArray<T>
  );
}
