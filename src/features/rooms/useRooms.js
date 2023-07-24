import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRooms";

export function useRooms() {

  const { isLoading, error, data: rooms } = useQuery({
    queryKey: ["room"],
    queryFn: getRooms,
  });

    return { isLoading, error, rooms };
}
