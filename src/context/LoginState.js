import React, { useState } from "react";
import EcommerceContext from "./EcommerceContext"

const LoginState = (props) => {
  const [ userLogin, setUserLogin ] = useState('');
  const [ userInfo, setUserInfo ] = useState('');
  const loginUser = (user) => {
    setUserLogin(true)
    sessionStorage.setItem("login", true)
    setUserInfo(user)
    sessionStorage.setItem("userInfo", JSON.stringify(user))
  }
  const logoutUser = () => {
    setUserLogin(false)
    sessionStorage.removeItem("login")
    setUserInfo({})
    sessionStorage.removeItem("userInfo")
  }
  return(
    <EcommerceContext.Provider
      value={{
        userLogin:userLogin,
        userInfo:userInfo,
        loginUser:loginUser,
        logoutUser:logoutUser
      }}
    >
    {props.children}
    </EcommerceContext.Provider>
  )
}
export default LoginState