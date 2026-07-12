import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { LoadingScreen } from '@/components/LoadingScreen';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Sections
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Education } from '@/components/sections/Education';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';

const queryClient = new QueryClient();

function Portfolio() {
  return (
    <>
      <BackgroundEffects />
      <Navbar />
      
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AnimatePresence mode="wait">
          {loading ? (
            <LoadingScreen key="loading" onComplete={() => setLoading(false)} />
          ) : (
            <div key="app" className="min-h-screen selection:bg-primary/30 dark text-foreground antialiased relative">
              <WouterRouter>
                <Router />
              </WouterRouter>
              <Toaster />
            </div>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
