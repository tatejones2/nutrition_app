import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "../components/ui/Button";
import { OnboardingStep } from "../components/onboarding/OnboardingStep";
import { PreferenceTagInput } from "../components/onboarding/PreferenceTagInput";
import { useAppStore } from "../lib/appStore";
import type { AthleteProfile, UserPreferences } from "../types/user";

export function OnboardingPage() {
  const { state, completeOnboarding } = useAppStore();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState<AthleteProfile>(state.profile);
  const [preferences, setPreferences] = useState<UserPreferences>(state.preferences);
  const steps = ["Profile", "Sport", "Goals", "Food", "Lifestyle", "Review"];

  const field = <K extends keyof AthleteProfile>(key: K, value: AthleteProfile[K]) => setProfile((current) => ({ ...current, [key]: value }));

  return (
    <main className="onboarding-page">
      <div className="stepper">{steps.map((label, index) => <span key={label} className={index <= step ? "active" : ""}>{label}</span>)}</div>
      {step === 0 && <OnboardingStep title="Start with your body metrics" description="These estimates help set a practical athlete fueling baseline.">
        <div className="form-grid">
          <label>Name<input value={profile.fullName} onChange={(e) => field("fullName", e.target.value)} /></label>
          <label>Age<input type="number" value={profile.age} onChange={(e) => field("age", Number(e.target.value))} /></label>
          <label>Height inches<input type="number" value={profile.heightInches} onChange={(e) => field("heightInches", Number(e.target.value))} /></label>
          <label>Weight lbs<input type="number" value={profile.currentWeightLbs} onChange={(e) => field("currentWeightLbs", Number(e.target.value))} /></label>
          <label>Sex<input value={profile.sex} onChange={(e) => field("sex", e.target.value)} /></label>
        </div>
      </OnboardingStep>}
      {step === 1 && <OnboardingStep title="Tell FuelIQ your sport context" description="Training demand changes meal timing and carb needs.">
        <div className="form-grid">
          <label>Sport<input value={profile.sport} onChange={(e) => field("sport", e.target.value)} /></label>
          <label>Position / event<input value={profile.position} onChange={(e) => field("position", e.target.value)} /></label>
          <label>Training level<select value={profile.trainingLevel} onChange={(e) => field("trainingLevel", e.target.value as AthleteProfile["trainingLevel"])}><option>High school</option><option>College</option><option>Elite amateur</option><option>Professional</option><option>Recreational competitive</option></select></label>
        </div>
      </OnboardingStep>}
      {step === 2 && <OnboardingStep title="Set the performance goal" description="Small, sustainable changes protect training quality.">
        <div className="form-grid">
          <label>Main goal<input value={profile.primaryGoal} onChange={(e) => field("primaryGoal", e.target.value)} /></label>
          <label>Goal weight<input type="number" value={profile.goalWeightLbs} onChange={(e) => field("goalWeightLbs", Number(e.target.value))} /></label>
          <label>Desired rate<input value={profile.desiredWeightChangeRate} onChange={(e) => field("desiredWeightChangeRate", e.target.value)} /></label>
        </div>
      </OnboardingStep>}
      {step === 3 && <OnboardingStep title="Map food preferences" description="FuelIQ will avoid allergens, restrictions, disliked foods, and foods you reject later.">
        <div className="form-grid">
          <PreferenceTagInput label="Allergies" values={preferences.allergies} onChange={(v) => setPreferences({ ...preferences, allergies: v })} placeholder="Press enter to add" />
          <PreferenceTagInput label="Liked foods" values={preferences.likedFoods} onChange={(v) => setPreferences({ ...preferences, likedFoods: v })} placeholder="rice bowls" />
          <PreferenceTagInput label="Disliked foods" values={preferences.dislikedFoods} onChange={(v) => setPreferences({ ...preferences, dislikedFoods: v })} placeholder="eggs" />
          <PreferenceTagInput label="Dietary restrictions" values={preferences.dietaryRestrictions} onChange={(v) => setPreferences({ ...preferences, dietaryRestrictions: v })} placeholder="vegetarian" />
        </div>
      </OnboardingStep>}
      {step === 4 && <OnboardingStep title="Dial in your daily reality" description="Recommendations should fit your budget, cooking access, schedule, sleep, and hydration habits.">
        <div className="form-grid">
          <label>Meal frequency<input value={preferences.mealFrequencyPreference} onChange={(e) => setPreferences({ ...preferences, mealFrequencyPreference: e.target.value })} /></label>
          <label>Cooking access<input value={preferences.cookingAccess} onChange={(e) => setPreferences({ ...preferences, cookingAccess: e.target.value })} /></label>
          <label>Budget<select value={preferences.budgetLevel} onChange={(e) => setPreferences({ ...preferences, budgetLevel: e.target.value })}><option>Low</option><option>Moderate</option><option>High</option></select></label>
          <label>Sleep habits<input value={preferences.sleepHabit} onChange={(e) => setPreferences({ ...preferences, sleepHabit: e.target.value })} /></label>
          <label>Hydration habits<input value={preferences.hydrationHabit} onChange={(e) => setPreferences({ ...preferences, hydrationHabit: e.target.value })} /></label>
        </div>
      </OnboardingStep>}
      {step === 5 && <OnboardingStep title="Review and create plan" description="FuelIQ will estimate initial macros and adjust them as progress data comes in.">
        <div className="review-panel"><strong>{profile.fullName}</strong><p>{profile.sport} {profile.position} · {profile.primaryGoal}</p><p>Avoiding: {[...preferences.allergies, ...preferences.dislikedFoods].join(", ") || "none listed"}</p></div>
      </OnboardingStep>}
      <div className="onboarding-actions">
        <Button className="secondary" disabled={step === 0} onClick={() => setStep(step - 1)}><ArrowLeft size={16} /> Back</Button>
        {step < steps.length - 1 ? <Button onClick={() => setStep(step + 1)}>Next <ArrowRight size={16} /></Button> : <Button onClick={() => { completeOnboarding(profile, preferences); navigate("/dashboard"); }}><Check size={16} /> Create plan</Button>}
      </div>
    </main>
  );
}
