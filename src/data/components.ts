import { Palette, MousePointerClick, Package, FileText, Navigation, MessageSquare } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ComponentItem {
    id: string;
    name: string;
    description: string;
    category: string;
    tags: string[];
    preview: React.ComponentType;
    code: {
      tsx: string;
      css?: string;
    };
  }
  
  export const categories: Array<{ id: string; name: string; icon: LucideIcon }> = [
    { id: 'all', name: 'All Components', icon: Palette },
    { id: 'buttons', name: 'Buttons', icon: MousePointerClick },
    { id: 'cards', name: 'Cards', icon: Package },
    { id: 'forms', name: 'Forms', icon: FileText },
    { id: 'navigation', name: 'Navigation', icon: Navigation },
    { id: 'feedback', name: 'Feedback', icon: MessageSquare },
  ];
  
  export const componentsData: Omit<ComponentItem, 'preview'>[] = [
    {
      id: 'gradient-button',
      name: 'Gradient Button',
      description: 'A beautiful animated gradient button with hover effects',
      category: 'buttons',
      tags: ['button', 'gradient', 'animated'],
      code: {
        tsx: `import React from 'react';
  
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
  
  export default GradientButton;`,
      },
    },
    {
      id: 'glass-card',
      name: 'Glass Card',
      description: 'Modern glassmorphism card with blur effect',
      category: 'cards',
      tags: ['card', 'glass', 'blur'],
      code: {
        tsx: `import React from 'react';
  
  const GlassCard = ({ title, description }: { title: string; description: string }) => {
    return (
      <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl 
        border border-white/20 shadow-xl
        hover:bg-white/15 transition-all duration-300">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    );
  };
  
  export default GlassCard;`,
      },
    },
    {
      id: 'neon-input',
      name: 'Neon Input',
      description: 'Input field with neon glow focus effect',
      category: 'forms',
      tags: ['input', 'neon', 'glow'],
      code: {
        tsx: `import React from 'react';
  
  const NeonInput = ({ placeholder }: { placeholder: string }) => {
    return (
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700
          text-white placeholder-gray-500
          focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20
          focus:shadow-[0_0_20px_rgba(74,222,128,0.3)]
          transition-all duration-300"
      />
    );
  };
  
  export default NeonInput;`,
      },
    },
    {
      id: 'animated-navbar',
      name: 'Animated Navbar',
      description: 'Responsive navbar with smooth animations',
      category: 'navigation',
      tags: ['navbar', 'responsive', 'animated'],
      code: {
        tsx: `import React from 'react';
  
  const AnimatedNavbar = () => {
    const links = ['Home', 'About', 'Projects', 'Contact'];
    
    return (
      <nav className="flex items-center gap-8 px-8 py-4 bg-gray-900/80 backdrop-blur-md rounded-full border border-gray-800">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="relative text-gray-400 hover:text-white transition-colors duration-300
              after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
              after:bg-green-400 after:transition-all after:duration-300
              hover:after:w-full"
          >
            {link}
          </a>
        ))}
      </nav>
    );
  };
  
  export default AnimatedNavbar;`,
      },
    },
    {
      id: 'toast-notification',
      name: 'Toast Notification',
      description: 'Animated toast notification with multiple variants',
      category: 'feedback',
      tags: ['toast', 'notification', 'animated'],
      code: {
        tsx: `import React from 'react';
  
  interface ToastProps {
    message: string;
    type?: 'success' | 'error' | 'info';
  }
  
  const Toast = ({ message, type = 'success' }: ToastProps) => {
    const colors = {
      success: 'bg-green-500/20 border-green-500 text-green-400',
      error: 'bg-red-500/20 border-red-500 text-red-400',
      info: 'bg-blue-500/20 border-blue-500 text-blue-400',
    };
  
    return (
      <div className={\`px-6 py-4 rounded-lg border backdrop-blur-sm
        animate-slide-in \${colors[type]}\`}>
        <p className="font-medium">{message}</p>
      </div>
    );
  };
  
  export default Toast;`,
      },
    },
    {
      id: 'profile-card',
      name: 'Profile Card',
      description: 'Elegant user profile card with avatar and social links',
      category: 'cards',
      tags: ['card', 'profile', 'avatar'],
      code: {
        tsx: `import React from 'react';
  
  const ProfileCard = () => {
    return (
      <div className="w-72 p-6 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 
        border border-gray-700 text-center">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full 
          bg-gradient-to-r from-green-400 to-emerald-500" />
        <h3 className="text-xl font-bold text-white">John Doe</h3>
        <p className="text-gray-400 mb-4">Full Stack Developer</p>
        <div className="flex justify-center gap-4">
          {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
            <button key={social} 
              className="px-3 py-1 text-sm rounded-full bg-gray-700 
                text-gray-300 hover:bg-green-500/20 hover:text-green-400 
                transition-colors">
              {social}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProfileCard;`,
      },
    },
  ];
  