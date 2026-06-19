import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Typography } from "@mui/material";
import useCategories from "../../hooks/useCategories";

export default function Categories() {
    const { data: categories, isLoading, error } = useCategories();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      {categories.map((category) => (
        <Box key={category.id}>
          <Typography>{category.name}</Typography>
        </Box>
      ))}
    </div>
  );
}
