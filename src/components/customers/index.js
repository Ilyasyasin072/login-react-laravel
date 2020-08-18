import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Table, Card, CardGroup} from 'react-bootstrap';
const Customers = () => {
    const [customer, setCustomer] = useState([]);
    useEffect(() => {
        const url = 'http://192.168.0.94:8001/api/v1/customerjson';
        axios.get(url).then(result => {
         setCustomer(result.data);
        })
    }, []);
    return (
        <div>
        <Card>
            <CardGroup>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Customer Name</th>
                        <th>duty free</th>
                        <th>payment deposit</th>
                        <th>credit duration</th>
                        <th>attention</th>
                    </tr>
                </thead>
                <tbody>
                    {customer.map((row =>{
            return (<tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.customer_name}</td>
                        <td>{row.duty_free}</td>
                        <td>{row.payment_deposit}</td>
                        <td>{row.credit_duration}</td>
                        <td>{row.attention}</td>
                    </tr>)
        }))}
        
        </tbody>
            </Table>
            </CardGroup>
        </Card>
        </div>
    )
}

export default Customers;