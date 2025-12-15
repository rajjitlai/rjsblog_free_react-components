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
