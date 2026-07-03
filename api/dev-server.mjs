import http from "node:http";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

function loadDotEnv() {
  const envPath = resolve(process.cwd(), ".env");
  if (!existsSync(envPath)) return;

  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;

    const [key, ...valueParts] = trimmed.split("=");
    const value = valueParts.join("=").trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = value;
  }
}

loadDotEnv();

const systemPrompt = `You are an AI sports nutrition assistant for high-level athletes. Help the user fuel training, recover well, and progress toward their goal. Use profile, schedule, logs, progress metrics, food preferences, disliked foods, allergies, and restrictions. Avoid medical diagnosis, extreme restriction, dehydration, unsafe weight cuts, and foods the user avoids.`;

function extractOutputText(data) {
  if (typeof data.output_text === "string") return data.output_text;
  const textItems = data.output?.flatMap((item) => item.content ?? []).filter((item) => item.type === "output_text" && item.text);
  return textItems?.map((item) => item.text).join("\n").trim();
}

async function getOpenAIReply(message, context) {
  if (!process.env.OPENAI_API_KEY) {
    return `Backend is running, but OPENAI_API_KEY is not set yet. Once you add it, I will answer with live OpenAI context-aware coaching. For now: ${message.includes("water") ? "prioritize steady fluids before and after training." : "prioritize carbs around training, protein across the day, and hydration before bed."}`;
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-5.1-mini",
      input: [
        {
          role: "developer",
          content: systemPrompt
        },
        {
          role: "user",
          content: JSON.stringify({
            request: message,
            athleteContext: {
              profile: context.profile,
              goal: context.goal,
              preferences: context.preferences,
              todaySchedule: context.scheduleItems,
              todayFoodLogs: context.foodLogs,
              recentMetrics: context.dailyMetrics,
              recentInsights: context.aiInsights
            }
          })
        }
      ]
    })
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`OpenAI request failed ${response.status}: ${errorBody}`);
  }

  const data = await response.json();
  return extractOutputText(data) || "I could not parse the AI response. Try again with a shorter request.";
}

const server = http.createServer(async (req, res) => {
  if (req.method === "POST" && req.url === "/api/ai/chat") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const { message = "", context = {} } = JSON.parse(body || "{}");
      getOpenAIReply(message, context)
        .then((reply) => {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ reply }));
        })
        .catch((error) => {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: error.message }));
        });
    });
    return;
  }
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(8787, () => {
  console.log("FuelIQ API dev server listening on http://localhost:8787");
  console.log(process.env.OPENAI_API_KEY ? "OpenAI key loaded from environment." : "OpenAI key not found. Add OPENAI_API_KEY to .env.");
});
