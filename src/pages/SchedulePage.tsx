import { useState } from "react";
import { Plus } from "lucide-react";
import { ScheduleItemCard } from "../components/schedule/ScheduleItemCard";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { useAppStore } from "../lib/appStore";
import { sortByTime } from "../lib/dateUtils";
import type { ScheduleItemType } from "../types/schedule";

export function SchedulePage() {
  const { state, today, addScheduleItem } = useAppStore();
  const [title, setTitle] = useState("");
  const [itemType, setItemType] = useState<ScheduleItemType>("practice");
  const [startTime, setStartTime] = useState("15:00");
  const schedule = sortByTime(state.scheduleItems.filter((item) => item.date === today));
  return (
    <div className="page">
      <header className="page-header"><span className="eyebrow">Training demand</span><h1>Schedule</h1><p>FuelIQ adjusts meal timing, carbs, and hydration around what your day actually looks like.</p></header>
      <Card>
        <form className="form-grid" onSubmit={(e) => { e.preventDefault(); if (!title) return; addScheduleItem({ id: crypto.randomUUID(), date: today, title, itemType, startTime, endTime: `${String(Math.min(23, Number(startTime.slice(0, 2)) + 1)).padStart(2, "0")}:${startTime.slice(3)}`, intensity: 7, location: "", notes: "" }); setTitle(""); }}>
          <label>Title<input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Film, lift, practice" /></label>
          <label>Type<select value={itemType} onChange={(e) => setItemType(e.target.value as ScheduleItemType)}><option value="lift">Lift</option><option value="practice">Practice</option><option value="game">Game</option><option value="class">Class</option><option value="travel">Travel</option><option value="recovery">Recovery</option><option value="meal">Meal window</option></select></label>
          <label>Start<input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} /></label>
          <Button><Plus size={16} /> Add item</Button>
        </form>
      </Card>
      <div className="stack">{schedule.map((item) => <ScheduleItemCard item={item} key={item.id} />)}</div>
    </div>
  );
}
