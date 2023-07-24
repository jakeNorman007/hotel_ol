import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditRoom } from "../../services/apiRooms";

export function useCreateRoom() {
  const queryClient = useQueryClient();

  const { mutate: createRoom, isLoading: isCreating } = useMutation({
    mutationFn: createEditRoom,
    onSuccess: () => {
      toast.success("Room was sucessfully created");
      queryClient.invalidateQueries({
        queryKey: ["room"],
      });
    },
    onError: (error) => toast.error(error.message),
  });

    return { isCreating, createRoom };
}
