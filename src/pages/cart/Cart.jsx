import axios from 'axios'
import React, { useEffect } from 'react'
import axiosToken from '../../api/axiosToken.js'
import { useCounterStore } from '../../store/useCounterStore.jsx'


export default function Cart() {
  const x = useCounterStore((state) => state.counter);
  const inc = useCounterStore((state) => state.increment);
  const dec = useCounterStore((state) => state.decrement);

  const getItems = async () => {

    const response = await axiosToken.get(`${import.meta.env.VITE_BURL}/Carts`, {
    });
    console.log(response);
  }
  useEffect(() => {
    getItems();
  }, [])

  return (
    <>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <div>Cart - {x}</div>
    </>

  )
}
