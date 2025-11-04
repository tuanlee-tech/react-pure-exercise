export function Skeleton({ width = "100%", height = "20px", style = {} }) {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: "#e0e0e0",
        borderRadius: "4px",
        position: "relative",
        margin: "8px 0",
        animation: "pulse 1.5s infinite",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          color: "black",
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
