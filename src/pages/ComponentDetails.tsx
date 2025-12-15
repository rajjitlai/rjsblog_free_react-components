import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import CodeBlock from '@/components/CodeBlock';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useComponent } from '@/hooks/useComponents';
import { previewComponents } from '@/components/previews';

const ComponentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isDarkPreview, setIsDarkPreview] = useState(true);

  const { data: component, isLoading, error } = useComponent(id);
  const PreviewComponent = component?.preview ? previewComponents[component.preview] : null;

  if (isLoading) {
    return (
      <Layout>
        <div className="container py-20 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
        </div>
      </Layout>
    );
  }

  if (error || !component) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Component not found</h1>
          <p className="text-muted-foreground mb-4">
            {error ? 'Error loading component. Please try again later.' : 'The component you are looking for does not exist.'}
          </p>
          <Link to="/">
            <Button variant="outline">Go back home</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-12 min-h-screen">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/">
            <Button variant="ghost" className="gap-2 mb-8 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Back to Components
            </Button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {component.name}
            </h1>
            <Badge variant="secondary" className="capitalize">
              {component.category}
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {component.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {component.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-3 py-1 rounded-full bg-bg-secondary text-muted-foreground border border-border"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-bg-secondary">
                <span className="text-sm font-medium text-foreground">Live Preview</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsDarkPreview(!isDarkPreview)}
                  className="gap-2"
                >
                  {isDarkPreview ? (
                    <>
                      <Sun className="w-4 h-4" /> Light
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4" /> Dark
                    </>
                  )}
                </Button>
              </div>
              <div
                className={`min-h-[300px] p-8 flex items-center justify-center transition-colors duration-300 ${isDarkPreview ? 'bg-bg-main' : 'bg-gray-100'
                  }`}
              >
                {PreviewComponent ? (
                  <PreviewComponent />
                ) : (
                  <div className="text-center text-muted-foreground">
                    <p className="text-sm">Preview not available</p>
                    <p className="text-xs mt-2">Check the code tab to see the component code</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Code */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Tabs defaultValue="tsx" className="w-full">
              <TabsList className="w-full justify-start bg-bg-secondary border border-border rounded-xl p-1">
                <TabsTrigger value="tsx" className="rounded-lg">
                  TSX
                </TabsTrigger>
                {component.code.css && (
                  <TabsTrigger value="css" className="rounded-lg">
                    CSS
                  </TabsTrigger>
                )}
              </TabsList>
              <TabsContent value="tsx" className="mt-4">
                <CodeBlock code={component.code.tsx} language="tsx" />
              </TabsContent>
              {component.code.css && (
                <TabsContent value="css" className="mt-4">
                  <CodeBlock code={component.code.css} language="css" />
                </TabsContent>
              )}
            </Tabs>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ComponentDetail;