import React from "react";

export default function DefaultLayout(props) {
    return (
        <html>
            <head>
            <link rel="stylesheet" type="text/css" href="/css/styles.css"/>
                        </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/logs">Logs</a>
                        </li>
                        <li>
                            <a href="/foodlogs">Food Logs</a>
                        </li>
                        <li>
                            <a href="/comments">Comments</a>
                        </li>
                    </ul>
                </nav>
                <div>{props.children}</div>
            </body>
        </html>
    )
}