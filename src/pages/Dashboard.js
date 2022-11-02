import { Col} from "react-bootstrap";
import Navbar from "../components/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard(){
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/login");
    })

    return(
        <>
            <Navbar/>
            <div className="row m-5">
                <div className="col">
                    <h2 className="mb-5">Dashboard</h2>
                    <Col>
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