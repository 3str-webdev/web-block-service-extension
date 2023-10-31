import { useSessionQuery } from "@/entities/session";
import { HomePage } from "@/pages/home";
import { NotAuthPage } from "@/pages/not-auth-page";
import { UiPageSpinner } from "@/shared/uikit/ui-page-spinner";

export const AppRouter = () => {
  const { isLoading, isSuccess } = useSessionQuery();

  if (isLoading) {
    return <UiPageSpinner />;
  }

  if (isSuccess) {
    return <HomePage />;
  }

  return <NotAuthPage />;
};
