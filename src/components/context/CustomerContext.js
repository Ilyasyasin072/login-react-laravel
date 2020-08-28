import React from 'react';
const ContextCustomer = React.createContext(true);

export const CustomerProvide = ContextCustomer.Provider
export const CustomerConsume = ContextCustomer.Consumer

export default ContextCustomer;
