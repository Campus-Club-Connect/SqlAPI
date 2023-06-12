// import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";

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

const TrashIcon = styled(FaTrash)`
  color: ${(props) => (props.isHovered ? "red" : "inherit")};

  &:hover {
    color: red;
  }
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

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Gtech = ({ users, setUsers }) => {
  //   const handleEdit = (item) => {
  //     setOnEdit(item);
  //   };
  const [confirmDelete, setConfirmDelete] = useState(null);

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/api/admin/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    // setOnEdit(null);

    setConfirmDelete(null);
  };
  const handleConfirmDelete = (id) => {
    setConfirmDelete(id);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(null);
  };

  return (
    <>
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
            if (item.club === "G-Tech") {
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
                        ishovered={confirmDelete === item.id}
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
      <ToastContainer />
    </>
  );
};

export default Gtech;
