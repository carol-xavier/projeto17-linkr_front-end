import react, {createContext, useState } from "react";

const context = createContext();

export function Provider(props) {
  const [ token, setToken ] = useState("");
  
  return (
    <context.Provider
      value={{
        token,
        setToken
      }}
    >
      {props.children}
    </context.Provider>
  );
}
export const getContext = () => react.useContext(context);

