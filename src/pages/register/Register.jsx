import React from "react";
import { Box, Typography, TextField, Paper, Button } from "@mui/material";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerSchema } from "../validations/registerSchems";
import axiosInstance from "../../api/axiosInstance.js";

export default function Register() {
  const [serverError, setServerError] = React.useState([]);


  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const RegisterForm = async (data) => {
    try {
      const response = await axiosInstance.post(
        `${import.meta.env.VITE_BURL}/auth/Account/Register`,
        data,
      );
    } catch (error) {
      console.log(error.response.data.errors);
      setServerError(error.response.data.errors);
    }
  };

  return (
    <Box component="section" className="registerSection">
      <Typography component="h1" variant="h2">
        Register
      </Typography>

    {console.log(serverError)}
    {serverError.length > 0 ? serverError.map((error) => (
        <Typography color="error">
          {error}
        </Typography>
      )) : null}

      <Box
        onSubmit={handleSubmit(RegisterForm)}
        component="form"
        className="registerForm"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 2,
        }}
      >
        <Paper sx={{ p: 1, bgcolor: "#ffffff" }}>
          <TextField
            {...register("fullName")}
            id="fullName"
            label="Full Name"
            variant="outlined"
            fullWidth
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
          />
        </Paper>

        <Paper sx={{ p: 1, bgcolor: "#ffffff" }}>
          <TextField
            {...register("username")}
            id="username"
            label="Username"
            variant="outlined"
            fullWidth
            error={!!errors.username}
            helperText={errors.username?.message}
          />
        </Paper>

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
          <TextField
            {...register("phoneNumber")}
            id="phoneNumber"
            label="Phone Number"
            variant="outlined"
            fullWidth
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
          />
        </Paper>
        <Paper sx={{ p: 1, bgcolor: "#ffffff" }}>
          <Button variant="outlined" fullWidth type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}
