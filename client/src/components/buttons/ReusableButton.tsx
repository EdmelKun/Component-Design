import { Button } from "@mantine/core";

interface ReusableButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  color?: string;
}

//Factory Method
const ReusableButton = ({
  children,
  onClick,
  variant,
  size,
  color,
}: ReusableButtonProps) => {
  return (
    <Button variant={variant} size={size} onClick={onClick} color={color}>
      {children}
    </Button>
  );
};

export default ReusableButton;
