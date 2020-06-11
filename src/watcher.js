import { auth } from './firebase';

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


