import { NavLink, Link } from "react-router-dom";
import { BarChart3, Bot, CalendarDays, ClipboardList, Dumbbell, LayoutDashboard, Settings, Shield, Utensils } from "lucide-react";
import { useAppStore } from "../../lib/appStore";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/schedule", label: "Schedule", icon: CalendarDays },
  { to: "/meal-plan", label: "Meal Plan", icon: Utensils },
  { to: "/food-log", label: "Food Log", icon: ClipboardList },
  { to: "/progress", label: "Progress", icon: BarChart3 },
  { to: "/ai-coach", label: "AI Coach", icon: Bot },
  { to: "/settings", label: "Settings", icon: Settings }
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const { state } = useAppStore();
  const visibleNavItems = state.authUser?.role === "admin" ? [...navItems, { to: "/admin", label: "Admin", icon: Shield }] : navItems;
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link to="/dashboard" className="brand-mark">
          <span className="brand-icon"><Dumbbell size={22} /></span>
          <span><strong>FuelIQ</strong><small>Athlete</small></span>
        </Link>
        <nav className="nav-list">
          {visibleNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
        <p className="disclaimer">General performance nutrition guidance only. Not medical advice.</p>
      </aside>
      <main className="main-panel">{children}</main>
    </div>
  );
}
