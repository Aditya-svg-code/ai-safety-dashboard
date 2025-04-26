# AI Safety Incident Dashboard

### Deployed
Link: https://ai-safety-dashboard-inky.vercel.app/

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Design Decisions](#design-decisions)
- [Challenges](#challenges)
- [Future Improvements](#future-improvements)

## Features
- View list of AI safety incidents (Title, Severity, Reported Date)
- Filter by Severity (All/Low/Medium/High)
- Sort by Reported Date (Newest/Oldest First)
- Expand/collapse incident details
- Add new incidents via form
- Edit/Delete existing incidents
- Dark/Light mode toggle
- Responsive layout

## Technologies Used
- ⚡ [Vite](https://vitejs.dev/) - Fast frontend tooling
- ⚛️ [React 18](https://reactjs.org/) - Component-based UI library
- 💻 [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- 🎨 [Material-UI (MUI)](https://mui.com/) - UI components & theming
- ✨ [Framer Motion](https://www.framer.com/motion/) - Animations

## Installation

1. Clone repository:
```bash
git clone https://github.com/aditya-svg-code/ai-safety-dashboard.git
cd ai-safety-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start development server:
```bash
npm run dev
# or
yarn dev
```

4. Open in browser:
```
http://localhost:5173
```

## Project Structure
```
src/
├── components/
│   ├── IncidentCard.tsx    # Single incident display
│   ├── IncidentForm.tsx    # New incident form
│   ├── IncidentList.tsx    # Filterable/sortable list
│   └── StatsCards.tsx      # Summary statistics
├── theme/
│   └── ColorModeContext.tsx # Theme context
├── types/
│   └── Incident.ts         # Type definitions
├── utils/
│   └── severityColors.ts   # Severity color mapping
├── App.tsx                 # Root component
└── main.tsx                # Entry point
```

## Design Decisions

| Decision                | Rationale                             |
|--------------------------|---------------------------------------|
| React hooks for state    | Simple state management for assignment scope |
| MUI components           | Pre-built accessible UI elements     |
| TypeScript interfaces    | Strict typing for incident data      |
| Mobile-first design      | Better responsiveness                |
| Animated transitions     | Enhanced UX without distraction      |

## Challenges
- **Inline Editing**: Implementing edit mode while maintaining clean state management
- **Form Validation**: Ensuring required fields while keeping UI intuitive
- **Theme Consistency**: Maintaining proper colors across light/dark modes

## Future Improvements
- [ ] Persist data using localStorage
- [ ] Add search functionality
- [ ] Implement user authentication
- [ ] Add data visualization charts
- [ ] Unit testing with Jest
- [ ] CI/CD pipeline

---

### Key Features of This README:
- Clean markdown formatting with emojis for visual scanning
- Organized sections with table of contents
- Code blocks for commands and project structure
- Tables for design decisions
- Checklist for future improvements
- Consistent spacing and headings

---

**Notes:**
- Replace the clone URL with your actual repository URL.
- Add actual screenshots if available.
- Adjust any implementation details that differ from your actual code.

