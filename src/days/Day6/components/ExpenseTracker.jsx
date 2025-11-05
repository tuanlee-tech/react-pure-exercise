import { useRef, useState } from "react";

//Exercise 5: Expense Tracker (Challenge)
const categories = ["Ăn uống", "Di chuyển", "Giải trí", "Mua sắm", "Khác"];
const initialForm = {
  description: "",
  amount: "",
  category: "Ăn uống",
  date: new Date().toISOString().split("T")[0],
};
const formatCurrency = (amount) => {
  if (isNaN(amount)) return amount;
  return Number(amount).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};
function formatMoneyVN(amount) {
  if (amount == null || isNaN(amount)) return "0";

  // Ép kiểu số
  amount = Number(amount);

  if (amount >= 1_000_000_000) {
    // ≥ 1 tỷ
    return `${(amount / 1_000_000_000).toFixed(
      amount % 1_000_000_000 === 0 ? 0 : 1
    )} Tỷ`;
  } else if (amount >= 1_000_000) {
    // ≥ 1 triệu
    return `${(amount / 1_000_000).toFixed(
      amount % 1_000_000 === 0 ? 0 : 1
    )} Triệu`;
  } else if (amount >= 1_000) {
    // ≥ 1 nghìn
    return `${(amount / 1_000).toFixed(amount % 1_000 === 0 ? 0 : 1)}K`;
  } else {
    // < 1 nghìn
    return amount.toString();
  }
}

