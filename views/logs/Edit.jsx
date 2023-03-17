import React from "react";
import DefaultLayout from "../layouts/DefaultLayout"

export default function Edit(props) {
    return (
        <DefaultLayout>
            <div className="container">
                <h1>Edit Log</h1>
                <form action={`/logs/${props.logs._id}?_method=PUT`} method="POST">
                    <label htmlFor="ttl">Title:</label>
                    <input type="text" id="ttl" name="title" defaultValue={props.logs.title} />

                    <label htmlFor="ent">Entry:</label>
                    <textarea id="ent" name="entry" defaultValue={props.logs.entry} rows="5" cols="150" />

                    <label htmlFor="ship">ShipIsbroken:
                        <input type="checkbox" id="ship" name="shipIsBroken" defaultChecked={props.logs.shipIsBroken} />
                    </label>
                    <button>Submit</button>

                </form>
            </div>
        </DefaultLayout>

    )
}