import React from "react";
import { Box } from "@mui/system";

const Footer = () => {
  return (
    <Box
      sx={{
        fontSize: "12",
        fontWeight: 400,
        color: "#B9B9B9",
        m: "32px 0 60px 0",
      }}
    >
      <p>© 1992 - 2020 Честный Агент © Все права защищены.</p>
      <p>8 (495) 150-21-12</p>
    </Box>
  );
};

export default Footer;
