import React from "react";

const Result = (props) => {
    return (
        <li>
            <h2>{props.subject}</h2>
            <h3>{props.score}</h3>
        </li>
    );
};

export default Result;
