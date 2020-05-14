import { db } from './setup';

export async function createUsuario(data) {
    return await db
        .collection('usuarios')
        .doc()
        .set(data);
}

export async function deleteUsuario(id) {
    return await db
        .collection('usuarios')
        .doc(id)
        .delete();
}

export async function updateUsuario(id, data) {
    return await db
        .collection('usuarios')
        .doc(id)
        .update(data);
}
