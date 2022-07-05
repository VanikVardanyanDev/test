import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import { useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  process.env.BASE_URI = URL;

  useEffect(() => {
    axios.get("URL/auth?user=USERNAME").then((result) => result);
  }, []);

  const onSubmit = () => {};

  return (
    <Paper
      sx={{
        width: "400px",
        p: "50px",
        border: "1px solid #dedede",
        margin: "60px auto",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "25px",
          fontWeight: "bold",
          m: "20px",
        }}
      >
        Вход в аккаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          Войти
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
