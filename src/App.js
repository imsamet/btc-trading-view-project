import React, { useEffect } from 'react';
import './App.css';

import Layout from './components/layout/layout';

import { useDispatch } from "react-redux";
import { initOrderBook } from './socket/orderBookApi'
import { initLiveOrders } from './socket/liveOrdersApi'
import { initLiveTrades } from './socket/liveTradesApi'

import { orderBookAdd } from './slices/orderBookSlice';
import { liveOrdersAdd } from './slices/liveOrdersSlice'
import { liveTradesAdd } from './slices/liveTradesSlice'

function App() {

  const dispath = useDispatch()

  const orderBookCall = (data) => {
    dispath(orderBookAdd(data))
  }

  const liveOrderCall = (data) => {
    dispath(liveOrdersAdd(data))
  }

  const liveTradesCall = (data) => {
    dispath(liveTradesAdd(data))
  }

  useEffect(() => {

    initOrderBook(orderBookCall)
    initLiveOrders(liveOrderCall)
    initLiveTrades(liveTradesCall)

  })

  return (
    <>
      <Layout/>
    </>
  );
}

export default App;
