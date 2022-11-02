import { useEffect, useState } from "react";
import { Table} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideNavBar from "../components/SideNavbar";
import { updateOrders } from "../services/orders";

export default function Order(){
  const [products, setProducts] = useState([]);
  const [buyerId, setBuyerId] = useState("");
  const [siteMgr, setSiteMgr] = useState("");
  const [site, setSite] = useState("");
  const [total, setTotal] = useState("");
  const [supplier, setSupplier] = useState("");
  const location = useLocation();

  useEffect(() => {
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
  }, [location.state.order.data, location.state.order.id]);

  function acceptOrder(){
    let data = {
      isApproved: true
    }

    updateOrders(location.state.order.id, data);
  }

  function declineOrder(){
    let data = {
      isApproved: false
    }

    updateOrders(location.state.order.id, data);
  }

  return(
    <>
        <Navbar/>
        <div className="row">
          <SideNavBar/>
          <div className="col-9">
            <h2>View Order</h2>
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col">
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
                    <p>- {total}</p>
                    <p>- {supplier}</p>
                  </div>
                  
                </div>
              </div>
              <div className="col">
                <Table striped bordered hover>
                  <thead>
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
                        <td>{order.price}</td>
                      </tr>
                      )}
                    )}
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="row">
              <button onClick={acceptOrder} type="button" className="btn btn-success col my-2 mx-5">Accept</button>
              <button onClick={declineOrder} type="button" className="btn btn-danger col my-2 mx-5">Decline</button>
            </div>
          </div>               
        </div>
    </>
  )
}