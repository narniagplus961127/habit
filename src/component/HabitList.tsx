import { type Habit } from "../context/HabitProvider";
import { useHabit } from "../context/useHabit";
import Button from "./Button";
import { format, isFuture, isSameDay, subDays } from "date-fns";

type HabitItemProps = {
  habit: Habit;
};

function HabitList() {
  const { habits } = useHabit();

  if (habits.length === 0) {
    return (
      <div className="text-center text-zinc-500 py-8">
        No habits yet. Add one above to get started!
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {habits.map((habit) => {
        return <HabitItem key={habit.id} habit={habit} />;
      })}
    </div>
  );
}

function getStreak(completionDate: Date[]) {
  let streak = 0;
  let date = new Date();

  while (completionDate.some((d) => isSameDay(d, date))) {
    streak++;
    date = subDays(date, 1);
  }

  return streak;
}

function HabitItem({ habit }: HabitItemProps) {
  const { deleteHabit, toggleHabit, visiblesDates } = useHabit();

  const streak = getStreak(habit.completions);

  return (
    <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-medium">{habit.name}</span>
          {streak > 0 && (
            <span className="text-sm text-amber-400">🔥 {streak}</span>
          )}
        </div>
        <Button
          className="text-xs"
          variant="ghost-destructive"
          onClick={() => deleteHabit(habit.id)}
        >
          Delete
        </Button>
      </div>

      <div className="flex gap-2">
        {visiblesDates.map((date) => {
          const isCompleted = habit.completions.some((completionDate) =>
            isSameDay(completionDate, date),
          );

          return (
            <Button
              className="flex flex-col flex-1 items-center text-xs gap-0.5"
              key={date.toISOString()}
              disabled={isFuture(date)}
              variant={isCompleted ? "secondary" : "primary"}
              onClick={() => toggleHabit(habit.id, date)}
            >
              <span className="font-medium">{format(date, "EEE")}</span>
              <span>{format(date, "d")}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default HabitList;
