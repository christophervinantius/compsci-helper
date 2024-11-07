/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function Navigation({keyword, setKeyword, search}){
    return (
        <Navbar expand="lg" className="bg-success bg-gradient">
            <Container className="py-2">
                <Navbar.Brand className="fw-bold text-white">
                    <Link to="/" className="fw-bold text-white text-decoration-none">Compsci Helper</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav>
                        <Link to="/create" className="text-white text-decoration-none">
                            Create New Post
                        </Link>
                    </Nav>
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    onKeyDown={(e) => {
                                        if(e.key === "Enter"){
                                            e.preventDefault()
                                            search()
                                        }
                                    }}
                                    placeholder="Insert keywords..."
                                />
                            </Col>
                            <Col xs="auto">
                                <Button onClick={search} variant="light">Search</Button>
                            </Col>
                        </Row>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}