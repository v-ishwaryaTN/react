// Dashboard tab: stat cards + recent leave requests

import StatCard from "./StatCard";
import { STATUS_BG, STATUS_COLOR } from "../constants";

const STAT_CARDS = [
  { key: "total",    label: "Total Requests", color: "#2563eb", bg: "#dbeafe", icon: "📋" },
  { key: "approved", label: "Approved",       color: "#16a34a", bg: "#dcfce7", icon: "✅" },
  { key: "pending",  label: "Pending",        color: "#d97706", bg: "#fef9c3", icon: "⏳" },
  { key: "rejected", label: "Rejected",       color: "#dc2626", bg: "#fee2e2", icon: "❌" },
];

export default function Dashboard({ leaves, counts }) {
  return (
    <div>
      {/* Stat Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: 12, marginBottom: 20,
      }}>
        {STAT_CARDS.map((card) => (
          <StatCard
            key={card.key}
            icon={card.icon}
            label={card.label}
            value={counts[card.key]}
            color={card.color}
            bg={card.bg}
          />
        ))}
      </div>

      {/* Recent Requests */}
      <div style={{
        background: "#fff", borderRadius: 12,
        padding: 16, boxShadow: "0 1px 4px #0001",
      }}>
        <div style={{ fontWeight: 700, marginBottom: 12, color: "#1e3a5f" }}>
          Recent Requests
        </div>
        {leaves.slice(-3).reverse().map((l) => (
          <div key={l.id} style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "center", padding: "10px 0",
            borderBottom: "1px solid #f1f5f9",
          }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: 13 }}>{l.employee}</div>
              <div style={{ fontSize: 11, color: "#94a3b8" }}>
                {l.type} · {l.from}
              </div>
            </div>
            <span style={{
              background: STATUS_BG[l.status],
              color: STATUS_COLOR[l.status],
              borderRadius: 20, padding: "3px 10px",
              fontSize: 11, fontWeight: 600,
            }}>
              {l.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}