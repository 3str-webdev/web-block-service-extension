import { useSessionQuery } from "@/entities/session";
import { ToggleBlockButton } from "@/features/toggle-block";
import { ROUTES } from "@/shared/constants/routes";
import { createTab } from "@/shared/lib/browser";
import { ManageIcon, SignOutIcon } from "@/shared/uikit/icons";
import { UiIconButton } from "@/shared/uikit/ui-incon-button";
import { UiLogo } from "@/shared/uikit/ui-logo";
import clsx from "clsx";

export const HomePage = () => {
  const { data } = useSessionQuery();

  const handleManageClick = () => {
    createTab(ROUTES.ADMIN);
  };

  return (
    <section className="flex flex-col px-4 pt-3 pb-2 min-h-screen">
      <header className="flex items-center justify-between">
        <h1 className="flex items-center gap-1 text-lg">
          <UiLogo className="w-8 h-8" />
          WBS
        </h1>
        <p className="text-[1rem]">{data?.email}</p>
      </header>
      <main className="grow flex items-center">
        <ToggleBlockButton className="w-full text-lg" />
      </main>
      <footer>
        <ul className="flex items-center justify-between">
          <li>
            <UiIconButton onClick={handleManageClick} icon={<ManageIcon />} />
          </li>
          <li>
            <UiIconButton
              onClick={handleManageClick}
              icon={<SignOutIcon className="text-rose-400 w-6 h-6" />}
            />
          </li>
        </ul>
      </footer>
    </section>
  );
};
