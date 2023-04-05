import {createContext, useState} from "react";

const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id)=>{},
    removeFavorite: (id)=>{}
});

function FavoritesContextProvider({children}) {
    const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);
    
    function addFavorite(id) {
        setFavoriteMealsIds((current)=>[...current, id]);
    }
    
    function removeFavorite(id) {
        setFavoriteMealsIds((current)=>
            current.filter((itemId) => itemId !== id))
    }

    const value = {
        ids: favoriteMealsIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }

    return <FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>
}

export default FavoritesContextProvider;