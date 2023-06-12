import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  width: 120vh;
  background-color: #fff;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

function UpdateForm() {
  const [username, setUsername] = useState("");
  const [cca, setNewcca] = useState("");

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };

  const handleRoleChange = (e) => {
    setNewcca(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/api/admin/cca/${username}`, {
        cca: cca,
      });
      toast.success("CCA Added");
    } catch (error) {
      toast.warn("No User Found");
    }

    window.location.reload();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputArea>
        <Label>Username</Label>
        <Input
          name="username"
          type="text"
          value={username}
          onChange={handleUserChange}
        />
      </InputArea>
      <InputArea>
        <Label>CCA</Label>
        <Input
          name="cca"
          type="integer"
          value={cca}
          onChange={handleRoleChange}
        />
      </InputArea>
      <Button type="submit">Add</Button>
    </FormContainer>
  );
}

export default UpdateForm;
