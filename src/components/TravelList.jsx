import React from 'react'
import travelPlansData from "../assets/travel-plans.json";
import { TravelCard } from "./TravelCard.jsx";


export const TravelList = ({travelDetail, setTravelDetail}) => {
  return (
    <div>
        {travelDetail.map((element) => {
        return (
            <TravelCard
              //   we get the setter from the props and pass it here
              //   and the element is just one pet in the map loop
              setTravelDetail={setTravelDetail}
              element={element}
              key={element.id}
            />
          );
        })
        }
        <div></div>
        <div></div>
    </div>
  )
}
