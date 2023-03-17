import React from "react";
import DefaultLayout from "../layouts/DefaultLayout"

export default function Index(props){
    return(
        <DefaultLayout>
             <div>
            <h1>Captain's Log</h1>
            <ul className="container">
            {props.logs.map((item, index) => 
                            <li key = {index}>
                        <a href={`/logs/${item._id}`}>
                            {item.title} 
                        </a>
                    </li>                
            )}
            </ul>
            <a className = "btn container" href={`/logs/new`}>Add log</a>
        </div>
        </DefaultLayout>
       
    )
}