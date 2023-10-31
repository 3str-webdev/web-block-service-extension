import { ROUTES } from "@/shared/constants/routes";
import { createTab } from "@/shared/lib/browser";
import { UiButton } from "@/shared/uikit/ui-button";
import { UiLogo } from "@/shared/uikit/ui-logo";

export const NotAuthPage = () => {
  const handleSignInClick = () => {
    createTab(ROUTES.ADMIN_SIGN_IN);
  };

  return (
    <section className="p-8 flex flex-col items-center gap-4">
      <UiLogo className="w-20 h-20 text-purple-700" />
      <h2 className="text-lg">You not authorized</h2>
      <UiButton onClick={handleSignInClick}>Sign In</UiButton>
    </section>
  );
};
