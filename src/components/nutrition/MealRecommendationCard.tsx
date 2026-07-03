import { Check, RefreshCcw, ThumbsDown, Utensils } from "lucide-react";
import { recommendationToLog } from "../../lib/nutritionCalculations";
import { useAppStore } from "../../lib/appStore";
import type { MealRecommendation } from "../../types/nutrition";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export function MealRecommendationCard({ meal }: { meal: MealRecommendation }) {
  const { addFoodLog, updateMealStatus, replaceMeal, avoidFood } = useAppStore();
  return (
    <Card className="meal-card">
      <div className="card-heading">
        <div>
          <span className="eyebrow">{meal.mealType} at {meal.recommendedTime}</span>
          <h3>{meal.title}</h3>
        </div>
        <span className={`status-pill ${meal.status}`}>{meal.status}</span>
      </div>
      <p>{meal.description}</p>
      <div className="macro-pills">
        <span>{meal.calories} cal</span><span>{meal.proteinG}g protein</span><span>{meal.carbsG}g carbs</span><span>{meal.fatG}g fat</span>
      </div>
      <p className="reasoning">{meal.reasoning}</p>
      <p className="hydration-note">{meal.hydrationNote}</p>
      <div className="action-row">
        <Button onClick={() => updateMealStatus(meal.id, "accepted")}><Check size={16} /> Accept</Button>
        <Button className="secondary" onClick={() => replaceMeal(meal.id)}><RefreshCcw size={16} /> Replace</Button>
        <Button className="secondary" onClick={() => { avoidFood(meal.title); updateMealStatus(meal.id, "rejected"); }}><ThumbsDown size={16} /> Avoid</Button>
        <Button className="secondary" onClick={() => { addFoodLog(recommendationToLog(meal)); updateMealStatus(meal.id, "completed"); }}><Utensils size={16} /> Log</Button>
      </div>
    </Card>
  );
}
