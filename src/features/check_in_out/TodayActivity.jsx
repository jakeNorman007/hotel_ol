import React from "react";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";

import { useTodayActivity } from "./useTodayActivity";

function TodaysActivity(){
    const { activities, isLoading } = useTodayActivity();

    return(
        <div>
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
