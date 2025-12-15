# Setup Guide

Complete setup guide for React Templates with Tailwind CSS, shadcn-ui, and Lucide icons.

## Tech Stack

- **React 18.2** - UI library
- **Vite 6** - Build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **shadcn-ui** - Beautiful, accessible components
- **Lucide React** - Icon library
- **Framer Motion** - Animation library
- **React Router DOM** - Routing

## Prerequisites

- Node.js v18 or higher
- npm v9 or higher

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## Project Structure

```
react-templates-FREE/
├── src/
│   ├── components/        # React components
│   │   └── ui/           # shadcn-ui components
│   ├── lib/              # Utility functions
│   │   └── utils.js      # cn() helper for Tailwind
│   ├── hooks/            # Custom React hooks
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles + Tailwind
├── public/               # Static assets
├── docs/                 # Documentation
├── components.json       # shadcn-ui configuration
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── package.json
```

## Adding shadcn-ui Components

Use the shadcn-ui CLI to add components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dropdown-menu
```

Components will be added to `src/components/ui/`

## Using Lucide Icons

```jsx
import { Palette, Home, User } from 'lucide-react'

function MyComponent() {
  return (
    <div>
      <Palette className="w-5 h-5" />
      <Home className="w-6 h-6 text-primary" />
    </div>
  )
}
```

## Using Framer Motion

```jsx
import { motion } from 'framer-motion'

function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Content
    </motion.div>
  )
}
```

## Tailwind CSS Configuration

The project uses Tailwind CSS with:
- CSS variables for theming
- Dark mode support
- Custom color palette
- shadcn-ui compatible configuration

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Next Steps

1. Add shadcn-ui components as needed
2. Create your component library
3. Customize the theme in `tailwind.config.js`
4. Build your application!

