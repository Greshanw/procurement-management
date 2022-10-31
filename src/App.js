import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PendingRequisitions from './pages/PendingRequisitions';
import Order from './pages/Order';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/pending-requisitions' element={<PendingRequisitions/>}></Route>
        <Route path='/order' element={<Order/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
