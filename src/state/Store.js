import React, {createContext, useReducer, useMemo} from "react";
import userReducer from "./reducers/userReducer";
import companyReducer from "./reducers/companyReducer";
import productReducer from "./reducers/productReducer";
import vehicleReducer from "./reducers/vehicleReducer";
import warehouseReducer from "./reducers/warehouseReducer";
import customerReducer from "./reducers/customerReducer";
import workerReducer from "./reducers/workerReducer";



export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

export const Store = ({children}) => {
    const userData = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : '';
    console.log(userData)
    const [user, dispatchUser] = useReducer(userReducer, userData);
    const [company, dispatchCompany] = useReducer(companyReducer, {});
    const [product, dispatchProduct] = useReducer(productReducer, []);
    const [vehicle, dispatchVehicle] = useReducer(vehicleReducer, []);
    const [warehouse, dispatchWarehouse] = useReducer(warehouseReducer, []);
    const [customer, dispatchCustomer] = useReducer(customerReducer, []);
    const [worker, dispatchWorker] = useReducer(workerReducer, []);

    
    const state = useMemo(() =>({ user, company, product, vehicle, warehouse, customer, worker }), [user, company, product, vehicle, warehouse, customer, worker ]);
    /* const state = {
        user, company, product, vehicle, warehouse, customer, worker
    } */
    const dispatch = {dispatchCompany,dispatchCustomer,dispatchUser,dispatchVehicle,dispatchWarehouse,dispatchWorker,dispatchProduct};

    return(
        <GlobalDispatchContext.Provider value={dispatch}>
        <GlobalStateContext.Provider value={state}>
        {children}
        </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    )
}

