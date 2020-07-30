import { auth } from './setup';

export function watchUserChanges(callback) {
    const unsub = auth.onAuthStateChanged((user) => {
        if (user && !user.isAnonymous) {
            const {
                uid,
                email,
                displayName,
                photoURL,
            } = user;

            callback({
                id: uid,
                email,
                displayName,
                photoURL,
            });
        } else {
            callback(null);
        }
    });

    return unsub;
}

