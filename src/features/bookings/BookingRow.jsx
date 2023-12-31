import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import { format, isToday } from "date-fns";
import { useCheckOut } from "../check_in_out/useCheckOut";
import { formatMoney, formatDistanceFromNow } from "../../utilities/helpers";
import { useDeleteBooking } from "./useDeleteBooking";
import { useNavigate } from "react-router-dom";
import {
  HiOutlineTrash,
  HiOutlineEye,
  HiOutlineArrowDownOnSquare,
  HiOutlineArrowUpOnSquare,
} from "react-icons/hi2";
import ConfirmDelete from "../../ui/ConfirmDelete";

function BookingRow({ booking }) {
  const {
    id: bookingId,
    startDate,
    endDate,
    numberNights,
    totalPrice,
    status,
    rooms: { name: roomName },
    guests: { fullName: guestName, email: email },
  } = booking;

  const navigate = useNavigate();
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const { checkout, isCheckingOut } = useCheckOut();

  return (
    <Table.Row>
      <span className="text-sm">{roomName}</span>
      <span className="flex flex-col text-sm">
        <div className="font-bold">{guestName}</div>
        {email}
      </span>
      <span className="text-sm">
        <div>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numberNights} night stay
        </div>
        {format(new Date(startDate), "MMM dd yyy")} &mdash;{" "}
        {format(new Date(endDate), "MMM dd yyy")}
      </span>
      {status === "unconfirmed" && (
        <span className="text-sm font-semibold bg-amber-600 text-center p-1 rounded-full text-white shadow-sm shadow-black/50">
          {status.replace("-", " ")}
        </span>
      )}
      {status === "checked-in" && (
        <span className="text-sm font-semibold bg-green-400 text-center p-1 rounded-full text-white shadow-sm shadow-black/50">
          {status.replace("-", " ")}
        </span>
      )}
      {status === "checked-out" && (
        <span className="text-sm font-semibold bg-gray-400 text-center p-1 rounded-full text-white shadow-sm shadow-black/50">
          {status.replace("-", " ")}
        </span>
      )}
      <span className="text-sm">{formatMoney(totalPrice)}</span>
      <Modal>
        <div>
          <Modal.Open opens="delete">
            <button
              onClick={() => deleteBooking(bookingId)}
              disabled={isDeleting}
              title="Delete"
              className="text-3xl px-2 hover:text-amber-600"
            >
              <HiOutlineTrash />
            </button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="booking"
              disabled={isDeleting}
              onConfirm={() => deleteBooking(bookingId)}
              className="text-3xl px-2 hover:text-amber-600"
            />
          </Modal.Window>
          <button
            title="Details"
            onClick={() => navigate(`/bookings/${bookingId}`)}
            className="text-3xl px-2 hover:text-amber-600"
          >
            <HiOutlineEye />
          </button>
          {status === "unconfirmed" && (
            <button
              title="Check In"
              onClick={() => navigate(`/checkin/${bookingId}`)}
              className="text-3xl px-2 hover:text-amber-600"
            >
              <HiOutlineArrowDownOnSquare />
            </button>
          )}
          {status === "checked-in" && (
            <button
              title="Check Out"
              onClick={() => checkout(bookingId)}
              disabled={isCheckingOut}
              className="text-3xl px-2 hover:text-amber-600"
            >
              <HiOutlineArrowUpOnSquare />
            </button>
          )}
        </div>
      </Modal>
    </Table.Row>
  );
}

export default BookingRow;
