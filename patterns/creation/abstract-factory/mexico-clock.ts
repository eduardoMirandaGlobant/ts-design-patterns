import { Clock } from "./clock";

export class MexicoClock extends Clock {
  public getTime(): string {
    const d = new Date();
    return d.toLocaleString("en-US", {
      timeZone: "America/Mexico_City",
    });
  }
}
