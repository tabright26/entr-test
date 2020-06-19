import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: left;
  margin: 10px 0;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid #d7dbe1;
  border-radius: 15px;
  padding: 20px;
  border-box: box-sizing;

  input {
    border: none;
    outline: none;
    color: #0b223c;
    font-size: 20px;
    width: 100%;
    font-weight: 100;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: #8795a9;
    font-weight: 100;
  }

  span {
    color: #bcc4d0;
    font-size: 15px;
    min-width: 40px;
    font-weight: 100;
  }

  .fa {
    color: #bcc4d0;
    font-size: 20px;
    min-width: 40px;
    font-weight: 100;
  }
`;

const Input = ({
  id,
  input,
  icon,
  prefix,
  onChange,
  placeholder,
  type,
}: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Wrapper>
      <InputWrapper>
        {prefix ? (
          <span>{prefix}</span>
        ) : (
          <i className={`fa fa-${icon} icon`}></i>
        )}
        <input
          {...input}
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </InputWrapper>
    </Wrapper>
  );
};

type InputProps = {
  id?: string;
  input?: object;
  prefix?: string;
  placeholder?: string;
  onChange: Function;
  type?: string;
  icon?: string;
};

export default Input;
