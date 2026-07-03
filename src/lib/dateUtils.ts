export const todayISO = () => new Date().toISOString().slice(0, 10);

export const timeLabel = (time: string) => {
  const [hour, minute] = time.split(":").map(Number);
  const date = new Date();
  date.setHours(hour, minute || 0, 0, 0);
  return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
};

export const shortDate = (date: string) =>
  new Date(`${date}T12:00:00`).toLocaleDateString([], { month: "short", day: "numeric" });

export const sortByTime = <T extends { startTime?: string; recommendedTime?: string; timeEaten?: string }>(items: T[]) =>
  [...items].sort((a, b) => {
    const aTime = a.startTime ?? a.recommendedTime ?? a.timeEaten ?? "00:00";
    const bTime = b.startTime ?? b.recommendedTime ?? b.timeEaten ?? "00:00";
    return aTime.localeCompare(bTime);
  });
