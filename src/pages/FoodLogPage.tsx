import { FoodLogForm } from "../components/nutrition/FoodLogForm";
import { MacroProgressBar } from "../components/nutrition/MacroProgressBar";
import { Card } from "../components/ui/Card";
import { useAppStore } from "../lib/appStore";
import { sumLogs } from "../lib/nutritionCalculations";

export function FoodLogPage() {
  const { state, today } = useAppStore();
  const logs = state.foodLogs.filter((log) => log.date === today);
  const totals = sumLogs(logs);
  return (
    <div className="page">
      <header className="page-header"><span className="eyebrow">Manual tracking</span><h1>Food Log</h1><p>Log what you ate and FuelIQ compares it against your athlete targets.</p></header>
      <Card><FoodLogForm /></Card>
      <Card>
        <h2>Today’s Totals</h2>
        <MacroProgressBar label="Calories" value={totals.calories} target={state.goal.targetCalories} unit="" />
        <MacroProgressBar label="Protein" value={totals.proteinG} target={state.goal.targetProteinG} />
        <MacroProgressBar label="Carbs" value={totals.carbsG} target={state.goal.targetCarbsG} />
        <MacroProgressBar label="Fat" value={totals.fatG} target={state.goal.targetFatG} />
      </Card>
      <div className="log-list">{logs.map((log) => <Card key={log.id}><span className="eyebrow">{log.mealType} · {log.timeEaten}</span><h3>{log.foodName}</h3><p>{log.calories} cal · {log.proteinG}g protein · {log.carbsG}g carbs · {log.fatG}g fat</p></Card>)}</div>
    </div>
  );
}
