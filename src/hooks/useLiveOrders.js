import { useSelector } from "react-redux"

export const useLiveOrders = () => useSelector((state) => state.liveOrders.value)