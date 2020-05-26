import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import TextField from '../../components/textField';
import Button from '../../components/button';
import FormControl from '../../components/formControl';
import { UsuariosContext } from '../../context/usuarios';
import icon from '../../components/icon.svg'
import Navigation from '../../components/navigation'


import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container' 





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
                newUsuario.nombre !== oldUsuario.nombre ||
                newUsuario.apellido !== oldUsuario.apellido ||
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
      
      
      
    

    render() {
        const {
            usuario,
            showReload,
        } = this.state;
        const resource = usuario || {};

        const node = (
            <div>
                <div>
                    

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
                                <div>
                                <Navigation />
                                <Container fluid>
                                <Row>
                                <Col xs={12} sm={4} md={4} lg={4} xl={4}></Col>
                                <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                                <React.Fragment>
                                <img src={icon} width="60px" height="60px" alt="logo" /> 
                                   

                                    <FormControl type="row">
                                        <TextField
                                            value={values.nombre_usuario}
                                            onChange={handleChange('nombre_usuario')}
                                            onBlur={handleBlur('nombre_usuario')}
                                            placeholder="nombre_usuario"
                                        />
                                     <ErrorMessage name="nombre" />
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
                              
                                        <ErrorMessage name="nombre" />
                                    </FormControl>

                                    <FormControl type="block">
                                        <Button
                                            label={usuario ? 'Update' : 'Create'}
                                            disabled={isSubmitting || !isValid}
                                            onClick={handleSubmit}
                                        />

                                       

                                      
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
                                </Col>
                                <Col xs={12} sm={4} md={4} lg={4} xl={4}></Col>
                                </Row>
                                </Container>
                                </div>
                            );
                        }}
                    />
                </div>
            </div>
        );

        return ReactDOM.createPortal(node, document.getElementById('root'));
    }
}

Page.contextType =  UsuariosContext;

export default Page;