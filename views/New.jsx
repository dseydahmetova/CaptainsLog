import React from "react";

export default function New(props) {
    return (
        <div>
            <h1>New View</h1>
            <form action="/logs" method="POST">
                <label htmlFor="ttl">Title:</label>
                <input type="text" id="ttl" name="title" />

                <label htmlFor="ent">Entry:</label>
                <input type="textarea" id="ent" name="entry" />

                <label htmlFor="ship">ShipIsbroken:</label>
                <input type="checkbox" id="ship" name="shipIsBroken" />

                <input type="submit" />


            </form>
        </div>
    )
}