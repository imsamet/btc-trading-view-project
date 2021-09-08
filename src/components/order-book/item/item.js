import Style from './item.module.css'
import cn from 'classnames'

function Item({color, price, amount}) {
    return(
        <tr className={Style.item}>
            <td className={cn(color === "red" ? Style.red : color === "green" && Style.green)}>{parseFloat(price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
            <td>{parseFloat(amount).toFixed(5)}</td>
            <td>{parseFloat(price * amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
        </tr>
    )
}

export default Item