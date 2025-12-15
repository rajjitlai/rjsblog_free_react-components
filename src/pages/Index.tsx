import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import ComponentCard from '@/components/ComponentCard';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import { componentsData } from '@/data/components';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredComponents = useMemo(() => {
    return componentsData.filter((component) => {
      const matchesSearch =
        component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        component.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        component.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesCategory =
        activeCategory === 'all' || component.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground block">RJ's Blog</span>
              <span className="text-gradient block">Free React Components</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A beautiful collection of free, reusable React components to help developers
              quickly build modern and functional web applications. All components are
              production-ready, customizable, and easy to integrate.
            </p>
            <div className="flex justify-center">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-12">
        <div className="container">
          <div className="mb-8">
            <CategoryFilter
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          {filteredComponents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredComponents.map((component, index) => (
                <ComponentCard
                  key={component.id}
                  id={component.id}
                  name={component.name}
                  description={component.description}
                  category={component.category}
                  tags={component.tags}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg">
                No components found. Try adjusting your search or filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
