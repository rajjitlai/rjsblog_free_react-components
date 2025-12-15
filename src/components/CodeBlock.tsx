import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { themeColors } from '@/lib/theme';

interface CodeBlockProps {
  code: string;
  language?: string;
}

// Create custom style based on theme.json colors
const customStyle = {
  'code[class*="language-"]': {
    color: themeColors.default,
    background: 'transparent',
    textShadow: 'none',
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '0.875rem',
    lineHeight: '1.5',
  },
  'pre[class*="language-"]': {
    color: themeColors.default,
    background: 'transparent',
    textShadow: 'none',
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '0.875rem',
    lineHeight: '1.5',
    margin: 0,
    padding: 0,
  },
  comment: {
    color: themeColors.comment,
    fontStyle: 'italic',
  },
  prolog: {
    color: themeColors.comment,
    fontStyle: 'italic',
  },
  doctype: {
    color: themeColors.comment,
    fontStyle: 'italic',
  },
  cdata: {
    color: themeColors.comment,
    fontStyle: 'italic',
  },
  punctuation: {
    color: themeColors.punctuation,
  },
  property: {
    color: themeColors.function,
  },
  tag: {
    color: themeColors.tag,
  },
  boolean: {
    color: themeColors.number,
  },
  number: {
    color: themeColors.number,
  },
  constant: {
    color: themeColors.number,
  },
  symbol: {
    color: themeColors.number,
  },
  deleted: {
    color: '#FF5370',
  },
  selector: {
    color: themeColors.tag,
  },
  'attr-name': {
    color: themeColors.attrName,
  },
  string: {
    color: themeColors.string,
    fontStyle: 'italic',
  },
  char: {
    color: themeColors.string,
    fontStyle: 'italic',
  },
  builtin: {
    color: themeColors.function,
  },
  inserted: {
    color: '#C3E88D',
  },
  operator: {
    color: themeColors.operator,
  },
  entity: {
    color: themeColors.variable,
    cursor: 'help',
  },
  url: {
    color: themeColors.string,
    fontStyle: 'italic',
  },
  '.language-css .token.string': {
    color: themeColors.string,
    fontStyle: 'italic',
  },
  '.style .token.string': {
    color: themeColors.string,
    fontStyle: 'italic',
  },
  variable: {
    color: themeColors.variable,
  },
  atrule: {
    color: themeColors.keyword,
  },
  'attr-value': {
    color: themeColors.string,
    fontStyle: 'italic',
  },
  function: {
    color: themeColors.function,
  },
  'class-name': {
    color: themeColors.className,
  },
  keyword: {
    color: themeColors.keyword,
  },
  regex: {
    color: '#89DDFF',
  },
  important: {
    color: themeColors.keyword,
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
};

const CodeBlock = ({ code, language = 'tsx' }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast({
      title: 'Copied!',
      description: 'Code copied to clipboard',
    });
    setTimeout(() => setCopied(false), 2000);
  };

  // Map language names
  const mapLanguage = (lang: string) => {
    const langMap: Record<string, string> = {
      tsx: 'tsx',
      ts: 'typescript',
      jsx: 'jsx',
      js: 'javascript',
      css: 'css',
      html: 'html',
      json: 'json',
    };
    return langMap[lang.toLowerCase()] || lang.toLowerCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative rounded-xl bg-bg-main border border-border overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-bg-secondary">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-destructive/60" />
            <span className="w-3 h-3 rounded-full bg-warning/60" />
            <span className="w-3 h-3 rounded-full bg-success/60" />
          </div>
          <span className="text-xs text-muted-foreground ml-2 font-mono uppercase">
            {language}
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="gap-2 text-muted-foreground hover:text-foreground"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-success" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy
            </>
          )}
        </Button>
      </div>

      {/* Code */}
      <div className="overflow-x-auto scrollbar-thin">
        <SyntaxHighlighter
          language={mapLanguage(language)}
          style={customStyle as any}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: 'transparent',
          }}
          PreTag="div"
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </motion.div>
  );
};

export default CodeBlock;