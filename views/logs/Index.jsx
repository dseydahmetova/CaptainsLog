import React from "react";
import DefaultLayout from "../layouts/DefaultLayout"

export default function Index(props) {
    return (
        <DefaultLayout>
            <div>
                <h1>Captain's Log</h1>
                <ul className="container">
                    {props.logs.map((item, index) =>
                        <li key={index}>
                            <a href={`/logs/${item._id}`}>
                                {item.title}
                            </a>
                        </li>
                    )}
                </ul>
                <div className="btn-group">
                    <a className="btn" href={`/logs/new`}>Add log</a>
                    <form action="/logs/seed" method="POST">
                        <button>SEED</button>
                    </form>
                </div>
            </div>
        </DefaultLayout>

    )
}