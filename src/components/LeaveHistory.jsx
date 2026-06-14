// Leave History tab: filter by employee & status
// Props: leaves, employees, filter states, handlers

import LeaveCard from "./LeaveCard";

export default function LeaveHistory({
  leaves, employees,
  filterEmployee, filterStatus,
  onFilterEmployee, onFilterStatus,
  onApprove, onReject,
}) {
  const filtered = leaves.filter((l) =>
    (filterEmployee === "All" || l.employee === filterEmployee) &&
    (filterStatus   === "All" || l.status   === filterStatus)
  );

  const sel = {
    padding: "8px 12px", borderRadius: 8,
    border: "1px solid #e2e8f0", fontSize: 13,
    flex: 1, outline: "none", background: "#fff",
  };

  return (
    <div>
      {/* Filters */}
      <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
        <select value={filterEmployee}
          onChange={(e) => onFilterEmployee(e.target.value)} style={sel}>
          <option value="All">All Employees</option>
          {employees.map((e) => <option key={e}>{e}</option>)}
        </select>
        <select value={filterStatus}
          onChange={(e) => onFilterStatus(e.target.value)} style={sel}>
          <option value="All">All Status</option>
          <option>Approved</option>
          <option>Pending</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* Cards */}
      {filtered.length === 0
        ? <div style={{ textAlign: "center", padding: 40, color: "#94a3b8" }}>
            No records found
          </div>
        : filtered.map((l) => (
            <LeaveCard key={l.id} leave={l}
              onApprove={onApprove} onReject={onReject} />
          ))
      }
    </div>
  );
}