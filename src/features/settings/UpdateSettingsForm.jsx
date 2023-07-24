import { useSettings } from "./useSettings";
import { useUpdateSetting } from "../settings/useUpdateSetting";
import Spinner from "../../ui/Spinner";

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

  function handleUpdate(event, field){
    const { value } = event.target;
    //console.log(value);
    
    if(!value) return;
    updateSetting({ [field]: value })
  }

  return (
    <form>
      <div>
        <label htmlFor="minimumBookingLength">Minimum nights/booking</label>
        <input
          id="minimumBookingLength"
          type="number"
          disabled={isUpdating}
          defaultValue={minimumBookingLength}
          onBlur={(event) => handleUpdate(event, "minimumBookingLength")}
        />
      </div>
      <div>
        <label htmlFor="maxBookingLength">Maximum night/booking</label>
        <input
          id="maxBookingLength"
          type="number"
          defaultValue={maxBookingLength}
        />
      </div>
      <div>
        <label htmlFor="maxGuests">Maximum guests/booking</label>
        <input id="maxGuests" type="number" defaultValue={maxGuests} />
      </div>
      <div>
        <label htmlFor="breakfastPrice">Breakfast price</label>
        <input
          id="breakfastPrice"
          type="number"
          defaultValue={breakfastPrice}
        />
      </div>
    </form>
  );
}

export default UpdateSettingsForm;
