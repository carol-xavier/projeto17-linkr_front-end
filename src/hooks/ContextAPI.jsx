import react, {createContext } from "react";

const context = createContext();

export function Provider(props) {
	//const apiUrl = "https://link-r.herokuapp.com";
  const apiUrl = "http://localhost:5000";
  
  return (
    <context.Provider
      value={{
        apiUrl
      }}

    >
      {props.children}
    </context.Provider>
  );
}
export const getContext = () => react.useContext(context);