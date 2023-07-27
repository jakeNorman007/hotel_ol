import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRooms";

// gets the rooms from supabase to display in rooms section of the app
export function useRooms() {

  const { isLoading, error, data: rooms } = useQuery({
    queryKey: ["room"],
    queryFn: getRooms,
  });

    return { isLoading, error, rooms };
}
