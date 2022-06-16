import react, {createContext, useState } from "react";

const context = createContext();

export function Provider(props) {
	//const apiUrl = "https://link-r.herokuapp.com";
  const apiUrl = "http://localhost:4002";
  const [token, setToken] = useState("");
  
  return (
    <context.Provider
      value={{
        apiUrl,
        token,
        setToken
      }}
    >
      {props.children}
    </context.Provider>
  );
}
export const getContext = () => react.useContext(context);

