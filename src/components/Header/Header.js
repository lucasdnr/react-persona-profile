import React from 'react';
import { Navbar, NavItem, Row } from 'react-materialize';

const header = ( ) => {
    return (
        <Row>
            <Navbar className="grey darken-2">
                <NavItem href='/'>Home</NavItem>
                <NavItem href='/contact'>Contact</NavItem>
            </Navbar>
        </Row>
    );
}

export default header;