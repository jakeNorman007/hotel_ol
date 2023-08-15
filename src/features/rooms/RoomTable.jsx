import RoomRow from "../rooms/RoomRow";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import { useRooms } from "./useRooms";
import { useSearchParams } from "react-router-dom";

function RoomTable() {
  const { isLoading, rooms } = useRooms();

  // uses this hook to set the filter value initially when the table comonent is loaded
  const[searchParams] = useSearchParams();

  // uses the spinner if the page is loading
  if (isLoading) return <Spinner />;

  // this will put in the console the current selected filter, however currently when you refresh it, the value is
  // null, where you want it to start with the All filter preselected. the || "all" sets the default to all listings
  const filterValue = searchParams.get("discount") || "all";
  //console.log(filterValue);

  // filtering logic
  let filteredRooms;

  if(filterValue === "all") filteredRooms = rooms;

  if(filterValue === "no-discount")
    filteredRooms = rooms.filter((room) => room.discount === 0);

  if(filterValue === "discount")
    filteredRooms = rooms.filter((room) => room.discount > 0);

  // sorting logic
  const sort = searchParams.get("sort") || "startDate-asc";
  const [field, direction] = sort.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedRooms = filteredRooms.sort(
    (a, b) => (a[field] - b[field]) * modifier
  ); 

  return (
      <Table role="table">
        <Table.Header role="row">
          <div></div>
          <div>Room Number</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={filteredRooms}
          render={(room) => <RoomRow room={room} key={room.id} />}
        />
      </Table>
  );
}

export default RoomTable;
