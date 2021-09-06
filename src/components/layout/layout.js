import Style from './layout.module.css'

import OrderBook from "../order-book/order-book"
import TradingView from "../trading-view/trading-view"
import LiveTrades from "../live-trades/live-trades"
import LiveOrders from "../live-orders/live-orders"

function Layout() {
    return(
        <div className={Style.container}>

            <div className={Style.content}>
                <OrderBook/>
            </div>

            <div className={Style.content}>
                <TradingView/>
                <LiveTrades/>
            </div>

            <div className={Style.content}>
                <LiveOrders/>
            </div>

        </div>
    )
}

export default Layout