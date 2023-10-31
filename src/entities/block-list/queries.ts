import {
  blockListControllerAddBlockListItem,
  blockListControllerDeleteBlockListItem,
  blockListControllerGetList,
} from "@/shared/api/generated";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const blockListKey = ["block-list"] as unknown[];

export const useBlockListQuery = (q?: string) => {
  return useQuery({
    queryFn: () => blockListControllerGetList({ q }),
    queryKey: blockListKey.concat([{ q }]),
    placeholderData: keepPreviousData,
  });
};

export const useAddBlockItemMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockListControllerAddBlockListItem,
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: blockListKey });
    },
  });
};

export const useDeleteBlockItemMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockListControllerDeleteBlockListItem,
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: blockListKey });
    },
  });
};
