import { createContext, useContext, useState } from "react";

export const ViewProductContext = createContext()

export const ViewProductContextProvider = ({children})=>{
    const [ViewProduct,setViewProduct] = useState('tree')
    const values = {ViewProduct,setViewProduct}
    return(
        <ViewProductContext.Provider value={values}>
            {children}
        </ViewProductContext.Provider>
    )
}

export const useViewProductContext = () =>{
    const context = useContext(ViewProductContext)
    return context
}