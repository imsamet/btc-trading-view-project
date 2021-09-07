import Style from './order-book.module.css'

import Item from './item/item'

function OrderBook() {
    return(
        <div className={Style.container}>
            <div className={Style.content}>

                <table className={Style.table}>

                    <tr>
                        <th>Fiyat (USDT)</th>
                        <th>Miktar (BTC)</th>
                        <th>Toplam</th>
                    </tr>

                    <Item color={"red"}/>
                    <Item color={"red"}/>
                    <Item color={"red"}/>
                    <Item color={"red"}/>
                    <Item color={"red"}/>
                    <Item color={"red"}/>
                    <Item color={"red"}/>
                    <Item color={"red"}/>
                    <Item color={"red"}/>
                    <Item color={"red"}/>
                    <Item color={"red"}/>
                    <Item color={"red"}/>
                    <Item color={"red"}/>
                    <Item color={"red"}/>
                    <Item color={"red"}/>
                    <Item color={"red"}/>
                    <Item color={"red"}/>
                    <Item color={"red"}/>
                    <Item color={"red"}/>
                    <Item color={"red"}/>
                    <Item color={"red"}/>
 
                </table>

            </div>

            <div className={Style.content}>

                <table className={Style.table}>

                    <tr>
                        <th>Fiyat (USDT)</th>
                        <th>Miktar (BTC)</th>
                        <th>Toplam</th>
                    </tr>

                    <Item color={"green"}/>
                    <Item color={"green"}/>
                    <Item color={"green"}/>
                    <Item color={"green"}/>
                    <Item color={"green"}/>
                    <Item color={"green"}/>
                    <Item color={"green"}/>
                    <Item color={"green"}/>
                    <Item color={"green"}/>
                    <Item color={"green"}/>
                    <Item color={"green"}/>
                    <Item color={"green"}/>
                    <Item color={"green"}/>
                    <Item color={"green"}/>
                    <Item color={"green"}/>
                    <Item color={"green"}/>
                    <Item color={"green"}/>
                    <Item color={"green"}/>
                    <Item color={"green"}/>
                    <Item color={"green"}/>
                    <Item color={"green"}/>
                    <Item color={"green"}/>
                    <Item color={"green"}/>

                </table>

            </div>
        </div>
    )
}

export default OrderBook