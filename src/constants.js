// All shared data, constants, and style maps

export const EMPLOYEES = ["Alice", "Bob", "Carol", "David", "Eve"];

export const LEAVE_TYPES = [
  "Sick Leave",
  "Casual Leave",
  "Annual Leave",
  "Maternity Leave",
  "Emergency Leave",
];

export const INITIAL_LEAVES = [
  { id: 1, employee: "Alice", type: "Sick Leave",
    from: "2026-06-01", to: "2026-06-02",
    reason: "Fever", status: "Approved" },
  { id: 2, employee: "Bob", type: "Casual Leave",
    from: "2026-06-05", to: "2026-06-05",
    reason: "Personal work", status: "Pending" },
  { id: 3, employee: "Carol", type: "Annual Leave",
    from: "2026-06-10", to: "2026-06-12",
    reason: "Vacation", status: "Rejected" },
];

export const STATUS_COLOR = {
  Approved: "#22c55e",
  Pending:  "#f59e0b",
  Rejected: "#ef4444",
};

export const STATUS_BG = {
  Approved: "#dcfce7",
  Pending:  "#fef9c3",
  Rejected: "#fee2e2",
};