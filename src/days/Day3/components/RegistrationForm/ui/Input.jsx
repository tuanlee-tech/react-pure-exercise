export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  icon,
  ...props
}) {
  return (
    <div className={`input-wrapper ${error ? "error" : ""}`}>
      {icon && <span className="input-icon left">{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input ${icon ? icon.position || "left" : ""}`}
        {...props}
      />
    </div>
  );
}
