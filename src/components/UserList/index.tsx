import React, { useMemo, useState } from "react";
import styled from "styled-components";

import UsersTable from "./UsersTable";
import Input from "../Input";

import { User } from "../../types/types";

const UserListWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  box-shadow: 0 0 10px 0 #e9ebed;
  border-radius: 5px;
  background-color: white;
  height: 100%;
  width: 100%;
  min-height: 300px;
`;

const SearchFiledWrapper = styled.div`
  padding: 10px 20px;
`;

const UserList = ({ loading, users }: UserListProps) => {
  const [term, setTerm] = useState("");

  const isMatchingFilter = (user: User, t: string) =>
    user.name.toLowerCase().includes(t.toLowerCase()) ||
    user.age.toString() === t;

  const filteredUsers = useMemo(
    () => users.filter((user) => isMatchingFilter(user, term)),
    [users, term]
  );

  return (
    <UserListWrapper>
      <SearchFiledWrapper>
        <Input icon="search" onChange={setTerm} placeholder="Search Users" />
      </SearchFiledWrapper>
      <UsersTable users={filteredUsers} loading={loading} />
    </UserListWrapper>
  );
};

type UserListProps = {
  loading: boolean;
  users: User[];
};

export default UserList;
