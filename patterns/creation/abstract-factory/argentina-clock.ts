import { Clock } from "./clock";

export class ArgentinaClock extends Clock {
  public getTime(): string {
    const d = new Date();
    return d.toLocaleString("es-US", {
      timeZone: "America/Argentina/Buenos_Aires",
    });
  }
}
