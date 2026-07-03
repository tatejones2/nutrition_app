import type { AIInsight, AIMessage } from "./ai";
import type { DailyMetric, FoodLog, MealRecommendation } from "./nutrition";
import type { ScheduleItem } from "./schedule";
import type { AthleteGoal, AthleteProfile, AuthUser, UserPreferences } from "./user";

export interface AppState {
  authUser: AuthUser | null;
  profile: AthleteProfile;
  preferences: UserPreferences;
  goal: AthleteGoal;
  dailyMetrics: DailyMetric[];
  scheduleItems: ScheduleItem[];
  foodLogs: FoodLog[];
  mealRecommendations: MealRecommendation[];
  aiMessages: AIMessage[];
  aiInsights: AIInsight[];
  onboardingComplete: boolean;
}
