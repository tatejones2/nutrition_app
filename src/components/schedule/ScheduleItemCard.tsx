import { Trash2 } from "lucide-react";
import { timeLabel } from "../../lib/dateUtils";
import { useAppStore } from "../../lib/appStore";
import type { ScheduleItem } from "../../types/schedule";
import { Button } from "../ui/Button";

export function ScheduleItemCard({ item }: { item: ScheduleItem }) {
  const { removeScheduleItem } = useAppStore();
  return (
    <div className="schedule-item">
      <div>
        <span className="eyebrow">{timeLabel(item.startTime)} - {timeLabel(item.endTime)} · {item.itemType}</span>
        <strong>{item.title}</strong>
        <p>{item.location} {item.notes ? `· ${item.notes}` : ""}</p>
      </div>
      <div className="intensity">I{item.intensity}</div>
      <Button className="icon-button" aria-label={`Remove ${item.title}`} onClick={() => removeScheduleItem(item.id)}><Trash2 size={16} /></Button>
    </div>
  );
}
