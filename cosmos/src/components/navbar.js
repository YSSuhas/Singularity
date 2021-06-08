import React from 'react'
import './navbar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from '@material-ui/core'
import Search from './search'

function Navbars() {
    return (
        <div className="navbars">
            <Container className="navbarcontainer">
                <Navbar bg="black" variant="dark" className="navbarnavbar" fixed="top">
                    <Navbar.Brand href="#home">YS</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className="navlink">Home</Nav.Link>
                        <Nav.Link href="#features" className="navlink">Features</Nav.Link>
                        <Nav.Link href="#pricing" className="navlink">Pricing</Nav.Link>
                    </Nav>
                    <Nav className="navbarsearch">
                        <Search />
                    </Nav>
                </Navbar>
            </Container>
        </div>
    )
}

export default Navbars;