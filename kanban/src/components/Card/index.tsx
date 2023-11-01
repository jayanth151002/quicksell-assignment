import "./styles.css";

const colors = ["#187bcd", "#43aa8b", "#6c62e2", "#f94144", "#ffcc47"];

const Card = () => {
  return (
    <div className="card-main">
      <span className="card-id">CAM-1</span>
      <span
        className="card-avatar"
        style={{ backgroundColor: `${colors[Math.floor(5 * Math.random())]}` }}
      >
        A
      </span>
      <div className="card-title">
        {Math.random() > 0.5 ? "✅ " : "🔴 "}Card Title Comes here
      </div>
      <span className="card-tag">{"⚪ "}Card Tag</span>
    </div>
  );
};

export default Card;
