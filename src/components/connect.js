import React, { useContext, useEffect, useRef, useState } from "react";
import { StateManagementContext } from "./StoreProvider/StoreProviderContext";

const isEqual = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);

const connect = (Component) => (mapStateToProps, mapDispatchToProps) => {
  return () => {
    const store = useContext(StateManagementContext);
    const [state, setState] = useState(mapStateToProps(store.state));
    const actionRef = useRef(
      typeof mapDispatchToProps === "function"
        ? mapDispatchToProps(store.dispatch)
        : {}
    );

    useEffect(() => {
      const unsubscribe = store.subscribe((state) => {
        setState((previousState) => {
          const newState = mapStateToProps(state);
          if (isEqual(previousState, newState)) {
            return previousState;
          }
          return newState;
        });
      });
      return unsubscribe;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Component {...state} {...actionRef.current} />;
  };
};

export default connect;
