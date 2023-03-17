import React from "react";
import DefaultLayout from "../layouts/DefaultLayout"

export default function New(props) {
    return (
        <DefaultLayout>
            <div className="container">
                <h1>New Log</h1>
                <form action="/logs" method="POST">

                    <label htmlFor="ttl">Title:</label>
                    <input type="text" id="ttl" name="title" />

                    <label htmlFor="ent">Entry:</label>
                    <textarea id="ent" name="entry" rows="5" cols="150" />

                    <label htmlFor="ship">ShipIsbroken:
                        <input type="checkbox" id="ship" name="shipIsBroken" />
                    </label>
                    <input className="btn" type="submit" />
                </form>
            </div>
        </DefaultLayout>

    )
}