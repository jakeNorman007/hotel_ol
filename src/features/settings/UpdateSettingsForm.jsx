import React from "react";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "../settings/useUpdateSetting";
import Spinner from "../../ui/Spinner";

// updates the default settings in supabase for the following values, there is only one row for these in the DB
function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minimumBookingLength,
      maxBookingLength,
      maxGuests,
      breakfastPrice,
    } = {},
  } = useSettings();

  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  function handleUpdate(event, field) {
    const { value } = event.target;
    //console.log(value);

    if (!value) return;
    updateSetting({ [field]: value });
  }

  return (
    <form className="grid py-[2.4rem] px-[4rem] bg-gray-700 border-2 border-slate-400 shadow-lg shadow-gray-800 rounded-sm gap-4 m-20">
      <div className="grid grid-cols-[24rem_1fr_1fr] items-center gap-[2.4rem] py-2">
        <label
          role="textbox"
          className="font-medium text-lg text-white"
          htmlFor="minimumBookingLength"
        >
          Minimum nights/booking
        </label>
        <input
          className="rounded-md shadow-sm shadow-black/50 px-2"
          id="minimumBookingLength"
          type="number"
          disabled={isUpdating}
          defaultValue={minimumBookingLength}
          onBlur={(event) => handleUpdate(event, "minimumBookingLength")}
        />
      </div>
      <div className="grid grid-cols-[24rem_1fr_1fr] items-center gap-[2.4rem] py-2">
        <label
          className="font-medium text-lg text-white"
          htmlFor="maxBookingLength"
        >
          Maximum nights/booking
        </label>
        <input
          className="rounded-md shadow-sm shadow-black/50 px-2"
          id="maxBookingLength"
          type="number"
          defaultValue={maxBookingLength}
        />
      </div>
      <div className="grid grid-cols-[24rem_1fr_1fr] items-center gap-[2.4rem] py-2">
        <label className="font-medium text-lg text-white" htmlFor="maxGuests">
          Maximum guests/booking
        </label>
        <input
          className="rounded-md shadow-sm shadow-black/50 px-2"
          id="maxGuests"
          type="number"
          defaultValue={maxGuests}
        />
      </div>
      <div className="grid grid-cols-[24rem_1fr_1fr] items-center gap-[2.4rem] py-2">
        <label
          className="font-medium text-lg text-white"
          htmlFor="breakfastPrice"
        >
          Breakfast price
        </label>
        <input
          className="rounded-md shadow-sm shadow-black/50 px-2"
          id="breakfastPrice"
          type="number"
          defaultValue={breakfastPrice}
        />
      </div>
    </form>
  );
}

export default UpdateSettingsForm;
