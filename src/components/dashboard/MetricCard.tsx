import type { LucideIcon } from "lucide-react";
import { Card } from "../ui/Card";

export function MetricCard({ label, value, detail, icon: Icon, tone = "default" }: { label: string; value: string; detail: string; icon: LucideIcon; tone?: "default" | "green" | "orange" }) {
  return (
    <Card className={`metric-card ${tone}`}>
      <div className="metric-icon"><Icon size={20} /></div>
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{detail}</p>
    </Card>
  );
}
