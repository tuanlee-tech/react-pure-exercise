// Checkbox.jsx
function Checkbox({ label, checked, onChange, ...props }) {
  return (
    <label className="checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} {...props} />
      <span className="checkmark"></span>
      <span className="checkbox-label">{label}</span>
    </label>
  );
}

export default Checkbox;
