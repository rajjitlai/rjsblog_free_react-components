# React Templates - Free Components

A modern React component library built with **Tailwind CSS**, **shadcn-ui**, **Lucide icons**, and **Framer Motion**.

## ✨ Features

- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **shadcn-ui** - Beautiful, accessible components
- 🎯 **Lucide React** - Beautiful & consistent icon toolkit
- 🎭 **Framer Motion** - Smooth animations
- ⚡ **Vite** - Lightning-fast build tool
- 📱 **Responsive** - Mobile-first design

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📦 Adding Components

### Add shadcn-ui Components

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dropdown-menu
```

### Use Lucide Icons

```jsx
import { Palette, Home, User } from 'lucide-react'

<Palette className="w-5 h-5 text-primary" />
```

### Add Animations

```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## 📁 Project Structure

```
src/
├── components/        # React components
│   └── ui/          # shadcn-ui components
├── lib/             # Utilities
│   └── utils.js     # cn() helper
├── hooks/           # Custom hooks
├── App.jsx          # Main app
└── index.css        # Global styles
```

## 🎨 Theming

The project uses CSS variables for theming. Customize colors in `src/index.css`:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --background: 0 0% 100%;
  /* ... */
}
```

## 📚 Documentation

- [Setup Guide](./docs/setup.md) - Complete setup instructions
- [shadcn-ui Docs](https://ui.shadcn.com) - Component documentation
- [Tailwind CSS Docs](https://tailwindcss.com) - Utility classes
- [Lucide Icons](https://lucide.dev) - Icon reference

## 🛠️ Tech Stack

- React 18.2
- Vite 6
- Tailwind CSS 3.4
- shadcn-ui
- Lucide React
- Framer Motion
- React Router DOM

## 📝 License

MIT
