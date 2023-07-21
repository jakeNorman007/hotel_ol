import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditRoom } from "../../services/apiRooms";

export function useEditRoom() {
  const queryClient = useQueryClient();

  const { mutate: editRoom, isLoading: isEditing } = useMutation({
    mutationFn: ({ newRoomData, id }) => createEditRoom(newRoomData, id),
    onSuccess: () => {
      toast.success("Room was sucessfully edited");
      queryClient.invalidateQueries({
        queryKey: ["room"],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isEditing, editRoom };
}
