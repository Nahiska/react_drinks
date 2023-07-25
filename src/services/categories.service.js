import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const getCategoriesService = async () => {
    try {
        const url = `${apiUrl}list.php?c=list`;
        const { data } = await axios(url);//como default tira el .get
        return data.drinks || [];
    } catch (error) {
        console.log(error)
        throw new Error("Hubo un error al obtener las categorías");
    }
}