import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteRoom as deleteRoomApi } from "../../services/apiRooms";

export function useDeleteRoom(){

    // useQueryClinet() fetches the current queryClient instance
    const queryClient = useQueryClient();

    // mutation for deleting a room in UI, calls deleteRoom from apiRooms.jsx which drops the
    // row from the table and sends an alert confirming or denying the action
    const { isLoading: isDeleting, mutate: deleteRoom } = useMutation({
      mutationFn: deleteRoomApi,
      onSuccess: () => {
        toast.success("Cabin successfully deleted");
        queryClient.invalidateQueries({
          queryKey: ["room"],
        });
      },
      onError: (error) => toast.error(error.message),
    });

    return { isDeleting, deleteRoom };
}
