import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";

export function SignupPage() {
  const navigate = useNavigate();
  return (
    <main className="auth-page">
      <section className="auth-card">
        <span className="eyebrow">Build your plan</span>
        <h1>Create athlete account</h1>
        <p>Start with demo auth now. Supabase credentials can be added without changing the page flow.</p>
        <label>Email<input placeholder="you@school.edu" /></label>
        <label>Password<input type="password" placeholder="••••••••" /></label>
        <Button onClick={() => navigate("/onboarding")}>Create account</Button>
        <Link to="/login">Already have an account?</Link>
      </section>
    </main>
  );
}
