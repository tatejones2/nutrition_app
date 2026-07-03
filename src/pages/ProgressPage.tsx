import { ProgressChart } from "../components/charts/ProgressChart";
import { AIInsightCard } from "../components/dashboard/AIInsightCard";
import { useAppStore } from "../lib/appStore";

export function ProgressPage() {
  const { state } = useAppStore();
  return (
    <div className="page">
      <header className="page-header"><span className="eyebrow">Trend analysis</span><h1>Progress</h1><p>Watch body weight, intake, sleep, hydration, energy, and recovery together.</p></header>
      <div className="chart-grid">
        <ProgressChart title="Body Weight" data={state.dailyMetrics} dataKey="bodyWeightLbs" color="#6F7F4E" />
        <ProgressChart title="Calories" data={state.dailyMetrics} dataKey="calories" />
        <ProgressChart title="Hydration" data={state.dailyMetrics} dataKey="waterOz" color="#D9A441" />
        <ProgressChart title="Recovery Score" data={state.dailyMetrics} dataKey="recoveryScore" color="#23313D" />
        <ProgressChart title="Sleep" data={state.dailyMetrics} dataKey="sleepHours" color="#8F4420" />
        <ProgressChart title="Energy" data={state.dailyMetrics} dataKey="energyScore" color="#4F7C59" />
      </div>
      <div className="stack">{state.aiInsights.map((insight) => <AIInsightCard insight={insight} key={insight.id} />)}</div>
    </div>
  );
}
