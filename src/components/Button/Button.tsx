const Button = ({
  text,
}: //   action,
//   variant,
{
  text?: string;
  action?: () => void;
  variant?: "primary" | "secondary" | "blank";
}) => {
  return <div>{text}</div>;
};

export default Button;
