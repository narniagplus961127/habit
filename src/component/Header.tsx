import Button from "./Button";
import { useHabit } from "../context/useHabit";
import { format, isFuture, isToday } from "date-fns";

function Header() {
  const { habits, visiblesDates, onNextWeek, onPrevWeek } = useHabit();

  const doneToday = habits.filter((habit) =>
    habit.completions.some((completion) => isToday(completion)),
  ).length;

  const dateRange = `${format(visiblesDates[0], "MMM d")} - ${format(
    visiblesDates[visiblesDates.length - 1],
    "MMM d",
  )}`;

  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-">Habit Tracker 🌱</h1>
        <span className="text-zinc-400 text-sm">
          {doneToday} / {habits.length} done today
        </span>
      </div>

      <div className="flex flex-col items-end gap-2">
        <span className="text-zinc-400 text-sm">{dateRange}</span>
        <div className="flex items-center  gap-3">
          <Button onClick={onPrevWeek}>Prev</Button>
          <Button
            onClick={onNextWeek}
            disabled={visiblesDates.some((d) => isToday(d) || isFuture(d))}
          >
            Next
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
