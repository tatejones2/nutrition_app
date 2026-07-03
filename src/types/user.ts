export type TrainingLevel = "High school" | "College" | "Elite amateur" | "Professional" | "Recreational competitive";

export interface AthleteProfile {
  id: string;
  fullName: string;
  age: number;
  sex: string;
  heightInches: number;
  currentWeightLbs: number;
  sport: string;
  position: string;
  trainingLevel: TrainingLevel;
  primaryGoal: string;
  goalWeightLbs: number;
  desiredWeightChangeRate: string;
}

export interface UserPreferences {
  dietaryRestrictions: string[];
  allergies: string[];
  likedFoods: string[];
  dislikedFoods: string[];
  avoidedFoods: string[];
  mealFrequencyPreference: string;
  cookingAccess: string;
  budgetLevel: string;
  diningHallAccess: boolean;
  supplements: string[];
  sleepHabit: string;
  hydrationHabit: string;
  recoveryNotes: string;
}

export interface AthleteGoal {
  goalType: string;
  goalDescription: string;
  targetCalories: number;
  targetProteinG: number;
  targetCarbsG: number;
  targetFatG: number;
  targetWaterOz: number;
}

export interface AuthUser {
  id: string;
  email: string;
  role: "athlete" | "admin";
}
