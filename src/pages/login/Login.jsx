import React from "react";
import { Box, Typography, TextField, Paper, Button } from "@mui/material";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginSchema } from "../validations/loginSchems";

export default function Login() {
  const [serverError, setServerError] = React.useState([]);


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const LoginForm = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BURL}/auth/Account/Login`,
        data,
      );
      console.log(response.data.accessToken);
      localStorage.setItem("accessToken", response.data.accessToken);
    } catch (error) {

      setServerError(error.response?.data?.errors ?? []);
    }
  };

  return (
    <Box component="section" className="loginSection">
      <Typography component="h1" variant="h2">
        Login
      </Typography>

      {serverError.length > 0 ? serverError.map((error) => (
        <Typography color="error">
          {error}
        </Typography>
      )) : null}

      <Box
        onSubmit={handleSubmit(LoginForm)}
        component="form"
        className="loginForm"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 2,
        }}
      >

        <Paper sx={{ p: 1, bgcolor: "#ffffff" }}>
          <TextField
            {...register("email")}
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Paper>

        <Paper sx={{ p: 1, bgcolor: "#ffffff" }}>
          <TextField
            {...register("password")}
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Paper>

        <Paper sx={{ p: 1, bgcolor: "#ffffff" }}>
          <Button variant="outlined" fullWidth type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Logining..." : "Login"}
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}
