import Style from './order-book.module.css'

import Item from './item/item'
import { useEffect } from 'react'
import { useOrderBook } from '../../hooks/useOrderBook'

function OrderBook() {

    const orderBook = useOrderBook()

    return(
        <div className={Style.container}>
            <div className={Style.content}>

                <table className={Style.table}>

                    <tr>
                        <th>Fiyat (USDT)</th>
                        <th>Miktar (BTC)</th>
                        <th>Toplam</th>
                    </tr>

                    {
                        orderBook.asks && orderBook.asks.map(value => {
                            return(
                                <Item
                                    key={`orderBookAsk_${value[0]}`}
                                    price={value[0]}
                                    quantity={value[1]}
                                    color={"red"}
                                />
                            )
                        })
                    }
 
                </table>

            </div>

            <div className={Style.content}>

                <table className={Style.table}>

                    <tr>
                        <th>Fiyat (USDT)</th>
                        <th>Miktar (BTC)</th>
                        <th>Toplam</th>
                    </tr>

                    {
                        orderBook.bids && orderBook.bids.map(value => {
                            return(
                                <Item
                                    key={`orderBookAsk_${value[0]}`}
                                    price={value[0]}
                                    quantity={value[1]}
                                    color={"green"}
                                />
                            )
                        })
                    }

                </table>

            </div>
        </div>
    )
}

export default OrderBook