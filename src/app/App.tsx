import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import { LandingPage } from "../pages/LandingPage";
import { LoginPage } from "../pages/LoginPage";
import { SignupPage } from "../pages/SignupPage";
import { OnboardingPage } from "../pages/OnboardingPage";
import { DashboardPage } from "../pages/DashboardPage";
import { SchedulePage } from "../pages/SchedulePage";
import { MealPlanPage } from "../pages/MealPlanPage";
import { FoodLogPage } from "../pages/FoodLogPage";
import { ProgressPage } from "../pages/ProgressPage";
import { AIChatPage } from "../pages/AIChatPage";
import { SettingsPage } from "../pages/SettingsPage";
import { AdminPage } from "../pages/AdminPage";
import { useAppStore } from "../lib/appStore";

function Protected({ children }: { children: React.ReactNode }) {
  const { state } = useAppStore();
  if (!state.authUser) return <Navigate to="/login" replace />;
  if (!state.onboardingComplete) return <Navigate to="/onboarding" replace />;
  return <AppLayout>{children}</AppLayout>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/dashboard" element={<Protected><DashboardPage /></Protected>} />
      <Route path="/schedule" element={<Protected><SchedulePage /></Protected>} />
      <Route path="/meal-plan" element={<Protected><MealPlanPage /></Protected>} />
      <Route path="/food-log" element={<Protected><FoodLogPage /></Protected>} />
      <Route path="/progress" element={<Protected><ProgressPage /></Protected>} />
      <Route path="/ai-coach" element={<Protected><AIChatPage /></Protected>} />
      <Route path="/admin" element={<Protected><AdminPage /></Protected>} />
      <Route path="/settings" element={<Protected><SettingsPage /></Protected>} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
