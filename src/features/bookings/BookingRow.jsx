import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import { format, isToday } from "date-fns";
import { useCheckOut } from "../check_in_out/useCheckOut";
import { formatMoney, formatDistanceFromNow } from "../../utilities/helpers";
import { useDeleteBooking } from "./useDeleteBooking";
import { useNavigate } from "react-router-dom";
import { HiTrash } from "react-icons/hi2";
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

  const { deleteBooking, isDeleting } = useDeleteBooking();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <Table.Row>
      <span className="text-sm">{roomName}</span>
      <span className="flex flex-col text-sm">
        <div>{guestName}</div>
        {email}
      </span>
      <span className="text-sm">
        {isToday(new Date(startDate))
          ? "Today"
          : formatDistanceFromNow(startDate)}{" "}
        &rarr; {numberNights} night stay
      </span>
      <span className="text-sm">
        {format(new Date(startDate), "MMM dd yyy")} &mdash;{" "}
        {format(new Date(endDate), "MMM dd yyy")}
      </span>
      <span type={statusToTagName[status]}>{status.replace("-", " ")}</span>
      <span>{formatMoney(totalPrice)}</span>

      <Modal>
        <Modal.Open opens="delete">
          <button
            onClick={() => deleteBooking(bookingId)}
            disabled={isDeleting}
            title="Delete"
          >
            <HiTrash />
          </button>
        </Modal.Open>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="booking"
            disabled={isDeleting}
            onConfirm={() => deleteBooking(bookingId)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default BookingRow;
