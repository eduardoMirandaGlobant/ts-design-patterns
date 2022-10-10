import { ArgentinaClock } from "./argentina-clock";
import { Clock } from "./clock";
import { ClockTypes, Country } from "./clock.types";
import { MexicoClock } from "./mexico-clock";

export class ClockFactory {
  private constructor() {}

  public static createClock(clockType: ClockTypes): Clock {
    if (clockType == Country.Argentina) return new ArgentinaClock();
    if (clockType == Country.Mexico) return new MexicoClock();
    return undefined;
  }
}
