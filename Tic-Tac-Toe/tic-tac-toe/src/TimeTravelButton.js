import React from "react";

export default function TimeTravelButton(props) {

    const text = "Move #" + props.movdnumber;

    return (
        <button type="button" onClick={props.handleClick}>{text}</button>
        );
}