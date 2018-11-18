export type KeyedArrayItem<T extends object> = T & { key: string };
export interface KeyedArray<T extends object> extends Array<KeyedArrayItem<T>> {}

export interface BooleanMap extends StringMap<boolean> {}
export interface StringMap<T> {
  [key: string]: T;
}
