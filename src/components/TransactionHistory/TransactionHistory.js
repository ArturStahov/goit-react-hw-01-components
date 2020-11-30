import React from 'react';
import PropTypes from 'prop-types';
import { TableSection, Table, Th, Td, Tr } from './StyledComponents'


export default function TransactionHistory({ items }) {
  return (
    <TableSection>
      <Table>
        <thead>
          <tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <Tr key={item.id}>
              <Td>{item.type}</Td>
              <Td>{item.amount}</Td>
              <Td>{item.currency}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableSection>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
