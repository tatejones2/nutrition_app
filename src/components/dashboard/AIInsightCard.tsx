import { Sparkles } from "lucide-react";
import type { AIInsight } from "../../types/ai";
import { Card } from "../ui/Card";

export function AIInsightCard({ insight }: { insight: AIInsight }) {
  return (
    <Card className={`insight-card ${insight.severity}`}>
      <Sparkles size={18} />
      <div>
        <span className="eyebrow">{insight.insightType.replace("_", " ")}</span>
        <h3>{insight.title}</h3>
        <p>{insight.summary}</p>
        <strong>{insight.recommendation}</strong>
      </div>
    </Card>
  );
}
