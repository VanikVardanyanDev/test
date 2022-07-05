import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import { useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";

const Rregistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    axios
      .get("http://135.181.35.61:2112/auth?user=USERNAME")
      .then((result) => result);
  }, []);

  const onSubmit = () => {};

  return (
    <Paper
      sx={{
        width: "400px",
        p: "50px",
        border: "1px solid #dedede",
        margin: "50px auto",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "25px",
          fontWeight: "bold",
          m: "20px",
        }}
        variant="h5"
      >
        Регистрация
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          sx={{ mb: "20px" }}
          label="Full name"
          error={Boolean(errors.fullName?.message)}
          helperText={errors.fullName?.message}
          {...register("fullName", { required: "Укажите ваше полное имя" })}
          fullWidth
        />
        <TextField
          sx={{ mb: "20px" }}
          label="email"
          type="email"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register("email", { required: "Укажите эл. почту" })}
          fullWidth
        />
        <TextField
          sx={{ mb: "20px" }}
          label="password"
          type="password"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register("password", { required: "Укажите пароль" })}
          fullWidth
        />
        <Button
          disabled={!isValid}
          type="submit"
          size="large"
          variant="contained"
          fullWidth
        >
          Регистрация
        </Button>
      </form>
    </Paper>
  );
};

export default Rregistration;
