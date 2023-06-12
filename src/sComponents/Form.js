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

const Select = styled.select`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 42px;
`;

function UpdateForm() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/api/admin/${username}`, {
        role: role,
      });
      toast.success("Admin Added");
    } catch (error) {
      toast.warn("No User Found");
    }
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
        <Label>Role</Label>
        <Select name="role" value={role} onChange={handleRoleChange}>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </Select>
      </InputArea>
      <Button type="submit">Add</Button>
    </FormContainer>
  );
}

export default UpdateForm;
