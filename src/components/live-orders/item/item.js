import Style from './item.module.css'
import cn from 'classnames'

function Item({color, price, quantity}) {
    return(
        <tr className={Style.item}>
            <td className={cn(color === "red" ? Style.red : color === "green" && Style.green)}>{price}</td>
            <td>{quantity}</td>
            <td>{price * quantity}</td>
        </tr>
    )
}

export default Item