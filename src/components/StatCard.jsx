// Reusable stat card — used in Dashboard
// Props: icon, label, value, color, bg

export default function StatCard({ icon, label, value, color, bg }) {
  return (
    <div style={{
      background: bg, borderRadius: 12,
      padding: 16, textAlign: "center",
    }}>
      <div style={{ fontSize: 28 }}>{icon}</div>
      <div style={{ fontSize: 28, fontWeight: 700, color }}>
        {value}
      </div>
      <div style={{ fontSize: 12, color: "#64748b", fontWeight: 500 }}>
        {label}
      </div>
    </div>
  );
}