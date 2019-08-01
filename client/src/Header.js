import React from "react";
import { NavDropdown, Navbar } from 'react-bootstrap';
import axios from 'axios';


class Header extends React.Component {
    state = {
        customer: {}
    }

    onClick = (string, e) => {
        e.preventDefault()
        axios.get(`http://localhost:5001/customer/${string}`)
            .then(res => this.setState({ customer: res.data }))
        console.log(this.state)
    }
    render() {
        const { customer } = this.state
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0" >
                <div className="container">
                    <a href="/" className="navbar-brand">
                        Pizza Deals! </a>
                    <div>
                        <NavDropdown title="Customer" id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.1" onClick={(e) => this.onClick("Default", e)}>Default</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2" onClick={(e) => this.onClick("Infosys", e)}>Infosys</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.3" onClick={(e) => this.onClick("Amazon", e)}>Amazon</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.4" onClick={(e) => this.onClick("Facebook", e)}>Facebook</NavDropdown.Item>
                        </NavDropdown>
                        {/* <br/>
                        <Navbar.Text>
                            <a href="/customer">{customer.name}</a>
                        </Navbar.Text> */}
                    </div>
                </div>
            </nav>
        );
    }
};


const headingStyle = {
    color: "grey",
    fontSize: "50px"
};

export default Header;
