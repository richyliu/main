export default interface MenuContent {
  /**
   * Called when menu item is clicked.
   */
  onClick: () => void;
  text: string;
  /**
   * Initial icon
   */
  icon?: JSX.Element;
}
