import { useEffect, useState } from "react";
import { Table} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideNavBar from "../components/SideNavbar";
import { getOrders } from "../services/orders";

export default function PendingRequisitions(){
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then(ordersSnapshot => {
      const orderList = ordersSnapshot.docs.map(doc => ({id:doc.id, data:doc.data()}));
      setOrders(orderList);
      console.log(orderList);
    });

    
  }, []);

  const navigate = useNavigate();

  function navigateToOrder(order){
    navigate('/order', {
      state: {
        order: order
      }
    }
    );
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
                  let products = order.data.Products;
                  for(let product of products){
                    let price = product.price;
                    total += parseFloat(price)*parseInt(product.quantity);
                  }
                  return (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.data['SiteManager']}</td>
                    <td>{total}</td>
                    <td>@mdo</td>
                    <td><button className="btn btn-link" onClick={()=> navigateToOrder(order)}>View</button></td>
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