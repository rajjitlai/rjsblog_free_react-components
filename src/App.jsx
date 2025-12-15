import { useState } from 'react'
import { Palette } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-primary/10 rounded-full">
              <Palette className="w-12 h-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">
            React Templates
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Fresh start with Tailwind CSS, shadcn-ui, and Lucide icons
          </p>

          <div className="bg-card border rounded-lg p-8 mb-8">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Count is {count}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Tailwind CSS</h3>
              <p className="text-sm text-muted-foreground">
                Utility-first CSS framework for rapid UI development
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold mb-2">shadcn-ui</h3>
              <p className="text-sm text-muted-foreground">
                Beautiful, accessible components built with Radix UI
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Lucide Icons</h3>
              <p className="text-sm text-muted-foreground">
                Beautiful & consistent icon toolkit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

