import React from 'react';
import './home.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Image1 from '../../assets/maick-maciel-_v8C6BlpBzY-unsplash.jpg';
import Image2 from '../../assets/tim-gouw-tYpp-eIZH44-unsplash.jpg';
import Image3 from '../../assets/pavan-gupta-_HzlOHmboSk-unsplash.jpg';
import Card from 'react-bootstrap/Card';



function Home() {

    return (
        <>
            {/* Navbarr:--- */}
            <Navbar expand="lg" className=" nav-bg">
                <Container fluid className=" text-white">
                    <Navbar.Brand href="/">FPO Agro</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 text-white"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex" id="search-field">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            {/* Carousel:--- */}
            <div id="carouselExampleAutoplaying" className="carousel slide position-relative" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Image1} className="carousel-img d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Image2} className="carousel-img d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Image3} className="carousel-img d-block w-100" alt="..." />
                    </div>
                </div>

                {/* <input type="text" className="w-25 position absolute bottom-50 end-50"/> */}

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



            {/* Cards ---: */}
            <div>
                <h1 className="text-center fw-bold mt-5">Top Nominated Farmer</h1>

                <div className="d-flex justify-content-center gap-5 align-items-center mt-4">
                    <Card style={{ width: '15rem', borderRadius: '50%' }}>
                        <Card.Img variant="top" src="holder.js/100px180" className="w-25" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="success" size="sm">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '15rem', borderRadius: '50%' }}>
                        <Card.Img variant="top" src="holder.js/100px180" className="w-25" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="success" size="sm">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>



            <div className="mt-5">
                
            </div>

        </>
    );
}

export default Home;