export default function ExpenseTracker() {
  // TODO:
  // 1. Expenses array state: { id, description, amount, category, date }
  // 2. Categories: ['Ăn uống', 'Di chuyển', 'Giải trí', 'Mua sắm', 'Khác']
  // 3. Filter state: { category, dateRange, minAmount, maxAmount }
  // 4. Form state cho add/edit expense
  // 5. Chức năng:
  //    - Add expense
  //    - Edit expense
  //    - Delete expense
  //    - Filter by category
  //    - Filter by date range
  //    - Filter by amount range
  //    - Search by description
  // 6. Thống kê:
  //    - Tổng chi tiêu
  //    - Chi tiêu theo category (pie chart hoặc bars)
  //    - Chi tiêu theo tháng
  //    - Category chi nhiều nhất
  // 7. Sort options: date, amount, category
  // 8. Export data (JSON)
  // 9. Import data
  // 10. LocalStorage persistence
  const rootRef = useRef(null);
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [formData, setFormData] = useState(() => initialForm);

  const [filters, setFilters] = useState({
    category: "all",
    searchTerm: "",
    dateFrom: "",
    dateTo: "",
    minAmount: "",
    maxAmount: "",
  });

  const [editingId, setEditingId] = useState(null);

  // TODO: Implement các functions:
  // - addExpense
  // - updateExpense
  // - deleteExpense
  // - getFilteredExpenses
  // - getStatistics
  // - exportData
  // - importData
  const addExpense = (prev, expense) => {
    return [...prev, { ...expense, id: new Date().getTime() }];
  };
  const updateExpense = (prev, expense) => {
    const { id: expenseId, ...updateData } = expense;
    return prev.map((e) => (e.id == expenseId ? { ...e, ...updateData } : e));
  };
  const handleSaveExpense = (expense) => {
    setExpenses((prevExpenses) => {
      const newState = expense.id
        ? updateExpense(prevExpenses, expense)
        : addExpense(prevExpenses, expense);

      syncLocalStorage(newState);

      return newState;
    });

    handleCancel();
  };
  const syncLocalStorage = (state) => {
    console.log("State : ", state);
    localStorage.setItem("expenses", JSON.stringify(state));
  };
  const handleChangeFilters = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value.trim() });
  };
  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value.trim() });
  };
  const startEditing = (expense) => {
    setEditingId(expense.id);
    setFormData(expense);
    // Scroll lên form
    rootRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleCancel = () => {
    setEditingId(null);
    setFormData(initialForm);
  };
  const deleteExpense = (id) => {
    if (!window.confirm("Bạn có thực sự muốn xóa chi tiêu này ?")) return;
    const exists = expenses.some((e) => e.id === id);
    if (!exists) return;

    setExpenses((prevExpenses) => {
      const newState = prevExpenses.filter((e) => e.id !== id);
      syncLocalStorage(newState);
      return newState;
    });
  };
  const canSubmit = formData.description && formData.amount;
  const expensesFiltered = expenses;
  const total = expensesFiltered.reduce(
    (acc, item) => (acc += Number(item.amount)),
    0
  );
  const statisticsCategories = categories.map((category) => {
    const amount = expensesFiltered
      .filter((i) => i.category === category)
      .reduce((acc, expense) => (acc += Number(expense.amount)), 0);
    return { category, amount };
  });

  return (
    <div ref={rootRef}>
      <h1>Quản Lý Chi Tiêu</h1>
      <div className={`expense-tracker ${editingId ? "editing" : ""}`}>
        {/* Add/Edit Form */}
        <div className="expense-form">
          <h2>{editingId ? "Chỉnh sửa chi tiêu" : "Thêm chi tiêu mới"}</h2>
          <form>
            <input
              type="text"
              placeholder="Mô tả"
              name="description"
              value={formData.description}
              onChange={handleChangeForm}
            />
            <input
              type="number"
              placeholder="Số tiền"
              name="amount"
              value={formData.amount}
              onChange={handleChangeForm}
            />
            <select
              value={formData.category}
              name="category"
              onChange={handleChangeForm}
            >
              <option>Ăn uống</option>
              <option>Di chuyển</option>
              <option>Giải trí</option>
              <option>Mua sắm</option>
              <option>Khác</option>
            </select>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChangeForm}
            />
            <div className="expense-input todo-btns">
              {editingId && (
                <button
                  onClick={handleCancel}
                  className="btn cancel"
                  type="button"
                >
                  Hủy
                </button>
              )}
              <button
                disabled={!canSubmit}
                className={`btn ${editingId ? "update" : "add"}`}
                onClick={() => handleSaveExpense({ ...formData })}
                type="button"
              >
                {editingId ? "Cập nhật" : "Thêm"}
              </button>
            </div>
          </form>
        </div>
        {/* Filters */}
        {!editingId && (
          <>
            <div className="filters">
              <h2>Bộ lọc</h2>
              <input
                type="text"
                placeholder="Tìm kiếm mô tả"
                value={filters.searchTerm}
                name="searchTerm"
                onChange={handleChangeFilters}
              />
              <select
                value={filters.category}
                name="category"
                onChange={handleChangeFilters}
              >
                <option value="all">Tất cả</option>
                <option>Ăn uống</option>
                <option>Di chuyển</option>
                <option>Giải trí</option>
                <option>Mua sắm</option>
                <option>Khác</option>
              </select>
              <input
                type="date"
                value={filters.dateFrom}
                name="dateFrom"
                onChange={handleChangeFilters}
              />
              <input
                type="dateTo"
                name="dateFrom"
                value={filters.dateTo}
                onChange={handleChangeFilters}
              />
              <input
                type="number"
                placeholder="Số tiền tối thiểu"
                value={filters.minAmount}
                name="minAmount"
                onChange={handleChangeFilters}
              />
              <input
                type="number"
                placeholder="Số tiền tối đa"
                value={filters.maxAmount}
                name="maxAmount"
                onChange={handleChangeFilters}
              />
            </div>

            {/* Statistics */}
            <div className="statistics">
              <h2>Thống kê</h2>
              <p>Tổng chi tiêu: {formatCurrency(total)}</p>
              <p>Chi tiêu theo category: </p>
              <div className="category-bars">
                {statisticsCategories.map((item) => {
                  const widthPercent = (item.amount / total) * 100;
                  return (
                    <div key={item.category} className="bar">
                      <span className="bar-label">{item.category}</span>
                      {item.amount > 0 && (
                        <div
                          className="bar-fill"
                          style={{ width: `${widthPercent}%` }}
                        >
                          {formatMoneyVN(item.amount)}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
        {/* Expense List */}
        <div className="expense-list">
          <h2>Danh sách chi tiêu</h2>
          <table>
            <thead>
              <tr>
                <th>Mô tả</th>
                <th>Số tiền</th>
                <th>Category</th>
                <th>Ngày</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {expensesFiltered.length > 0 ? (
                expensesFiltered.map((expense) => (
                  <tr key={expense.id}>
                    <td>{expense.description}</td>
                    <td>{formatCurrency(expense.amount)}</td>
                    <td>{expense.category}</td>
                    <td>{new Date("2025-11-05").toLocaleDateString()}</td>
                    <td>
                      <button onClick={() => startEditing(expense)}>Sửa</button>
                      <button onClick={() => deleteExpense(expense.id)}>
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="text-center" colSpan={5}>
                    Không chi tiêu nào
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
