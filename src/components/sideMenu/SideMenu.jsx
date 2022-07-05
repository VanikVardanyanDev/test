import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import styled from "styled-components";

const MyLink = styled(Link)`
  color: #e6dddd !important;
  height: 50px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
`;

export const SideMenu = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
        width: "54px",
        backgroundColor: "#82B284",
        boxSizing: "border-box",
        position: "fixed",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {[
          <MyLink to="/">
            <img src="/Home.png" alt="" />
          </MyLink>,
          <MyLink to="/">
            <img src="/Market.png" alt="" />
          </MyLink>,
          <MyLink to="/">
            <img src="/Search.png" alt="" />
          </MyLink>,
        ].map((text, index) => (
          <ListItemButton key={index}>{text}</ListItemButton>
        ))}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {[
          <MyLink to="/">
            <img src="/Settings.png" alt="" />
          </MyLink>,
          <MyLink to="/">
            <img src="/Chat.png" alt="" />
          </MyLink>,
          <MyLink to="/">
            <img src="/Exit.png" alt="" />
          </MyLink>,
        ].map((text, index) => (
          <ListItemButton key={index}>{text}</ListItemButton>
        ))}
      </Box>
    </Box>
  );
};
