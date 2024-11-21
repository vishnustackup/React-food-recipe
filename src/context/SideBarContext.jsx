import React, { useContext, createContext, useReducer } from "react";
import reducer from "../reducers/SideBarReducer";
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions/Actions";

const initialState = {
  isSidebarOpen: false,
};
const SidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const opensidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };
  const closesidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };
  return (
    <SidebarContext.Provider
      value={{
        ...state,
        opensidebar,
        closesidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const usesidebarContext = () => {
  return useContext(SidebarContext);
};
