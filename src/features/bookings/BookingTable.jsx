import React from "react";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import BookingRow from "./BookingRow";
import { useBookings } from "./useBookings";

function BookingTable(){
    const { bookings, isLoading, count } = useBookings();

    if(isLoading) return <Spinner />;

    // TODO: create Empty
    if(!bookings.length) return <Empty resourceName="bookings" />;

    return(
        <Table>
            <Table.Header>
                <div>Room</div>
                <div>Guest</div>
                <div>Dates</div>
                <div>Status</div>
                <div>Amount</div>
                <div></div>
            </Table.Header>
            <Table.Body data={bookings} render={(booking) => (<BookingRow key={booking.id} booking={booking} />)}
                />
             <Pagination count={count} />
        </Table>
    )
}

export default BookingTable;
