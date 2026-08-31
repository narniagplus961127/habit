import HabitForm from "./component/HabitForm";
import HabitList from "./component/HabitList";
import Header from "./component/Header";
import HabitProvider from "./context/HabitProvider";

function App() {
  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-4 p-4">
      <HabitProvider>
        <Header />
        <HabitForm />
        <HabitList />
      </HabitProvider>
    </div>
  );
}

export default App;
