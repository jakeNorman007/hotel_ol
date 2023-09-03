import React from "react";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";
import { useTodayActivity } from "./useTodayActivity";

function TodaysActivity(){
    const { activities, isLoading } = useTodayActivity();

    return(
        <div className="bg-gray-700 text-white rounded-md border-2 border-gray-400 text-xl font-semibold pt-4 px-4 shadow-lg shadow-gray-800">
            <div>
                <p>Today</p>
            </div>

            {!isLoading ? (
                activities?.length > 0 ? (
                <div>
                {activities.map((activity) => (
                    <TodayItem activity={activity} key={activity.id} />
                ))}
                </div>
            ) : (
                <p>No activity today</p>
            )
        ) : ( <Spinner /> )}
       </div>
    );
            
}
export default TodaysActivity;
