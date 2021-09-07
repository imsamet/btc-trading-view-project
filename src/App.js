import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Init } from './socket/orderBookApi'
import './App.css';

import Layout from './components/layout/layout';
import { orderBookSocket } from './slices/orderBookSlice';

function App() {

  const dispath = useDispatch()

  const orderBookCall = (data) => {
    dispath(orderBookSocket(data))
  }

  useEffect(() => {

    Init(orderBookCall)

  }, [])

  return (
    <>
      <Layout/>
    </>
  );
}

export default App;
