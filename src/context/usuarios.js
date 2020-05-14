import React from 'react';
import {
    watchUserChanges,
    watchUsuarios,
    createUsuario,
    deleteUsuario,
    updateUsuario,
} from '../services/firebase';

export const UsuariosContext = React.createContext({});

export const UsuariosContextConsumer = UsuariosContext.Consumer;

export class UsuariosContextProvider extends React.Component {
    state = {
        usuarios: [],
    }

    componentDidMount() {
        this.userWatcherUnsub = watchUserChanges((user) => {
            if (user && !this.usuarioWatcherUnsub) {
                this.usuarioWatcherUnsub = watchUsuarios((usuarios) => {
                    this.setState({ usuarios });
                });
            }
        });
    }

    componentWillUnmount() {
        if (this.usuarioWatcherUnsub) {
            this.usuarioWatcherUnsub();
        }
    }

    deleteUsuario = async (id) => {
        try {
            await deleteUsuario(id);
        } catch (error) {
            console.log(error);
        }
    }

    createUsuario = async (data) => {
        try {
            await createUsuario({
                ...data,
                date: Date.now(),
            });
        } catch (error) {
            console.log(error);
        }
    }

    updateUsuario = async (id, data) => {
        try {
            await updateUsuario(id, data);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const {
            children,
        } = this.props;

        return (
            <UsuariosContext.Provider
                value={{
                    ...this.state,
                    deleteUsuario: this.deleteUsuario,
                    createUsuario: this.createUsuario,
                    updateUsuario: this.updateUsuario,
                }}
            >
                {children}
            </UsuariosContext.Provider>
        );
    }
}
