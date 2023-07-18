import { useForm } from "react-hook-form";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createRoom } from "../../services/apiRooms";
import toast from "react-hot-toast";

function CreateRoomForm() {

  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
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

  function onError(errors) {
    console.log(errors);
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
          disabled={isCreating}
          {...register("name", {
            required: "This field is required",
          })}
          className="rounded-md shadow-sm shadow-black/50"
          placeholder="room number"
        />
        <div className="text-red-600">
            {errors?.name?.message}
        </div>
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
          disabled={isCreating}
          defaultValue={0}
          {...register("maxCapacity", {
            required: "This field is required",
            min: { value: 1, message: "Capacity should be at least 1" },
          })}
          className="rounded-md shadow-sm shadow-black/50"
          placeholder="max. capacity"
        />
        <div className="text-red-600">
            {errors?.maxCapacity?.message}
        </div>
      </div>
      <div
        className="grid items-center grid-cols-[24rem_1fr_1.2fr] gap-[2.4rem] px-0 py-[1.2rem] border-b-2 
            border-gray-300 first:pt-0 last:pb-0"
      >
        <label htmlFor="regularPrice" className="font-semibold">
          Regular price
        </label>
        <input
          type="number"
          id="regularPrice"
          disabled={isCreating}
          {...register("regularPrice", {
            required: "This field is required",
          })}
          className="rounded-md shadow-sm shadow-black/50"
          placeholder="regular price"
        />
        <div className="text-red-600">
            {errors?.regularPrice?.message}
        </div>
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
          disabled={isCreating}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
            value <= getValues().regularPrice || "Discount should be less than the regular price",
          })}
          className="rounded-md shadow-sm shadow-black/50"
          placeholder="discount"
        />
        <div className="text-red-600">
            {errors?.discount?.message}
        </div>
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
          disabled={isCreating}
          {...register("description", { required: "This field is required" })}
          className="border border-grey-300 bg-grey-0 resize-none
            shadow-sm shadow-black/50 w-full h-32 px-[1.2rem] py-[0.8rem] rounded-[5px] border-solid"
        />
        <div className="text-red-600">
            {errors?.description?.message}
        </div>
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
          disabled={isCreating}
          {...register("image")}
          accept="image/*"
          className="rounded-md text-sm shadow-sm shadow-black/50"
          placeholder="  image url"
        />
        <div className="text-red-600">
            {errors?.image?.message}
        </div>
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
