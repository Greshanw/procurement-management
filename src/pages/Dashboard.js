import { Col, Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import SideNavBar from "../components/SideNavbar";

export default function dashboard(){
    return(
        <>
            <Navbar/>
            <div className="row">
                <SideNavBar/>
                <div className="col-9">
                    <h2>Dashboard</h2>
                    <Col style={{width: '500px'}}>
                        <a href="/pending-requisitions" className="text-decoration-none text-white fw-bold">
                            <div className="border rounded p-4 m-3 bg-info fs-4">
                                <i className="bi bi-hourglass-bottom mx-2 text-dark"></i>Pending Requistion
                            </div>
                        </a>
                        <a href="/pending-requisitions" className="text-decoration-none text-white fw-bold">
                            <div className="border rounded p-4 m-3 bg-info fs-4">
                            <i className="bi bi-bookmark-check-fill mx-2 text-dark"></i>Approved Requistion
                            </div>
                        </a>
                        <a href="/pending-requisitions" className="text-decoration-none text-white fw-bold">
                            <div className="border rounded p-4 m-3 bg-info fs-4">
                            <i className="bi bi-clock-history mx-2 text-dark"></i>Order History
                            </div>
                        </a>
                    </Col>
                </div>               
            </div>
        </>
    )
}