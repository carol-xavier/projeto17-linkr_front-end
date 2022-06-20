import react, {createContext, useState } from "react";
import persistHeader from "../utils/persistHeader";

const context = createContext();

export function Provider(props) {
  const [ token, setToken ] = useState("");
  const [refresh,setRefresh] = useState(false);
  const { header, imgUser } = persistHeader();

  return (
    <context.Provider
      value={{
        token,
        setToken,
        refresh,
        setRefresh,
        header,
        imgUser
      }}
    >
      {props.children}
    </context.Provider> 
  );
}
export const getContext = () => react.useContext(context);

