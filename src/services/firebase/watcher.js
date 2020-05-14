import { auth, db } from './setup';

export function watchUserChanges(callback) {
    const unsub = auth.onAuthStateChanged((user) => {
        if (user && !user.isAnonymous) {
            const {
                uid,
                email,
                displayName,
            } = user;

            callback({
                id: uid,
                email,
                displayName,
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
                    nombre_usuario: +data.nombre_usuario,
                    id: doc.id,
                    date: data.date && new Date(data.date),
                });
            });

            callback(docs);
        });

    return unsub;
}
