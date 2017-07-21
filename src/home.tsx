import * as React from "react";
import Navigation from './nav/navigation';
import {RaisedButton} from 'material-ui';
import {Link} from 'react-router-dom';
//import { Button, ButtonGroup, Container, Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
//import { Card, CardImg, CardText, CardBlock, CardLink, CardTitle, CardSubtitle } from "reactstrap";

//interface IHomeProps extends React.HTMLProps<JSX.Element> {
    // myvar: string;
    // onClick?: React.MouseEventHandler<JSX.Element | HTMLElement>;
//}

export const Home = () => {
    return (
        <div >
            <Link to="/fizzbuzz">
                <RaisedButton label="FizzBuzz" />
            </Link>
        </div>
    );
};

export default Home;



