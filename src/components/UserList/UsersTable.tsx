import React from "react";
import styled from "styled-components";

import LoadingIndicator from "../../components/LoadingIndicator";

import { User } from "../../types/types";

const TableWrapper = styled.div`
  display: flex;
`;

const StyledTable = styled.table`
  border-spacing: 0;
  width: 100%;
  font-size: 20px;
  border-top: 1px solid #ebebeb;

  tr {
    height: 65px;
  }

  th:first-child, td:first-child {
    width: 40px;
    padding-left: 20px;
  }

  th {
    padding: 0;
    text-align: left;
    color: #0b223c;

    i {
      margin-left: 5px;
      color: grey;
      cursor: not-allowed;
    }
  }

  tr:not(:last-child) td {
    border-bottom: 1px solid #ebebeb;
  }

  td {
    color: #0b223c;
    text-align: left;

    input {
      margin: 0;
      width: 15px;
      height: 15px;
    }
  }
}`;

const Table = ({ loading, users }: TableProps) => {
  let tableBody = null;

  if (loading) {
    tableBody = (
      <tr>
        <td colSpan={3}>
          <LoadingIndicator />
        </td>
      </tr>
    );
  } else {
    if (users.length === 0) {
      tableBody = (
        <tr>
          <td colSpan={3} style={{ textAlign: "center" }}>
            No users to display
          </td>
        </tr>
      );
    } else {
      tableBody = (
        <>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </>
      );
    }
  }

  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            <th />
            <th style={{ width: "300px" }}>
              Name<i className="fa fa-sort"></i>
            </th>
            <th style={{ width: "300px" }}>
              Age<i className="fa fa-sort"></i>
            </th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </StyledTable>
    </TableWrapper>
  );
};

type TableProps = {
  loading: boolean;
  users: User[];
};

export default Table;
