import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditBooking } from "../../services/apiBookings";

export function useCreateBooking() {
  const queryClient = useQueryClient();

  const { mutate: createBooking, isLoading: isCreating } = useMutation({
    mutationFn: createEditBooking,
    onSuccess: () => {
      toast.success("Booking was sucessfully created");
      queryClient.invalidateQueries({
        queryKey: ["booking"],
      });
    },
    onError: (error) => toast.error(error.message),
  });

    return { isCreating, createBooking };
}
