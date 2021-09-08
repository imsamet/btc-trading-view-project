import { useSelector } from "react-redux"

export const useLiveTrades = () => useSelector((state) => state.liveTrades.value)