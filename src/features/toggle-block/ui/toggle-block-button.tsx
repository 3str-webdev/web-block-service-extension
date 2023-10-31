import { UiButton, UiButtonProps } from "@/shared/uikit/ui-button";
import { useToggleBlock } from "../model/use-toggle-block";

export const ToggleBlockButton = ({ ...props }: UiButtonProps) => {
  const { isBlockingEnabled, toggleBlocking, isPending, isReady } =
    useToggleBlock();

  const buttonText = isBlockingEnabled ? "Disable Blocking" : "Enable Blocking";
  const buttonVariant: UiButtonProps["variant"] = !isBlockingEnabled
    ? "primary"
    : "secondary";

  if (!isReady) {
    return null;
  }

  return (
    <UiButton
      {...props}
      variant={buttonVariant}
      disabled={isPending}
      onClick={toggleBlocking}
    >
      {buttonText}
    </UiButton>
  );
};
