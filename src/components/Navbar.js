import { Container, Nav, Navbar } from "react-bootstrap";

export default function navbar() {
    return(
    <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Procurement</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/pending-requisitions">Pending Requisitions</Nav.Link>
            <Nav.Link href="#Vendors">Vendors</Nav.Link>
            <Nav.Link href="#Reports">Reports</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}