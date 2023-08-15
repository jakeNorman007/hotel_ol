import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "ract-hot-toast";

export function useCheckOut(){
    const queryClient = useQueryClient();
    
    const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
        mutationFn: ({ bookingId, breakfast }) => {
            updateBooking(bookingId, { status: "checked-in", isPaid: true, ...breakfast,}),

        onSuccess: (data) => {
            toast.success(`Booking #${data.id} successfully checked in`);
            queryClient.invalidateQueries({ active: true });
            useNavigate("/");
           },

        onError: () => toast.error("There was an error while checking in"),
        });

        return { checkin, isCheckingIn };
}
