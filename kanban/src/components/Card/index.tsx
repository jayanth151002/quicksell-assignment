import "./styles.css";

const colors = ["#187bcd", "#43aa8b", "#6c62e2", "#f94144", "#ffcc47"];

interface CardProps {
  id: string;
  avatar: string;
  title: string;
  tag: string;
}

const Card = ({ id, avatar, title, tag }: CardProps) => {
  return (
    <div className="card-main">
      <span className="card-id">{id}</span>
      <span
        className="card-avatar"
        style={{ backgroundColor: `${colors[Math.floor(5 * Math.random())]}` }}
      >
        {avatar}
      </span>
      <div className="card-title">
        {Math.random() > 0.5 ? "✅ " : "🔴 "}
        {title}
      </div>
      <span className="card-tag">
        {"⚪ "}
        {tag}
      </span>
    </div>
  );
};

export default Card;
