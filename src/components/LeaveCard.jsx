// Single leave record card with Approve/Reject buttons
// Props: leave, onApprove, onReject

import { STATUS_BG, STATUS_COLOR } from "../constants";

export default function LeaveCard({ leave, onApprove, onReject }) {
  const { id, employee, type, from, to, reason, status } = leave;
  return (
    <div style={{
      background: "#fff", borderRadius: 12, padding: 16,
      marginBottom: 12, boxShadow: "0 1px 4px #0001",
      borderLeft: `4px solid ${STATUS_COLOR[status]}`,
    }}>
      {/* Info + Badge */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 15 }}>👤 {employee}</div>
          <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>{type}</div>
          <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>📅 {from} → {to}</div>
          <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>📝 {reason}</div>
        </div>
        <span style={{
          background: STATUS_BG[status], color: STATUS_COLOR[status],
          borderRadius: 20, padding: "4px 12px",
          fontSize: 11, fontWeight: 700,
        }}>
          {status}
        </span>
      </div>

      {/* Approve / Reject — only for Pending */}
      {status === "Pending" && (
        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <button onClick={() => onApprove(id)} style={{
            flex: 1, background: "#22c55e", color: "#fff",
            border: "none", borderRadius: 8, padding: "8px",
            fontWeight: 600, cursor: "pointer", fontSize: 12,
          }}>✅ Approve</button>
          <button onClick={() => onReject(id)} style={{
            flex: 1, background: "#ef4444", color: "#fff",
            border: "none", borderRadius: 8, padding: "8px",
            fontWeight: 600, cursor: "pointer", fontSize: 12,
          }}>❌ Reject</button>
        </div>
      )}
    </div>
  );
}