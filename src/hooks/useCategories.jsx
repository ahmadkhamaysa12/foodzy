import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useCategories() {
  const getCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BURL}/Categories`,
        {
          headers: {
            "Accept-Language": "en",
          },
        },
      );
      const data = await response.data;
      return data.response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  };

  const query = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
  return query;
}
