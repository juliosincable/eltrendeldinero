import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';







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

class Invitar extends React.Component {
    



   render() {
      return (
    <div>
       

     

      <Container fluid>
     
      <Row>
      

     
      
     

     
     <Col xs={12} sm={12} md={12} lg={12} xl={12}> 
     <div>
     <LinkedinShareButton url="www.apptrendeldinero.web.app">

<LinkedinIcon /> 

</LinkedinShareButton>

     <EmailShareButton url="www.apptrendeldinero.web.app">

<EmailIcon /> 

</EmailShareButton>

<TwitterShareButton url="www.apptrendeldinero.web.app">

<TwitterIcon /> 

</TwitterShareButton>

<FacebookShareButton url="www.apptrendeldinero.web.app">

<FacebookIcon /> 

</FacebookShareButton>


<WhatsappShareButton url="www.apptrendeldinero.web.app">

<WhatsappIcon /> 

</WhatsappShareButton>


<TelegramShareButton url="www.apptrendeldinero.web.app">

<TelegramIcon /> 

</TelegramShareButton>







</div>

</Col>

     </Row>
     
</Container>

      </div>
    )
   }
}



export default Invitar;