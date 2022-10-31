import { Nav } from "react-bootstrap";

export default function sideNavBar(){
    return(
        <Nav defaultActiveKey="/home" className="flex-column col-2">
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
        </Nav>
    )
}