import styled from 'styled-components';

const TableSection = styled.section`
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 10px 5px 5px grey;
`;

const Table = styled.table`
  text-decoration: none;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
`;

const Th = styled.th`
  font-weight: normal;
  font-size: 0.875rem;
  color: #ffffff;
  background-color: #354251;
  white-space: pre-wrap;
  padding: 10px 5px;
  line-height: 13px;
  vertical-align: middle;
  border: 1px solid #354251;
`;

const Td = styled.td`
  white-space: pre - wrap;
  padding: 10px 5px;
  line-height: 13px;
  vertical-align: middle;
  border: 1px solid #354251;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: blanchedalmond;
  }
  &:hover{
      background-color: grey;
  }
`;

export { TableSection, Table, Th, Td, Tr }