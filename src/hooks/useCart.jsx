import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';

export function useCart () {
    return useContext(CartContext);
}