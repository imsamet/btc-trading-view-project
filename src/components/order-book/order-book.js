import Style from './order-book.module.css'

import Item from './item/item'
import { useOrderBook } from '../../hooks/useOrderBook'

function OrderBook() {

    const orderBook = useOrderBook()

    return(
        <div className={Style.container}>

            <div className={Style.content}>

                <h1 className={Style.head}>Satış Emirleri</h1>

                <table className={Style.table}>

                    <thead>

                        <tr>
                            <th>Fiyat (USDT)</th>
                            <th>Miktar (BTC)</th>
                            <th>Toplam</th>
                        </tr>

                    </thead>

                    <tbody>

                        {
                            orderBook.asks && orderBook.asks.map(value => {
                                return(
                                    <Item
                                        key={`orderBookAsk_${value[0]}`}
                                        price={value[0]}
                                        amount={value[1]}
                                        color={"red"}
                                    />
                                )
                            })
                        }

                    </tbody>
 
                </table>

            </div>

            <div className={Style.content}>

                <h1 className={Style.head}>Alış Emirleri</h1>

                <table className={Style.table}>

                    <thead>

                        <tr>
                            <th>Fiyat (USDT)</th>
                            <th>Miktar (BTC)</th>
                            <th>Toplam</th>
                        </tr>

                    </thead>

                    <tbody>

                        {
                            orderBook.bids && orderBook.bids.map(value => {
                                return(
                                    <Item
                                        key={`orderBookAsk_${value[0]}`}
                                        price={value[0]}
                                        amount={value[1]}
                                        color={"green"}
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

export default OrderBook