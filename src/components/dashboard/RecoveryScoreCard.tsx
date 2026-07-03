import { Activity } from "lucide-react";
import { Card } from "../ui/Card";

export function RecoveryScoreCard({ score, sleep, soreness }: { score: number; sleep: number; soreness: number }) {
  return (
    <Card className="recovery-card">
      <Activity size={20} />
      <span>Recovery Readiness</span>
      <strong>{score}/100</strong>
      <p>{sleep}h sleep · soreness {soreness}/10</p>
    </Card>
  );
}
