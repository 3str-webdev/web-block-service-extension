import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const sessionKey = ["session"];

export const useSessionQuery = () => {
  return useQuery({
    queryFn: authControllerGetSessionInfo,
    queryKey: sessionKey,
    retry: 1,
    // 5 минут считаем сессию свежей и не запрашиваем её заново
    staleTime: 5 * 60 * 1000,
  });
};

export const useResetSession = () => {
  const queryClient = useQueryClient();

  return () => queryClient.removeQueries({ queryKey: sessionKey });
};
