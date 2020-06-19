import React, { useCallback, useState } from "react";
import styled from "styled-components";

import Input from "../Input";
import Button from "../Button";

const RetrieveFormWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  box-shadow: 0 0 10px 0 #e9ebed;
  border-radius: 5px;
  background-color: white;
  height: 100%;
  width: 350px;
  padding: 20px;
  margin-right: 30px;
  min-height: 300px;
`;

const RetrieveFrom = ({ onSubmit }: RetrieveFormProps) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  const handleSubmit = useCallback(() => {
    onSubmit(min, max);
  }, [onSubmit, min, max]);

  return (
    <RetrieveFormWrapper>
      <Input prefix="MIN" type="number" onChange={setMin} />
      <Input prefix="MAX" type="number" onChange={setMax} />
      <Button onClick={handleSubmit} text="Retrieve Users" />
    </RetrieveFormWrapper>
  );
};

type RetrieveFormProps = {
  onSubmit: Function;
};

export default RetrieveFrom;
