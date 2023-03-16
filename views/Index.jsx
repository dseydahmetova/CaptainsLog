import React from "react";

export default function Index(props){
    return(
        <div>
            <h1>Index View</h1>
            <ul>
            {props.logs.map((item, index) => 
                            <li key = {index}>
                        <a href={`/logs/${item._id}`}>
                            {item.title} 
                        </a>
                    </li>                
            )}
            </ul>
        </div>
    )
}