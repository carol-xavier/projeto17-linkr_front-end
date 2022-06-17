import react, {createContext } from "react";

const context = createContext();

export function Provider(props) {
	//const apiUrl = "https://link-r.herokuapp.com";
  const apiUrl = "http://localhost:4001";
  const [refresh, setRefresh] = react.useState(false);
  
  return (
    <context.Provider
      value={{
        apiUrl,
        refresh, setRefresh
      }}
    >
      {props.children}
    </context.Provider>
  );
}
export const getContext = () => react.useContext(context);

