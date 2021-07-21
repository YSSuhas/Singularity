import React from 'react'
import './navbar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from '@material-ui/core'
import Search from './search'

function Navbars() {

    const user = JSON.parse(localStorage.getItem('userInfo'));

    /*if(user) {
        var usernameind = user.lastIndexOf(",\"username\"") + 13;
        var i = 0;
        var username = "";
        while(i<11) {
            if(user[usernameind]=='"')
                break;
            username+=user[usernameind];
            usernameind++;
            i++;
        }
    }*/

    return (
        <div className="navbars">
            <Container className="navbarcontainer">
                <Navbar bg="black" variant="dark" className="navbarnavbar" fixed="top">
                    <Navbar.Brand href="/">YS</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/picture_of_the_day" className="navlink">POTD</Nav.Link>
                        <Nav.Link href="/questions" className="navlink">QNA</Nav.Link>
                    </Nav>
                    { user ? (
                        <Nav className="navbaru">
                            <img src={user.profilepic} />
                            <Nav.Link href={`/${user.username}/profile`}>{user.username}</Nav.Link>
                        </Nav>
                    ) : (
                        <Nav className="navbaru">
                            <Nav.Link href="/login">Log In</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                        </Nav>
                    ) }
                    <Nav className="navbarsearch">
                        <Search />
                    </Nav>
                </Navbar>
            </Container>
        </div>
    )
}

export default Navbars;