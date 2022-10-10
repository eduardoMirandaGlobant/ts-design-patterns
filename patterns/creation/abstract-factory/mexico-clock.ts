import { Clock } from "./clock";

export class MexicoClock implements Clock {
  public getTime(): string {
    const d = new Date();
    return d.toLocaleString("en-US", {
      timeZone: "America/Mexico_City",
    });
  }
}
