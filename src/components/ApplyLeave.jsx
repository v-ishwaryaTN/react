// Apply Leave form
// Props: form, employees, leaveTypes, onChange, onSubmit

const FIELDS = [
  { label: "Employee Name", key: "employee",  type: "select"   },
  { label: "Leave Type",    key: "type",      type: "select"   },
  { label: "From Date",     key: "from",      type: "date"     },
  { label: "To Date",       key: "to",        type: "date"     },
  { label: "Reason",        key: "reason",    type: "textarea" },
];

const inp = {
  width: "100%", padding: "10px 12px", borderRadius: 8,
  border: "1px solid #e2e8f0", fontSize: 13,
  boxSizing: "border-box", outline: "none", fontFamily: "inherit",
};

export default function ApplyLeave({
  form, employees, leaveTypes, onChange, onSubmit,
}) {
  return (
    <div style={{
      background: "#fff", borderRadius: 12,
      padding: 20, boxShadow: "0 1px 4px #0001",
    }}>
      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 16, color: "#1e3a5f" }}>
        📝 Apply for Leave
      </div>

      {FIELDS.map((field) => {
        const options = field.key === "employee" ? employees
                      : field.key === "type"     ? leaveTypes : [];
        return (
          <div key={field.key} style={{ marginBottom: 14 }}>
            <label style={{
              fontSize: 12, fontWeight: 600, color: "#475569",
              display: "block", marginBottom: 4,
            }}>{field.label}</label>

            {field.type === "select" && (
              <select value={form[field.key]}
                onChange={(e) => onChange(field.key, e.target.value)}
                style={inp}>
                {options.map((o) => <option key={o}>{o}</option>)}
              </select>
            )}
            {field.type === "textarea" && (
              <textarea value={form[field.key]}
                onChange={(e) => onChange(field.key, e.target.value)}
                rows={3} placeholder="Enter reason..."
                style={{ ...inp, resize: "none" }} />
            )}
            {field.type === "date" && (
              <input type="date" value={form[field.key]}
                onChange={(e) => onChange(field.key, e.target.value)}
                style={inp} />
            )}
          </div>
        );
      })}

      <button onClick={onSubmit} style={{
        width: "100%",
        background: "linear-gradient(135deg, #1e3a5f, #2563eb)",
        color: "#fff", border: "none", borderRadius: 10,
        padding: "13px", fontWeight: 700, fontSize: 15,
        cursor: "pointer", marginTop: 4,
      }}>
        Submit Leave Request
      </button>
    </div>
  );
}