import { useEffect, useState } from "react";
import { Table} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { auth } from "../firebase";
import { getOrders } from "../services/orders";

export default function PendingRequisitions(){
  const [user, loading, error] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
    getOrders().then(ordersSnapshot => {
      const orderList = ordersSnapshot.docs.map(doc => ({id:doc.id, data:doc.data()}));
      let pending = [];

      for (const order of orderList) {
        if(order.data.isApproved === undefined){
          pending.push(order);
        }
      }

      setOrders(pending);
    });
  
  }, [loading, user]);

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
        <div className="row m-5">
          <div className="col">
            <h2 className="mb-5">Pending Requisitions</h2>
            <Table striped bordered hover>
              <thead className="bg-primary text-white">
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
                    <td>{order.data.Products[0].supplier}</td>
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