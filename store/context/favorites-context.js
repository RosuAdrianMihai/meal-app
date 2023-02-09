import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [storedIds, setStoredIds] = useState([]);

  function addFavorite(id) {
    setStoredIds((stored) => {
      return [...stored, id];
    });
  }

  function removeFavorite(idToDelete) {
    setStoredIds((stored) => {
      return stored.filter((id) => id !== idToDelete);
    });
  }

  const value = {
    ids: storedIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
