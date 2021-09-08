import Style from './item.module.css'
import cn from 'classnames'

function Item({type, price, amount, datetime}) {

    const date = new Date(datetime * 1000).toTimeString().split(" ")[0]
    
    return(
        <tr className={Style.item}>
            <td className={cn(type ? Style.red : Style.green)}>{`${type ? "Sell" : "Buy"}(BTC)`}</td>
            <td>{price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
            <td>{amount.toFixed(5)}</td>
            <td>{date}</td>
        </tr>
    )
}

export default Item