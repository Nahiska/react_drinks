import SearchForm from '../../components/SearchForm';
import DrinksList from "../../components/DrinksList";
import DrinkDetailModal from "../../components/DrinkModal";

export default function Home () {
    return (
        <>
            <SearchForm />

            <DrinksList />

            <DrinkDetailModal />

        </>
    )
}