import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import "./Button.css";

interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  actionOnClick?: () => void;
}

const Button = ({
  children,
  actionOnClick,
  ...props
}: ButtonProps): React.ReactElement => {
  return (
    <button className="button" onClick={actionOnClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
