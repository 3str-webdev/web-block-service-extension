import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type UiIconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
};

export const UiIconButton = ({
  className,
  icon,
  ...props
}: UiIconButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        className,
        "p-2 rounded-md transition-colors",
        "hover:bg-slate-200",
      )}
    >
      {icon}
    </button>
  );
};
