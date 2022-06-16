import react, {createContext } from "react";

const context = createContext();

export function Provider(props) {
	//const apiUrl = "https://link-r.herokuapp.com";
<<<<<<< HEAD
  const apiUrl = "http://localhost:5000";
=======
  const apiUrl = "http://localhost:4000";
>>>>>>> main
  
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