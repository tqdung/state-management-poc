import React from "react";
import { StateManagementContext } from "./StoreProviderContext";

export function Provider({ store, children }) {
  return (
    <StateManagementContext.Provider value={store}>
      {children}
    </StateManagementContext.Provider>
  );
}

export default Provider;
