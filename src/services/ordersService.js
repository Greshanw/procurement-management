import { db }  from '../config/firebase';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore/lite';

export async function getOrders(){
    const orders = collection(db, 'Orders');
    const ordersSnapshot = await getDocs(orders);
    return ordersSnapshot;
}

export async function updateOrders(id, data){
    const ordercollref = doc(db,'Orders', id)
    updateDoc(ordercollref, data);
}