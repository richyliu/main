/**
 * One log entry for driving in the car
 */
export default interface Drive {
  /**
   * Duration of drive in minutes
   */
  duration: number;
  /**
   * When this driving occured (should be date only; time portion is ignored)
   */
  time: Date;
  /**
   * When this entry was recorded (should be date and time)
   */
  recordTime: Date;
  /**
   * Whether or not the driving occured at night
   */
  night: boolean;
  /**
   * Name of person who supervised driving
   */
  supervisor: string;
}
