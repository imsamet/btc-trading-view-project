import Style from './item.module.css'
import cn from 'classnames'

function Item({color, price, quantity, total}) {
    return(
        <tr className={Style.item}>
            <td className={cn(color === "red" ? Style.red : color === "green" && Style.green)}>{price ? price : "52500.51"}</td>
            <td>{quantity ? quantity : "0.00065351"}</td>
            <td>{total ? total : "52500"}</td>
        </tr>
    )
}

export default Item