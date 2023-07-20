import { formatMoney } from "../../utilities/helpers";
import { deleteRoom } from "../../services/apiRooms";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

function RoomRow({ room }) {
  // destructures room into it's attributes (columns in DB)
  const { id: roomId, name, maxCapacity, regularPrice, discount, image } = room;

  // useQueryClinet() fetches the current queryClient instance
  const queryClient = useQueryClient();

  // mutation for deleting a room in UI, calls deleteRoom from apiRooms.jsx which drops the
  // row from the table and sends an alert confirming or denying the action
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteRoom,
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["room"],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return (
    <div
      role="row"
      className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-x-[2.4rem] items-center px-[2.4rem]
       py-[1.4rem] border-t-2 border-blue-400"
    >
      <img
        src={image}
        className="block w-[6.4rem] aspect-[3_/_2] object-cover object-center translate-x-[-7px]
        scale-150"
      />
      <p className="text-[1.6rem] font-semibold text-gray-600 ml-6">{name}</p>
      <p className="font-semibold text-gray-600 ml-6">
        Fits up to {maxCapacity} guests
      </p>
      <p className="font-semibold text-gray-600 ml-8">{formatMoney(regularPrice)}</p>
      <p className="font-semibold text-green-600 ml-8">{formatMoney(discount)}</p>
      <div className="flex">
        <button className="bg-blue-400 rounded-md shadow-md shadow-black/50 py-2 px-4 mr-4">Edit</button>
        <button
          onClick={() => mutate(roomId)}
          disabled={isDeleting}
          className="bg-blue-400 rounded-md shadow-md shadow-black/50 py-2 px-4"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default RoomRow;
