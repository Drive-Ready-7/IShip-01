import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props)=>{

    const backendUrl = "http://localhost:5000";
    const [isLogin,setIsLogin] = useState(false);
    const [userData,setUserData] = useState(null);
    

    const value = {
        backendUrl,
        isLogin,setIsLogin,
        userData,setUserData,
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}