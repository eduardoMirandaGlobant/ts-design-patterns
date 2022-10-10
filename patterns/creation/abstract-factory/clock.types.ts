export enum Country {
  Argentina = "Argentina",
  Mexico = "Mexico",
  Colombia = "Colombia",
  UnitedStates = "United Stated",
}

type ArgentinaClockType = "Argentina";
type MexicoClockType = "Mexico";
type ColombiaClockType = "Colombia";
type UnitedStatesClockType = "United Stated";

export type ClockTypes =
  | ArgentinaClockType
  | MexicoClockType
  | ColombiaClockType
  | UnitedStatesClockType;
