import React from "react";
import DefaultLayout from "../layouts/DefaultLayout"

export default function Edit(props) {
    return (
        <DefaultLayout>
             <div>
            <h1>Edit FoodLog</h1>
            <form action= {`/foodlogs/${props.foodlogs._id}?_method=PUT`} method="POST">
                <label htmlFor="ttl">Title:</label>
                <input id="ttl" type="text" name="title" defaultValue={props.foodlogs.title} />
                <label htmlFor="ing">Ingredients:</label>
                <textarea id="ing" row="5" col= "150" name="ingredients" defaultValue={props.foodlogs.ingredients} />
                <label htmlFor="hlt">is Healthy:
                <input id="thlt" type="checkbox" name="isHealthy" defaultChecked={props.foodlogs.isHealthy} />
                </label>
                <input className = "btn" type="submit"></input>
            </form>
        </div>
        </DefaultLayout>
       
    )
}