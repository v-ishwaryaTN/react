// Top header with title and Apply Leave button

export default function Header({ onApplyClick }) {
  return (
    <div style={{
      background: "linear-gradient(135deg, #1e3a5f, #2563eb)",
      color: "#fff", padding: "16px 24px",
      display: "flex", alignItems: "center",
      justifyContent: "space-between",
    }}>
      <div>
        <div style={{ fontSize: 20, fontWeight: 700 }}>
          🏢 HR Leave Management
        </div>
        <div style={{ fontSize: 12, opacity: 0.8 }}>
          Employee Leave Tracker
        </div>
      </div>
      <button onClick={onApplyClick} style={{
        background: "#fff", color: "#2563eb",
        border: "none", borderRadius: 8,
        padding: "8px 16px", fontWeight: 600,
        cursor: "pointer", fontSize: 13,
      }}>
        + Apply Leave
      </button>
    </div>
  );
}
// export default Header;