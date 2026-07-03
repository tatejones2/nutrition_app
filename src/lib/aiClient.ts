import type { AppState } from "../types/app";

export const AI_SYSTEM_PROMPT = `You are an AI sports nutrition assistant for high-level athletes. Help the user fuel training, recover well, and progress toward their goal. Use profile, schedule, logs, progress metrics, food preferences, disliked foods, allergies, and restrictions. Avoid medical diagnosis, extreme restriction, dehydration, unsafe weight cuts, and foods the user avoids.`;

export async function sendCoachMessage(message: string, context: AppState): Promise<string> {
  try {
    const response = await fetch("/api/ai/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, context })
    });
    if (response.ok) {
      const data = (await response.json()) as { reply?: string };
      if (data.reply) return data.reply;
    }
  } catch {
    // Fall through to local coaching when no backend route is running.
  }

  const lower = message.toLowerCase();
  if (lower.includes("missed") || lower.includes("breakfast")) {
    return "Get a quick carb-and-protein option now, then keep the next meal normal. A smoothie, turkey sandwich, or rice bowl works well. Avoid trying to make up everything in one huge meal before training.";
  }
  if (lower.includes("water") || lower.includes("hydrate")) {
    return `Your target is ${context.goal.targetWaterOz} oz today. Since your schedule includes hard training, add 16-24 oz in the two hours before practice and include electrolytes if it is hot or you sweat heavily.`;
  }
  if (lower.includes("protein")) {
    return `You are aiming for ${context.goal.targetProteinG}g protein. Spread it across 4-5 eating windows so each meal has a clear protein anchor.`;
  }
  if (lower.includes("before") || lower.includes("lift") || lower.includes("practice")) {
    return "For the next hard session, choose easy carbs with a little protein: bagel plus honey, banana plus protein shake, or rice with turkey. Keep fat and fiber lower inside the final hour.";
  }
  return "Based on your goal and schedule, prioritize the next high-impact action: hit your carb target around training, keep protein consistent, and close the hydration gap before bed.";
}
