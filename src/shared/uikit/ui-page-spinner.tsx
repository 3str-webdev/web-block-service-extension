import clsx from "clsx";
import { HTMLAttributes } from "react";
import { UiSpinner } from "./ui-spinner";

export type UiPageSpinner = HTMLAttributes<HTMLElement>;

export const UiPageSpinner = ({ className, ...props }: UiPageSpinner) => {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center bg-slate-100"
      )}
    >
      <UiSpinner className="text-purple-700 w-14 h-14" />
    </div>
  );
};
