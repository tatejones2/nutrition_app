import { MealRecommendationCard } from "../components/nutrition/MealRecommendationCard";
import { useAppStore } from "../lib/appStore";
import { sortByTime } from "../lib/dateUtils";

export function MealPlanPage() {
  const { state, today } = useAppStore();
  const meals = sortByTime(state.mealRecommendations.filter((meal) => meal.date === today));
  return (
    <div className="page">
      <header className="page-header"><span className="eyebrow">Daily fueling plan</span><h1>Meal Plan</h1><p>Accept, replace, avoid, or log recommendations as your day changes.</p></header>
      <div className="meal-grid">{meals.map((meal) => <MealRecommendationCard meal={meal} key={meal.id} />)}</div>
    </div>
  );
}
