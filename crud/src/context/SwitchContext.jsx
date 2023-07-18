import { createContext, useContext, useState } from "react";

export const SwitchContext = createContext()

export const SwitchContextProvider = ({children})=>{
    const [Switch,setSwitch] = useState(true)
    const values = {Switch,setSwitch}
    return(
        <SwitchContext.Provider value={values}>
            {children}
        </SwitchContext.Provider>
    )
}

export const useSwitchContext = () =>{
    const context = useContext(SwitchContext)
    return context
}