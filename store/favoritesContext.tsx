import { createContext, useState } from 'react';


export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id: string) => { },
    removeFavorite: (id: string) => { },

});

function FavoritesContextProvider({ children }) {
    const [userFavorites, setUserFavorites] = useState<string[]>([]);

    function addFavorite(id) {
        setUserFavorites((current) => current.concat(id));

    }

    function removeFavorite(id) {
        setUserFavorites((current) => {
            return current.filter(item => item !== id);
        });
    }



    const context = {
        ids: userFavorites,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite

    };

    return (
        <FavoritesContext.Provider value={context}>
            {children}
        </FavoritesContext.Provider>
    );
}
export default FavoritesContextProvider;