import { useEffect, useState } from "react";
import { Col, Table} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideNavBar from "../components/SideNavbar";
import { getOrders } from "../services/orders";

export default function PendingRequisitions(){
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then(orderList => {
      setOrders(orderList);
      console.log(orderList);
    });
  }, []);

  const navigate = useNavigate();

  function navigateToOrder(){
    navigate('/order');
  }

  return(
    <>
        <Navbar/>
        <div className="row">
          <SideNavBar/>
          <div className="col-9">
            <h2>Pending Requisitions</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Buyer ID</th>
                  <th>Site Manager</th>
                  <th>Total Price</th>
                  <th>Supplier</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                 {orders.map(order => { 
                  let total = 0;
                  let products = order.Products;
                  Object.keys(products).map((key, i) => { 
                    let price = products[key]['price'];
                    total += price;
                    })
                  return (
                  <tr key={orders.indexOf(order)}>
                    <td>{order.id}</td>
                    <td>{order['Site Manager']}</td>
                    <td>{total}</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-primary" onClick={navigateToOrder}>View</button></td>
                  </tr>
                  )}
                )}
              </tbody>
            </Table>
          </div>               
        </div>
    </>
  )
}