export default interface MenuContent {
  /**
   * Called when menu item is clicked.
   */
  onClick?: () => void;
  /**
   * Initial and alternate text. Text is swapped on click
   */
  text: string | [string, string];
  /**
   * Initial and alternate icon. Icon is swapped on clcik
   */
  icon?: JSX.Element | [JSX.Element, JSX.Element];
}
