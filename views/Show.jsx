import React from "react";

export default function Show(props){
    return(
        <div>
            <h1>Show View</h1>
            {props.logs.title}
            <br/><br/>
            {props.logs.entry}
            <br/><br/>
             <p> The ship {props.logs.shipIsBroken? ' is broken' : 'is NOT broken'}</p>

<p>{props.logs.createdAt.toString()}</p>
<a href="/logs">Back</a>
        </div>
    )
}