import { useForm } from "react-hook-form";
import { useCreateRoom } from "./useCreateRoom";
import { useEditRoom } from "./useEditRoom";

function CreateRoomForm({ roomEdit = {} }) {
  // custom hook for creating room see useCreateRoom.js
  const { isCreating, createRoom } = useCreateRoom();

  // custom hook for creating room see useEditRoom.js
  const { isEditing, editRoom } = useEditRoom();

  const { id: editId, ...editValues } = roomEdit;

  const isWorking = isCreating || isEditing;

  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editRoom(
        { newRoomData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
    else
      createRoom(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
  }

  function onError(errors) {
    console.log(errors);
  }

  // this works to create a new room because the fields have tags/id's that match the table in supabase
  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="grid py-[2.4rem] px-[4rem]"
    >
      <div className="grid grid-cols-[24rem_1fr_1fr]">
        <label htmlFor="name">Room number</label>
        <input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
          placeholder="room number"
        />
        <div className="text-red-600">{errors?.name?.message}</div>
      </div>
      <div className="grid grid-cols-[24rem_1fr_1fr]">
        <label htmlFor="maxCapacity">Maximum capacity</label>
        <input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          defaultValue={0}
          {...register("maxCapacity", {
            required: "This field is required",
            min: { value: 1, message: "Capacity should be at least 1" },
          })}
          placeholder="max. capacity"
        />
        <div className="text-red-600">{errors?.maxCapacity?.message}</div>
      </div>
      <div className="grid grid-cols-[24rem_1fr_1fr]">
        <label htmlFor="regularPrice">Regular price</label>
        <input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required",
          })}
          placeholder="regular price"
        />
        <div className="text-red-600">{errors?.regularPrice?.message}</div>
      </div>
      <div className="grid grid-cols-[24rem_1fr_1fr]">
        <label htmlFor="discount">Discount</label>
        <input
          type="number"
          id="discount"
          defaultValue={0}
          disabled={isWorking}
          {...register("discount", {
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than the regular price",
          })}
          placeholder="discount"
        />
        <div className="text-red-600">{errors?.discount?.message}</div>
      </div>
      <div className="grid grid-cols-[24rem_1fr_1fr]">
        <label htmlFor="description">Description of room</label>
        <textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", { required: "This field is required" })}
        />
        <div className="text-red-600">{errors?.description?.message}</div>
      </div>
      <div className="grid grid-cols-[24rem_1fr_1fr]">
        <label htmlFor="image">Upload Image</label>
        <input
          id="image"
          accept="image/*"
          type="file"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
        <div className="text-red-600">{errors?.image?.message}</div>
      </div>
      <div className="flex flex-row-reverse">
        <button type="reset">Cancel</button>
        <button disabled={isWorking}>
          {isEditSession ? "Edit room" : "Create new room"}
        </button>
      </div>
    </form>
  );
}

export default CreateRoomForm;
