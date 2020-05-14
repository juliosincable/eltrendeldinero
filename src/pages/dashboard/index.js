import React from 'react';
import moment from 'moment';
import Layout from '../../components/layout';
import Usuario from '../usuario';
import styles from './style.module.scss';
import { UsuariosContext } from '../../context/usuarios';
import Navigation from '../../components/navigation'

class Page extends React.Component {
    state = {
        isOpen: false,
        usuarioId: null,
    }

    render() {
        const {
            isOpen,
            usuarioId,
        } = this.state;
        const {
            usuarios,
        } = this.context;
        const usuario = usuarios.find(n => n.id === usuarioId);

        return (
        <div>
        <Navigation />
         <Layout>
               
                <div className={styles.container}>
               
                    <div
                        className={styles.buttonFloat}
                        onClick={() => this.setState({ usuarioId: null, isOpen: true })}
                    >
                        +
                    </div>

                    <table className={styles.table} cellSpacing="0">
                        <thead>
                            <tr className={styles.tableHeader}>
                                <th>Fecha</th>
                                <th>id</th>
                                <th>Usuario</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                              
                                
                            </tr>
                        </thead>
                        <tbody>
                        {usuarios.map(row => {
                            return (
                                <tr
                                    key={row.id}
                                    className={styles.tableRow}
                                    onClick={() => this.setState({ usuarioId: row.id, isOpen: true })}
                                >
                                    <td>{moment(row.date).format('DD MMM YYYY hh:mm a')}</td>
                                    <td>{row.id}</td>
                                    <td>{row.nombre_usuario}</td>
                                    <td>{row.nombre}</td>
                                    <td>{row.apellido}</td>
                                    <td>{row.email}</td>
                                    
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>

                    {isOpen &&
                        <Usuario
                        usuario={usuario}
                            onClose={() => this.setState({ isOpen: false })}
                        />
                    }
                </div>
            </Layout>
            </div>
        );
    }
}

Page.contextType = UsuariosContext;

export default Page;