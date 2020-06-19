import React, { useState } from "react";
import styled from "styled-components";
import orderBy from "lodash/orderBy";

import PageTitle from "../../components/PageTitle";
import RetrieveForm from "../../components/RetrieveForm";
import UserList from "../../components/UserList";

import { fetchUsers } from "../../utils/fetchUsers";
import { User } from "../../types/types";

const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  box-sizing: border-box;
  padding: 0 10%;
  background-color: #f8f9fd;
`;

const PageContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const MainContainer = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([] as User[]);

  const onRetrieveUsers = async (min: number, max: number) => {
    setLoading(true);
    let userList: User[] = await fetchUsers(min, max);
    userList = orderBy(userList, ["name", "age"], ["asc", "desc"]);
    setLoading(false);
    setUsers(userList);
  };

  return (
    <MainWrapper>
      <PageTitle title="Users" />
      <PageContent>
        <RetrieveForm onSubmit={onRetrieveUsers} />
        <UserList users={users} loading={loading} />
      </PageContent>
    </MainWrapper>
  );
};

export default MainContainer;
