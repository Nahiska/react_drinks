import { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import { getCategoriesService } from "../services/categories.service";

const CategoriesContext = createContext();

//El provider es el componente que va a contener a todos los componentes que requieran
//estar dentro de este contexto
const CategoriesProvider = ({ children }) => {
    const [ categories, setCategories ] = useState([]);

    const getCategories = async () => {
        try {
            const categoriesData = await getCategoriesService()
            setCategories(categoriesData);
        } catch (error) {
            console.error(error)
        }
    }
    //useEffect es un hook que me permite realizar una acción al realizar un efecto
    //se gestionan los llamados a la api o cambios de estado
    useEffect(() => {
        getCategories();

    }, []);


    return(
        <CategoriesContext.Provider value={{ categories }}>
            {children}
        </CategoriesContext.Provider>
    )

}

CategoriesProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { CategoriesContext, CategoriesProvider };