import { motion } from 'framer-motion';
import { categories } from '@/data/components';

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="flex flex-wrap gap-2"
    >
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2
              ${
                activeCategory === category.id
                  ? 'bg-accent text-accent-foreground shadow-lg glow-green'
                  : 'bg-bg-secondary text-muted-foreground hover:bg-bg-hover hover:text-foreground border border-border'
              }`}
          >
            <Icon className="w-4 h-4" />
            <span>{category.name}</span>
          </button>
        );
      })}
    </motion.div>
  );
};

export default CategoryFilter;