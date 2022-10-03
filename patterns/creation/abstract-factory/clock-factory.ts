import { ArgentinaClock } from "./argentina-clock";
import { Clock } from "./clock";
import { MexicoClock } from "./mexico-clock";

export class ClockFactory {
  public static ARGENTINA_CLOCK = 0;
  public static MEXICO_CLOCK = 1;

  constructor() {}

  public static createClock(clockType: Number): Clock {
    if (clockType == this.ARGENTINA_CLOCK) return new ArgentinaClock();
    if (clockType == this.MEXICO_CLOCK) return new MexicoClock();
    return undefined;
  }
}
