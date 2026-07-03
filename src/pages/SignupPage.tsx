import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { useAppStore } from "../lib/appStore";

export function SignupPage() {
  const navigate = useNavigate();
  const { createAthleteAccount } = useAppStore();
  const [email, setEmail] = useState("");
  return (
    <main className="auth-page">
      <section className="auth-card">
        <span className="eyebrow">Build your plan</span>
        <h1>Create athlete account</h1>
        <p>After account creation, FuelIQ starts with a short athlete intake so your plan matches your sport, schedule, goals, and food situation.</p>
        <label>Email<input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@school.edu" /></label>
        <label>Password<input type="password" placeholder="••••••••" /></label>
        <Button
          onClick={() => {
            createAthleteAccount(email || "new-athlete@fueliq.demo");
            navigate("/onboarding");
          }}
        >
          Create account and answer intake
        </Button>
        <Link to="/login">Already have an account?</Link>
      </section>
    </main>
  );
}
