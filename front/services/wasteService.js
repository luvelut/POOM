import {auth, db} from "../firebase";

export async function getWaste(color) {
    return new Promise((resolve) => {
        const data=[];
        if(color==='yellow'){
            db.collection("waste").where("user", "==", auth.currentUser?.email).where("trashRecyclabe","==",true)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        data.push(doc.data());
                    });
                    resolve(data);
                }).catch((error) => {
                console.log("Error getting documents: ", error);
            });
        }
        if(color==='green'){
            db.collection("waste").where("user", "==", auth.currentUser?.email).where("trashVerre","==",true)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        data.push(doc.data());
                    });
                    resolve(data);
                }).catch((error) => {
                console.log("Error getting documents: ", error);
            });
        }
        if(color==='grey'){
            db.collection("waste").where("user", "==", auth.currentUser?.email).where("trashMenager","==",true)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        data.push(doc.data());
                    });
                    resolve(data);
                }).catch((error) => {
                console.log("Error getting documents: ", error);
            });
        }
    });
}