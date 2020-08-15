import React from "react";
import "./style.css";
import { Jumbotron, Container } from 'react-bootstrap';

function MyJumbotron() {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Employee Directory</h1>
                <p>
                    Click on name heading to sort A-Z or use the search box to narrow your results
                </p>
            </Container>
        </Jumbotron>
    );
}

export default MyJumbotron;