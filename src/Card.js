import React from "react";

export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        
        <div className="card">
        {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
        }
         <img src={props.coverImg} className="img"></img>
         <div className="stats">
                <img src="./images/Star.png" className="star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="activity">{props.title}</p>
            <p><span className="bold">{props.price}</span> / person</p>
        </div>
    )
}