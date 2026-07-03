export interface AIMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  contextType: "chat" | "daily-plan" | "progress" | "onboarding";
  createdAt: string;
}

export interface AIInsight {
  id: string;
  date: string;
  insightType: "progress" | "hydration" | "recovery" | "calories" | "protein" | "carbs" | "weight_trend" | "meal_timing";
  title: string;
  summary: string;
  recommendation: string;
  severity: "positive" | "watch" | "urgent";
}
