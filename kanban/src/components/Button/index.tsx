import "./styles.css";

const Button = ({
  handleClick,
  text,
}: {
  handleClick: () => void;
  text: string;
}) => {
  return (
    <button onClick={handleClick} className="button">
      {text}
    </button>
  );
};

export default Button;
