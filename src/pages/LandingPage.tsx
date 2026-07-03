import { Link } from "react-router-dom";
import { ArrowRight, Bot, CalendarClock, LineChart, ShieldCheck } from "lucide-react";
import { Button } from "../components/ui/Button";

export function LandingPage() {
  return (
    <main className="landing">
      <nav className="landing-nav"><strong>FuelIQ Athlete</strong><Link to="/login">Log in</Link></nav>
      <section className="hero-band">
        <div className="hero-copy">
          <span className="eyebrow">Performance-aware nutrition</span>
          <h1>Fuel your training with an AI nutrition coach built for athletes.</h1>
          <p>Track meals, schedule training, monitor progress, and get real-time nutrition recommendations based on your goals, body metrics, and daily demands.</p>
          <Link to="/signup"><Button>Start demo plan <ArrowRight size={18} /></Button></Link>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="plate"><span /><span /><span /></div>
          <div className="mini-card top">Practice 4:00 PM<br /><strong>Pre-fuel: 92g carbs</strong></div>
          <div className="mini-card bottom">On track<br /><strong>+340 cal remaining</strong></div>
        </div>
      </section>
      <section className="feature-grid">
        {[["Schedule-aware", CalendarClock], ["AI coaching", Bot], ["Progress trends", LineChart], ["Secure by design", ShieldCheck]].map(([label, Icon]) => (
          <div className="feature-card" key={String(label)}><Icon size={22} /><h3>{String(label)}</h3><p>Built around training load, food preferences, hydration, recovery, and realistic athlete schedules.</p></div>
        ))}
      </section>
    </main>
  );
}
