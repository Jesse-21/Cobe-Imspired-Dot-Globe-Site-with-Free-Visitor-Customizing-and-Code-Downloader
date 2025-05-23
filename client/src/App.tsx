import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Preview from "@/pages/Preview";
import SimpleGlobe from "@/components/SimpleGlobe";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/simple" component={SimpleGlobe} />
      <Route path="/preview" component={Preview} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
