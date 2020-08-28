import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Card, CardGroup, Form, Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const CreateCustomer = (props) => {
        const [show, setShow] = useState(false);
        // const customer_name = useFormInput('');
    const [customer_name, setCustomer] = useState('');
    const [duty_free, setDutyFree] = useState('');
    const [payment_deposit, setPayment] = useState('');
    const [attention, setAttention] = useState('');
    const [credit_duration, setCreadit] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let history = useHistory();

    const frmdetails = {
        customer_name : customer_name,
        duty_free : duty_free,
        credit_duration : credit_duration,
        payment_deposit : payment_deposit,
        attention : attention,
    }
    console.log(frmdetails);
    const handleSubmit = e => {
        e.preventDefault();
        let url = 'http://192.168.0.94:8001/api/v1/customerjson/create';
        axios.post(url,frmdetails).then(result => {
            console.log(result);
            history.push('/customers');
            handleShow(false);
        });
    }
    return (
        <div>
          
            <Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Customer Name</Form.Label>
                        <Form.Control type="text" placeholder="Customer Name" onChange={e => setCustomer(e.target.value) }  name="customer_name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Payment Deposit</Form.Label>
                        <Form.Control type="text" placeholder="Payment Deposit" name="payment_deposit" onChange={a => setPayment(a.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Credit Duration</Form.Label>
                        <Form.Control type="text" placeholder="Credit Duration" name="credit_duration" value="01.01.2020" onChange={b => setCreadit(b.target.value)}/>
                    </Form.Group>   
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Attantion</Form.Label>
                        <Form.Control type="text" placeholder="Attantion" name="attantion" onChange={c => setAttention(c.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Duty Free</Form.Label>
                        <Form.Check type="checkbox" label="Duty Free" name="duty_free" value="1" onChange={e => setDutyFree(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            </Container>
        </div>
    )
}

const useFormInput = (initialize) => {
    const [value, setValue] = useState(initialize);
   
    const handleChange = e => {
        setValue(e.target.value);
        console.log(e.target.value);
        return {
            value, onChange: handleChange
        }
    }
}
export default CreateCustomer;