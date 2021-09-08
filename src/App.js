import React, { useEffect } from 'react';
import './App.css';

import Layout from './components/layout/layout';

import { useDispatch } from "react-redux";
import { initOrderBook } from './socket/orderBookApi'
import { initLiveOrders } from './socket/liveOrdersApi'

import { orderBookAdd } from './slices/orderBookSlice';
import { liveOrdersAdd } from './slices/liveOrdersSlice'

function App() {

  const dispath = useDispatch()

  const orderBookCall = (data) => {
    dispath(orderBookAdd(data))
  }

  const liveOrderCall = (data) => {
    dispath(liveOrdersAdd(data))
  }

  useEffect(() => {

    initOrderBook(orderBookCall)
    initLiveOrders(liveOrderCall)

  })

  return (
    <>
      <Layout/>
    </>
  );
}

export default App;
