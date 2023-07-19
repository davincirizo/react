import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const [Auth,setAuth] = useState(null)
    const values = {Auth,setAuth}
    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () =>{
    const context = useContext(AuthContext)
    return context
}