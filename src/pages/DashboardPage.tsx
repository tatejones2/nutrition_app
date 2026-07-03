import { CalendarDays, Droplets, Flame, Scale, Utensils } from "lucide-react";
import { AIInsightCard } from "../components/dashboard/AIInsightCard";
import { MetricCard } from "../components/dashboard/MetricCard";
import { RecoveryScoreCard } from "../components/dashboard/RecoveryScoreCard";
import { Card } from "../components/ui/Card";
import { MacroProgressBar } from "../components/nutrition/MacroProgressBar";
import { MealRecommendationCard } from "../components/nutrition/MealRecommendationCard";
import { ScheduleItemCard } from "../components/schedule/ScheduleItemCard";
import { useAppStore } from "../lib/appStore";
import { latestMetric, sumLogs, weightTrend } from "../lib/nutritionCalculations";
import { sortByTime } from "../lib/dateUtils";

export function DashboardPage() {
  const { state, today } = useAppStore();
  const logs = state.foodLogs.filter((log) => log.date === today);
  const schedule = sortByTime(state.scheduleItems.filter((item) => item.date === today));
  const meals = sortByTime(state.mealRecommendations.filter((meal) => meal.date === today && meal.status !== "completed"));
  const totals = sumLogs(logs);
  const metric = latestMetric(state.dailyMetrics);
  return (
    <div className="page">
      <header className="page-header"><span className="eyebrow">Today</span><h1>Ready to fuel, {state.profile.fullName.split(" ")[0]}</h1><p>Your next best move is simple: close the carb and hydration gap before practice.</p></header>
      <section className="metric-grid">
        <MetricCard label="Goal status" value="On track" detail="2 key fueling windows left" icon={Flame} tone="green" />
        <MetricCard label="Weight trend" value={`${weightTrend(state.dailyMetrics) >= 0 ? "+" : ""}${weightTrend(state.dailyMetrics)} lb`} detail={`${state.profile.currentWeightLbs} lb current`} icon={Scale} />
        <MetricCard label="Training load" value="High" detail={`${schedule.filter((i) => ["lift", "practice", "game"].includes(i.itemType)).length} performance sessions`} icon={CalendarDays} tone="orange" />
        <MetricCard label="Water target" value={`${state.goal.targetWaterOz} oz`} detail={`${metric?.waterOz ?? 0} oz yesterday`} icon={Droplets} />
      </section>
      <section className="dashboard-grid">
        <Card>
          <div className="card-heading"><h2>Macro Targets</h2><span>{totals.calories} / {state.goal.targetCalories} cal</span></div>
          <MacroProgressBar label="Calories" value={totals.calories} target={state.goal.targetCalories} unit="" />
          <MacroProgressBar label="Protein" value={totals.proteinG} target={state.goal.targetProteinG} />
          <MacroProgressBar label="Carbs" value={totals.carbsG} target={state.goal.targetCarbsG} />
          <MacroProgressBar label="Fat" value={totals.fatG} target={state.goal.targetFatG} />
        </Card>
        <RecoveryScoreCard score={metric?.recoveryScore ?? 75} sleep={metric?.sleepHours ?? 7} soreness={metric?.sorenessScore ?? 5} />
        <Card>
          <div className="card-heading"><h2>Today’s Schedule</h2><Utensils size={18} /></div>
          <div className="stack">{schedule.slice(0, 4).map((item) => <ScheduleItemCard item={item} key={item.id} />)}</div>
        </Card>
        <div className="stack">{state.aiInsights.slice(0, 2).map((insight) => <AIInsightCard key={insight.id} insight={insight} />)}</div>
      </section>
      <section className="section-header"><h2>Recommended next meal</h2></section>
      {meals[0] && <MealRecommendationCard meal={meals[0]} />}
    </div>
  );
}
