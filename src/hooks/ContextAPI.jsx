import react, {createContext, useState } from "react";

const context = createContext();

export function Provider(props) {
  const [ token, setToken ] = useState("");
  const header = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }  
  return (
    <context.Provider
      value={{
        token,
        setToken,
        header
      }}
    >
      {props.children}
    </context.Provider>
  );
}
export const getContext = () => react.useContext(context);

