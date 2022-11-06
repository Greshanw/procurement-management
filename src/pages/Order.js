import { useEffect, useState } from "react";
import { Button, Modal, Table} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { auth } from "../config/firebase";
import { updateOrders } from "../services/orders";


export default function Order(){
  const [user, loading, error] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  const [buyerId, setBuyerId] = useState("");
  const [siteMgr, setSiteMgr] = useState("");
  const [site, setSite] = useState("");
  const [total, setTotal] = useState("");
  const [supplier, setSupplier] = useState("");
  const location = useLocation();

  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    navigate(-1);
  };
  const handleShow = () => setShow(true);

  const [status, setStatus] = useState("Approved");

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
    let productsArray = [];
    let productList = location.state.order.data.Products;
    setBuyerId(location.state.order.id)
    
    let tot = 0
    for (const product of productList) {
      productsArray.push(product);
      let price = parseFloat(product.price) * parseInt(product.quantity);
      tot += price;
    }

    setProducts(productsArray);
    setSiteMgr(location.state.order.data['SiteManager']);
    setSite(location.state.order.data['Location']);
    setTotal(tot);
    setSupplier(productsArray[0].supplier);
  }, [loading, location.state.order.data, location.state.order.id, navigate, user]);

  function acceptOrder(){
    let data = {
      isApproved: true
    }

    updateOrders(location.state.order.id, data);
    setStatus("Approved!!")
    handleShow();
  }

  function declineOrder(){
    let data = {
      isApproved: false
    }

    updateOrders(location.state.order.id, data);
    setStatus("Declined!!")
    handleShow();
  }

  return(
    <>
        <Navbar/>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>The Requisition has been {status}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="row m-5">
          <div className="col">
            <h2 className="mb-5">View Order</h2>
            <div className="row">
              <div className="col">
                <div className="row" style={{width: '500px'}}>
                  <div className="col bold">
                    <p>Buyer Id</p>
                    <p>Site Manager</p>
                    <p>Site</p>
                    <p>Total Price</p>
                    <p>Supplier</p>
                  </div>
                  <div className="col">
                    <p>- {buyerId}</p>
                    <p>- {siteMgr}</p>
                    <p>- {site}</p>
                    <p>- Rs.{total}.00</p>
                    <p>- {supplier}</p>
                  </div>
                  
                </div>
              </div>
              <div className="col">
                <Table striped bordered hover className="border border-primary">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                     {products.map(order => { 
                      return (
                      <tr key={products.indexOf(order)}>
                        <td>{order.name}</td>
                        <td>{order.quantity}</td>
                        <td>Rs.{order.price}.00</td>
                      </tr>
                      )}
                    )}
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="row mx-auto" style={{width: '500px'}}>
              <button onClick={acceptOrder} type="button" className="btn btn-success my-2 mx-5"  style={{width: '120px'}}>Accept</button>
              <button onClick={declineOrder} type="button" className="btn btn-danger my-2 mx-5"  style={{width: '120px'}}>Decline</button>
            </div>
          </div>               
        </div>
    </>
  )
}