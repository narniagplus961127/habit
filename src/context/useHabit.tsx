import { createContext, useContext } from "react";
import type { Habit } from "./HabitProvider";

type HabitContext = {
  habits: Habit[];
  visiblesDates: Date[];
  toggleHabit: (id: string, date: Date) => void;
  deleteHabit: (id: string) => void;
  addHabit: (name: string) => void;
  onPrevWeek: () => void;
  onNextWeek: () => void;
};

export const HabitContext = createContext<null | HabitContext>(null);

export function useHabit() {
  const habitContext = useContext(HabitContext);

  if (habitContext === null) {
    throw new Error("useHabit must be used within a HabitProvider");
  }

  return habitContext;
}
