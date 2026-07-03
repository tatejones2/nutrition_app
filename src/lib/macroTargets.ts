import type { AthleteGoal, AthleteProfile } from "../types/user";
import type { ScheduleItem } from "../types/schedule";

export function estimateTargets(profile: AthleteProfile, schedule: ScheduleItem[] = []): AthleteGoal {
  const intenseItems = schedule.filter((item) => ["lift", "practice", "game"].includes(item.itemType));
  const loadMultiplier = intenseItems.some((item) => item.itemType === "game") ? 18 : intenseItems.length > 1 ? 17 : intenseItems.length ? 16 : 14;
  const goalModifier = profile.primaryGoal.toLowerCase().includes("gain")
    ? 300
    : profile.primaryGoal.toLowerCase().includes("lose")
      ? -300
      : 0;
  const targetCalories = Math.max(1800, Math.round(profile.currentWeightLbs * loadMultiplier + goalModifier));
  const protein = Math.round(profile.currentWeightLbs * (profile.primaryGoal.toLowerCase().includes("maintain") ? 0.8 : 0.9));
  const fat = Math.round(profile.currentWeightLbs * 0.38);
  const carbs = Math.round((targetCalories - protein * 4 - fat * 9) / 4);
  const water = Math.round(profile.currentWeightLbs * 0.65 + intenseItems.length * 16);

  return {
    goalType: profile.primaryGoal,
    goalDescription: `${profile.primaryGoal} for ${profile.sport} performance`,
    targetCalories,
    targetProteinG: protein,
    targetCarbsG: Math.max(140, carbs),
    targetFatG: Math.max(45, fat),
    targetWaterOz: water
  };
}
