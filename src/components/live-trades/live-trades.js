import { useLiveTrades } from '../../hooks/useLiveTrades'

import Item from './item/item'
import Style from './live-trades.module.css'

function LiveTrades() {

    const liveTrades = useLiveTrades()

    return(
        <div className={Style.container}>
            <div>

                <table className={Style.table}>

                    <thead>

                        <tr>
                            <th>Tür</th>
                            <th>Fiyat (USDT)</th>
                            <th>Miktar (BTC)</th>
                            <th>Saat</th>
                        </tr>

                    </thead>

                    <tbody>

                        {
                            liveTrades.map((value, index) => {
                                return(
                                    <Item
                                        key={`${index}_${value.id}`}
                                        type={value.type}
                                        price={value.price}
                                        amount={value.amount}
                                        datetime={value.timestamp}
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

export default LiveTrades