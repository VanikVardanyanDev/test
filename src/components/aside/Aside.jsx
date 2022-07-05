import React from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

export const Aside = () => {
  return (
    <Box
      sx={{
        width: "224px",
        backgroundColor: "#F7F7F7",
        boxShadow: "-15px 0px 7px rgba(238, 238,238) inset",
        ml: "54px",
        position: "fixed",
        height: "100vh",
      }}
    >
      <Typography sx={{ m: "20px 42px 0", fontSize: "16px", fontWeight: 700 }}>
        ЧЕСТНЫЙ АГЕНТ
      </Typography>
      <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
        МЕНЕДЖЕР ПРОЦЕССА
      </Typography>
      <Link style={{ textDecoration: "none", cursor: "pointer" }} to="/">
        <Box
          sx={{
            mt: "20px",
            p: "12px 16px",
            backgroundColor: "rgb(238, 238, 238)",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <img src="/building.png" alt="" />
          <Typography
            sx={{
              color: "#82B284",
              fontSize: "14px",
              fontWeight: 600,
              ml: "12px",
            }}
          >
            Организации
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};
