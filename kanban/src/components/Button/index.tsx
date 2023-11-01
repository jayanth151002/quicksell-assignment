import "./styles.css";

const Button = ({
  handleClick,
  text,
}: {
  handleClick: () => void;
  text: string;
}) => {
  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
