import { useRef, useState } from "react";
import { Button, Input, Select, Card } from "@ui";

const categories = ["Ăn uống", "Di chuyển", "Giải trí", "Mua sắm", "Khác"];
const initialForm = {
  description: "",
  amount: "",
  category: "Ăn uống",
  date: new Date().toISOString().split("T")[0],
};
const initialData = [
  {
    id: 1,
    description: "Cà phê sáng",
    amount: 45000,
    category: "Ăn uống",
    date: "2025-11-01",
  },
  {
    id: 2,
    description: "Grab đi làm",
    amount: 60000,
    category: "Di chuyển",
    date: "2025-11-02",
  },
  {
    id: 3,
    description: "Xem phim cuối tuần",
    amount: 120000,
    category: "Giải trí",
    date: "2025-10-30",
  },
  {
    id: 4,
    description: "Mua áo sơ mi",
    amount: 350000,
    category: "Mua sắm",
    date: "2025-11-03",
  },
  {
    id: 5,
    description: "Ăn tối với bạn",
    amount: 200000,
    category: "Ăn uống",
    date: "2025-11-04",
  },
];

const formatDate = (d) => {
  const date = new Date(d);
  return `${String(date.getMonth() + 1).padStart(2, "0")}/${String(
    date.getDate()
  ).padStart(2, "0")}/${date.getFullYear()}`;
};
const formatCurrency = (n) =>
  Number(n).toLocaleString("vi-VN", { style: "currency", currency: "VND" });
const formatMoneyVN = (amount) => {
  if (amount >= 1_000_000_000)
    return `${(amount / 1_000_000_000).toFixed(1)} Tỷ`;
  if (amount >= 1_000_000) return `${(amount / 1_000_000).toFixed(1)} Triệu`;
  if (amount >= 1_000) return `${(amount / 1_000).toFixed(1)}K`;
  return amount;
};

