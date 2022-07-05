import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import moment from "moment";
import request from "../../config/request";

const Info = ({ setDelContact, companyData, setCompanyData, isEdit, setIsEdit, visible }) => {
  const [name, setName] = useState();
  const [contract, setContract] = useState();
  const [form, setForm] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    setName(companyData.name);

    const date = moment(companyData.contract?.issue_date).format("DD.MM.YYYY");
    let dataContract = "";
    if (companyData.contract?.no) {
      dataContract = companyData.contract?.no + " от " + date;
    }
    setContract(dataContract);

    setForm(companyData.businessEntity);

    setType(companyData.type?.join(", "));
  }, [companyData]);

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    request(`/companies/${companyData.id}`, "PATCH", {
      name: name,
      businessEntity: form,
    }).then((res) => {
      setCompanyData(res.data);
    });

    setIsEdit(false);
  };

  setDelContact(companyData.id);

  const editHandle = () => {
    setIsEdit(!isEdit);
  };

  return (
    <Box sx={{ m: "24px 0", display: visible ? "block" : "none" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: "16px" }}>
        <Typography sx={{ fontSize: "16px", fontWeight: 300, mr: "13px" }}>ОБЩАЯ ИНФОРМАЦИЯ</Typography>
        <Button sx={{ cursor: "pointer", minWidth: 0 }} onClick={editHandle}>
          <img src="/Edit.png" alt="" />
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          ml: "-7px",
        }}
      >
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
                    Полное название:
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
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
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
                    {name}
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
                    Договор:
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
                      value={contract}
                      onChange={(e) => {
                        setContract(e.target.value);
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
                    {contract}
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
                    Форма:
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
                      value={form}
                      onChange={(e) => {
                        setForm(e.target.value);
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
                    {form}
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
                    Тип:
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
                      value={type}
                      onChange={(e) => {
                        setType(e.target.value);
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
                    {type}
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

export default Info;
