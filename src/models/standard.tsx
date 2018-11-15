export interface TransitionStates {
  [key: string]: boolean;
}

export type KeyedArrayItem<T> = T & { key: string };

export interface KeyedArray<T> extends Array<KeyedArrayItem<T>> {}

export interface StringMap<T> {
  [key: string]: T;
}
