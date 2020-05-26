import { auth, db } from './setup';

export function watchUserChanges(callback) {
    const unsub = auth.onAuthStateChanged((user) => {
        if (user && !user.isAnonymous) {
            const {
                uid,
                email,
            } = user;

            callback({
                uid,
                email,
            });
        } else {
            callback(null);
        }
    });

    return unsub;
}



export function watchUsuarios(callback) {
    const unsub = db
        .collection('usuarios')
        .onSnapshot((snapshot) => {
            const docs = [];

            snapshot.forEach((doc) => {
                const data = doc.data();

                docs.push({
                    ...data,                    
                    id: doc.id,
                    date: data.date && new Date(data.date),
                });
            });

            callback(docs);
        });

    return unsub;
}
