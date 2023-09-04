'use client';

import { Children, createContext, useContext , useState} from 'react';

// create context 

export const SearchContext = createContext();

// provider 

export const SearchContextProvider = ({children}) => {
    const [ searchActive, setsearchActive ] = useState(false);
     return (
     <SearchContext.Provider value={{searchActive , setsearchActive}} >
        {children}
    </SearchContext.Provider>
    );
};

export const useSearchContext = () => useContext
(SearchContext);