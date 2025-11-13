import ExerciseCard from "../../../../../components/ExerciseCard";
import { DataTable, DataTableClass } from "./components/DataTable";
import "./styles.css";
export default function Exercise3() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header
        order={3}
        title="Data Table with Sorting (Both versions)"
      />

      <ExerciseCard.Description>
        {`
        
/* ==================== SAMPLE DATA ==================== */
const initialData = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Bob", email: "bob@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Charlie", email: "charlie@example.com", role: "User", status: "Active" },
  { id: 4, name: "David", email: "david@example.com", role: "User", status: "Inactive" },
  { id: 5, name: "Eve", email: "eve@example.com", role: "Admin", status: "Active" },
  { id: 6, name: "Frank", email: "frank@example.com", role: "User", status: "Active" },
];

/* ======================================== */
//Implement cả Class và Function version:
// Version 1: Class Component
class DataTable extends Component {
  state = {
    data: this.props.initialData,
    sortKey: null,
    sortDirection: 'asc',
    currentPage: 1,
    itemsPerPage: 10
  };

  // TODO:
  // 1. Sort functionality
  // 2. Pagination
  // 3. Search filter
  // 4. Select rows
  // 5. Bulk actions
}

// Version 2: Function Component
function DataTable({ initialData }) {
  // TODO: Convert above to hooks
}

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <h3>// Version 1: Class Component</h3>
        <DataTableClass />
        <h3>// Version 2: Function Component</h3>
        <DataTable />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import { Button, Card, Checkbox, Input, Select } from "@ui";
import { Component, useCallback, useMemo, useRef, useState } from "react";

/* ==================== CLASS COMPONENT ==================== */
class DataTableClass extends Component {
  state = {
    data: this.props.initialData,
    sortKey: null,
    sortDirection: "asc",
    currentPage: 1,
    itemsPerPage: 10,
    searchTerm: "",
    selectedRows: new Set(),
  };

  // ===== Lazy initializer example for ref =====
  // Bonus: dùng ref để giữ tham chiếu DOM hoặc dữ liệu không gây render lại
  tableRef = null; // ref có thể gán cho table DOM
  /* ví dụ:
     this.tableRef = React.createRef();
     <table ref={this.tableRef}>...</table>
  */

  handleSort = (key) => {
    const { sortKey, sortDirection, data } = this.state;
    const direction =
      sortKey === key && sortDirection === "asc" ? "desc" : "asc";

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    this.setState({
      data: sortedData,
      sortKey: key,
      sortDirection: direction,
      currentPage: 1,
    });
  };

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value, currentPage: 1 });
  };

  handleSelectRow = (id) => {
    this.setState((prev) => {
      const selected = new Set(prev.selectedRows);
      selected.has(id) ? selected.delete(id) : selected.add(id);
      return { selectedRows: selected };
    });
  };

  handleSelectAll = () => {
    const pageData = this.getPageData();
    const allSelected = pageData.every((item) =>
      this.state.selectedRows.has(item.id)
    );
    this.setState((prev) => {
      const selected = new Set(prev.selectedRows);
      pageData.forEach((item) => {
        allSelected ? selected.delete(item.id) : selected.add(item.id);
      });
      return { selectedRows: selected };
    });
  };

  handleBulkDelete = () => {
    if (!window.confirm(\`Delete \${this.state.selectedRows.size} items?\`))
      return;
    this.setState((prev) => ({
      data: prev.data.filter((item) => !prev.selectedRows.has(item.id)),
      selectedRows: new Set(),
    }));
  };

  // ===== Lazy initializer function tách ngoài =====
  getFilteredData = () => {
    const { data, searchTerm } = this.state;
    if (!Array.isArray(data)) return []; // bảo vệ tránh undefined
    if (!searchTerm) return data;
    const term = searchTerm.toLowerCase();
    return data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(term)
      )
    );
  };

  getPageData = () => {
    const { currentPage, itemsPerPage } = this.state;
    const filtered = this.getFilteredData();
    const start = (currentPage - 1) * itemsPerPage;
    const sliced = filtered.slice(start, start + itemsPerPage);
    return sliced;
  };

  render() {
    const { selectedRows, sortKey, sortDirection, currentPage, itemsPerPage } =
      this.state;
    const pageData = this.getPageData();
    const filtered = this.getFilteredData();
    const totalItems = filtered.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

    return (
      <div className="datatable-class">
        <DataTableUI
          data={pageData}
          sortKey={sortKey}
          sortDirection={sortDirection}
          onSort={this.handleSort}
          searchTerm={this.state.searchTerm}
          onSearch={this.handleSearch}
          selectedRows={selectedRows}
          onSelectRow={this.handleSelectRow}
          onSelectAll={this.handleSelectAll}
          onBulkDelete={this.handleBulkDelete}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => this.setState({ currentPage: page })}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={(val) =>
            this.setState({ itemsPerPage: val, currentPage: 1 })
          }
          totalItems={totalItems}
        />
      </div>
    );
  }
}

/* ==================== FUNCTION COMPONENT ==================== */
function DataTable({ initialData }) {
  const [data, setData] = useState(initialData);
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState(new Set());

  // Bonus: useRef lazy initializer
  const tableRef = useRef(null);

  // ===== Filter + sort + pagination =====
  const filteredData = useMemo(() => {
    const arr = Array.isArray(data) ? data : [];
    let result = [...arr];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter((item) =>
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(term)
        )
      );
    }

    if (sortKey) {
      result.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return sortDirection === "asc" ? -1 : 1;
        if (a[sortKey] > b[sortKey]) return sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [data, searchTerm, sortKey, sortDirection]);

  const totalItems = filteredData.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const pageData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  // ===== Handlers =====
  const handleSort = useCallback(
    (key) => {
      setSortDirection((prev) =>
        sortKey === key && prev === "asc" ? "desc" : "asc"
      );
      setSortKey(key);
      setCurrentPage(1);
    },
    [sortKey]
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const toggleRow = useCallback((id) => {
    setSelectedRows((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const toggleAll = useCallback(() => {
    const allSelected = pageData.every((item) => selectedRows.has(item.id));
    setSelectedRows((prev) => {
      const next = new Set(prev);
      pageData.forEach((item) => {
        allSelected ? next.delete(item.id) : next.add(item.id);
      });
      return next;
    });
  }, [pageData, selectedRows]);

  const handleBulkDelete = useCallback(() => {
    if (!window.confirm(\`Delete \${selectedRows.size} items?\`)) return;
    setData((prev) => prev.filter((item) => !selectedRows.has(item.id)));
    setSelectedRows(new Set());
  }, [selectedRows]);

  const handleItemsPerPageChange = useCallback((val) => {
    setItemsPerPage(val);
    setCurrentPage(1);
  }, []);

  return (
    <div className="datatable-function">
      <DataTableUI
        data={pageData}
        sortKey={sortKey}
        sortDirection={sortDirection}
        onSort={handleSort}
        searchTerm={searchTerm}
        onSearch={handleSearch}
        selectedRows={selectedRows}
        onSelectRow={toggleRow}
        onSelectAll={toggleAll}
        onBulkDelete={handleBulkDelete}
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
        ref={tableRef} // Bonus: ref
      />
    </div>
  );
}

/* ==================== SHARED UI COMPONENT ==================== */
const DataTableUI = ({
  data,
  sortKey,
  sortDirection,
  onSort,
  searchTerm,
  onSearch,
  selectedRows,
  onSelectRow,
  onSelectAll,
  onBulkDelete,
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
  totalItems,
}) => {
  const allSelectedOnPage =
    data.length > 0 && data.every((item) => selectedRows.has(item.id));

  return (
    <Card className="datatable-card">
      <div className="datatable-header">
        <Input
          placeholder="Search..."
          value={searchTerm}
          onChange={onSearch}
          icon="🔍"
          className="datatable-search"
        />
        {selectedRows.size > 0 && (
          <Button variant="danger" size="sm" onClick={onBulkDelete}>
            Delete Selected ({selectedRows.size})
          </Button>
        )}
      </div>

      <div className="table-wrapper">
        <table className="datatable">
          <thead>
            <tr>
              <th>
                <Checkbox checked={allSelectedOnPage} onChange={onSelectAll} />
              </th>
              {["id", "name", "email", "role", "status"].map((key) => (
                <th key={key} onClick={() => onSort(key)} className="sortable">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  {sortKey === key &&
                    (sortDirection === "asc" ? " Up" : " Down")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className={selectedRows.has(item.id) ? "selected" : ""}
              >
                <td>
                  <Checkbox
                    checked={selectedRows.has(item.id)}
                    onChange={() => onSelectRow(item.id)}
                  />
                </td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>
                  <span className={\`status \${item.status.toLowerCase()}\`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="datatable-footer">
        <div className="items-per-page flex items-center gap-1">
          <span>Shows </span>
          <Select
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            options={[5, 10, 25, 50].map((n) => ({
              value: n,
              label: \`\${n}\`,
            }))}
          />
        </div>
        <div className="pagination">
          <Button
            size="sm"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </Button>
          <span className="page-info">
            Page {currentPage} of {totalPages} ({totalItems} items)
          </span>
          <Button
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
};

export { DataTable, DataTableClass };

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
