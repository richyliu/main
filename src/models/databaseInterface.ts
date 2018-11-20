import { KeyedArray, KeyedArrayItem } from './standard';

export default interface DatabaseInterface<T extends object> {
  getAll(): Promise<KeyedArray<T>>;
  useGetAll(): KeyedArray<T>;
  setAll(items: KeyedArray<T>): Promise<void>;
  get(key: string): Promise<KeyedArrayItem<T>>;
  set(key: string, item: T): Promise<void>;
  has(key: string): Promise<boolean>;
  remove(key: string): Promise<void>;
  add(item: T): Promise<string>;
}
