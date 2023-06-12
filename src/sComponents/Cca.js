// import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 120vh;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  margin: 20px, auto;

  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;
const TrashIcon = styled(FaTrash)`
  color: ${(props) => (props.isHovered ? "red" : "inherit")};

  &:hover {
    color: red;
  }
`;
export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Cca = ({ users, setUsers }) => {
  //   const handleEdit = (item) => {
  //     setOnEdit(item);
  //   };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/api/admin/cca/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    // setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Username</Th>
          <Th>Email</Th>
          <Th>Role</Th>
          <Th>CCA</Th>
          <Th>Club</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => {
          return (
            <Tr key={i}>
              <Td width="7%">{item.id}</Td>
              <Td width="25%">{item.username}</Td>
              <Td width="28%">{item.email}</Td>
              <Td width="17%">{item.role}</Td>
              <Td width="10%">{item.cca}</Td>
              <Td width="17%">{item.club}</Td>
              <Td alignCenter width="5%">
                <TrashIcon onClick={() => handleDelete(item.id)} />
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default Cca;
