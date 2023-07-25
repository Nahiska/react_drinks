import { useContext } from 'react';
import { DrinksContext } from '../context/DrinksProvider';

export function useDrinks () {
    return useContext(DrinksContext);
}