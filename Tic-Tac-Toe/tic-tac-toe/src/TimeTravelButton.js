import React from "react";

export default function TimeTravelButton(props) {

    return (
        <button type="button" onClick={props.handleClick}>{props.text}</button>
        );
}