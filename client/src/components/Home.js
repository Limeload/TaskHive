import React from "react";
import ProjectList from "./ProjectList";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import home from '../images/home.png';


function Home() {
    return (
        <Container>
      <Row className="my-4">
        <Col>
          <h1>Welcome to TaskHive! </h1>
          <p className="lead">
            TaskHive allows you to manage your tasks easily and efficiently.
          </p>
          <img className="home-img" src={home} alt={home} />
         <p>Manage your tasks like a Pro!</p>
          <Link to="/login"><Button variant="primary">Log in / Register</Button></Link>
            <ProjectList />
        </Col>
      </Row>
    </Container>
    )
}


export default Home
