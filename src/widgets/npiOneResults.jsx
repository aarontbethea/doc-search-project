//Individually Rendered results
import React from "react";

function IndResult(props) {
    return (
        <div id="result">
            <p>{props.number}</p>
            <ul>
                <li>Credential: {props.basic.credential}</li>
                <li>
                    Last Name: {props.basic.last_name}
                </li>
                <li>First Name: {props.basic.first_name}</li>
            </ul>
        </div>
    )
}

export default IndResult;