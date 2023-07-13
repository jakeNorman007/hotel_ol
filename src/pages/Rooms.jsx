import RoomTable from "../features/rooms/RoomTable";

{
/*
the useEffect hook is in here so when we inspect Rooms.jsx on local host, we can
test that supabase is hooked up properly and we can look in the console and see the
room array created in our database. Mostly just to check I did it right. getRooms is
the API call to supabase.
*/
}

function Rooms() {
  return (
    <>
      <div className="flex justify-between align-center pb-4">
        <p className="font-bold text-4xl">All Rooms</p>
        <p className="text-2xl pl-3">Sort / Filter</p>
      </div>
      <RoomTable />
    </>
  );
}

export default Rooms;
