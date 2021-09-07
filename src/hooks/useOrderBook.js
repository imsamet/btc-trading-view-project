import { useSelector } from "react-redux"

export const useOrderBook = () => useSelector((state) => state.orderBook.value)