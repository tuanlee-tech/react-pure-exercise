import { useState } from "react";
import Table from "./Table";

export default function DataTable({ columns, data: initialData }) {
  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const handleSort = (key) => {
    let direction = "asc";
    if (key === sortConfig.key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      if (a[key] < b[key]) return direction === "desc" ? -1 : 0;
      return 0;
    });
    setData(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <Table
      data={data}
      columns={columns}
      onSort={handleSort}
      sortConfig={sortConfig}
    />
  );
}
