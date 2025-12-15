import GradientButton from './GradientButton';
import GlassCard from './GlassCard';
import NeonInput from './NeonInput';
import AnimatedNavbar from './AnimatedNavbar';
import ToastNotification from './ToastNotification';
import ProfileCard from './ProfileCard';

export const previewComponents: Record<string, React.ComponentType> = {
  'gradient-button': () => <GradientButton>Click Me</GradientButton>,
  'glass-card': () => <GlassCard title="Glass Card" description="This is a beautiful glassmorphism card component" />,
  'neon-input': () => <NeonInput placeholder="Enter your email..." />,
  'animated-navbar': AnimatedNavbar,
  'toast-notification': () => <ToastNotification message="Operation successful!" type="success" />,
  'profile-card': ProfileCard,
};
