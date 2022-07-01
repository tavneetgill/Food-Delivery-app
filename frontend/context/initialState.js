import { fetchCart } from "../data/fetchLocalStorageData"

const cartInfo = fetchCart()

export const initialState = {
    cartShow: false,
    cartItems: cartInfo,
}