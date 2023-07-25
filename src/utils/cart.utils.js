export function getTotalItems (cartItems) {
    return cartItems.map((item) => item.quantity * item.price)
}