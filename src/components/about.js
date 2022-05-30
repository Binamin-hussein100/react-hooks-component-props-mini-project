import React from "react";

function About(prop){
    console.log("prop: ",prop)
    return (
        <aside>
            <img src={prop.dp} alt="blog logo"></img>
            <p>{prop.txt}</p>
        </aside>
    )
}

export default About