# RJ's Blog Free React Components

A beautiful collection of **free, reusable React components** to help developers quickly build modern and functional web applications. All components are production-ready, customizable, and easy to integrate.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-6.4.1-purple)
![License](https://img.shields.io/badge/License-MIT-green)
![Version](https://img.shields.io/badge/version-1.0.0-blue)

## Features

- **12+ Ready-to-use Components** - Dropdowns, Headers, Menus, Sliders, and more
- **Modern Design** - Beautiful, polished UI components
- **Responsive** - Works seamlessly on all devices
- **Easy to Customize** - Well-structured code with clear styling
- **Fast & Lightweight** - Built with React and modern tools
- **Multiple Variants** - Different styles for the same component type

## Components Included

### Dropdowns
- **Dropdown 01** - Simple account dropdown with profile menu
- **Dropdown 02** - Animated dropdown with icon support
- **Dropdown 03** - Search-based dropdown with filtering
- **Dropdown 04** - Swiper-powered dropdown with pagination
- **Dropdown 05** - Nested menu dropdown with sub-items

### Headers
- **Header (Normal)** - Standard responsive header with mobile menu
- **Header (Framer Motion)** - Animated header with smooth transitions

### Menus
- **Menu 01** - Swiper-based navigation menu
- **Menu 02** - Router-integrated menu with page transitions

### Other Components
- **Image Slider** - Beautiful coverflow image carousel
- **Notifications** - Tabbed notification system with filtering
- **Page Transition** - Smooth page transitions with loading bars

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- Basic knowledge of React.js

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rajjitlai/rjsblog_free_react-components.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd rjsblog_free_react-components
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
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## Usage

### Viewing Components

The project includes a beautiful showcase page that displays all components. Simply run `npm run dev` and click on any component card to see it in action.

### Using Components in Your Project

1. **Copy the component folder** from `src/Components/` to your project
2. **Import the component:**
   ```jsx
   import DropDown_01 from './Components/DropDown_01/DropDown_01'
   ```
3. **Use it in your JSX:**
   ```jsx
   function App() {
     return (
       <div>
         <DropDown_01 />
       </div>
     )
   }
   ```
4. **Don't forget to import the CSS file** (usually done automatically in the component)

### Example: Using Dropdown 01

```jsx
import { DropDown_01 } from './Components/DropDown_01/DropDown_01'
import './Components/DropDown_01/dropdown_01.css'

function MyApp() {
  return (
    <div>
      <DropDown_01 />
    </div>
  )
}
```

## Project Structure

```
rjsblog_free_react-components/
├── src/
│   ├── Components/          # All reusable components
│   │   ├── DropDown_01/     # Component folder
│   │   │   ├── DropDown_01.tsx
│   │   │   └── dropdown_01.css
│   │   ├── DropDown_02/
│   │   ├── Header_framer-motion/
│   │   └── ...
│   ├── assets/              # Images and icons
│   ├── App.jsx              # Main app with showcase
│   ├── main.jsx             # Entry point
│   └── global.css           # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

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

## Customization

All components are designed to be easily customizable:

1. **Styling**: Modify the CSS/SCSS files in each component folder
2. **Props**: Many components accept props for customization
3. **Content**: Update the component JSX to change content
4. **Colors**: Use CSS variables or modify the color values directly

## Component Details

### Dropdown Components
- Fully functional with click-outside-to-close
- Smooth animations and transitions
- Support for icons and custom content

### Header Components
- Responsive design with mobile hamburger menu
- Smooth animations (Framer Motion variant)
- Easy to customize navigation links

### Menu Components
- Swiper integration for smooth navigation
- Router support for SPA navigation
- Beautiful animations and transitions

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

To contribute:

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

## License

This project is licensed under the MIT License - see the [LICENSE](License) file for details.

Copyright (c) 2024 Rajjit Laishram and RJ's Blog.

## Author

**Rajjit Laishram** - [RJ's Blog](https://rjsblog.in)

- Website: [https://rjsblog.in](https://rjsblog.in)
- Project Link: [https://github.com/rajjitlai/rjsblog_free_react-components](https://github.com/rajjitlai/rjsblog_free_react-components)
- Live Demo: [https://reactcomponents.rjsblog.in](https://reactcomponents.rjsblog.in)

## Acknowledgments

- Built with [React](https://reactjs.org/)
- Powered by [Vite](https://vitejs.dev/)
- Icons from [Boxicons](https://boxicons.com/)
- Animations with [Framer Motion](https://www.framer.com/motion/)
- Sliders with [Swiper](https://swiperjs.com/)

---

**Star this repo if you find it helpful!**
