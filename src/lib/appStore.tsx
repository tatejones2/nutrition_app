import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { demoState } from "./demoState";
import { estimateTargets } from "./macroTargets";
import { todayISO } from "./dateUtils";
import type { AIMessage } from "../types/ai";
import type { AppState } from "../types/app";
import type { FoodLog, MealRecommendation } from "../types/nutrition";
import type { ScheduleItem } from "../types/schedule";
import type { AthleteProfile, UserPreferences } from "../types/user";

const STORAGE_KEY = "fueliq-athlete-state";

interface AppStoreValue {
  state: AppState;
  today: string;
  loginAsAthlete: () => void;
  loginAsAdmin: () => void;
  updateProfile: (profile: AthleteProfile) => void;
  updatePreferences: (preferences: UserPreferences) => void;
  completeOnboarding: (profile: AthleteProfile, preferences: UserPreferences) => void;
  addScheduleItem: (item: ScheduleItem) => void;
  removeScheduleItem: (id: string) => void;
  addFoodLog: (log: FoodLog) => void;
  updateMealStatus: (id: string, status: MealRecommendation["status"]) => void;
  replaceMeal: (id: string) => void;
  avoidFood: (foodName: string) => void;
  addAIMessage: (message: AIMessage) => void;
  resetDemo: () => void;
}

const AppStoreContext = createContext<AppStoreValue | undefined>(undefined);

function loadState(): AppState {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return demoState;
  try {
    return { ...demoState, ...JSON.parse(raw) } as AppState;
  } catch {
    return demoState;
  }
}

export function AppStoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(loadState);
  const today = todayISO();

  const commit = (producer: (current: AppState) => AppState) => {
    setState((current) => {
      const next = producer(current);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const value = useMemo<AppStoreValue>(
    () => ({
      state,
      today,
      loginAsAthlete: () => commit((current) => ({ ...current, authUser: { id: "demo-athlete", email: "athlete@fueliq.demo", role: "athlete" }, onboardingComplete: true })),
      loginAsAdmin: () => commit((current) => ({ ...current, authUser: { id: "admin-user", email: "admin@fueliq.demo", role: "admin" }, onboardingComplete: true })),
      updateProfile: (profile) => commit((current) => ({ ...current, profile, goal: estimateTargets(profile, current.scheduleItems) })),
      updatePreferences: (preferences) => commit((current) => ({ ...current, preferences })),
      completeOnboarding: (profile, preferences) =>
        commit((current) => ({
          ...current,
          profile,
          preferences,
          goal: estimateTargets(profile, current.scheduleItems),
          onboardingComplete: true
        })),
      addScheduleItem: (item) =>
        commit((current) => ({
          ...current,
          scheduleItems: [...current.scheduleItems, item],
          goal: estimateTargets(current.profile, [...current.scheduleItems, item])
        })),
      removeScheduleItem: (id) => commit((current) => ({ ...current, scheduleItems: current.scheduleItems.filter((item) => item.id !== id) })),
      addFoodLog: (log) => commit((current) => ({ ...current, foodLogs: [log, ...current.foodLogs] })),
      updateMealStatus: (id, status) =>
        commit((current) => ({
          ...current,
          mealRecommendations: current.mealRecommendations.map((meal) => (meal.id === id ? { ...meal, status } : meal))
        })),
      replaceMeal: (id) =>
        commit((current) => ({
          ...current,
          mealRecommendations: current.mealRecommendations.map((meal) =>
            meal.id === id
              ? {
                  ...meal,
                  title: "Chicken burrito bowl with rice and fruit",
                  description: "A familiar high-carb, high-protein swap that keeps the meal timing intact.",
                  calories: meal.calories + 20,
                  proteinG: meal.proteinG + 3,
                  carbsG: meal.carbsG + 6,
                  fatG: Math.max(8, meal.fatG - 4),
                  reasoning: "Replaced with similar macros while respecting your avoid list.",
                  status: "replaced"
                }
              : meal
          )
        })),
      avoidFood: (foodName) =>
        commit((current) => ({
          ...current,
          preferences: {
            ...current.preferences,
            avoidedFoods: Array.from(new Set([...current.preferences.avoidedFoods, foodName])),
            dislikedFoods: Array.from(new Set([...current.preferences.dislikedFoods, foodName]))
          }
        })),
      addAIMessage: (message) => commit((current) => ({ ...current, aiMessages: [...current.aiMessages, message] })),
      resetDemo: () => {
        localStorage.removeItem(STORAGE_KEY);
        setState(demoState);
      }
    }),
    [state, today]
  );

  return <AppStoreContext.Provider value={value}>{children}</AppStoreContext.Provider>;
}

export function useAppStore() {
  const value = useContext(AppStoreContext);
  if (!value) throw new Error("useAppStore must be used inside AppStoreProvider");
  return value;
}
