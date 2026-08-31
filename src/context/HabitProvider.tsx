import {
  addWeeks,
  eachDayOfInterval,
  endOfWeek,
  isSameDay,
  startOfWeek,
} from "date-fns";
import { useState, type ReactNode } from "react";
import { HabitContext } from "./useHabit";
import useLocalStorage from "./useLocalStorage";

export type Habit = {
  id: string;
  name: string;
  completions: Date[];
};

type HabitProviderProps = {
  children: ReactNode;
};

function HabitProvider({ children }: HabitProviderProps) {
  const [habits, setHabits] = useLocalStorage<Habit[]>("Habits", []);

  const [weekOffset, setWeekOffset] = useState(0);

  const week = addWeeks(new Date(), weekOffset);

  const visiblesDates = eachDayOfInterval({
    start: startOfWeek(week, { weekStartsOn: 1 }),
    end: endOfWeek(week, { weekStartsOn: 1 }),
  });

  function addHabit(name: string) {
    setHabits((prevHabits) => [
      ...prevHabits,
      { id: crypto.randomUUID(), name, completions: [] },
    ]);
  }

  function deleteHabit(id: string) {
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
  }

  function toggleHabit(id: string, date: Date) {
    setHabits((prevHabits) =>
      prevHabits.map((habit) => {
        if (habit.id === id) {
          if (habit.completions.some((d) => isSameDay(d, date))) {
            return {
              ...habit,
              completions: habit.completions.filter((d) => !isSameDay(d, date)),
            };
          }

          return { ...habit, completions: [...habit.completions, date] };
        }

        return habit;
      }),
    );
  }

  function onPrevWeek() {
    setWeekOffset((prev) => prev - 1);
  }

  function onNextWeek() {
    setWeekOffset((prev) => prev + 1);
  }

  return (
    <HabitContext
      value={{
        habits,
        visiblesDates,
        addHabit,
        deleteHabit,
        toggleHabit,
        onPrevWeek,
        onNextWeek,
      }}
    >
      {children}
    </HabitContext>
  );
}

export default HabitProvider;
