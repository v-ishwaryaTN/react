// Tab navigation: Dashboard | Leave History | Apply Leave

const TABS = [
  { id: "dashboard", label: "📊 Dashboard" },
  { id: "history",   label: "📋 Leave History" },
  { id: "apply",     label: "📝 Apply Leave" },
];

export default function TabBar({ activeTab, onTabChange }) {
  return (
    <div style={{
      display: "flex", background: "#fff",
      borderBottom: "2px solid #e2e8f0",
      padding: "0 24px",
    }}>
      {TABS.map((tab) => (
        <button key={tab.id} onClick={() => onTabChange(tab.id)}
          style={{
            padding: "12px 20px", border: "none",
            background: "none", cursor: "pointer",
            fontWeight: 600, fontSize: 13,
            color: activeTab === tab.id ? "#2563eb" : "#64748b",
            borderBottom: activeTab === tab.id
              ? "2px solid #2563eb"
              : "2px solid transparent",
            marginBottom: -2,
          }}>
          {tab.label}
        </button>
      ))}
    </div>
  );
}