import React from "react";
import { Box, Typography, TextField, Paper, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Register() {
  const { register, handleSubmit } = useForm();

  const RegisterForm = async(data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register`, data);
    } catch (error) {
        console.error("Error registering user:", error);
    }
  };

  return (
    <Box component="section" className="registerSection">
      <Typography component="h1" variant="h2">
        Register
      </Typography>

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
          />
        </Paper>

        <Paper sx={{ p: 1, bgcolor: "#ffffff" }}>
          <TextField
            {...register("username")}
            id="username"
            label="Username"
            variant="outlined"
            fullWidth
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
          />
        </Paper>

        <Paper sx={{ p: 1, bgcolor: "#ffffff" }}>
          <TextField
            {...register("phoneNumber")}
            id="phoneNumber"
            label="Phone Number"
            variant="outlined"
            fullWidth
          />
        </Paper>
        <Paper sx={{ p: 1, bgcolor: "#ffffff" }}>
          <Button variant="outlined" fullWidth type="submit">
            Outlined
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}
