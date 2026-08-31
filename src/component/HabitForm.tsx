import { useState, type SubmitEvent } from "react";
import Button from "./Button";
import { useHabit } from "../context/useHabit";

function HabitForm() {
  const { addHabit } = useHabit();
  const [name, setName] = useState("");

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    if (name.trim() === "") return;

    addHabit(name);
    setName("");
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1 py-2 px-4 rounded-lg bg-zinc-800 border-solid border-2 border-zinc-600 outline-none"
        type="text"
        placeholder="New habit..."
      />
      <Button disabled={name.trim() === ""}>Add Habit</Button>
    </form>
  );
}

export default HabitForm;
