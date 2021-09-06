import OrderBook from "../order-book/order-book"
import TradingView from "../trading-view/trading-view"
import LiveTrades from "../live-trades/live-trades"
import LiveOrders from "../live-orders/live-orders"

function Layout() {
    return(
        <div>

            <div>
                <OrderBook/>
            </div>

            <div>
                <TradingView/>
                <LiveTrades/>
            </div>

            <div>
                <LiveOrders/>
            </div>

        </div>
    )
}

export default Layout