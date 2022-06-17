import react, {createContext } from "react";

const context = createContext();

export function Provider(props) {
  // TODO: remove apiUrl from here. Use the function 'api' instead.
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

