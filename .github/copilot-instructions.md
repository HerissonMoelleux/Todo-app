# Copilot Instructions for Todo-App

## Project Overview

A React 19 + Vite + React Router todo application with task categorization (Today, Tomorrow, Week) and a sidebar navigation. The app uses CSS Modules for styling and manages state at the App root level.

## Architecture & Data Flow

### State Management Pattern

- **Root state** (`App.jsx`): Three separate state arrays (`todayTasks`, `weekTasks`, `tomorrowTasks`) for each category
- **Task object structure**: `{ id: number, content: string, isComplete: boolean }`
- **Props via Outlet context**: `App.jsx` passes state and handlers via React Router's `useOutletContext()` hook to child pages
- **No external state management**: All mutations happen through explicit handler functions in `App.jsx`

### Component Architecture

```
App.jsx (state root + Outlet provider)
├── Sidebar (sidebar navigation with task counts)
├── Pages (routed via Outlet context)
│   ├── Today/Tomorrow/Week (category pages)
│   ├── Home (index page)
│   └── Upcoming (combined view)
└── TaskCard (reusable card for task display)
    └── TaskItem (individual task rendering)
```

### Routing Structure

- Route definitions in `main.jsx` with `createBrowserRouter`
- Paths: `/`, `/today`, `/tomorrow`, `/week`, `/upcoming`
- Child routes access parent state via `useOutletContext()` from `App.jsx` (not shown but used by page components)

## Critical Conventions

### CSS Modules Usage

- **Every component** has a `.module.css` file (e.g., `TaskCard.jsx` + `TaskCard.module.css`)
- Import pattern: `import styles from "./ComponentName.module.css"`
- Class application: `className={styles.className}` or dynamic: `${styles.card} ${styles[size]}`
- **Key file to reference**: `src/components/TaskCard/TaskCard.jsx` (shows size prop usage)

### Task Handler Pattern

When implementing task operations (add/remove/toggle):

1. Handlers in `App.jsx` receive `id` and `category` parameters
2. Use category string ("today", "week", "tomorrow") to route to correct state
3. Utility functions in `src/utils/taskUtils.js` handle list transformations (immutably)
4. Example: `removeTask(id, list)` returns filtered array without mutation

### Icon & Asset Management

- SVG assets stored in `src/assets/` (upcoming.svg, list.svg, red.svg, green.svg, blue.svg, add.svg)
- Imported as modules: `import upcomingIcon from "../../assets/upcoming.svg"`
- Used as `<img src={icon} alt="..." />`

## Development Commands

- `npm run dev` — Start Vite dev server
- `npm run build` — Production build
- `npm run lint` — Run ESLint (custom rule: capitals/underscores ignored for unused vars)
- `npm run preview` — Preview production build

## Key Files for Reference

- **State + Routing**: `src/App.jsx`, `src/main.jsx`
- **Component Pattern**: `src/components/TaskCard/TaskCard.jsx` (shows conditional styling, props, children)
- **Utility Functions**: `src/utils/taskUtils.js` (immutable task transformations)
- **Sidebar**: `src/components/Sidebar/Sidebar.jsx` (hardcoded lists, icon + title + count pattern)

## ESLint Configuration

- React Hooks plugin rules enforced
- React Refresh compatible
- No-unused-vars allows pattern: `varsIgnorePattern: '^[A-Z_]'` (component names, constants)

## Important Notes

- **Immutability**: All task list mutations use spread operator or `.map()/.filter()`
- **ID generation**: New tasks use `Date.now()` as unique ID
- **Sidebar counts**: Calculated in App root and passed as props to Sidebar component
- **Page components**: Not yet shown but must consume `useOutletContext()` to access tasks and handlers
