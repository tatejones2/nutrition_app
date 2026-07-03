import { todayISO } from "./dateUtils";
import { estimateTargets } from "./macroTargets";
import type { AppState } from "../types/app";
import type { AthleteProfile, UserPreferences } from "../types/user";

const today = todayISO();

const profile: AthleteProfile = {
  id: "demo-athlete",
  fullName: "Jordan Carter",
  age: 20,
  sex: "Male",
  heightInches: 74,
  currentWeightLbs: 194,
  sport: "Basketball",
  position: "Guard",
  trainingLevel: "College",
  primaryGoal: "Gain lean muscle while maintaining speed",
  goalWeightLbs: 202,
  desiredWeightChangeRate: "0.5 lb per week"
};

const preferences: UserPreferences = {
  dietaryRestrictions: [],
  allergies: ["shellfish"],
  likedFoods: ["rice bowls", "turkey sandwiches", "smoothies", "bananas"],
  dislikedFoods: ["mushrooms"],
  avoidedFoods: ["mushrooms"],
  mealFrequencyPreference: "4 meals + 1 snack",
  cookingAccess: "Dining hall and apartment kitchen",
  budgetLevel: "Moderate",
  diningHallAccess: true,
  supplements: ["whey protein", "creatine"],
  sleepHabit: "7 hours on class days",
  hydrationHabit: "Usually 80-90 oz",
  recoveryNotes: "Left knee gets sore after heavy practice days."
};

const scheduleItems = [
  { id: "s1", date: today, title: "Team lift", itemType: "lift" as const, startTime: "08:30", endTime: "09:45", intensity: 8, location: "Performance center", notes: "Lower-body power" },
  { id: "s2", date: today, title: "Class block", itemType: "class" as const, startTime: "11:00", endTime: "14:00", intensity: 2, location: "Campus", notes: "Pack portable snack" },
  { id: "s3", date: today, title: "Practice", itemType: "practice" as const, startTime: "16:00", endTime: "18:15", intensity: 9, location: "Arena", notes: "High-tempo scrimmage" },
  { id: "s4", date: today, title: "Recovery mobility", itemType: "recovery" as const, startTime: "20:30", endTime: "20:55", intensity: 3, location: "Apartment", notes: "Knee care" }
];

const goal = estimateTargets(profile, scheduleItems);

export const demoState: AppState = {
  authUser: { id: "demo-athlete", email: "athlete@fueliq.demo", role: "athlete" },
  profile,
  preferences,
  goal,
  onboardingComplete: true,
  scheduleItems,
  foodLogs: [
    { id: "f1", date: today, mealType: "Breakfast", timeEaten: "07:10", foodName: "Oats, banana, whey, peanut butter", servingSize: "1 bowl", calories: 690, proteinG: 42, carbsG: 91, fatG: 18, fiberG: 10, sodiumMg: 220, notes: "Pre-lift bowl", wasAiRecommended: true },
    { id: "f2", date: today, mealType: "Snack", timeEaten: "10:15", foodName: "Chocolate milk", servingSize: "16 oz", calories: 360, proteinG: 18, carbsG: 58, fatG: 8, sodiumMg: 300, notes: "Post-lift recovery", wasAiRecommended: true }
  ],
  mealRecommendations: [
    { id: "m1", date: today, mealType: "Lunch", recommendedTime: "14:15", title: "Turkey rice bowl with avocado", description: "Lean protein, rice, beans, salsa, avocado, and fruit.", calories: 780, proteinG: 46, carbsG: 98, fatG: 22, fiberG: 13, sodiumMg: 860, hydrationNote: "Add 20 oz water before practice.", reasoning: "Refills glycogen after class and leaves enough digestion time before practice.", status: "pending" },
    { id: "m2", date: today, mealType: "Pre-practice", recommendedTime: "15:10", title: "Bagel with honey and banana", description: "Quick carbs with low fat for easy digestion.", calories: 430, proteinG: 11, carbsG: 92, fatG: 3, fiberG: 5, sodiumMg: 410, hydrationNote: "Sip 16-20 oz water with electrolytes.", reasoning: "High-tempo practice calls for fast carbs 45-75 minutes beforehand.", status: "pending" },
    { id: "m3", date: today, mealType: "Dinner", recommendedTime: "19:00", title: "Salmon, potatoes, berries, and greens", description: "Protein-forward recovery dinner with carbs and micronutrients.", calories: 840, proteinG: 52, carbsG: 92, fatG: 26, fiberG: 12, sodiumMg: 620, hydrationNote: "Finish another 24 oz by bedtime.", reasoning: "Supports muscle repair and restores fuel after a double training day.", status: "pending" }
  ],
  dailyMetrics: [
    { id: "d1", date: "2026-06-27", bodyWeightLbs: 193.2, calories: 2980, proteinG: 176, carbsG: 350, fatG: 88, waterOz: 92, sleepHours: 7.1, sorenessScore: 5, energyScore: 7, recoveryScore: 74, trainingIntensity: 7, notes: "" },
    { id: "d2", date: "2026-06-28", bodyWeightLbs: 193.6, calories: 3210, proteinG: 188, carbsG: 402, fatG: 86, waterOz: 108, sleepHours: 8.0, sorenessScore: 4, energyScore: 8, recoveryScore: 82, trainingIntensity: 8, notes: "" },
    { id: "d3", date: "2026-06-29", bodyWeightLbs: 193.8, calories: 2875, proteinG: 164, carbsG: 316, fatG: 94, waterOz: 84, sleepHours: 6.6, sorenessScore: 6, energyScore: 6, recoveryScore: 68, trainingIntensity: 9, notes: "" },
    { id: "d4", date: "2026-06-30", bodyWeightLbs: 194.0, calories: 3120, proteinG: 184, carbsG: 381, fatG: 87, waterOz: 105, sleepHours: 7.8, sorenessScore: 4, energyScore: 8, recoveryScore: 80, trainingIntensity: 6, notes: "" },
    { id: "d5", date: "2026-07-01", bodyWeightLbs: 194.1, calories: 3045, proteinG: 181, carbsG: 365, fatG: 86, waterOz: 96, sleepHours: 7.0, sorenessScore: 5, energyScore: 7, recoveryScore: 76, trainingIntensity: 8, notes: "" },
    { id: "d6", date: "2026-07-02", bodyWeightLbs: 194.0, calories: 2910, proteinG: 170, carbsG: 330, fatG: 92, waterOz: 88, sleepHours: 6.8, sorenessScore: 6, energyScore: 6, recoveryScore: 69, trainingIntensity: 7, notes: "" }
  ],
  aiMessages: [
    { id: "a1", role: "assistant", content: "Today is a high-fuel day. Your biggest wins are lunch after class, a simple carb snack before practice, and a full recovery dinner.", contextType: "chat", createdAt: new Date().toISOString() }
  ],
  aiInsights: [
    { id: "i1", date: today, insightType: "carbs", title: "Carbs are the lever today", summary: "You have a lift and practice, so under-eating carbs would likely show up as low late-session energy.", recommendation: "Keep lunch and pre-practice snack carb-forward, then add protein at dinner.", severity: "watch" },
    { id: "i2", date: today, insightType: "hydration", title: "Hydration is close but not done", summary: "Your recent water intake is slightly below the target for double-session days.", recommendation: "Add 20 oz before practice and 24 oz between dinner and bed.", severity: "watch" }
  ]
};
