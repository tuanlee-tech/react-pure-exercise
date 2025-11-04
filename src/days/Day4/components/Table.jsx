export default function Table({ data, columns, onSort, sortConfig }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key} onClick={() => onSort(col.key)}>
              {col.label}
              {sortConfig.key === col.key && (
                <span>{sortConfig.direction === "asc" ? " ▲" : " ▼"}</span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            {columns.map((col) => (
              <td key={col.key}>
                {col.render ? col.render(row[col.key], row) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
