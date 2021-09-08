import { useLiveOrders } from '../../hooks/useLiveOrders'
import Style from './live-orders.module.css'

import Item from './item/item'
import { useState } from 'react'

function LiveOrders() {

    const liveOrders = useLiveOrders()

    return(
        <div className={Style.container}>
            <div className={Style.content}>

                <h1 className={Style.head}>Piyasa Alım Satımları</h1>

                <table className={Style.table}>

                    <thead>

                        <tr>
                            <th>Fiyat (USDT)</th>
                            <th>Miktar (BTC)</th>
                            <th>Saat</th>
                        </tr>

                    </thead>

                    <tbody>

                        {
                            liveOrders.map((value, index) => {
                                return(
                                    <Item
                                        key={`${index}_${value.id}`}
                                        price={value.price}
                                        amount={value.amount}
                                        datetime={value.datetime}
                                        color={value.order_type ? "green" : "red"}
                                    />
                                )
                            })
                        }

                    </tbody>

                </table>

            </div>
        </div>
    )
}

export default LiveOrders