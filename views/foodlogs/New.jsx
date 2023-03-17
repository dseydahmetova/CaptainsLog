import React from "react";
import DefaultLayout from "../layouts/DefaultLayout"

export default function New(props){
    return(
        <DefaultLayout>
            <div>
            <h1>New FoodLog</h1>
            <form action = "/foodlogs" method="POST">
                <label htmlFor="ttl">Title:</label>
                <input id = "ttl" type = "text" name = "title"/>
                <label htmlFor="ing">Ingredients:</label>
                <textarea id = "ing" row = "5"  col="50" name ="ingredients"/>
                <label htmlFor="hlt">is Healthy:
                <input id = "thlt" type = "checkbox"  name = "isHealthy"/>
                </label>
                <input className = "btn" type="submit"/>
            </form>
        </div>
        </DefaultLayout>
    )
}