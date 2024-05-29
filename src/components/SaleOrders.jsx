// src/components/SaleOrders.js
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Box, Button, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import SaleOrderModal from './SaleOrderModal';

function fetchSaleOrders(status) {
  // Mimic API call
  return Promise.resolve([{ id: 1, customer: 'John Doe', status }]);
}

function SaleOrders({ status }) {
  const { data: saleOrders } = useQuery(['saleOrders', status], () => fetchSaleOrders(status));
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Box>
      <Button onClick={() => setModalOpen(true)}>+ Sale Order</Button>
      <Table>
        <Thead>
          <Tr>
            <Th>Customer</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {saleOrders.map((order) => (
            <Tr key={order.id}>
              <Td>{order.customer}</Td>
              <Td>{order.status}</Td>
              <Td>
                <Button onClick={() => setModalOpen(true)}>Edit</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {isModalOpen && <SaleOrderModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />}
    </Box>
  );
}

export default SaleOrders;
