import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';

export default function Navigation(){
    return (
        <Navbar expand="lg" className="bg-success bg-gradient">
            <Container>
                <Navbar.Brand className="fw-bold text-white">
                    <Link to="/" className="fw-bold text-white text-decoration-none">Compsci Helper</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/create" className="text-white text-decoration-none">Create New Post</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}