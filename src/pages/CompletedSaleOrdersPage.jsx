// src/pages/CompletedSaleOrdersPage.js
import React from 'react';
import SaleOrders from '../components/SaleOrders';

function CompletedSaleOrdersPage() {
  return <SaleOrders status="completed" />;
}

export default CompletedSaleOrdersPage;
