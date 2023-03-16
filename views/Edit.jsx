import React from "react";

export default function Edit(props) {
    return (
        <div>
            <h1>Edit View</h1>
            <form action={`/logs/${props.logs._id}?_method=PUT`} method="POST">
                <label htmlFor="ttl">Title:</label>
                <input type="text" id="ttl" name="title" value = {props.logs.title} />

                <label htmlFor="ent">Entry:</label>
                <input type="textarea" id="ent" name="entry" value = {props.logs.entry} />

                <label htmlFor="ship">ShipIsbroken:</label>
                <input type="checkbox" id="ship" name="shipIsBroken" defaultChecked = {props.logs.shipIsBroken}/>

                <input type="submit" />

            </form>
        </div>
    )
}