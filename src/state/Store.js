import React, {createContext, useReducer, useMemo} from "react";
import userReducer from "./reducers/userReducer";
import companyReducer from "./reducers/companyReducer";
import productReducer from "./reducers/productReducer";
import customerReducer from "./reducers/customerReducer";
import workerReducer from "./reducers/workerReducer";



export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

export const Store = ({children}) => {
    const userData = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : '';
    const [user, dispatchUser] = useReducer(userReducer, userData);
    const [company, dispatchCompany] = useReducer(companyReducer, {});
    const [product, dispatchProduct] = useReducer(productReducer, []);
    const [customer, dispatchCustomer] = useReducer(customerReducer, []);
    const [worker, dispatchWorker] = useReducer(workerReducer, []);

    
    const state = useMemo(() =>({ user, company, product, customer, worker }), [user, company, product, customer, worker ]);
    
    const dispatch = {dispatchCompany,dispatchCustomer,dispatchUser,dispatchWorker,dispatchProduct};

    return(
        <GlobalDispatchContext.Provider value={dispatch}>
        <GlobalStateContext.Provider value={state}>
        {children}
        </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    )
}

