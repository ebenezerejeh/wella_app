import React, { useState, useContext } from 'react';
const AppContext = React.createContext();

const AppProvider = ({children})=>{
    
  const [toggle, setToggle] = useState(false);
  

  const openModal = ()=>{
     setToggle(true);

  };

  const closeModal = ()=>{
    setToggle(false);
  };

  

    return (
        <AppContext.Provider
        value={{
            toggle,
            openModal,
            closeModal,
        }}
        >
            {children}
            </AppContext.Provider>
    )
};

export const useGlobalContext = ()=>{
    return useContext(AppContext);
};

export { AppContext, AppProvider}

