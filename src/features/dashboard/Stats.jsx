import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatMoney} from "../../utilities/helpers";

function Stats({ bookings, confirmedStays, numDays, roomsCount}) {
  // 1.
  const numBookings = 6;

  // 2.
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 225);

  // 3.
  const checkins = 25;

  const count = 8
  // 4.
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 9) /
    (numDays * count);
  // num checked in nights / all available nights (num days * num cabins)

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatMoney(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
