import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import request from "../../config/request";

const Image = () => {
  const [getImage, setGetImage] = useState([]);

  useEffect(() => {
    const image = request("/companies/12", "GET", {});
    image.then((res) => {
      setGetImage(res.data);
    });
  }, []);

  const deleteHandle = (name) => {
    request(`companies/12/image/${name}`, "DELETE", {});
    setGetImage({
      photos: getImage.photos.filter((item) => item.name !== name),
    });
  };

  const uploadHandle = (e) => {
    const formData = new FormData();
    const selectedFile = e.target.files[0];
    formData.append("file", selectedFile);

    const image = request("/companies/12/image", "POST", formData, {
      "Content-Type": "multipart/form-data",
      Accept: "multipart/form-data",
    });
    image.then((res) => {
      setGetImage({ ...getImage, photos: [...getImage.photos, res.data] });
    });
  };

  const Input = styled("input")({
    display: "none",
  });

  return (
    <Box sx={{ m: "32px 0" }}>
      <Box sx={{ display: "flex", mb: "16px" }}>
        <Typography sx={{ fontSize: "16px", fontWeight: 300, mr: "13px" }}>
          ПРИЛОЖЕННЫЕ ФОТО
        </Typography>
      </Box>
      <Box sx={{ display: "flex", textAlign: "start", m: "20px 0" }}>
        {getImage.photos?.map(({ filepath, name }) => (
          <Box key={filepath} sx={{ mr: "24px", position: "relative" }}>
            <Button
              onClick={() => deleteHandle(name)}
              sx={{ position: "absolute", top: 2, right: 1, minWidth: 0 }}
            >
              <img src="del.png" alt="" />
            </Button>
            <img
              src={filepath}
              alt="img"
              style={{
                width: "160px",
                height: "160px",
                backgroundImage: "unset",
              }}
            />
          </Box>
        ))}
      </Box>
      <Box sx={{ textAlign: "start", mb: "32px" }}>
        <label htmlFor="contained-button-file">
          <Input
            id="contained-button-file"
            type="file"
            onChange={uploadHandle}
          />
          <Button
            variant="outlined"
            sx={{ color: "#82B284", borderColor: "#E5E5E5 !important" }}
            component="span"
          >
            <AddOutlinedIcon sx={{ fontSize: "14px" }} />
            <span
              style={{ wonSize: "14px", fontWeight: 600, margin: "0 85px" }}
            >
              ДОБАВИТЬ ИЗОБРАЖЕНИЕ
            </span>
          </Button>
        </label>
      </Box>
    </Box>
  );
};

export default Image;
