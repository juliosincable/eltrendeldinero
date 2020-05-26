import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from '../../components/navigation'

import { UsuariosContext } from '../../context/usuarios';

import Layout from '../../components/layout';

import Col from 'react-bootstrap/Col'

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container' 

import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
  TelegramIcon,
  TwitterIcon,
  LinkedinIcon,
  
} from "react-share";

class Page extends React.Component {
    



   render() {
      return (
    <div>
       <Navigation />
      <Layout>

     

      <Container fluid>
     
      <Row>
      <Col xs={12} sm={5} md={5} lg={5} xl={5}></Col>
      <Col xs={12} sm={2} md={2} lg={2} xl={2}>
        <h1>Invitar</h1>
      </Col>
      <Col xs={12} sm={5} md={5} lg={5} xl={5}></Col>

      </Row>
     <Row>

     <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
     <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
     <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col> 
     <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
     <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col> 
<div>
     <EmailShareButton url="www.apptrendeldinero.web.app">

<EmailIcon /> 

</EmailShareButton>
</div>
<FacebookShareButton url="www.apptrendeldinero.web.app">

<FacebookIcon /> 

</FacebookShareButton>
<div>

</div>
<div>
<WhatsappShareButton url="www.apptrendeldinero.web.app">

<WhatsappIcon /> 

</WhatsappShareButton>
</div>
<div>
<TelegramShareButton url="www.apptrendeldinero.web.app">

<TelegramIcon /> 

</TelegramShareButton>
</div>


<div>
     <TwitterShareButton url="www.apptrendeldinero.web.app">

<TwitterIcon /> 

</TwitterShareButton>



<div>
     <LinkedinShareButton url="www.apptrendeldinero.web.app">

<LinkedinIcon /> 

</LinkedinShareButton>
</div>
</div>
     <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
    
   

   <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>

   

<Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
     <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col> 
     <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
     <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
     <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col> 
     
    
     </Row>
     
</Container>
</Layout>
      </div>
    )
   }
}


Page.contextType =  UsuariosContext;

export default Page;