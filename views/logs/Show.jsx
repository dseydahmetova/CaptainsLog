import React from "react";
import DefaultLayout from "../layouts/DefaultLayout"

export default function Show(props) {
    return (
        <DefaultLayout>
            <div>
                <h1>Log Details</h1>
                <div className="details">
                    <h4>{props.logs.title}</h4>
                    <p>{props.logs.entry}</p>
                    <p> The ship {props.logs.shipIsBroken ? ' is broken' : 'is NOT broken'}</p>                    <p>Created: {props.logs.createdAt.toString()}</p>
                </div>
                <div className="btn-group">
                    <a className="btn" href="/logs">Back</a>

                    <a className="btn" href={`/logs/${props.logs._id}/edit`}>Edit</a>

                    <form action={`/logs/${props.logs._id}?_method=DELETE`} method="POST">
                        <button>Delete</button>
                    </form>
                </div>
            </div>
        </DefaultLayout>

    )
}