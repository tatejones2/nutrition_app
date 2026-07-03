import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { isSupabaseConfigured } from "../lib/supabaseClient";
import { useAppStore } from "../lib/appStore";

export function LoginPage() {
  const navigate = useNavigate();
  const { loginAsAthlete, loginAsAdmin } = useAppStore();
  return (
    <main className="auth-page">
      <section className="auth-card">
        <span className="eyebrow">Welcome back</span>
        <h1>Log in to FuelIQ</h1>
        <p>{isSupabaseConfigured ? "Supabase auth is configured." : "Demo mode is active. Add Supabase env vars to enable real auth."}</p>
        <label>Email<input defaultValue="athlete@fueliq.demo" /></label>
        <label>Password<input type="password" defaultValue="performance" /></label>
        <Button onClick={() => { loginAsAthlete(); navigate("/dashboard"); }}>Continue as athlete</Button>
        <Button className="secondary" onClick={() => { loginAsAdmin(); navigate("/admin"); }}>Continue as admin</Button>
        <Link to="/signup">Create an account</Link>
      </section>
    </main>
  );
}
