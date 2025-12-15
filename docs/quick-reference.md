# Quick Reference Guide

Quick reference for using Tailwind CSS, shadcn-ui, Lucide icons, and Framer Motion.

## Tailwind CSS

### Common Utilities

```jsx
// Spacing
<div className="p-4 m-2">Padding 4, Margin 2</div>
<div className="px-6 py-3">Horizontal 6, Vertical 3</div>

// Colors
<div className="bg-primary text-primary-foreground">Primary</div>
<div className="bg-card border">Card with border</div>

// Layout
<div className="flex items-center justify-between">Flexbox</div>
<div className="grid grid-cols-3 gap-4">Grid</div>

// Responsive
<div className="md:grid-cols-2 lg:grid-cols-3">Responsive grid</div>
```

### Custom Colors (from theme)

- `bg-background` / `text-foreground`
- `bg-primary` / `text-primary-foreground`
- `bg-secondary` / `text-secondary-foreground`
- `bg-card` / `text-card-foreground`
- `bg-muted` / `text-muted-foreground`
- `bg-accent` / `text-accent-foreground`

## shadcn-ui Components

### Adding Components

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
```

### Using Components

```jsx
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

<Button variant="default">Click me</Button>
<Card>
  <CardHeader>Title</CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

## Lucide Icons

### Importing Icons

```jsx
import { 
  Home, 
  User, 
  Settings, 
  Search,
  Menu,
  X,
  ChevronDown,
  Palette
} from 'lucide-react'
```

### Using Icons

```jsx
// Basic usage
<Home className="w-5 h-5" />

// With colors
<Palette className="w-6 h-6 text-primary" />

// In buttons
<Button>
  <Settings className="w-4 h-4 mr-2" />
  Settings
</Button>
```

## Framer Motion

### Basic Animation

```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Common Patterns

```jsx
// Fade in
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}

// Slide up
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}

// Scale
initial={{ scale: 0.9 }}
animate={{ scale: 1 }}

// Stagger children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}
```

## Utility Functions

### cn() - Class Name Merger

```jsx
import { cn } from '@/lib/utils'

<div className={cn(
  "base-classes",
  condition && "conditional-class",
  "always-apply"
)}>
```

## Project Aliases

- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`
- `@/utils` → `src/utils`

## Common Patterns

### Responsive Card Grid

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => (
    <Card key={item.id}>
      {/* content */}
    </Card>
  ))}
</div>
```

### Animated List

```jsx
import { motion } from 'framer-motion'

{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    {item.content}
  </motion.div>
))}
```

### Icon Button

```jsx
import { Button } from '@/components/ui/button'
import { Settings } from 'lucide-react'

<Button variant="ghost" size="icon">
  <Settings className="w-4 h-4" />
</Button>
```

