import { motion } from 'framer-motion';
import { Copy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ComponentCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  index: number;
}

const ComponentCard = ({ id, name, description, category, tags, index }: ComponentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-accent/50 transition-all duration-300 hover-lift"
    >
      {/* Preview Area */}
      <div className="h-40 bg-bg-main flex items-center justify-center border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
        <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
          <span className="text-accent text-xl font-bold">{name.charAt(0)}</span>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
          <Link to={`/component/${id}`}>
            <Button variant="accent" size="sm" className="gap-2">
              View <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
            {name}
          </h3>
          <Badge variant="secondary" className="text-xs capitalize">
            {category}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-bg-hover text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ComponentCard;
