import { 
    getFirestore, 
    collection, 
    getDocs, 
    query, 
    where, 
    doc, 
    getDoc,
    addDoc
} from "firebase/firestore";

import { app } from "./config";

const db = getFirestore(app);


export const getItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
};  

export const getItemsFromCategory = async (category) => {
    const q = category ? query(collection(db, "items"), where("category", "==", category)) : collection(db, "items");
    const querySnapshot = await getDocs(q);
    const items = []
    querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    items.push({...doc.data(), id: doc.id});
});
return items;
}

export const getItem = async (id) => {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);
    let item = null;

    if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    item = {...docSnap.data(), id: docSnap.id};
    } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    }
    return item;
};

export const createOrder = async (order) => {
    try{
        const docRef = await addDoc(collection(db, "orders"), order);
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

