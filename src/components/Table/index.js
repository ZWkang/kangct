import React from 'react';
import styled, { css } from 'styled-components';
const TableWrapper = styled.table`
  max-width: 100%;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-align: left;
`;
const ThAndTd = css`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  text-align: left;
  white-space: nowrap;
  padding: 1rem;
`;
const TableTh = styled.th`
  ${ThAndTd}
  text-transform: uppercase;
`;
const TableTd = styled.td`
  ${ThAndTd}
`;
const TableTr = styled.tr`
  :hover {
    background: #ccc;
  }
  cursor: pointer;
`;

class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    return (
      <TableWrapper>
        <thead>
          <tr>
            <TableTh>name</TableTh>
            <TableTh>age</TableTh>
            <TableTh>hobby</TableTh>
            <TableTh>city</TableTh>
            <TableTh>sex</TableTh>
          </tr>
        </thead>
        <tbody>
          {data.map(([name, age, hobby, city, sex], index) => {
            return (
              <TableTr key={index + name}>
                <TableTd>{name}</TableTd>
                <TableTd>{age}</TableTd>
                <TableTd>{hobby}</TableTd>
                <TableTd>{city}</TableTd>
                <TableTd>{sex}</TableTd>
              </TableTr>
            );
          })}
        </tbody>
      </TableWrapper>
    );
  }
}

export default Table;
