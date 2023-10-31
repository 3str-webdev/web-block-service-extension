import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type UiButtonVariant = "primary" | "secondary" | "outlined";
export type UiButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: UiButtonVariant;
};

export const UiButton = ({
  variant = "primary",
  className,
  ...props
}: UiButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        className,
        "px-4 h-10 rounded flex items-center justify-center gap-2 transition-colors",
        "disabled:cursor-not-allowed ",
        {
          primary: clsx(
            "text-white bg-purple-700",
            "hover:bg-purple-800",
            "disabled:opacity-50"
          ),
          secondary: clsx(
            "text-white bg-blue-700",
            "hover:bg-blue-800",
            "disabled:opacity-50"
          ),
          outlined: clsx(
            "border-2 border-slate-300",
            "hover:border-slate-400 hover:bg-slate-100",
            "disabled:opacity-50"
          ),
        }[variant]
      )}
    />
  );
};
