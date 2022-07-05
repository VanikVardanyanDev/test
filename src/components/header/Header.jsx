import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 280,
  height: 178,
  bgcolor: "#FFFFFF",
  boxShadow: "0px 5px 40px rgba(0, 0, 0, 0.15)",
  p: "24px",
};

const Header = ({ delContact, handleDelete, open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <Box>
      <Grid
        container
        sx={{
          display: "flex",
          color: "#82B284",
          fontSize: "16px",
          fontWeight: 600,
          p: "20px 26px 20px 40px",
          justifyContent: "space-between",
        }}
      >
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <Link to="/">
            <ArrowBackOutlinedIcon sx={{ color: "#82B284", mr: "16px", cursor: "pointer" }} />
          </Link>
          <Typography>К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ</Typography>
        </Grid>

        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Button sx={{ cursor: "pointer", minWidth: 0 }} onClick={null}>
            <img src="/Linked.png" alt="" />
          </Button>
          <Button sx={{ ml: "16px", cursor: "pointer", minWidth: 0 }} onClick={refreshPage}>
            <img src="/Rotation.png" alt="" />
          </Button>
          <Button sx={{ ml: "16px", cursor: "pointer", minWidth: 0 }} onClick={handleOpen}>
            <img src="/Delete.png" alt="" />
          </Button>
        </Grid>
      </Grid>
      <Divider />
      <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontSize: "20px", fontWeight: 400, color: "#3B3B3B" }}
          >
            Удалить карточку
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mb: "60px",
              mt: 2,
              fontSize: "14px",
              fontWeight: 400,
              color: "#3B3B3B",
            }}
          >
            Отправить карточку организации в архив?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              onClick={handleClose}
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#B9B9B9",
                pl: 0,
              }}
            >
              ОТМЕНА
            </Button>
            <Button
              onClick={() => handleDelete(delContact)}
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#82B284",
                pr: 0,
              }}
            >
              УДАЛИТЬ
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Header;
