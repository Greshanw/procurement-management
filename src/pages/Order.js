import { useEffect, useState } from "react";
import { Table} from "react-bootstrap";
import Navbar from "../components/Navbar";
import SideNavBar from "../components/SideNavbar";
import { getOrders } from "../services/orders";

export default function Order(){
  const [products, setOrders] = useState([]);

  useEffect(() => {
  }, []);

  return(
    <>
        <Navbar/>
        <div className="row">
          <SideNavBar/>
          <div className="col-9">
            <h2>View Order</h2>
            <div className="row">
              <div></div>
              <div>
              <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                 {/* {products.map(order => { 
                  let total = 0;
                  let products = order.Products;
                  Object.keys(products).map((key, i) => { 
                    let price = products[key]['price'];
                    total += price;
                    })
                  return (
                  <tr key={order}>
                    <td>{order.id}</td>
                    <td>{order['Site Manager']}</td>
                    <td>{total}</td>
                    <td>@mdo</td>
                  </tr>
                  )}
                )} */}
              </tbody>
            </Table>
              </div>
            </div>
          </div>               
        </div>
    </>
  )
}