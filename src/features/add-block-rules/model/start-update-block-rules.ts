import {
  accountControllerGetAccount,
  authControllerGetSessionInfo,
} from "@/shared/api/generated";
import { setBrowserInterval, setNetRules } from "@/shared/lib/browser";
import { getNetRules } from "./get-net-rules";

export const startUpdateBlockRules = async () => {
  setBrowserInterval(
    "update-block-rules",
    async () => {
      const isAuth = await authControllerGetSessionInfo()
        .then(
          () => true,
          () => false,
        )
        .catch(() => false);

      if (!isAuth) {
        return await setNetRules([]);
      }

      const isBlockingEnabled = await accountControllerGetAccount()
        .then((data) => data.isBlockingEnabled)
        .catch(() => false);

      console.log(isBlockingEnabled);

      if (!isBlockingEnabled) {
        return await setNetRules([]);
      }

      const rules = await getNetRules();

      setNetRules(rules);
    },
    5 * 1000,
  );
};
