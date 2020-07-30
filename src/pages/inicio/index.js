import React, { Component } from 'react'
import Navigation from '../../components/navigation'
import carrusel from '../../components/carrusel.jpg'
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


import Carousel from 'react-bootstrap/Carousel'








export default class Inicio extends Component {
    render() {
        return (
            <div>
              <Navigation />
<Container fluid>






<Row> 
    

<Carousel>
<img
      className="d-block w-100"
      src={carrusel}
      alt="First slide"
    />
 
   
  <Carousel.Caption>
      <h1>Second slide label</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>

  
</Carousel>
</Row>

<Row>
<Col  xs={12} sm={4} md={4} lg={4} xl={4}> </Col>
        </Row>
        
        

        <Row>

<Col  xs={12} sm={4} md={4} lg={4} xl={4}> </Col>
<Col  xs={12} sm={4} md={4} lg={4} xl={4}> 

<h1>Why Artisan &amp; Origin Cacao</h1>

For everyone who believes that great Cacao and Chocolate shouldn&#39;t just
taste good, it should do good too. We work with and source all of our beans
directly from small scale sustainable farmers and make sure that a big part

of the profits are reinvested in their communities.

<h1>Artisan &amp; Origin Cacao</h1>

We are the ultimate spot for Cacao &amp; Chocolate lovers and connoisseurs
who want to learn about their Cacao origin and support the farmers that
grew it. We take Cacao production, fermenting, drying, roasting, grinding
and tempering seriously and we’re glad to pass that knowledge to anyone.

<h1>From Cacao Bean to Chocolate</h1>

With our multi-disciplinary team experience, we support you in cacao

farming, bean-to-bar and artisan chocolate making

<h1>Cacao Farm &amp; Beans

Resource intense and sustainable production.</h1>

Our training and coaching in growing, harvesting, fermenting and drying will

improve the quality and quantity of your cacao.

We work closely with farmers and cooperatives to increase sustainability
and productivity and with artisan chocolate makers, chocolatiers to identify
Cocoa  bean improvement opportunities to ensure the right initiatives are
implemented to obtain a superior quality Cacao bean and final product

<h1>Chocolate

Success for Bar &amp; Chocolate Making</h1>

We can improve your innovation capabilities and optimize your cacao
roasting, chocolate process and get the best derivatives (Cocoa Butter,
Liquor and Powder) for the best outcome. Market and taste knowledge and
network will take your product through the right protocols and channels.

<h1>Quality
Quality is our target.</h1>

We focus on quality management and sensory training. Meticulous care
from raw material to chocolate is our core competence. Our goal is to

increase the satisfaction of your customers.

<h1>Private Label
Unique Chocolate Bars</h1>

We can fulfill almost every wish need and wish for  Custom-label Chocolate
Bars professionally, flexibly and promptly. We can guarantee you trouble-
free, speedy processes ranging from planning your Origin, Percentage and
Flavor Profile, Packaging/Wrapping designs to Final Product.
<br />
<br />

</Col>
<Col  xs={12} sm={4} md={4} lg={4} xl={4}> </Col>
</Row>

<Row>

<Col  xs={12} sm={4} md={4} lg={4} xl={4}> </Col>

<Col  xs={12} sm={4} md={4} lg={4} xl={4}> 
<React.Fragment>
                               
                              
                                      
                                        
                               
                               <Form onSummit={this.handleSubmit}>
                                             <Form.Group>                                                                                           
                                             
                                             
                                             <Form.Group>
                                             <Form.Label>Company</Form.Label>
                                             <Form.Control  
                                             
                                             type="text" 
                                             name="nombre_usuario" 
                                             
                                             
                                            
                                             >                                                  
                                             </Form.Control>
                                             <Form.Text className="text-muted">
                                            
                                             </Form.Text>
                                             </Form.Group>

                                             <Form.Group>
                                             <Form.Label>Country</Form.Label>
                                             <Form.Control 
                                             
                                             type="text" 
                                             name="nombre"
                                             
                                             
                                             >
                                            </Form.Control>
                                             <Form.Text className="text-muted">
                                             
                                             </Form.Text>
                                             </Form.Group>


                                                 
                                             <Form.Group>
                                             <Form.Label>City</Form.Label>
                                             <Form.Control  
                                             
                                             type="text" 
                                             name="apellido"                                           
                                             
                                             >                                                 
                                             </Form.Control>
                                             <Form.Text className="text-muted">
                                             
                                             </Form.Text>
                                             </Form.Group>

                                             <Form.Group>
                                             <Form.Label>Phone</Form.Label>
                                             <Form.Control
                                              
                                             type="email" 
                                             name="email"                                               
                                             
                                            
                                             > 
                                                                                     
                                             </Form.Control>
                                             <Form.Text className="text-muted">
                                             
                                             </Form.Text>
                                             </Form.Group>

                                             <Button variant="outline-success" type="submit">
                                             Go
                                             </Button>
                                             


                                           
                                           

                                              
                                                
                                                

                                          
                                            
                                             

                                  
                                               
                                         </Form.Group>
                                       
                                     </Form>
                             
                               </React.Fragment>

</Col>
<Col  xs={12} sm={4} md={4} lg={4} xl={4}> </Col>


</Row>

<Row>
<Col  xs={12} sm={12} md={12} lg={12} xl={12}> </Col>
</Row>

<Row>

<Col  xs={12} sm={12} md={12} lg={12} xl={12}> </Col>


</Row>




<Row>    

<Col  xs={12} sm={4} md={4} lg={4} xl={4}> 

    
    
    
    </Col> 
     <Col  xs={12} sm={4} md={4} lg={4} xl={4}>
  </Col> 
    
    
    <Col  xs={12} sm={4} md={4} lg={4} xl={4}>  </Col> 
     
</Row>



<Row>     
<Col  xs={12} sm={4} md={4} lg={4} xl={4}> 
 </Col> 
     <Col  xs={12} sm={4} md={4} lg={4} xl={4}>
  
    </Col> 
    
    
    <Col  xs={12} sm={4} md={4} lg={4} xl={4}>
     </Col> 
     
</Row>





<Row>     
<Col  xs={12} sm={4} md={4} lg={4} xl={4}> </Col> 
    
<Col  xs={12} sm={4} md={4} lg={4} xl={4}>2020 Artisan & Orgin Cacao. Todos los derechos reservados </Col> 
<Col  xs={12} sm={4} md={4} lg={4} xl={4}> </Col> 
</Row>

     
     




 






     </Container> 
     </div>
     
)
}
}
