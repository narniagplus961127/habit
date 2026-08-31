# 🔥 Habit Tracker

A minimal yet powerful habit tracking app that helps you build consistency through daily streaks. Track your habits on a weekly calendar, visualize your progress, and stay motivated with streak counters.

## ✨ Features

- **Add & Delete Habits** — Quickly create new habits and remove ones you no longer need
- **Weekly Calendar View** — Toggle completions for each day of the week at a glance
- **Streak Tracking** — Consecutive-day streaks are automatically calculated with a 🔥 indicator
- **Week Navigation** — Browse past weeks to review your history (future weeks are disabled)
- **Persistent Storage** — All data is saved to `localStorage` so nothing is lost on refresh
- **Daily Progress** — See how many habits you've completed today in the header

## 🛠 Tech Stack

| Layer        | Technology                      |
| ------------ | ------------------------------- |
| Framework    | React 19                        |
| Language     | TypeScript 6                    |
| Build Tool   | Vite 8                          |
| Styling      | Tailwind CSS 4                  |
| Date Utility | date-fns                        |
| Linting      | ESLint + React Compiler (Babel) |

## 📁 Project Structure

```
src/
├── main.tsx                    # App entry point
├── App.tsx                     # Root component — composes Header, HabitForm, HabitList
├── index.css                   # Global styles
├── component/
│   ├── Button.tsx              # Reusable button with variant support
│   ├── Header.tsx              # App title, daily progress, and week navigation
│   ├── HabitForm.tsx           # Input form for adding new habits
│   └── HabitList.tsx           # Renders all habits with per-day toggle buttons
└── context/
    ├── HabitProvider.tsx       # Central state: habits, week offset, CRUD actions
    ├── useHabit.tsx            # Context consumer hook with safety check
    └── useLocalStorage.tsx     # Generic localStorage-backed useState hook
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/narniagplus961127/habit.git
cd habit

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview   # Preview the production build locally
```

### Lint

```bash
npm run lint
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
