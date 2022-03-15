import {auth, db} from "./Firebase";

export async function getWasteByColor(color) {
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

export async function getWasteByUser(user) {
    return new Promise((resolve) => {
        const data=[];
        db.collection("waste").where("user", "==", user)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    data.push(doc.data());
                });
                resolve(data);
            }).catch((error) => {
            console.log("Error getting documents: ", error);
        });
    });
}

export async function deleteWaste(id) {
    return new Promise((resolve) => {
        db.collection("waste").doc(id.toString()).delete().then(() => {
            console.log("Document successfully deleted!");
            resolve(true);
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    })
}