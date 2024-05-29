// src/components/SaleOrderModal.js
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input, Select } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function SaleOrderModal({ isOpen, onClose }) {
  const { handleSubmit, control } = useForm();
  const queryClient = useQueryClient();
  const mutation = useMutation(newOrder => {
    // Mimic API call
    return Promise.resolve(newOrder);
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('saleOrders');
    }
  });

  const onSubmit = data => {
    mutation.mutate(data);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create/Edit Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="customer"
              control={control}
              render={({ field }) => <Input placeholder="Customer" {...field} />}
            />
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Select placeholder="Select status" {...field}>
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                </Select>
              )}
            />
            <Button mt={4} type="submit">Submit</Button>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default SaleOrderModal;
