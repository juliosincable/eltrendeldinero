import React from 'react';
import {
    watchUserChanges,
    watchUsuarios,
    createUsuarios,
    deleteUsuarios,
    updateUsuarios,
} from '../services/firebase';

export const UsuariosContext = React.createContext({});

export const UsuarioseContextConsumer = UsuariosContext.Consumer;

export class UsuariosContextProvider extends React.Component {
    state = {
        isuarios: [],
    }

    componentDidMount() {
        this.userWatcherUnsub = watchUserChanges((user) => {
            if (user && !this.usuariosWatcherUnsub) {
                this.usuariosWatcherUnsub = watchUsuarios((usuarios) => {
                    this.setState({ usuarios });
                });
            }
        });
    }

    componentWillUnmount() {
        if (this.UsuariosWatcherUnsub) {
            this.UsuariosWatcherUnsub();
        }
    }

    deleteUsuarios = async (id) => {
        try {
            await deleteUsuarios(id);
        } catch (error) {
            console.log(error);
        }
    }

    createUsuarios = async (data) => {
        try {
            await createUsuarios({
                ...data,
                date: Date.now(),
            });
        } catch (error) {
            console.log(error);
        }
    }

    updateUsuarios = async (id, data) => {
        try {
            await updateUsuarios(id, data);
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
                    deleteUsuarios: this.deleteUsuarios,
                    createUsuarios: this.createUsuarios,
                    updateUsuarios: this.updateUsuarios,
                }}
            >
                {children}
            </UsuariosContext.Provider>
        );
    }
}
