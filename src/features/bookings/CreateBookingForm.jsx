import React from "react";
import { useForm } from "react-hook-form";
import { useCreateBooking} from "./useCreateBooking";
import { useEditBooking} from "./useEditBooking";

function CreateRoomForm({ bookingEdit= {}, onCloseModal }) {
  const { isCreating, createBooking } = useCreateBooking();

  const { isEditing, editBooking } = useEditBooking();

  const { id: editId, ...editValues } = bookingEdit;

  const isWorking = isCreating || isEditing;

  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editBooking(
        { newBookingData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createBooking(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
      <div>This creates a fucking booking.</div>
  );
}

export default CreateRoomForm;
