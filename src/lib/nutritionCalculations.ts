import type { DailyMetric, FoodLog, MealRecommendation } from "../types/nutrition";
import type { AthleteGoal } from "../types/user";

export const sumLogs = (logs: FoodLog[]) =>
  logs.reduce(
    (total, log) => ({
      calories: total.calories + log.calories,
      proteinG: total.proteinG + log.proteinG,
      carbsG: total.carbsG + log.carbsG,
      fatG: total.fatG + log.fatG,
      waterOz: total.waterOz
    }),
    { calories: 0, proteinG: 0, carbsG: 0, fatG: 0, waterOz: 0 }
  );

export const percent = (value: number, target: number) => (target <= 0 ? 0 : Math.min(100, Math.round((value / target) * 100)));

export const latestMetric = (metrics: DailyMetric[]) => [...metrics].sort((a, b) => b.date.localeCompare(a.date))[0];

export const weightTrend = (metrics: DailyMetric[]) => {
  const sorted = [...metrics].sort((a, b) => a.date.localeCompare(b.date));
  if (sorted.length < 2) return 0;
  return Number((sorted[sorted.length - 1].bodyWeightLbs - sorted[0].bodyWeightLbs).toFixed(1));
};

export const macroGapText = (goal: AthleteGoal, logs: FoodLog[]) => {
  const totals = sumLogs(logs);
  return `${Math.max(0, goal.targetCalories - totals.calories)} calories, ${Math.max(0, goal.targetProteinG - totals.proteinG)}g protein, and ${Math.max(0, goal.targetCarbsG - totals.carbsG)}g carbs remaining`;
};

export const recommendationToLog = (meal: MealRecommendation): FoodLog => ({
  id: crypto.randomUUID(),
  date: meal.date,
  mealType: meal.mealType,
  timeEaten: meal.recommendedTime,
  foodName: meal.title,
  servingSize: "1 meal",
  calories: meal.calories,
  proteinG: meal.proteinG,
  carbsG: meal.carbsG,
  fatG: meal.fatG,
  fiberG: meal.fiberG,
  sodiumMg: meal.sodiumMg,
  notes: meal.reasoning,
  wasAiRecommended: true
});
