import react, {createContext, useState } from "react";
import persistHeader from "../utils/persistHeader";

const context = createContext();

export function Provider(props) {
  const [ token, setToken ] = useState("");
  const header = persistHeader();
    
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

