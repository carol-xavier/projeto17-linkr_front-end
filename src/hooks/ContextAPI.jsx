import react, {createContext, useState } from "react";

const context = createContext();

export function Provider(props) {
  // TODO: remove apiUrl from here. Use the function 'api' instead.
  const apiUrl = "http://localhost:4001";
  
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

