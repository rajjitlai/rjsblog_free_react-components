import { motion } from 'framer-motion';
import { Menu, X, Github } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Components', href: '/', isInternal: true },
    { name: 'Home', href: 'https://rjsblog.in/', isInternal: false },
    { name: 'About', href: 'https://rjsblog.in/about', isInternal: false },
    { name: 'Blog', href: 'https://rjsblog.in/blogs', isInternal: false },
    { name: 'Wallpapers', href: 'https://rjsblog.in/wallpapers', isInternal: false },
    { name: 'Contact', href: 'https://rjsblog.in/contact', isInternal: false },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="container h-full flex items-center justify-between">
        {/* Logo */}
        <a href="https://rjsblog.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <span className="font-bold text-lg text-foreground">
            RJ's BLOG<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isInternal ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            )
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <a href="https://github.com/rajjitlai/rjsblog_free_react-components" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="sm" className="bg-primary text-primary-foreground hover:bg-primary-dark" asChild>
            <a href="https://rjsblog.in/login" target="_blank" rel="noopener noreferrer">
              Login
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-border bg-background"
        >
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) =>
              link.isInternal ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            )}
            <div className="flex flex-col gap-2">
              <Button variant="outline" size="sm" className="w-fit gap-2" asChild>
                <a href="https://github.com/rajjitlai/rjsblog_free_react-components" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" className="w-fit bg-primary text-primary-foreground hover:bg-primary-dark" asChild>
                <a href="https://rjsblog.in/login" target="_blank" rel="noopener noreferrer">
                  Login
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
