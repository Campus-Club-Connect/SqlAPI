// import React from "react";
import React, { useState } from "react";
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
const ConfirmationOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ConfirmationContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

const ConfirmationText = styled.p`
  margin-bottom: 10px;
`;

const ConfirmationButton = styled.button`
  padding: 8px 12px;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  cursor: pointer;
  margin-right: 10px;
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

const Grid = ({ users, setUsers }) => {
  //   const handleEdit = (item) => {
  const [confirmDelete, setConfirmDelete] = useState(null);
  //     setOnEdit(item);
  //   };
  const handleConfirmDelete = (id) => {
    setConfirmDelete(id);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/api/admin/${id}`);
      const newArray = users.filter((user) => user.id !== id);
      setUsers(newArray);
      toast.success("Item deleted successfully");
    } catch (error) {
      console.log("Item not deleted");
      toast.error("Error deleting item");
    }
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Username</Th>
          <Th>Email</Th>
          <Th>Club</Th>
          <Th>Role</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => {
          if (item.role === "admin") {
            return (
              <Tr key={i}>
                <Td width="7%">{item.id}</Td>
                <Td width="26%">{item.username}</Td>
                <Td width="34%">{item.email}</Td>
                <Td width="17%">{item.role}</Td>
                <Td width="17%">{item.club}</Td>
                <Td alignCenter width="5%">
                  {confirmDelete === item.id ? (
                    <ConfirmationOverlay>
                      <ConfirmationContainer>
                        <ConfirmationText>Are you sure?</ConfirmationText>
                        <div>
                          <ConfirmationButton
                            onClick={() => handleDelete(item.id)}
                          >
                            Confirm
                          </ConfirmationButton>
                          <ConfirmationButton onClick={handleCancelDelete}>
                            Cancel
                          </ConfirmationButton>
                        </div>
                      </ConfirmationContainer>
                    </ConfirmationOverlay>
                  ) : (
                    <TrashIcon
                      onClick={() => handleConfirmDelete(item.id)}
                      ishovered={confirmDelete === item.id ? "true" : "false"}
                    />
                  )}
                </Td>
              </Tr>
            );
          }
          return null; // Skip rendering the row if the role is not "admin"
        })}
      </Tbody>
    </Table>
  );
};

export default Grid;
