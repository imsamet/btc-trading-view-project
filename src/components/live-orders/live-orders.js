import Style from './live-order.module.css'

import Item from './item/item'

function LiveOrders() {
    return(
        <div className={Style.container}>
            <div className={Style.content}>

                <table className={Style.table}>

                    <tr>
                        <th>Fiyat (USDT)</th>
                        <th>Miktar (BTC)</th>
                        <th>Saat</th>
                    </tr>

                        <Item
                            price={1012}
                            quantity={1234123}
                            color={"red"}
                        />
                        <Item
                            price={1012}
                            quantity={1234123}
                            color={"red"}
                        />
                        <Item
                            price={1012}
                            quantity={1234123}
                            color={"red"}
                        />
                        <Item
                            price={1012}
                            quantity={1234123}
                            color={"red"}
                        />
                        <Item
                            price={1012}
                            quantity={1234123}
                            color={"red"}
                        />
                        <Item
                            price={1012}
                            quantity={1234123}
                            color={"red"}
                        />
                        <Item
                            price={1012}
                            quantity={1234123}
                            color={"red"}
                        />

                </table>

            </div>
        </div>
    )
}

export default LiveOrders