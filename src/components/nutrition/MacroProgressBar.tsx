import { percent } from "../../lib/nutritionCalculations";

export function MacroProgressBar({ label, value, target, unit = "g" }: { label: string; value: number; target: number; unit?: string }) {
  const pct = percent(value, target);
  return (
    <div className="macro-row">
      <div className="macro-row-top">
        <span>{label}</span>
        <strong>{value}{unit} / {target}{unit}</strong>
      </div>
      <div className="progress-track"><span style={{ width: `${pct}%` }} /></div>
    </div>
  );
}
