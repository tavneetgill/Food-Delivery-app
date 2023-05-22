import { fetchCart } from "../data/fetchLocalStorageData"
import { fetchUser } from "../data/fetchLocalStorageData"

const cartInfo = fetchCart()
const userInfo = fetchUser()

export const initialState = {
    user: userInfo,
    cartShow: false,
    cartItems: cartInfo,
}