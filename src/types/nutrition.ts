export interface MacroSet {
  calories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
}

export interface FoodItem extends MacroSet {
  id: string;
  name: string;
  servingSize: string;
  fiberG?: number;
  sodiumMg?: number;
  tags: string[];
}

export interface FoodLog extends MacroSet {
  id: string;
  date: string;
  mealType: string;
  timeEaten: string;
  foodName: string;
  servingSize: string;
  fiberG?: number;
  sodiumMg?: number;
  notes: string;
  wasAiRecommended: boolean;
}

export interface MealRecommendation extends MacroSet {
  id: string;
  date: string;
  mealType: string;
  recommendedTime: string;
  title: string;
  description: string;
  fiberG?: number;
  sodiumMg?: number;
  hydrationNote: string;
  reasoning: string;
  status: "pending" | "accepted" | "rejected" | "replaced" | "completed";
}

export interface DailyMetric extends MacroSet {
  id: string;
  date: string;
  bodyWeightLbs: number;
  waterOz: number;
  sleepHours: number;
  sorenessScore: number;
  energyScore: number;
  recoveryScore: number;
  trainingIntensity: number;
  notes: string;
}
