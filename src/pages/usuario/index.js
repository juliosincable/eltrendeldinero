import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import TextField from '../../components/textField';
import Button from '../../components/button';
import FormControl from '../../components/formControl';
import styles from './style.module.scss';
import { UsuariosContext } from '../../context/usuarios';

const formSchema = yup.object().shape({
   
    nombre_usuario: yup.string().required(),
    apellido: yup.string().required(),
    nombre: yup.string().required(),
    email: yup.string().required(),
});

class Page extends React.Component {
    state = {
        usuario: this.props.usuario,
        showReload: false,
    }

    componentWillReceiveProps(newProps) {
        const {
          usuario: oldUsuario,
        } = this.state;
        const {
          usuario: newUsuario
        } = newProps;
    
        if (
            newUsuario && oldUsuario && (
                
                newUsuario.nombre_usuario !== oldUsuario.nombre_usuario ||
                newUsuario.apellido !== oldUsuario.apellido ||
                newUsuario.nombre !== oldUsuario.nombre ||
                newUsuario.email !== oldUsuario.email
                )
        ) {
            this.setState({
              usuario: newUsuario,
              showReload: true, 
            });
        }
    }
    
    onSubmit = async (values, { setSubmitting }) => {
        const {
          usuario,
        } = this.state;
      
        if (usuario) {
            await this.context.updateUsuario(usuario.id, values);
        } else {
            await this.context.createUsuario(values);
        }
      
        setSubmitting(false);
        this.props.onClose();
      }
      
      onDelete = async () => {
        const { usuario } = this.state;
      
        await this.context.deleteUsuario(usuario.id);
        this.props.onClose();
      }
      
      onCancel = () => {
        this.props.onClose();
      }
      

    render() {
        const {
            usuario,
            showReload,
        } = this.state;
        const resource = usuario || {};

        const node = (
            <div className={styles.modalContainer}>
                <div className={styles.modalBox}>
                    <h1>Control</h1>

                    <Formik
                        initialValues={{
                          
                            nombre_usuario: resource.nombre_usuario || '',
                            apellido: resource.apellido || '',
                            nombre: resource.nombre || '',
                            email: resource.email || '', 
                        }}
                        validationSchema={formSchema}
                        onSubmit={this.onSubmit}
                        render={props => {
                            const {
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                handleReset,
                                values,
                                isValid,
                                isSubmitting,
                            } = props;
                            return (
                                <React.Fragment>
                                    

                                    <FormControl type="row">
                                        <TextField
                                            value={values.nombre_usuario}
                                            onChange={handleChange('nombre_usuario')}
                                            onBlur={handleBlur('nombre_usuario')}
                                            placeholder="nombre_usuario"
                                        />
                                     <ErrorMessage name="nombre_usuario" />
                                    </FormControl>

                                    <FormControl type="row">
                                        <TextField
                                            value={values.apellido}
                                            onChange={handleChange('apellido')}
                                            onBlur={handleBlur('apellido')}
                                            placeholder="apellido"
                                        />
                                     <ErrorMessage name="apellido" />
                                    </FormControl>
                                    
                                       
                                    <FormControl type="row">
                                        <TextField
                                            value={values.nombre}
                                            onChange={handleChange('nombre')}
                                            onBlur={handleBlur('nombre')}
                                            placeholder="nombre"
                                        />                              
                                        <ErrorMessage name="nombre" />
                                    </FormControl>

                                    <FormControl type="row">
                                        <TextField
                                            value={values.email}
                                            onChange={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            placeholder="email"
                                        />
                              
                                        <ErrorMessage name="email" />
                                    </FormControl>

                                    <FormControl type="block">
                                        <Button
                                            label={usuario ? 'Update' : 'Create'}
                                            disabled={isSubmitting || !isValid}
                                            onClick={handleSubmit}
                                        />

                                        <Button
                                            label="Cancel"
                                            type="outline"
                                            onClick={this.onCancel}
                                        />

                                        {usuario &&
                                            <Button
                                                label="Delete"
                                                type="warning"
                                                onClick={this.onDelete}
                                            />
                                        }
                                    </FormControl>

                                    {showReload && !isSubmitting &&
                                        <FormControl type="row">
                                            <div>
                                                This resource has been updated.
                                                <Button
                                                    label="Click here"
                                                    type="inline"
                                                    onClick={() => {
                                                        handleReset();
                                                        this.setState({ showReload: false });
                                                    }}
                                                />
                                                to refresh.
                                            </div>
                                        </FormControl>
                                    }
                                </React.Fragment>
                            );
                        }}
                    />
                </div>
            </div>
        );

        return ReactDOM.createPortal(node, document.getElementById('modal-root'));
    }
}

Page.contextType =  UsuariosContext;

export default Page;