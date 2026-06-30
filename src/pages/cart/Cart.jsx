import axios from 'axios'
import React, { useEffect } from 'react'
import axiosToken from '../../api/axiosToken.js'


export default function Cart() {
  const getItems = async () => {

    const response = await axiosToken.get(`${import.meta.env.VITE_BURL}/Carts`,{
    });
    console.log(response);
  }
  useEffect(() => {
    getItems();
  }, [])

  return (
    <div>Cart</div>
  )
}
