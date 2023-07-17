import { useForm } from "react-hook-form";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createRoom } from "../../services/apiRooms";
import toast from "react-hot-toast";

function CreateRoomForm() {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createRoom,
    onSuccess: () => {
      toast.success("Cabin was sucessfully created");
      queryClient.invalidateQueries({
        queryKey: ["room"],
      });
      reset();
    },
    onError: (error) => toast.error(error.message),
  });

  function onSubmit(data) {
    mutate(data);
  }

  function onError(error) {
    console.log(error);
  }

  // this works to create a new room because the fields have tags/id's that match the table in supabase
  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="text-xl py-[2.4rem] px-[4rem] shadow-md shadow-black/50 bg-gray-200 rounded-md border 
            border-blue-200 mb-16 overflow-hidden"
    >
      <div
        className="grid items-center grid-cols-[24rem_1fr_1.2fr] gap-[2.4rem] px-0 py-[1.2rem] border-b-2
            border-gray-300 first:pt-0 last:pb-0"
      >
        <label htmlFor="name" className="font-semibold">
          Room number
        </label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
            min: { value: 1, message: "Name should be at least 1" },
          })}
          className="rounded-md shadow-sm shadow-black/50"
          placeholder="room number"
        />
      </div>
      <div
        className="grid items-center grid-cols-[24rem_1fr_1.2fr] gap-[2.4rem] px-0 py-[1.2rem] border-b-2
            border-gray-300 first:pt-0 last:pb-0"
      >
        <label htmlFor="maxCapacity" className="font-semibold">
          Maximum capacity
        </label>
        <input
          type="number"
          id="maxCapacity"
          defaultValue={0}
          {...register("maxCapacity", {
            required: "This field is required",
            min: { value: 1, message: "Capacity should be at least 1" },
          })}
          className="rounded-md shadow-sm shadow-black/50"
          placeholder="max. capacity"
        />
      </div>
      <div
        className="grid items-center grid-cols-[24rem_1fr_1.2fr] gap-[2.4rem] px-0 py-[1.2rem] border-b-2 
            border-gray-300 first:pt-0 last:pb-0"
      >
        <label htmlFor="regularPrice" className="font-semibold">
          Regualr price
        </label>
        <input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is required",
            min: { value: 1, message: "Price should be at least 1" },
          })}
          className="rounded-md shadow-sm shadow-black/50"
          placeholder="regular price"
        />
      </div>
      <div
        className="grid items-center grid-cols-[24rem_1fr_1.2fr] gap-[2.4rem] px-0 py-[1.2rem] border-b-2 
            border-gray-300 first:pt-0 last:pb-0"
      >
        <label htmlFor="discount" className="font-semibold">
          Discount
        </label>
        <input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            min: { value: 0, message: "Please enter at least 0" },
          })}
          className="rounded-md shadow-sm shadow-black/50"
          placeholder="discount"
        />
      </div>
      <div
        className="grid items-center grid-cols-[24rem_1fr_1.2fr] gap-[2.4rem] px-0 py-[1.2rem] border-b-2 
            border-gray-300 first:pt-0 last:pb-0"
      >
        <label htmlFor="description" className="font-semibold">
          Description of room
        </label>
        <textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", { required: "This field is required" })}
          className="border border-grey-300 bg-grey-0 resize-none
            shadow-sm shadow-black/50 w-full h-32 px-[1.2rem] py-[0.8rem] rounded-[5px] border-solid"
        />
      </div>
      <div
        className="grid items-center grid-cols-[24rem_1fr_1.2fr] gap-[2.4rem] px-0 py-[1.2rem] first:pt-0 
            last:pb-0"
      >
        <label htmlFor="image" className="font-semibold">
          Upload Image
        </label>
        <input
          id="image"
          {...register("image", { required: "This field is required" })}
          accept="image/*"
          className="rounded-md text-sm shadow-sm shadow-black/50"
          placeholder="  image url"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="reset"
          className="bg-white font-semibold shadow-sm shadow-black/50 rounded-md mr-3 mt-3 p-3"
        >
          Cancel
        </button>
        <button
          disabled={isCreating}
          className="bg-blue-300 shadow-sm font-semibold shadow-black/50 rounded-md mr-3 mt-3 p-3"
        >
          Add room
        </button>
      </div>
    </form>
  );
}

export default CreateRoomForm;