export default function ExpenseTracker() {
  const rootRef = useRef(null);
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : initialData;
  });
  const [formData, setFormData] = useState(initialForm);
  const [filters, setFilters] = useState({
    category: "all",
    searchTerm: "",
    dateFrom: "",
    dateTo: "",
    minAmount: "",
    maxAmount: "",
  });
  const [sortOption, setSortOption] = useState({
    field: "date",
    order: "desc",
  });
  const [editingId, setEditingId] = useState(null);

  const syncLocalStorage = (data) =>
    localStorage.setItem("expenses", JSON.stringify(data));
  const handleChangeForm = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleChangeFilters = (e) =>
    setFilters({ ...filters, [e.target.name]: e.target.value });

  const addExpense = (prev, expense) => [
    ...prev,
    { ...expense, id: Date.now() },
  ];
  const updateExpense = (prev, expense) =>
    prev.map((e) => (e.id === expense.id ? { ...e, ...expense } : e));

  const handleSaveExpense = (expense) => {
    setExpenses((prev) => {
      const newState = expense.id
        ? updateExpense(prev, expense)
        : addExpense(prev, expense);
      syncLocalStorage(newState);
      return newState;
    });
    handleCancel();
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData(initialForm);
  };

  const startEditing = (exp) => {
    setEditingId(exp.id);
    setFormData(exp);
    rootRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const deleteExpense = (id) => {
    if (!window.confirm("Bạn có chắc muốn xóa chi tiêu này?")) return;
    setExpenses((prev) => {
      const newState = prev.filter((e) => e.id !== id);
      syncLocalStorage(newState);
      return newState;
    });
  };

  const handleFilter = (e) => {
    const { category, dateFrom, dateTo, minAmount, maxAmount, searchTerm } =
      filters;
    const d = new Date(e.date);
    const term = searchTerm.toLowerCase();
    if (category !== "all" && e.category !== category) return false;
    if (dateFrom && new Date(dateFrom) > d) return false;
    if (dateTo && new Date(dateTo) < d) return false;
    if (minAmount && e.amount < minAmount) return false;
    if (maxAmount && e.amount > maxAmount) return false;
    if (term && !e.description.toLowerCase().includes(term)) return false;
    return true;
  };

  const handleChangeSort = (key) => {
    let order = "asc";
    if (key === sortOption.field && sortOption.order === "asc") order = "desc";
    setSortOption({ field: key, order });
  };

  const handleSort = (a, b) => {
    const { field, order } = sortOption;
    let res = 0;
    if (field === "date") res = new Date(a.date) - new Date(b.date);
    if (field === "amount") res = a.amount - b.amount;
    if (field === "category")
      res = categories.indexOf(a.category) - categories.indexOf(b.category);
    if (field === "description")
      res = a.description.localeCompare(b.description);
    return order === "asc" ? res : -res;
  };

  const expensesFiltered = expenses.filter(handleFilter).sort(handleSort);
  const total = expensesFiltered.reduce((a, b) => a + Number(b.amount), 0);

  const stats = categories.map((cat) => {
    const amt = expensesFiltered
      .filter((e) => e.category === cat)
      .reduce((a, b) => a + Number(b.amount), 0);
    return { category: cat, amount: amt };
  });

  const canSubmit = formData.description && formData.amount;

  return (
    <div ref={rootRef} className="expense-tracker">
      <h1>Quản Lý Chi Tiêu</h1>

      {/* Form */}
      <Card className="expense-form">
        <Card.Header>
          <Card.Title>
            {editingId ? "Chỉnh sửa chi tiêu" : "Thêm chi tiêu mới"}
          </Card.Title>
        </Card.Header>
        <Card.Content>
          <form>
            <Input
              label="Mô tả"
              name="description"
              value={formData.description}
              onChange={handleChangeForm}
              placeholder="Nhập mô tả"
            />
            <Input
              label="Số tiền"
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChangeForm}
            />
            <Select
              label="Danh mục"
              name="category"
              value={formData.category}
              onChange={handleChangeForm}
              options={categories.map((c) => ({ value: c, label: c }))}
            />
            <Input
              label="Ngày"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChangeForm}
            />
            <div className="expense-input">
              {editingId && (
                <Button variant="ghost" onClick={handleCancel}>
                  Hủy
                </Button>
              )}
              <Button
                variant="primary"
                disabled={!canSubmit}
                onClick={() =>
                  handleSaveExpense({ ...formData, id: editingId })
                }
              >
                {editingId ? "Cập nhật" : "Thêm"}
              </Button>
            </div>
          </form>
        </Card.Content>
      </Card>

      {/* Filters + Statistics */}
      {!editingId && (
        <>
          <div className="filters">
            <Input
              placeholder="Tìm kiếm theo mô tả"
              name="searchTerm"
              value={filters.searchTerm}
              onChange={handleChangeFilters}
            />
            <Select
              value={filters.category}
              name="category"
              onChange={handleChangeFilters}
              options={[
                { value: "all", label: "Tất cả" },
                ...categories.map((c) => ({ value: c, label: c })),
              ]}
            />
          </div>
          <div className="filters">
            <Input
              type="date"
              name="dateFrom"
              value={filters.dateFrom}
              onChange={handleChangeFilters}
              label="Từ ngày"
            />
            <Input
              type="date"
              name="dateTo"
              value={filters.dateTo}
              onChange={handleChangeFilters}
              label="Đến ngày"
            />
          </div>
          <div className="filters">
            <Input
              type="number"
              name="minAmount"
              placeholder="Tối thiểu"
              value={filters.minAmount}
              onChange={handleChangeFilters}
            />
            <Input
              type="number"
              name="maxAmount"
              placeholder="Tối đa"
              value={filters.maxAmount}
              onChange={handleChangeFilters}
            />
          </div>

          <Card className="statistics">
            <Card.Header>
              <Card.Title>Thống kê</Card.Title>
            </Card.Header>
            <Card.Content>
              <p>Tổng chi tiêu: {formatCurrency(total)}</p>
              <div className="category-bars">
                {stats.map((s) =>
                  s.amount > 0 ? (
                    <div key={s.category} className="bar">
                      <span className="bar-label">{s.category}</span>
                      <div
                        className="bar-fill"
                        style={{ "--width": `${(s.amount / total) * 100}%` }}
                      >
                        {formatMoneyVN(s.amount)}
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            </Card.Content>
          </Card>
        </>
      )}

      {/* Table */}
      <div className="expense-list">
        <h2>Danh sách chi tiêu</h2>
        <table>
          <thead>
            <tr>
              <th onClick={() => handleChangeSort("description")}>Mô tả</th>
              <th onClick={() => handleChangeSort("amount")}>Số tiền</th>
              <th onClick={() => handleChangeSort("category")}>Danh mục</th>
              <th onClick={() => handleChangeSort("date")}>
                Ngày (mm/dd/yyyy)
              </th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {expensesFiltered.length > 0 ? (
              expensesFiltered.map((e) => (
                <tr key={e.id}>
                  <td>{e.description}</td>
                  <td>{formatCurrency(e.amount)}</td>
                  <td>{e.category}</td>
                  <td>{formatDate(e.date)}</td>
                  <td>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => startEditing(e)}
                    >
                      Sửa
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteExpense(e.id)}
                    >
                      Xóa
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center" colSpan={5}>
                  Không có chi tiêu nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
