import { Droplets } from "lucide-react";
import { percent } from "../../lib/nutritionCalculations";
import { Card } from "../ui/Card";

export function HydrationTracker({ value, target }: { value: number; target: number }) {
  return (
    <Card className="hydration-card">
      <Droplets size={20} />
      <span>Hydration</span>
      <strong>{value} / {target} oz</strong>
      <div className="progress-track"><span style={{ width: `${percent(value, target)}%` }} /></div>
    </Card>
  );
}
