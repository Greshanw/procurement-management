import {db}  from '../firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

export async function getOrders(){
    const orders = collection(db, 'Orders');
    const ordersSnapshot = await getDocs(orders);
    const orderList = ordersSnapshot.docs.map(doc => doc.data());
    return orderList;
}