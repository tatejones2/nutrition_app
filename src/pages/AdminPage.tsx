import { Bot, Database, ShieldCheck, Users } from "lucide-react";
import { Card } from "../components/ui/Card";
import { MetricCard } from "../components/dashboard/MetricCard";
import { useAppStore } from "../lib/appStore";
import { starterFoods } from "../data/starterFoods";

export function AdminPage() {
  const { state } = useAppStore();
  const activeMeals = state.mealRecommendations.filter((meal) => meal.status !== "completed").length;
  const aiConfigured = false;

  return (
    <div className="page">
      <header className="page-header">
        <span className="eyebrow">Admin console</span>
        <h1>FuelIQ Operations</h1>
        <p>Monitor the MVP data model, demo user state, AI readiness, and launch-critical setup steps.</p>
      </header>

      <section className="metric-grid">
        <MetricCard label="Demo users" value="2" detail="Admin + athlete accounts" icon={Users} tone="green" />
        <MetricCard label="Food database" value={String(starterFoods.length)} detail="Starter athlete foods" icon={Database} />
        <MetricCard label="Open meal recs" value={String(activeMeals)} detail="Pending or replaced meals" icon={Bot} tone="orange" />
        <MetricCard label="Security mode" value="Local" detail="Add Supabase RLS before production" icon={ShieldCheck} />
      </section>

      <section className="dashboard-grid">
        <Card>
          <h2>Admin Account</h2>
          <p><strong>Email:</strong> admin@fueliq.demo</p>
          <p><strong>Role:</strong> {state.authUser?.role}</p>
          <p>This is a local demo admin. In production, store roles in Supabase profiles or custom claims and protect admin routes server-side.</p>
        </Card>
        <Card>
          <h2>AI Setup Status</h2>
          <p>{aiConfigured ? "OpenAI is connected." : "OpenAI is not connected until OPENAI_API_KEY is available to the backend API process."}</p>
          <p>Never put your OpenAI API key in `VITE_` variables or frontend code. Use a serverless function, Supabase Edge Function, or backend route.</p>
        </Card>
      </section>
    </div>
  );
}
