import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Info from "../../cards/info/Info";
import Contacts from "../../cards/contacts/Contacts";
import Divider from "@mui/material/Divider";
import Image from "../../cards/image/Image";
import Button from "@mui/material/Button";
import request from "../../config/request";

const Main = ({ setDelContact, companyData, setCompanyData, isEdit1, setIsEdit1, visible }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [header, setHeader] = useState("Перспективные захоронения");

  useEffect(() => {
    request("/auth", "GET", {
      user: "USERNAME",
    });
  }, []);

  const editHandle = () => {
    setIsEdit(!isEdit);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setIsEdit(false);
  };

  return (
    <Box sx={{ pt: "24px", pl: "40px" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 400,
            mr: "13px",
            display: isEdit ? "none" : "block",
          }}
        >
          {header}
        </Typography>
        <Typography>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="text"
              value={header}
              onChange={(e) => setHeader(e.target.value)}
              style={{ display: isEdit ? "block" : "none" }}
            />
          </form>
        </Typography>
        <Button sx={{ cursor: "pointer", minWidth: 0 }} onClick={editHandle}>
          <img src="/Edit.png" alt="" />
        </Button>
      </Box>
      <Info
        setDelContact={setDelContact}
        companyData={companyData}
        setCompanyData={setCompanyData}
        isEdit={isEdit1}
        setIsEdit={setIsEdit1}
        visible={visible}
      />
      <Divider />
      <Contacts />
      <Divider />
      <Image />
      <Divider />
    </Box>
  );
};

export default Main;
