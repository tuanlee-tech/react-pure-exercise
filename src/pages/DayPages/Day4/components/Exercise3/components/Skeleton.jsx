export function Skeleton({ width = "100%", height = "20px", style = {} }) {
  return (
    <div
      className="skeleton"
      style={{
        width,
        height,
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%)",
        }}
      >
        Loading.....
      </div>
    </div>
  );
}

// Thêm animation keyframes (nếu dùng style tag hoặc CSS global)
/*
@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
}
*/
