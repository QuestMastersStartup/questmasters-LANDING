
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Chatbot from "./pages/Chatbot";
import Characters from "./pages/Characters";
import CharacterSheet from "./pages/CharacterSheet";
import Campaigns from "./pages/Campaigns";
import CampaignDetails from "./pages/CampaignDetails";
import Books from "./pages/Books";
import Pricing from "./pages/Pricing";
import Board2D from "./pages/Board2D";
import Homebrew from "./pages/Homebrew";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route 
            path="/dashboard" 
            element={
              <SidebarProvider>
                <Dashboard />
              </SidebarProvider>
            } 
          />
          <Route 
            path="/chatbot" 
            element={
              <SidebarProvider>
                <Chatbot />
              </SidebarProvider>
            } 
          />
          <Route 
            path="/characters" 
            element={
              <SidebarProvider>
                <Characters />
              </SidebarProvider>
            } 
          />
          <Route 
            path="/character-sheet" 
            element={
              <SidebarProvider>
                <CharacterSheet />
              </SidebarProvider>
            } 
          />
          <Route 
            path="/campaigns" 
            element={
              <SidebarProvider>
                <Campaigns />
              </SidebarProvider>
            } 
          />
          <Route 
            path="/campaigns/:id" 
            element={
              <SidebarProvider>
                <CampaignDetails />
              </SidebarProvider>
            } 
          />
          <Route 
            path="/books" 
            element={
              <SidebarProvider>
                <Books />
              </SidebarProvider>
            } 
          />
          <Route 
            path="/pricing" 
            element={
              <SidebarProvider>
                <Pricing />
              </SidebarProvider>
            } 
          />
          <Route 
            path="/board" 
            element={
              <SidebarProvider>
                <Board2D />
              </SidebarProvider>
            } 
          />
          <Route 
            path="/homebrew" 
            element={
              <SidebarProvider>
                <Homebrew />
              </SidebarProvider>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
