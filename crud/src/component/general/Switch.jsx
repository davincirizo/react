import { useState } from "react";
import ReactSwitch from "react-switch";
import { useThemeContext } from "../../context/ThemeContext";
import { useSwitchContext } from "../../context/SwitchContext";




export default function SwitchTheme() {
    const {setTheme} = useThemeContext()
    const {Switch,setSwitch} = useSwitchContext()
    

  const handleChange = (nextChecked) =>{
    setTheme((state)=>(state === 'Light'?'Dark':'Light'))
    setSwitch(nextChecked)
  }    

  return (
    <>
   
    <ReactSwitch
    checked={Switch}
    onChange={handleChange}
    onColor="#86d3ff"
    onHandleColor="#2693e6"
    handleDiameter={30}
    uncheckedIcon={false}
    checkedIcon={false}
    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
    height={20}
    width={48}
    className="react-switch"
    id="material-switch">

    </ReactSwitch>
    </>
  )
  }