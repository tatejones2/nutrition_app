import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { shortDate } from "../../lib/dateUtils";
import type { DailyMetric } from "../../types/nutrition";
import { Card } from "../ui/Card";

export function ProgressChart({ title, dataKey, data, color = "#C46A2B" }: { title: string; dataKey: keyof DailyMetric; data: DailyMetric[]; color?: string }) {
  const chartData = data.map((metric) => ({ ...metric, label: shortDate(metric.date) }));
  return (
    <Card className="chart-card">
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" height={210}>
        <AreaChart data={chartData} margin={{ top: 12, right: 12, left: -18, bottom: 0 }}>
          <defs>
            <linearGradient id={`${String(dataKey)}Gradient`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.35} />
              <stop offset="95%" stopColor={color} stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#E1D3BE" vertical={false} />
          <XAxis dataKey="label" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip />
          <Area type="monotone" dataKey={dataKey as string} stroke={color} fill={`url(#${String(dataKey)}Gradient)`} strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}
