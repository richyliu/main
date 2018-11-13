/**
 * Every page should use or extend these props.
 */

export default interface BasePageProps {
  setTitle: (title: string, displayBack?: boolean) => void;
}