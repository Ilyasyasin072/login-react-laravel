import React, {useState, useEffect} from 'react';
import DatatableCustomer from './datatable';
 
const Customers = () => {
    return (
        <div>
            <DatatableCustomer/>
        {/* <Card>
            <CreateCustomer/>
        <DataTable
            title="Customer"
            columns={columns}
            data={customer}
            selectableRows/>
        </Card> */}
        {/* <Card>
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
                    {customer.map((row =>{ return (<tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.customer_name}</td>
                        <td>{row.duty_free}</td>
                        <td>{row.payment_deposit}</td>
                        <td>{row.credit_duration}</td>
                        <td>{row.attention}</td>
                        <td>
                            <Button className="btn btn-sm btn-primary">update</Button>
                            <Button className="btn btn-sm btn-danger">Delete</Button>
                        </td>
                    </tr>)
        }))}
        
        </tbody>
            </Table>
            </CardGroup>
        </Card> */}
        </div>
    )
}

export default Customers;