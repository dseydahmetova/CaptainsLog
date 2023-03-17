import React from "react";
import DefaultLayout from "../layouts/DefaultLayout"

export default function Index(props) {
    return (
        <DefaultLayout>

            <div>
                <h1>FoodLog View</h1>
                <ul className="container">
                    {props.foodlogs.map((item, index) =>
                        <li key={index}>
                            <a href={`/foodlogs/${item._id}`}>{item.title}</a>
                        </li>
                    )}
                </ul>
                <div className="btn-group">
                <a className = "btn" href={'/foodlogs/new'}>Add</a>
              
                <form action="/foodlogs/seed" method="POST">
                    <button>SEED</button>
                </form>
                </div>
            </div>
        </DefaultLayout>

    )
}