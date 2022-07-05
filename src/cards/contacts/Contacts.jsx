import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import request from "../../config/request";

const Contacts = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [contact, setContact] = useState([]);
  const [fulName, setFulName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    request("/contacts/16", "GET", {}).then((res) => {
      setContact(res.data);
    });
  }, []);

  useEffect(() => {
    let fullName = "";
    let phone = "";

    if (contact.lastname) {
      fullName = contact.lastname + " " + contact.firstname + " " + contact.patronymic;
    }
    setFulName(fullName);

    if (contact.phone) {
      phone = "+" + contact.phone;
    }
    setPhone(phone);

    setEmail(contact.email);
  }, [contact]);

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const reqData = fulName.split(" ");
    request(`/contacts/${contact.id}`, "PATCH", {
      lastname: reqData[0],
      firstname: reqData[1],
      patronymic: reqData[2],
      phone: phone,
      email: email,
    }).then((res) => {
      setContact(res.data);
    });

    setIsEdit(false);
  };

  const editHandle = () => {
    setIsEdit(!isEdit);
  };

  return (
    <Box sx={{ m: "24px 0" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: "16px" }}>
        <Typography sx={{ fontSize: "16px", fontWeight: 300, mr: "13px" }}>КОНТАКТНЫЕ ДАННЫЕ</Typography>
        <Button sx={{ cursor: "pointer", minWidth: 0 }} onClick={editHandle}>
          <img src="/Edit.png" alt="" />
        </Button>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", ml: "-7px" }}>
        <form onSubmit={onSubmit}>
          <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
            <table>
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{
                      border: "hidden",
                      minWidth: 145,
                      p: "8px",
                      fontSize: "14px",
                      fontWeight: 300,
                    }}
                  >
                    ФИО:
                  </TableCell>

                  <TableCell
                    sx={{
                      display: isEdit ? "block" : "none",
                      border: "hidden",
                    }}
                  >
                    <input
                      type="text"
                      name="text"
                      value={fulName}
                      onChange={(e) => {
                        setFulName(e.target.value);
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "hidden",
                      minWidth: 145,
                      p: "8px",
                      fontSize: "14px",
                      fontWeight: 400,
                      display: isEdit ? "none" : "block",
                    }}
                    align="left"
                  >
                    {fulName}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell
                    sx={{
                      border: "hidden",
                      minWidth: 145,
                      p: "8px",
                      fontSize: "14px",
                      fontWeight: 300,
                    }}
                  >
                    Телефон:
                  </TableCell>

                  <TableCell
                    sx={{
                      display: isEdit ? "block" : "none",
                      border: "hidden",
                    }}
                  >
                    <input
                      type="text"
                      name="text"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "hidden",
                      minWidth: 145,
                      p: "8px",
                      fontSize: "14px",
                      fontWeight: 400,
                      display: isEdit ? "none" : "block",
                    }}
                    align="left"
                  >
                    {phone}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell
                    sx={{
                      border: "hidden",
                      minWidth: 145,
                      p: "8px",
                      fontSize: "14px",
                      fontWeight: 300,
                    }}
                  >
                    Эл. почта:
                  </TableCell>

                  <TableCell
                    sx={{
                      display: isEdit ? "block" : "none",
                      border: "hidden",
                    }}
                  >
                    <input
                      type="text"
                      name="text"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "hidden",
                      minWidth: 145,
                      p: "8px",
                      fontSize: "14px",
                      fontWeight: 400,
                      display: isEdit ? "none" : "block",
                    }}
                    align="left"
                  >
                    {email}
                  </TableCell>
                </TableRow>
              </TableBody>
            </table>
          </TableContainer>
          <Button color="success" type="submit" sx={{ display: isEdit ? "block" : "none" }}>
            Обновить
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Contacts;
