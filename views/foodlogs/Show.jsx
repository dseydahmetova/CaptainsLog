import React from "react";
import DefaultLayout from "../layouts/DefaultLayout"

export default function Show(props) {
    return (
        <DefaultLayout>
            <div>
                <h1>FoodLog Details</h1>
                <div className="details">
                    <h4>{props.foodlogs.title}</h4>
                    <p><span>Ingredients:</span>{' '}{props.foodlogs.ingredients}</p>
                    <p>The food is {props.foodlogs.isHealthy ? 'healthy' : 'NOT healthy'}</p>
                    <p>Created:{props.foodlogs.createdAt.toString()} </p>
                    <p>Updated: {props.foodlogs.updatedAt.toString()} </p>
                </div>
                <div className="btn-group">
                    <a className="btn" href={`/foodlogs/${props.foodlogs._id}/edit`}>Edit</a>
                    <a className="btn" href='/foodlogs'>Back</a>
                    <form action={`/foodlogs/${props.foodlogs._id}?_method=DELETE`} method="POST">
                        <button>Delete</button>
                    </form>
                </div>
            </div>
        </DefaultLayout>

    )
}