import React from "react";
import "./style.css";
import { Form, Container } from 'react-bootstrap';

function MySearch() {
    return (
        <Container fluid>
            <Form.Control type="text" placeholder="Search Name" />
        </Container>
    );
}

export default MySearch;