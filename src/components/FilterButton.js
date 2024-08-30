import React from "react";
import {Button} from "react-bootstrap";

function FilterButton({notices}) {
    const handleStatus = () => {
        console.log("Filter based on status")
    }
    return (
        <>
            <Button variant={`outline-secondary`} aria-pressed="true">All</Button> {' '}
            <Button variant={`warning`} aria-pressed="true">Pending </Button> {' '}
            <Button variant="outline-danger" aria-pressed="true">Clear</Button>{' '}
        </>
    );
}

export default FilterButton;
