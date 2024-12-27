import { createContext, useState } from 'react';
export const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (id) => { },
    removeFavorite: (id) => { },
    itemIsFavorite: (id) => { }
});

function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState<string[]>([]);

    function addFavoriteHandler(id) {
        setUserFavorites((prevUserFavorites) => [...prevUserFavorites, id]);

    }

    function removeFavoriteHandler(itemId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(item => item.id !== itemId);
        });
    }

    function itemIsFavoriteHandler(itemId) {
        return userFavorites.some(item => item.id === itemId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}
export default FavoritesContextProvider;