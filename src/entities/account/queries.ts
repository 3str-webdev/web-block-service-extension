import {
  accountControllerGetAccount,
  accountControllerPatchAccount,
} from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const accountKey = ["account"];

export const useAccountQuery = () => {
  return useQuery({
    queryFn: accountControllerGetAccount,
    queryKey: accountKey,
  });
};

export const useUpdateAccountMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: accountControllerPatchAccount,
    onSuccess: (data) => {
      // Оптимистичное обновление для улучшения UX
      queryClient.setQueryData(accountKey, data);
    },
    onSettled: () => {
      // Всё равно оставляем фоновою инвалидацию для стабильности
      queryClient.removeQueries();
    },
  });
};
