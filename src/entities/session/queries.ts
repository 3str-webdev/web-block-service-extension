import {
  authControllerGetSessionInfo,
  authControllerSignOut,
} from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import router from "next/router";

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
