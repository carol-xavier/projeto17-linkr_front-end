import react, {createContext, useState } from "react";

const context = createContext();

export function Provider(props) {
  const [ token, setToken ] = useState("");
 
 
  const [refresh, setRefresh] = react.useState(false);
  
  return (
    <context.Provider
      value={{
        token,
        setToken,
        refresh, 
        setRefresh
      }}
    >
      {props.children}
    </context.Provider>
  );
}
export const getContext = () => react.useContext(context);

