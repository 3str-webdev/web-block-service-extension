import { HomePage } from "@/pages/home";
import { AppProviders } from "./app-providers";

export const App = () => {
  return (
    <AppProviders>
      <HomePage />
    </AppProviders>
  );
};
