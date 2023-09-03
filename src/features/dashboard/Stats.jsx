import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatMoney} from "../../utilities/helpers";

function Stats({ bookings, confirmedStays }) {
  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const checkins = confirmedStays.length;

  return (
    <div className="grid">
      <div className="bg-gray-700 rounded-md border-2 border-gray-400 shadow-lg shadow-gray-800">
      <Stat
        title="Bookings"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      </div>
      <div className="bg-gray-700 mt-2 rounded-md border-2 border-gray-400 shadow-lg shadow-gray-800">
      <Stat
        title="Sales"
        icon={<HiOutlineBanknotes />}
        value={formatMoney(sales)}
      />
      </div>
      <div className="bg-gray-700 mt-2 rounded-md border-2 border-gray-400 shadow-lg shadow-gray-800">
      <Stat
        title="Check ins"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      </div>
    </div>
  );
}

export default Stats;
