import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="mt-4 border-2 border-solid p-2" {...props}>
      {children}
    </button>
  );
};

export default Button;
