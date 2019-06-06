import React from "react";
import Home from "../components/Home/Home";
import Contact from "../components/Contact/Contact";
import { Container } from 'react-materialize';
import { Switch, Route } from 'react-router-dom'

const main = () => (
    <main>
        <Container>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </Container>
    </main>
);

export default main;