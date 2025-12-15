# 🎨 RJ's Blog Free React Components

A beautiful collection of **free, reusable React components** to help developers quickly build modern and functional web applications. All components are production-ready, customizable, and easy to integrate.

![Version](https://img.shields.io/badge/version-2.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)

## ✨ Features

- 🎯 **6+ Ready-to-use Components** - Buttons, Cards, Forms, Navigation, and more
- 🎨 **Modern Design** - Beautiful, polished UI components with smooth animations
- 📱 **Responsive** - Works seamlessly on all devices
- 🔧 **Easy to Customize** - Well-structured code with clear styling
- ⚡ **Fast & Lightweight** - Built with React, TypeScript, and Vite
- 🎭 **Multiple Variants** - Different styles for the same component type
- 🌙 **Dark Theme** - Beautiful dark theme with accent colors
- 📋 **Copy to Clipboard** - Easy code copying functionality

## 📦 Components Included

### Buttons
- **Gradient Button** - Beautiful animated gradient button with hover effects

### Cards
- **Glass Card** - Modern glassmorphism card with blur effect
- **Profile Card** - Elegant user profile card with avatar and social links

### Forms
- **Neon Input** - Input field with neon glow focus effect

### Navigation
- **Animated Navbar** - Responsive navbar with smooth animations

### Feedback
- **Toast Notification** - Animated toast notification with multiple variants

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- Basic knowledge of React.js and TypeScript

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rajjitlai/rjsblog_free_react-components.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd react-templates-FREE
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:8080` (or the port shown in your terminal)

## 📖 Usage

### Viewing Components

The project includes a beautiful showcase page that displays all components. Simply run `npm run dev` and click on any component card to see it in action with live preview and code examples.

### Using Components in Your Project

1. **Copy the component code** from the component detail page
2. **Import the component** in your project:
   ```tsx
   import GradientButton from './components/GradientButton';
   ```
3. **Use it in your JSX:**
   ```tsx
   function App() {
     return (
       <div>
         <GradientButton>Click Me</GradientButton>
       </div>
     );
   }
   ```

### Example: Using Gradient Button

```tsx
import React from 'react';

const GradientButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="relative px-8 py-3 rounded-lg font-semibold text-black 
      bg-gradient-to-r from-green-400 via-emerald-400 to-green-500
      hover:from-green-500 hover:via-emerald-500 hover:to-green-600
      transform hover:scale-105 transition-all duration-300
      shadow-lg hover:shadow-green-500/25">
      {children}
    </button>
  );
};

export default GradientButton;
```

## 🗂️ Project Structure

```
react-templates-FREE/
├── src/
│   ├── components/          # All reusable components
│   │   ├── layout/          # Layout components (Header, Footer, Layout)
│   │   ├── previews/        # Component preview implementations
│   │   ├── ui/              # shadcn/ui components
│   │   ├── CategoryFilter.tsx
│   │   ├── CodeBlock.tsx
│   │   ├── ComponentCard.tsx
│   │   └── SearchBar.tsx
│   ├── data/
│   │   └── components.ts    # Component data and metadata
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── pages/
│   │   ├── Index.tsx        # Home page with component showcase
│   │   ├── ComponentDetails.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🛠️ Tech Stack

- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 5.4.19** - Build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Framer Motion 12.23.26** - Animation library
- **React Router DOM 6.30.1** - Routing
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **shadcn/ui** - Component library

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Deploying to Vercel

This project is configured for easy deployment on Vercel:

1. **Push your code to GitHub**
2. **Import your repository to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
3. **Vercel will automatically:**
   - Detect the Vite build configuration
   - Use the `vercel.json` configuration for routing
   - Handle SPA routing and 404 errors automatically

The `vercel.json` file includes:
- ✅ SPA routing configuration (all routes redirect to `index.html`)
- ✅ 404 error handling
- ✅ Security headers (XSS protection, frame options, etc.)
- ✅ Optimized caching for static assets

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory, ready to deploy to any static hosting service.

## 🎨 Customization

All components are designed to be easily customizable:

1. **Styling**: Modify the Tailwind CSS classes in component files
2. **Props**: Many components accept props for customization
3. **Content**: Update the component JSX to change content
4. **Colors**: Modify CSS variables in `src/index.css` or use Tailwind classes directly
5. **Theme**: Customize the dark theme colors in the CSS variables

## 📝 Component Details

### Component Categories

- **Buttons** - Interactive button components with various styles
- **Cards** - Container components for displaying content
- **Forms** - Form input components with modern styling
- **Navigation** - Navigation and menu components
- **Feedback** - Toast notifications and user feedback components

### Features

- Fully functional components with TypeScript support
- Smooth animations and transitions
- Responsive design
- Accessible components (using Radix UI)
- Copy-to-clipboard functionality for code examples
- Live preview with dark/light mode toggle

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

To contribute:

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

Copyright (c) 2024 Rajjit Laishram and RJ's Blog.

## 👤 Author

**Rajjit Laishram** - RJ's Blog

- Website: [https://rjsblog.in](https://rjsblog.in)
- GitHub: [@rajjitlai](https://github.com/rajjitlai)
- Project Link: [https://github.com/rajjitlai/rjsblog_free_react-components](https://github.com/rajjitlai/rjsblog_free_react-components)
- Live Demo: [https://reactcomponents.rjsblog.in](https://reactcomponents.rjsblog.in)

## 🙏 Acknowledgments

- Built with React
- Powered by Vite
- Icons from Lucide React
- Animations with Framer Motion
- UI Components from shadcn/ui and Radix UI
- Styling with Tailwind CSS

---

⭐ **Star this repo if you find it helpful!**

