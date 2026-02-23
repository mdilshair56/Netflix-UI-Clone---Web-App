import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./styles/styles.css";
import "./styles/Responsiveness.css";
  

function EmailForm() {
  return (
    <Form className='email-form'>
      <Row>
         <Col className='form-control1'>
           <Form.Control placeholder="Email address" type='email' size='lg' className='email-placeholder' id='email-placeholder' style={{backgroundColor:"rgba(0, 0, 0, 0.5)", color:"#fff", borderRadius:"5px", placeholder:"#fff"}} />
         </Col>
       <Col >
       <>

       <style type="text/css">
{`

.btn-xxl {
color: #fff;
padding: 1rem 1.5rem;
font-size: 1.5rem;
} 
.btn-flat {
background-color: rgb(229,9,20);
color: white;
font-weight: 700;
}
.btn-flat:hover {
background-color:  rgb(193,17,25);
color: white;
transition-timing-function: cubic-bezier(0.5, 0, 0.1, 1);
}

`}
</style>

      <Button variant="flat" size="lg" className='btn-getStarted' >
        Get Started <span class="material-symbols-outlined chevronRight">chevron_right</span>
      </Button>
    </>
       </Col>
       </Row>
    </Form>
  );
}

export default EmailForm;
