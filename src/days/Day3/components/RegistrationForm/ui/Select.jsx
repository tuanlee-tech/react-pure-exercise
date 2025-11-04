// Select.jsx
function Select({
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  ...props
}) {
  return (
    <select value={value} onChange={onChange} className="select" {...props}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
