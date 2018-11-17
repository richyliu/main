export type KeyedArrayItem<T> = T & { key: string };
export interface KeyedArray<T> extends Array<KeyedArrayItem<T>> {}

export interface BooleanMap extends StringMap<boolean> {}
export interface StringMap<T> {
  [key: string]: T;
}
