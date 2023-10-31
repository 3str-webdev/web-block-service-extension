import { useAccountQuery, useUpdateAccountMutation } from "@/entities/account";

export const useToggleBlock = () => {
  const { data: account, isSuccess: isAccountSuccess } = useAccountQuery();
  const { mutate: updateAccount, isPending: isUpdateAccountPending } =
    useUpdateAccountMutation();

  const toggleBlocking = () => {
    if (isAccountSuccess) {
      updateAccount({
        isBlockingEnabled: !account.isBlockingEnabled,
      });
    }
  };

  return {
    isPending: isUpdateAccountPending,
    isReady: isAccountSuccess,
    toggleBlocking,
    isBlockingEnabled: account?.isBlockingEnabled ?? false,
  };
};
