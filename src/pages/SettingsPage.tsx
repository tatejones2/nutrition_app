import { Save, RotateCcw } from "lucide-react";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { useAppStore } from "../lib/appStore";

export function SettingsPage() {
  const { state, updateProfile, updatePreferences, resetDemo } = useAppStore();
  return (
    <div className="page">
      <header className="page-header"><span className="eyebrow">Account and targets</span><h1>Settings</h1><p>Edit profile details, goals, preferences, avoided foods, and macro targets.</p></header>
      <Card>
        <div className="form-grid">
          <label>Name<input value={state.profile.fullName} onChange={(e) => updateProfile({ ...state.profile, fullName: e.target.value })} /></label>
          <label>Sport<input value={state.profile.sport} onChange={(e) => updateProfile({ ...state.profile, sport: e.target.value })} /></label>
          <label>Goal<input value={state.profile.primaryGoal} onChange={(e) => updateProfile({ ...state.profile, primaryGoal: e.target.value })} /></label>
          <label>Weight<input type="number" value={state.profile.currentWeightLbs} onChange={(e) => updateProfile({ ...state.profile, currentWeightLbs: Number(e.target.value) })} /></label>
        </div>
      </Card>
      <Card>
        <h2>Avoided foods</h2>
        <div className="tag-list static">{state.preferences.avoidedFoods.map((food) => <span key={food}>{food}</span>)}</div>
        <Button className="secondary" onClick={() => updatePreferences({ ...state.preferences, avoidedFoods: [] })}><Save size={16} /> Clear avoid list</Button>
      </Card>
      <Card>
        <h2>Macro targets</h2>
        <p>{state.goal.targetCalories} calories · {state.goal.targetProteinG}g protein · {state.goal.targetCarbsG}g carbs · {state.goal.targetFatG}g fat · {state.goal.targetWaterOz} oz water</p>
        <Button className="secondary" onClick={resetDemo}><RotateCcw size={16} /> Reset demo data</Button>
      </Card>
    </div>
  );
}
