import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import Shanghai from "./pages/Shanghai";
import Suzhou from "./pages/Suzhou";
import Hangzhou from "./pages/Hangzhou";
import Yiwu from "./pages/Yiwu";
import ChineseCuisine from "./pages/ChineseCuisine";
import ChineseCulture from "./pages/ChineseCulture";
import ChinaFacts from "./pages/ChinaFacts";
import Download from "./pages/Download";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import { useEffect } from "react";

function Router() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Scroll to top with smooth behavior on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <Switch key={location}>
      <Route path={"/"} component={Home} />
      <Route path={"/download"} component={Download} />
      <Route path={"/shanghai"} component={Shanghai} />
      <Route path={"/suzhou"} component={Suzhou} />
      <Route path={"/hangzhou"} component={Hangzhou} />
      <Route path={"/yiwu"} component={Yiwu} />
      <Route path={"/about"} component={About} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/cuisine"} component={ChineseCuisine} />
      <Route path={"/culture"} component={ChineseCulture} />
      <Route path={"/facts"} component={ChinaFacts} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
