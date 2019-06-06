import React from 'react';
import { Navbar, Row } from 'react-materialize';
import { NavLink } from 'react-router-dom';

const header = () => {
    return (
        <Row>
            <Navbar className="grey darken-2">
                <NavLink to="/">Home</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </Navbar>
        </Row>
    );
}

export default header;