import {auth, db} from "./Firebase";

export async function getClassInfo(user) {
    return new Promise((resolve) => {
        const data=[];
        db.collection("class").where("user", "==", user)
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

export async function handleLogin(email, password) {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Connecté avec :', user.email);

            })
            .catch(error => alert(error.message))
}

async function setCollection(level, number, email) {
    const randomId = Math.floor(Math.random() * 100);
    const cityRef = db.collection('class').doc(randomId.toString());
    const res = await cityRef.set({
        level: level,
        number: number,
        user: email,
    }, {merge: true});
}

export function handleSignUp(email, password, level, number) {
    auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Inscrit avec :', user.email);
            setCollection(level, number, email);
        })
        .catch(error => alert(error.message))
}

export function handleSignOut(navigation) {
    auth
        .signOut()
        .then(() => {
            navigation.navigate("Login")
        })
        .catch(error => alert(error.message))
}