import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';
import {Card} from 'react-bootstrap';
import DataTable, { createTheme } from 'react-data-table-component';
import CreateCustomer from './create_customer';
const DatatableCustomers = () => {
    const [customer, setCustomer] = useState([]);
    useEffect(() => {
        const url = 'http://192.168.0.94:8001/api/v1/customerjson';
        axios.get(url).then(result => {
         setCustomer(result.data);
        })
    }, []);


    const columns = [
        {
          name: 'Customer Name',
          selector: 'customer_name',
          sortable: true,
        },
        {
          name: 'Duty Free',
          selector: 'duty_free',
          sortable: true,
          right: false,
        },
        {
          name: 'Payment Deposit',
          selector: 'payment_deposit',
          sortable: true,
          right: false,
        },
        {
          name: 'Creadit Duration',
          selector: 'credit_duration',
          sortable: true,
          right: false,
        },
        {
          name: 'Attention',
          selector: 'attention',
          sortable: true,
          right: false,
          cell: row => <div><div style={{ fontWeight: 'bold' }}>{row.customer_name}</div>{row.attention}</div>,
        },
      ];

     return (<div>
          <CreateCustomer/>
        <Card>
          <DataTable
        title="Customer"
        columns={columns}
        data={customer}
        selectableRows/>
        </Card>
     </div>)
}

export default DatatableCustomers;