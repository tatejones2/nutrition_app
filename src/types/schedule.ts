export type ScheduleItemType =
  | "lift"
  | "practice"
  | "game"
  | "class"
  | "work"
  | "travel"
  | "recovery"
  | "meal"
  | "sleep"
  | "other";

export interface ScheduleItem {
  id: string;
  date: string;
  title: string;
  itemType: ScheduleItemType;
  startTime: string;
  endTime: string;
  intensity: number;
  location: string;
  notes: string;
}
